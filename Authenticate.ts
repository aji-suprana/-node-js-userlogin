const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

import {Response} from "express-serve-static-core";
import {Request} from "express-serve-static-core";
import {NextFunction} from "express-serve-static-core";

import {ResponseHelper} from "../Engine/index"
import User, { IUser } from './Models/user';

export function Authenticate(req:Request,res:Response,next:NextFunction) {
    const responseHelper = new ResponseHelper("Registration",res,req);
    console.log(responseHelper.JsonRequest_Succeded())

    User.find({email: req.body.email})
    .exec()
    .then(function(user:IUser[]){
        if(!UserFound(user)){
            return responseHelper.HTTP_Unauthorized("Authentication failed!");
        }

        bcrypt.compare(req.body.password,user[0].password,function(err:Error,result:boolean){
            var tempBool = CheckIfPasswordIsCorrect(err,result);

            if(tempBool){
                return responseHelper.HTTP_OK_StringResponse("Authentication Successfull!");
            }else{
                return responseHelper.HTTP_Unauthorized("Authentication failed!");
            }
        })
    })
    .catch(function(err){
        return responseHelper.HTTP_InternalServerError(err);
    });

 } 


 function UserFound(user:IUser[]) : boolean{
    if(user.length >= 1){return true;}
    else{ return false;}
 }

 function CheckIfPasswordIsCorrect(err:Error, result:boolean):boolean{
     if(err){
         return false;
     }

     return result;
 }