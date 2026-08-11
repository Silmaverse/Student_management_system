const { paginate } = require("mongoose-paginate-v2");
const Class=require("../../models/classSchema");
const Subject=require("../../models/SubjectSchema");

//create Class
const createClass=async(req,res,next)=>{
  try{
    const{name,classNumber,description,creatorId,subjects}=req.body;
    if(!name|| !classNumber){
      return res.status(400).json({
        success:false,
        messge:"This fields are required"
      })
    }
   const subjectIds=await Promise.all(subjects.map(async(item,index)=>{
      const sub=await Subject.findOne({code:item});
      return sub?sub._id:null;
    }))
    const newClass=await Class.create({
      name,
      classNumber,
      description:description||"",
      creatorId:req.user.id,
      subjects:subjectIds||[]  
    })
    return res.status(200).json({
      success:true,
      messge:"Class Created Successfully" 
    })
  }catch(error){
   console.error(error); 
   next(error);
  }
}

//get Class
const getClasses=async(req,res,next)=>{
 try{
   const page=parseInt(req.query.page)||1;
   const limit=parseInt(req.query.limit)||10;

   const options={
     page,limit,sort:{createdAt:-1},populate:"subjects"
   }
   const result=await Class.paginate({},options);
   const totalpages=Math.ceil(result.totalDocs/limit);
   return res.status(200).json({
        success:true,
        messge:"Get Classes Successfully",
        classes:result.docs,
        pagination:{
          currentPage:page, 
          totalpages,
          totalItems:result.totalDocs,
          itemsPerpage:result.limit,
          hasPrevPage:page>1,
          hasNextPage:page<totalpages
        }
    })
  }catch(error){
   console.error(error); 
   next(error);
  }
}

//update Class
const updateClass=async(req,res,next)=>{
 try{
   const {id}=req.params;
   const{name,classNumber,description,subjects}=req.body;
   const existClass=await Class.findById(id);
   if(!existClass){
     return res.status(404).json({
          success: false,
          message: "Class not found.",
     });
   }
   const authorId=req.user.id
   if(existClass.creatorId.toString() !== authorId){
    return res.status(403).json({
        success: false,
        message: "You are not authorized to update the class.",
    });
   }
   existClass.name=name||existClass.name;
   existClass.classNumber=classNumber||existClass.classNumber; 
   existClass.description=description|| existClass.description;
   existClass.subjects=subjects||existClass.subjects;

   return res.status(200).json({
        success:true,
        messge:"Class Updated Successfully",
        data:existClass
   })

  }catch(error){
   console.error(error); 
   next(error);
  }
}

//delete Class
const deleteClass=async(req,res,next)=>{
  try{
    const {id} =req.params;
    const existClass = await Class.findById(id);
    if(!existClass){
      return res.status(404).json({
        success: false,
        message: "Class not found.",
     }); 
    }
   const authorId=req.user.id
   if(existClass.creatorId.toString() !== authorId){
    return res.status(403).json({
        success: false,
        message: "You are not authorized to delete the class.",
    });
   }
   await Class.deleteOne({_id:id});
    return res.status(200).json({
        success:true,
        messge:"Class deleted Successfully"
    })
  }catch(error){
   console.error(error); 
   next(error);
  }
}

module.exports={createClass ,getClasses,updateClass,deleteClass}