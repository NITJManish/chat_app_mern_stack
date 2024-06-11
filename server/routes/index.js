const express=require('express');
const registerUsers=require('../Controllers/registerUsers');
const checkEmail=require('../Controllers/checkEmail');
const checkPassword = require('../Controllers/checkPassword');
const userDetails = require('../Controllers/userDetails');
const logout = require('../Controllers/logout');
const updateUserdetails = require('../Controllers/updateUserDetails');

const router=express.Router();

//create user api
router.post('/register',registerUsers);

//user check email
router.post("/email",checkEmail);

//user check password
router.post("/password",checkPassword);

//login user details
router.get("/user-details",userDetails);
//logout user
router.get('/logout',logout);
//update user details
router.post("/update-user",updateUserdetails);


module.exports=router;