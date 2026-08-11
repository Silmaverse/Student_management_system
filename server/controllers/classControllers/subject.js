const Subject = require("../../models/SubjectSchema");
const User=require("../../models/SubjectSchema");

const createSubject = async (req, res, next) => {
  try {
    const { name, code, credits, description } = req.body;
    if (!name || !code || !credits) {
      return res.status(400).json({
        success: false,
        message: "Missing required field",
      });
    }

    const existSubject = await Subject.findOne({ code });
    if (existSubject) {
      return res.status(400).json({
        success: false,
        message: "Subject already exist",
      });
    }

    const newSubject = await Subject.create({
      creatorID: req.user.id,
      name,
      code,
      credits,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Subject Created Successfully",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getSubjects = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
  
    const options = {
      page,
      limit,
      sort: { createdAt: -1 },
    };

    const subjects = await Subject.paginate({}, options);
    const totalPages=Math.ceil(subjects.totalDocs/limit);
    return res.status(200).json({
      success: true,
      message: "Fetch Subjects",
      data: {
        subjects: subjects.docs,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: subjects.totalDocs,
          itemsPerPage: subjects.limit,
          hasPrevPage:page>1,
          hasNextPage: page<totalPages,
        },
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//update subject
const updateSubject=async(req,res,next)=>{
  try{
     const {id}=req.params;
     const {name,code ,credits,description}=req.body;
     const subject=await Subject.findById(id);
     if(!subject){
      return res.status(400).json({
        success:false,
        message:"Subject does not exist"
      });
     }

     const creator=subject.creatorID?subject.creatorID.toString():null;

     if(creator !== req.user.id){
      return res.status(403).json({
        success:false,
        message:"You are not authorized to update this subject"
      });
     }
     subject.name=name||subject.name;
     subject.code=code||subject.code;
     subject.credits=credits||subject.credits;
     subject.description=description||subject.description; 
     await subject.save();
     
   return res.status(200).json({
     success:true,
     message:"Subject Updated Successfully"
   });

  }catch(error){
     console.log(error);
     next(error);
  }
}

const deleteSubject=async(req,res,next)=>{
 try{
    const {id}=req.params;
    const subject =await Subject.findById(id);
    if(!subject){
      return res.status(404).json({
        success:false,
        message:"Subject No longer exist"
      })
    }
   const authorId=req.user.id
   if(subject.creatorID.toString() !== authorId){
    return res.status(403).json({
        success: false,
        message: "You are not authorized to delete the subject.",
    });
   }
   await Subject.deleteOne({_id:id});
    return res.status(200).json({
        success:false,
        message:"Subject deleted Successfully"
    });

 }catch(error){
    console.log(error);
    next(error)
 } 
}

module.exports = { createSubject, getSubjects ,updateSubject,deleteSubject };
