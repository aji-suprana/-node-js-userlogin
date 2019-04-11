//const RequestGroup = require('../Utilities/RequestsGroup')
//const HTTPMethodType = require('../Utilities/HTTPMethodType').HTTPMethodType;

import {HTTPMethodType} from '../Engine/index'
import {RequestGroup} from'../Engine/index'
//Requests
import {Registration} from "./Registration"
import {Authenticate} from "./Authenticate"

class Authentication extends RequestGroup
{
    RegisterHTTPMethods()
    {
        console.log("Registering HTTP Methods in " + this.requestGroupPath)
        this.RegisterHTTPMethod(HTTPMethodType.post,"registration",Registration);
        this.RegisterHTTPMethod(HTTPMethodType.post,"authenticate",Authenticate);
        // this.RegisterHTTPMethod(HTTPMethodType.post,"test",Registration)
    }
}

module.exports = new Authentication();