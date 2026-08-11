const express=require("express");
const { login, getprofile, forgetPass, logout, resetPassword, updateProfile, refreshToken } = require("../../controllers/authControllers/loginControllers");
const { protect } = require("../../middlewares/authMiddleware");
const multer=require('multer');
const { limiter } = require("../../helpers/rateLimit");
const storage=multer.memoryStorage();
const upload=multer({storage:storage})

const router=express.Router();

router.post("/login",login);

router.post("/forget-pass", forgetPass);

router.post("/reset-pass/:token", resetPassword);
router.post("/refreshToken", refreshToken);

router.get("/profile", limiter, protect, getprofile);

router.put("/updateProfile", protect,upload.single('profile'),updateProfile);

router.post('/logout', logout);


module.exports=router;