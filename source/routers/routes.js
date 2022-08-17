const express= require('express');
const rout = express.Router();
const control = require("../Controler/controler.js")
const { body } = require('express-validator');


rout.get('/student',control.getdata);
rout.get("/register1",control.register1);
rout.get("/login1" , control.login1);
rout.post("/login" , control.login);
rout.get("/",control.home);


rout.post("/user/register1",  body('email').isEmail().withMessage("Enter your valid email")
 ,body('password').isLength({min : 10}).withMessage('Enter your password with max length 5')
,body('phone').isLength({ min: 10 },{max: 10}).withMessage('Enter your Complete Phone Number')
,body('username').isLength({min :2}).withMessage('Enter Your Correct Username'),control.register);


module.exports = rout;



