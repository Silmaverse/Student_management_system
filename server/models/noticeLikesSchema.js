const mongoose = require("mongoose");

const noticeLikeSchema = new mongoose.Schema({
  noticeID: { type: mongoose.Schema.Types.ObjectId, ref: "notice" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
},{timestamps:true});

noticeLikeSchema.index({noticeID:1,userId:1},{unique:true});

const noticeLikeModel=mongoose.model("noticeLikes",noticeLikeSchema);

module.exports=noticeLikeModel;



