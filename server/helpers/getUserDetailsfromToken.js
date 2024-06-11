const jwt=require('jsonwebtoken');
const UserModel = require('../Models/UserModels');
const getUserDetailsFromToken=async (token)=>{

    if(!token){
        return {
            message:"session out",
            logout:true,
        }
    }
 const decode=await jwt.verify(token,process.env.SecretKey);
 const user=await UserModel.findById(decode.id).select('-password');
 return user;
}

module.exports=getUserDetailsFromToken;