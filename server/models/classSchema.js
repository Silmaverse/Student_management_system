const mongoose=require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

const classSchema=new mongoose.Schema({
   name:{
     type:String,
     required:[true,"Name is required"],
     trim:true,
     maxlength:[30,"Namelength must not exceed 30 characters"]
   },
   classNumber:{
     type:Number,
     required:[true,"Code is required"],
   },
   description:{
    type:String,
    required:false,
    maxlength:[500,"Description must not exceed 500 characters"]
   },
   creatorId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User",
     required:[true,"creator Id is required"]
   },
   subjects:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"subject",
      required:false   
    }
   ]
},
{
    timestamps:true
}
)
classSchema.plugin(mongoosePaginate);
const classModel=mongoose.model('class',classSchema);

module.exports=classModel;