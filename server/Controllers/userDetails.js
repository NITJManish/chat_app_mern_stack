const getUserDetailsFromToken = require("../helpers/getUserDetailsfromToken")

async function userDetails(req,res){
    try{
         const token=req.Cookies.token

         const user=getUserDetailsFromToken(token);
         return res.status(200).json({
            message:"user details",
            data:user
         })
    }catch(error){
        return res.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}

module.exports=userDetails;