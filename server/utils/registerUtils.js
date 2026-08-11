const crypto=require("crypto");

function generateOtp(){
  const otp=crypto.randomInt(100000, 1000000).toString();
  const otpExpires=new Date(Date.now()+5*60*1000);
  return {otp,otpExpires};
}



module.exports={generateOtp};