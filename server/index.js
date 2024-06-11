const express= require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const app=express();
require('dotenv').config();
const connectDB=require('./Config/connectDB');
const router=require('./routes/index');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.frontend_url,
    credentials:true
}));

const PORT=process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("hello");
});

//api endpoint
app.use("/api",router);


connectDB().then(()=>{
    app.listen(PORT,(err)=>{
        if(!err){
            console.log("server run on port ",PORT);
        }
        else{
            console.log("errors",err);
        }
    })
})
