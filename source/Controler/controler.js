const data = require("../models/models.js");
const path = require("path");
const { response } = require("express");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");


const getdata = (req ,res)=>{
    res.send("Hello from the post sid dfefde");
   
}
const register = async(req,res)=> {
    console.log(req.body);
    // const error = validationResult(req);
    // if(!error.isEmpty()){
    //     return res.status(400).json({errors:error})
    // }
     

//    const  data2  = {
//         email :req.body.email,
//         password:req.body.password,
        
//         phone:req.body.phone,
//         username:req.body.username
//      }
    
//       console.log(data2);

      const a = new data(req.body);
      
      await a.save();  
      return res.status(200).send("Data Sent")
      

} 

const login = async(req,res)=>{
    const data3 = {
    email :req.body.email,
    password:req.body.password,
   }
    console.log(data3);
    // var passw = bcrypt.hash(req.body.password,8);
    const val = await data.find({email:`${req.body.email}`, password:`${req.body.password}`}).count();
    console.log(val);

    if(val !=0){
        res.sendFile(path.join(__dirname,"../../public/successful.html"))
    }
    else{
        res.sendFile(path.join(__dirname,"../../public/LoginFail.html"))
    }
    
}

const register1 = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../public/register.html"));
}
const login1 = async(req , res)=>{
    res.sendFile(path.join(__dirname,"../../public/login.html"))
    console.log(req.body);
}
const home = async(req , res)=>{
    res.sendFile(path.join(__dirname,"../../public/home.html"))
    // res.sendFile(path.join(__dirname,"../../public/register.html"));
}

module.exports= {register1,login1, getdata,register,login,home};