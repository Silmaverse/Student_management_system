require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const cookieparser = require("cookie-parser");
const dbConnect = require("./configuration/dbConfig");
const seedData = require("./data/seed");
const { getmailConfig } = require("./helpers/mailService");
const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use(routes);

app.get("/", (req, res) => {
  res.send("No Route Found here");
});

//Error handling middleware (LAST)

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = {};

    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message;
    });

    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors: errors,
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

async function startServer() {
  try {
    //db connection
    await dbConnect();
    console.log("Database Connected Successfully");

    //seed data
    await seedData();
    try {
      await getmailConfig();
      console.log("Mail transport initialized  successfully");
    } catch (error) {
      console.error("Failed to initialized  mail transport", error.message);
    }

    //Start listening for requests

    app.listen(port, () => {
      console.log(`Server is listening to  ${port}`);
    });
  } catch (error) {
    console.error("Error while connecting to seed data or init mail", error);
  }
}

startServer().catch((error) => {
  console.error("Failed to start server", error.message);
  process.exit(1);
});
