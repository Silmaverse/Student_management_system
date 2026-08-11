const express=require("express");
const router = express.Router();
const {registerStudent, verifyOtp, resendOtp, regsiterStaff}=require("../../controllers/authControllers/registerControllers");

router.post("/register",registerStudent);
router.post("/verify-otp", verifyOtp);

router.post("/resend-otp",resendOtp);
router.post("/registerStaff", regsiterStaff);




module.exports=router;