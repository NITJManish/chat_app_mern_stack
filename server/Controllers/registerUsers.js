const User=require('../Models/UserModels');
const bcryptjs=require('bcryptjs');

async function registerUsers(req,res){
    try{
        const {name,email,password,profile_pic}=req.body;
        const checkEmail=await User.findOne({email});

        if(checkEmail){
            res.status(400).json({
                message:"Already email exits",
                error:true,
            })
        }
        //password into hashPassword
        const salt=await bcryptjs.genSalt(10);
        const hashPassowrd=await bcryptjs.hash(password,salt);

        const payload={
            name,
            email,
            profile_pic,
            password: hashPassowrd
        }

        const user=new User(payload);
        const userSave=await user.save();
        res.status(201).json({
            message:"user register successful",
            data:userSave,
            success:true
        })
    }catch(error){
        return res.status(500).json({
            message: error.message || error,
            error:true
        })
    }
}

module.exports=registerUsers;