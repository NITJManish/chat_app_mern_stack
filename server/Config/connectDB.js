const mongoose=require('mongoose');

async function connectDB(){
    try{
       await mongoose.connect(process.env.Mongodb_URL);

       const connection=mongoose.connection;
       connection.on('connected',()=>{
          console.log("server connected to DB");
       })
       connection.on('error',(error)=>{
        console.log("server not connected to DB",error);
     })
    }catch(err){
        console.log("server not connected to DB",err);
    }
}


module.exports=connectDB;