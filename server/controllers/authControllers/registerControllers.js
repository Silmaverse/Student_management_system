const { sendMail } = require("../../helpers/mailService");
const User = require("../../models/userSchema");
const otpMailTemp = require("../../templates/OTPtemplate");
const { generateOtp } = require("../../utils/registerUtils");

const registerStudent = async (req, res ,next) => {
  try {
    const { name, email, password } = req.body;
   
    const isUser = await User.findOne({ email });
    if (isUser)
      return res.status(400).json({
        success: false,
        message: "This email alreay registered",
      });

    const { otp, otpExpires } = generateOtp();

    const newUser = await User.create({
      name,
      email,
      password,
      role: "student",
      status: "approved",
      otp,
      otpExpires,
    });

    await sendMail({
      to: email,
      subject: "OTP Send To your mail",
      template: otpMailTemp(name, otp, "School Mangement Bangladesh"),
    });

    return res.status(201).json({
      success: true,
      message: "Registration initialized Please Check your email",
      newUser,
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

const verifyOtp = async (req, res, next ) => {
  try {
    const { email, otp } = req.body;
    if( ! email || ! otp){
      return res.status(400).json({
        success:false,
        message:"Eamil or otp is required" 
      });
    }

    const isUser = await User.findOneAndUpdate(
      {
        email,
        otp,
        otpExpires: {
          $gt: new Date(),
        },
      },
      {
        isVerified: true,
        otp: null,
        otpExpires: null,
      },
      { returnDocument: "after" },
    );

    if (!isUser)
      return res.status(400).json({
        success: false,
        message: "Invalid User or Otp",
    });
    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

const resendOtp = async (req, res ,next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    const { otp, otpExpires } = generateOtp();
    const isUser = await User.findOneAndUpdate(
      {
        email,
      },
      { otp, isVerified: false, otpExpires },
      {
        returnDocument: "after",
      },
    );

    if (!isUser)
      return res.status(400).json({
        success: false,
        message: "Invalid User",
    });

    await sendMail({
      to: email,
      subject: "Resend Otp your mail",
      template: otpMailTemp(isUser.name, otp, "School Mangement Bangladesh"),
    });

    return res.status(200).json({
      success: true,
      message: "Resend Otp successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const regsiterStaff = async (req, res,next) => {
  try {
    const { name, email, password, role } = req.body;
    if(!role){
      return res.status(400).json({
        success: false,
        message: "Please metion your role",
      });
    }

    const isUser = await User.findOne({ email });
    if (isUser)
      return res.status(400).json({
        success: false,
        message: "This email is already registered",
      });

    if (!["admin", "teacher"].includes(role)) {
      return res.status(400).json({
        success: true,
        message: "Inavlid Role",
      });
    }
    
    const {otp,otpExpires} =generateOtp();
    const staff=await User.create({
      name,  
      email,
      password,
      role,
      otp,
      otpExpires
    })
    await sendMail({to:email,subject:"OTP Send To Your Mail",template:otpMailTemp(name,otp,"School Mangement Bangladesh")});
    return res.status(200).json({
      success: true,
      message: "Registered as staff,Awaiting for superadmin approval",
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

module.exports = { registerStudent, verifyOtp, resendOtp, regsiterStaff };
