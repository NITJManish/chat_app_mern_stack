const User =require('../Models/UserModels');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
async function checkPassword(req,res){
     try{
          const {password,userId}=req.body;
          const user=await User.findById(userId);
          const verifyPassword=await bcryptjs.compare(password,user.password);

          if(!verifyPassword){
            return res.status(400).json({
                message:"Please check password",
                error:true
            })
          }
          const tokenData={
            id:user.id,
            email:user.email
          }

          const token=await jwt.sign(tokenData,process.env.SecretKey,{expiresIn:'1d'});
          
          const cookieOptions={
            http:true,
            secure:true
          }

          return res.cookie('token',token,cookieOptions).status(200).json({
            message:"Login successfully",
            success:true,
            token:token
          })
     }catch(error){
        return res.status(500).json({
            message:error.message.error || error,
            error:true
        })
     }
}

module.exports=checkPassword;