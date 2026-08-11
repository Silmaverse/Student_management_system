const express=require("express");
const { protect, ensureapporve, authorizeRoles } = require("../../middlewares/authMiddleware");
const { createClass, getClasses, updateClass, deleteClass } = require("../../controllers/classControllers/class");
const router=express.Router();

router.use(protect,ensureapporve,authorizeRoles("superadmin","teacher"));
router.post("/createClass",createClass);
router.get("/getClass",getClasses);
router.put("/update/:id",updateClass);
router.delete("/delete/:id",deleteClass);

module.exports=router