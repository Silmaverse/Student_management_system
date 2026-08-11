const express=require("express");
const router=express.Router();
const classRoutes=require("../classRoutes/classRoute");

router.use("/class",classRoutes);

module.exports=router;