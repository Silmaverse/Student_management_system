const express=require("express");
const router=express.Router();
const noticeRoutes=require("../noticeRoutes/noticeRoutes");

router.use("/dashboard/notice",noticeRoutes);

module.exports=router