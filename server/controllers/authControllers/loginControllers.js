const { sendMail } = require("../../helpers/mailService");
const User = require("../../models/userSchema");
const crypto = require("crypto");
const resetPasswordTemplate = require("../../templates/ResetPassword");
const {
  generateAccestoken,
  generateRefreshtoken,
  cookieConfig,
  generateResetToken,
  generateResetPasswordUrl,
  refreshCookieConfig,
} = require("../../utils/loginUtills");
const { uploadToCloudinary } = require("../../configuration/cloudinaryConfig");
const jwt = require("jsonwebToken");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email or Password is required",
      });
    }
    const isUser = await User.findOne({ email, isVerified: true }).select(
      "+password",
    );
    if (!isUser)
      return res.status(400).json({
        success: false,
        message: "Invalid User or Password",
      });

    const match = await isUser.comparePassword(password);
    if (!match)
      return res.status(400).json({
        success: false,
        message: "Invalid Password or User",
      });

    if (isUser.status === "pending" || isUser.status === "rejected") {
      return res.status(401).json({
        success: false,
        message:
          "Your request is pending or rejected. Please await for approve or try again",
      });
    }

    const accesstoken = await generateAccestoken({
      id: isUser._id,
      email: isUser.email,
      role: isUser.role,
      status: isUser.status,
    });

    const refreshtoken = await generateRefreshtoken({
      id: isUser._id,
      email: isUser.email,
      role: isUser.role,
      status: isUser.status,
    });

    return res
      .status(200)
      .cookie("accesstoken", accesstoken, cookieConfig)
      .cookie("refreshtoken", refreshtoken, refreshCookieConfig)
      .json({
        success: true,
        message: "Login Successfully",
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//get profile

const getprofile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User no longer exist",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//update profile
const updateProfile = async (req, res, next) => {
  try {
    const { name, email, bio, address } = req.body || {};
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User no longer exist",
      });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.bio = bio !== undefined ? bio : user.bio;
    user.address = address !== undefined ? address : user.address;
    if (req.file) {
      console.log(req.file);
      const image_url = await uploadToCloudinary(req.file.buffer);
      user.profilePicture = image_url;
    }
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Profile updated Successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//forget Password
const forgetPass = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is Required",
      });
    }

    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(200).json({
        success: false,
        message: "If email exist .A reset Link has been sent to your mail",
      });
    }

    const { token, hashToken } = generateResetToken();
    isUser.resetToken = hashToken;
    isUser.resetTokenExpires = Date.now() + 10 * 60 * 1000;
    await isUser.save();
    const resetUrl = generateResetPasswordUrl(isUser._id, token);
    await sendMail({
      to: email,
      subject: "Reset Password lInk has been sent",
      template: resetPasswordTemplate(
        isUser.name,
        resetUrl,
        "School Mangement Bangladesh",
      ),
    });

    return res.status(200).json({
      success: true,
      message: "If the email exists, a password reset link has been sent.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Please provide a password",
      });
    }
    const hashtoken = crypto.createHash("sha256").update(token).digest("hex");
    const isUser = await User.findOne({
      resetToken: hashtoken,
      resetTokenExpires: { $gt: Date.now() },
    });
    if (!isUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    isUser.password = password;
    isUser.resetToken = null;
    isUser.resetTokenExpires = null;
    await isUser.save();
    return res.status(200).json({
      success: true,
      message: "Password Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshtoken;
    if (!refreshToken) {
      return res.status(401).json({
        success: true,
        message: "Refresh Token required",
      });
    }
    jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, async(err, decodedUser) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Refresh Token expired or invalid",
        });
      }
      const newAccessToken =await generateAccestoken({
        id: decodedUser.id,
        email: decodedUser.email,
        role: decodedUser.role,
        status: decodedUser.status,
      });
      console.log(newAccessToken)
      return res
        .status(200)
        .cookie("accesstoken", newAccessToken, cookieConfig)
        .json({
          sucess: true,
          message: "New access Token generated",
        });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("accesstoken", cookieConfig);
    res.clearCookie("refreshtoken", cookieConfig);
    return res.status(200).json({
      success: true,
      message: "LogOut Successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  login,
  getprofile,
  forgetPass,
  resetPassword,
  refreshToken,
  updateProfile,
  logout,
};
