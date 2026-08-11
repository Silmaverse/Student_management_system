const mongoose=require("mongoose");

const noticeSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
    maxlength:[50,"title cannot excedd 50 characters"]
  },
  noticeImage:{
    type:String,
    required:false
  },
  description:{
    type:String,
    required:false,
    maxlength:[500,"description can not exceed 500 characters"]
  },
  expiryDate:{
    type:Date
  },
  postedBy:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User",
   required:true 
  }

})

const noticeModel=mongoose.model("notice",noticeSchema);

module.exports=noticeModel