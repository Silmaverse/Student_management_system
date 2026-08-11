const express=require('express');
const { protect, ensureapporve, authorizeRoles } = require('../../middlewares/authMiddleware');
const { createSubject, getSubjects, updateSubject, deleteSubject } = require('../../controllers/classControllers/subject');
const router=express.Router();

router.use(protect, ensureapporve,authorizeRoles("superadmin","admin"));
router.post("/createSubject",createSubject);
router.get("/getSubjects",getSubjects);
router.put("/update/:id", updateSubject);
router.delete("/delete/:id", deleteSubject);

module.exports=router;
