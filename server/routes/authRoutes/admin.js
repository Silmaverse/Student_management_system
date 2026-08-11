const express=require('express');
const { protect, ensureapporve, authorizeRoles } = require('../../middlewares/authMiddleware');
const { allUsers, getAllTeachers, getAllStudents, getAllPending, reviewStaff, deleteUser } = require('../../controllers/adminControllers/adminControllers');
const router=express.Router();

router.use(protect,ensureapporve, authorizeRoles('superadmin'));
//superadmin delete user
router.delete("/delete/:id", deleteUser);
//admin and superadmin get all usersList
router.use(protect,ensureapporve, authorizeRoles('admin','superadmin'));

router.get("/allUsers", allUsers);
router.get("/allTeachers", getAllTeachers);
router.get("/allStudents", getAllStudents);

//superadmin get all pending user and approve user
router.get("/allPending", getAllPending);
//superadmin approve user
router.patch("/updateStatus/:id", reviewStaff);



module.exports=router
