const User = require('../models/user');
const mongoose =require('mongoose');
const bcrypt = require('bcrypt')

const ResponseHelper = require('../../Utilities/ResponseHelper')
const responseHelper = new ResponseHelper("Registration",res,req);


module.exports = function Registration(req,res,next) {
    console.log(responseHelper.JsonRequest_Succeded())

    User.find({"email":req.body.email})
    .exec()
    .then(user=>{
        //if mail existed
        if(user.length >= 1){
            return responseHelper.HTTP_UnprocessableEntity(
                {email : "mail Existed"}
            );
        }
        
        //if password lower than 8 digit
        if(req.body.password.length < 8)
        {
            return responseHelper.HTTP_UnprocessableEntity(
                {password : "password length musth be longer than 8 characters"}
            );
        }

        //Encrypting input password
        bcrypt.hash(req.body.password,10,
            (err,hash)=>{
                if(err){return responseHelper.HTTP_UnprocessableEntity(err);}

                const userModel = new User({
                    _id: new mongoose.Types.ObjectId,
                    email: req.body.email,
                    password: hash
                })
        
                userModel.save()
                .then(result=>{
                    responseHelper.HTTP_OK(result);
                })
                .catch(err=>{
                    responseHelper.HTTP_InternalServerError(err);
                })
            }
        );
    })
    .catch(err=>{responseHelper.HTTP_InternalServerError(err);})
 } 
