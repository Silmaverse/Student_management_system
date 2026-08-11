const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({
  sender:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:[true,"Sender ID is required"]
  },
  receiver:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:[true,"Receiver ID is required"]
  },
  course:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Course",
    required:false
  },
  messageType:{
    type:String,
    enum:["text","image","file","audio"],
    default:"text" 
  },
  content:{
    type:String,
    required:[true,"Message cannot be empty"],
    trim:true,
    maxlength:[2000,"Message cannot exceed 2000 characters"],
  },
  fileUrl:{
    type:String,
    default:"",
  },
  isRead:{
   type:Boolean,
   default:false 
  },
  readAt:{
   type:Date, 
  }
},{timestamps:true}
)

// Performance Indexing for fast chat history retrieval
messageSchema.index({sender:1,receiver:1,createdAt:-1});

const messageModel=mongoose.model("Messsage",messageSchema);

module.exports=messageModel;