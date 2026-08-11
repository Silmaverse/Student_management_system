const { uploadToCloudinary } = require("../../configuration/cloudinaryConfig");
const Notice = require("../../models/noticeSchema");
const NoticeLike = require("../../models/noticeLikesSchema");
const User=require("../../models/userSchema");

const createNotice = async (req, res, next) => {
  try {
    const {title, description, expiryDate } = req.body;
    if(!title){
      return res.status(400).json({
        success: false,
        message: "Title is required",
      }); 
    }
    if (!description && !req.file) {
      return res.status(400).json({
        success: false,
        message: "At Least One field is required",
      });
    }
    const id = req.user.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "USER NO LONGER EXIST",
      });
    }
    let image_url = "";
    if (req.file) {
      image_url = await uploadToCloudinary(req.file.buffer);
    }
    const newNotice = await Notice.create({
      title,
      description: description || "",
      noticeImage: image_url,
      postedBy: userExist._id,
      expiryDate,
    });

    return res.status(201).json({
      success: true,
      message: "Notice Created Successfully",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const noticeLike=async(req,res,next)=>{
  try{
    const {id}=req.params;
    const noticeExist= await Notice.findById(id);
    if(!noticeExist){
     return res.status(404).json({
       success:false,
       message:"Notice Not Found"
     });
    }
    const userId=req.user.id;
    const existLike=await NoticeLike.findOne({noticeID:id,userId});
    console.log(existLike);
    if(existLike){
      await NoticeLike.deleteOne({_id:existLike._id});
      const currentCount=await NoticeLike.countDocuments({noticeID:id});
      return res.status(200).json({
        success:true,
        message:"Notice unliked successfully",
        likeCount:currentCount
      })
    }
    
    await NoticeLike.create({
      noticeID:id,
      userId
    })

    const currentCount=await NoticeLike.countDocuments({noticeID:id});
    return res.status(200).json({
        success:true,
        message:"Notice liked successfully",
        likeCount:currentCount
    })

    return res.status(201).json({
      success:true,
      message:"Notice Liked Sucessfully"
    })

  }catch(error){
    console.log(error);
    next(error)
  }
}

const allNotices = async (req, res, next) => {
  try {
    const today = new Date();
    const notices = await Notice.find({ expiryDate: { $gte: today } }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      success:true,
      count:notices.length,
      data:notices,
      message:"ALL Notices is here"
    }) 
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateNotice=async(req,res,next)=>{
 try{
   const {id}=req.params;
   const noticeExist=await Notice.findById(id);
   if(!noticeExist){
    return res.status(404).json({
     success:false,
     message:"Notice No Longer Exist" 
    })
   }
   const{title,description,expiryDate}=req.body||{};
   if(!title || !title.trim()){
    return res.status(400).json({
      success:false,
      message:"Title cannot be empty"
    })
   }
   noticeExist.title=title.trim();
   if(description!== undefined) noticeExist.description=description;
   if(expiryDate !== undefined) noticeExist.expiryDate=expiryDate;
   if(req.file){
    const image_url=await uploadToCloudinary(req.file.buffer)||"";
    noticeExist.noticeImage=image_url;
   }
   await noticeExist.save();
   return res.status(200).json({
    success:true,
    message:"Notice Updated Successfully",
    notice:noticeExist
   })
 }catch(error){
  console.log(error);
  next(error);
 } 
}

const deleteNotice=async(req,res,next)=>{
 try{
   const {id}=req.params;
   const noticedelete= await Notice.findByIdAndDelete(id);
   if(!noticedelete){
    return res.status(404).json({
      success:false,
      message:"Notice no Longer exist"
    })
   }
   await NoticeLike.deleteMany({noticeID:id});
   return res.status(200).json({
     success:true,
     message:"Notice deleted Successfully"
   })

 }catch(error){
  console.log(error);
  next(error);
 } 
}

module.exports = { createNotice, allNotices,deleteNotice ,noticeLike,updateNotice};
