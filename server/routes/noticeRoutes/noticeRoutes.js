const express=require("express");
const { protect, ensureapporve, authorizeRoles } = require("../../middlewares/authMiddleware");
const { createNotice, allNotices, deleteNotice, noticeLike, updateNotice } = require("../../controllers/noticeControllers/noticeControllers");
const router=express.Router();
const multer=require("multer");
const storage=multer.memoryStorage();
const upload=multer({storage:storage})

router.post("/createNotice", protect,ensureapporve,authorizeRoles("superadmin","admin"),upload.single("noticeImage"),createNotice);
router.patch("/:id/like",protect,noticeLike);
router.get("/noticeBoard",allNotices);
router.put("/update/:id",protect,ensureapporve,authorizeRoles("superadmin","admin"),updateNotice)
router.delete("/delete/:id",protect,ensureapporve,authorizeRoles("superadmin","admin"),deleteNotice);

module.exports=router