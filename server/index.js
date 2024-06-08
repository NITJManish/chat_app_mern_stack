const express= require('express');
const cors=require('cors');
const app=express();
require('dotenv').config();


app.use(cors({
    origin:process.env.frontend_url,
    credentials:true
}));

const PORT=process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("hello");
});

app.listen(PORT,(err)=>{
    if(!err){
        console.log("server run on port ",PORT);
    }
    else{
        console.log("errors",err);
    }
})