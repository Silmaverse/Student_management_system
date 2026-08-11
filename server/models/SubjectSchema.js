const mongoose=require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");


const subjectSchema=new mongoose.Schema({
  creatorID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:[true,"Creator Id is required"]
  },
  name:{
    type:String,
    required:[true,"Name is required"],
    trim:true
  },
  code:{
    type:String,
    required:[true,"Sbuject code is required"],
    unique:true,
    trim:true
  },
  credits:{
    type:Number,
    required:true,
    min:[0,"Credits cannot be negative"]
  },
  description:{
     type:String,
     required:false,
  }
 },{
   timestamps:true 
 }
)

subjectSchema.plugin(mongoosePaginate);

const subModel= mongoose.model("subject",subjectSchema);

module.exports=subModel