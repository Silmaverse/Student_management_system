const { ObjectId } = require("mongodb");
const User = require("../../models/userSchema");

//allUsers List
const allUsers = async (req, res, next) => {
  try {
    if(req.user.role !="superadmin"){
      const superadminId="6a59d3363b57e0aa2fab9d31";
      const allUsers = await User.find({_id:{$ne:superadminId}});
      if (!allUsers) {
        return res.status(400).json({
          success: false,
          message: "No user exist",
        });
      }
      return res.status(200).json({
        success: true,
        message: "All Users",
        allUsers,
      });
    }
    const allUsers= await User.find({});
    if (!allUsers) {
        return res.status(400).json({
          success: false,
          message: "No user exist",
        });
      }
      return res.status(200).json({
        success: true,
        message: "All Users",
        allUsers,
      });

  } catch (error) {
    console.log(error);
    next(error);
  }
};

//all teacher List
const getAllTeachers = async (req, res, next) => {
  try {
    const allteachers = await User.find({ role: "teacher" });
    if (allteachers.length === 0) {
      return res.status(404).json({
        success: false,
        message: "TeacherList not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Teachers",
      allteachers,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//all Student List
const getAllStudents = async (req, res, next) => {
  try {
    const allStudents = await User.find({ role: "student" });
    if (allStudents.length === 0) {
      return res.status(404).json({
        success: false,
        message: "TeacherList not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Students",
      allStudents,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllPending = async (req, res, next) => {
  try {
    const allPending = await User.find({ status: "pending" });
    return res.status(200).json({
      success: true,
      message: "All Pending User",
      allPending,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//approve pending user
const reviewStaff = async (req, res, next) => {
  try {
    const { status } = req.body;
    const userId = req.params.id;
    const targetUser = await User.findById(userId);
    if (!targetUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status Update Action",
      });
    }

    if (targetUser.role === "student" || targetUser.role === "superadmin") {
      return res.status(403).json({
        success: false,
        message: "Action restricted to teacher and admin pipelines only",
      });
    }
    targetUser.status = status;
    await targetUser.save();
    return res.status(200).json({
      success: true,
      message: "User status successfully updated",
      staff: targetUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//delete user
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const targetUser = await User.findById(userId);
    if (!targetUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (targetUser.role === "superadmin") {
      return res.status(403).json({
        success: false,
        message: "Role is not applicable to this route",
      });
    }

    await User.findByIdAndDelete(targetUser);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};


module.exports={
  getAllPending,
  allUsers,
  reviewStaff,
  deleteUser,
  getAllTeachers,
  getAllStudents
}