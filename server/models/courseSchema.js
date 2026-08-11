const mongoose=require("mongoose");

const courseSchema=new mongoose.Schema({
    title:{
      type:String,
      required:true   
    },
    info:{
      type:String,
      required:true  
    },
    description:{
      type:String,
      required:true  
    },
    overview:[[String]],
    tag:{
      type:String,
      required:true  
    },
    curriculum:{
      type:String,
      required:true  
    },
    price:{
      type:Number,
      required:true
    },
    duration:{
      type:String,
      required:true  
    },
    level:{
      type:String,
      required:true  
    },
    discount:{
      type:Number,    
    },
    rating:{
     type:Number   
    },
    enrolled:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User"   
    }],
    coursevideo:{
      type:String   
    },
   courseInstructor:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User",
     required:true
   }
})

const courseModel=mongoose.model("Course",courseSchema);

module.exports=courseModel