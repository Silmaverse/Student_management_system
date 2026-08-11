const jwt=require('jsonwebtoken');

//make sure the user is login
const protect=async (req,res,next)=>{
  try{
   const {accesstoken}= await req.cookies;
   const decoded=await jwt.verify(accesstoken,process.env.JWT_SECRET_KEY);
   if(decoded){
     req.user=decoded;
     return next(); 
   }
   return res.status(403).json({
        success:false,
        message:"Unauthorized Request" 
   });

  }catch(error){
   console.log(error)
   return res.status(401).json({
        success:false,
        message:"You need to Login First" 
   });
  }   
}

//ensure the user is approved
const ensureapporve=async(req,res,next)=>{
  if(req.user && req.user.status==="approved"){
    next()
  }else{
    return res.status(401).json({
      success:false,
      message:"Access is denied Need approval from superadmin" 
    }) 
  }
}

//RBAC Restrict route access to specify role only

const authorizeRoles= (...roles)=>{
  return(req,res,next)=>{
    if(!roles.includes(req.user.role)){
      return res.status(403).json({
      success: false,
      message: "Role is not authorized to see this request"
     });
    }
    next();
  }
}


module.exports={protect ,ensureapporve ,authorizeRoles}