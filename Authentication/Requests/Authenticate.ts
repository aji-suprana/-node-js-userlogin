const User = require('../models/user');
import {Response} from "express-serve-static-core";
import {Request} from "express-serve-static-core";
import {NextFunction} from "express-serve-static-core";

module.exports = function Authenticate(req:Request,res:Response,next:NextFunction) {
    // function body
    // optional return; 
    // res.status(200).json({
    //     message:"login is called"
    // });


 } 
