const express=require("express");
const router=express.Router();
const registerRoute=require("./registerRoute");
const loginRoute=require("./loginRoute");
const adminRoute=require("./admin.js");

router.use("/auth",registerRoute);
router.use("/auth",loginRoute);
router.use("/auth/superadmin",adminRoute);

module.exports=router;
