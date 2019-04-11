const RequestGroup = require('../Utilities/RequestsGroup')
const authentication = require('express').Router();
const HTTPMethodType = require('../Utilities/HTTPMethodType').HTTPMethodType;

//Requests
const Authenticate = require('./Requests/Authenticate');
const Registration = require('./Requests/Registration')

//authentication.post('/register',RegistrationRequest);

//authentication.post('/login',AuthenticateRequest);
//user signup
authentication.delete('/:userID',(req,res,next)=>{
    res.status(200).json({
        message:"user deleted"
    })
})

class Authentication extends RequestGroup
{
    RegisterHTTPMethods()
    {
        console.log("Registering HTTP Methods in " + this.requestGroupPath)
        this.RegisterHTTPMethod(HTTPMethodType.post,"registration",Registration);
        this.RegisterHTTPMethod(HTTPMethodType.post,"authenticate",Authenticate);
    }


}

module.exports = new Authentication();