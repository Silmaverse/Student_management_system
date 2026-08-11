const mongoose=require('mongoose');

main().then(()=>{
   console.log("DB CONNECTED") 
}).catch((error)=>{
   console.log(error) 
})

async function main() {
  const mongodburl=process.env.DB_URL;
  if(!mongodburl){
   console.log("Db Url is not defined");
   process.exit(1); 
  }
  await mongoose.connect(mongodburl);    
}


module.exports=main