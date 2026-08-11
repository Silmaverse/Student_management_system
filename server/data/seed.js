const User = require("../models/userSchema");

const name = process.env.SUPERADMIN_NAME;
const email = process.env.SUPERADMIN_EMAIL;
const password = process.env.SUPERADMIN_PASS;

const superadmin = async () => {
  try {
    const superadminexist = await User.findOne({ role: "superadmin" });
    if (superadminexist) {
      console.log("Superadmin already exist in Our DB");
      return;
    }
    const superadmin = await User.create({
      name,
      email,
      password,
      isVerified: true,
      role: "superadmin",
      status: "approved",
    });
    console.log("Superadmin created successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = superadmin;
