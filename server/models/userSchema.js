const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [30, "Name cannot exceed 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid Email",
      ],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Please provide a valid Password",
      ],
      select: false,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
      maxlength: [500, "Address cannot exceed 500 characters"],
    },
    address: {
      type: String,
      default: "",
      maxlength: [500, "Address cannot exceed 500 characters"],
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin", "superadmin"],
      default: "student",
    },
    enrolled: [{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Course"
    }],
    wishlist:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Course"
    }],
    status: {
      type: String,
      enum: ["approved", "pending", "rejected"],
      default: "pending",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      select: false,
      required: [true, "Otp is required"],
    },
    otpExpires: {
      type: Date,
      select: false,
    },
    resetToken: {
      type: String,
      select: false,
    },
    resetTokenExpires: {
      type: Date,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

//hashed password before save
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare passowrd with hashed password in db

userSchema.methods.comparePassword = async function (password) {
  try {
    const match = await bcrypt.compare(password, this.password);
    return match;
  } catch (error) {
    console.error(error);
  }
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
