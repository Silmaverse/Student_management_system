const express=require('express');
const subjectRoutes=require("../subjectRoutes/subjectRoute");
const router=express.Router();
 
router.use("/subject",subjectRoutes);

module.exports=router