const express=require('express');
const registerUsers=require('../Controllers/registerUsers');
const checkEmail=require('../Controllers/checkEmail');
const checkPassword = require('../Controllers/checkPassword');

const router=express.Router();

//create user api
router.post('/register',registerUsers);

//user check email
router.post("/email",checkEmail);

//user check password
router.post("/password",checkPassword);


module.exports=router;