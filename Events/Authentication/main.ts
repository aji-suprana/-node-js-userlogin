const RequestGroup = require('../Utilities/RequestsGroup')
const authentication = require('express').Router();
const HTTPMethodType = require('../Utilities/HTTPMethodType').HTTPMethodType;

//Requests
const Authenticate = require('./Requests/Authenticate');
const Registration = require('./Requests/Registration')

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