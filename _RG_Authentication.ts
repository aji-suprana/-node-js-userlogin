//const RequestGroup = require('../Utilities/RequestsGroup')
//const HTTPMethodType = require('../Utilities/HTTPMethodType').HTTPMethodType;

import {HTTPMethodType} from '../Engine/index'
import {RequestGroup} from'../Engine/index'

//Requests
import {Registration} from "./Registration"
import {Authenticate} from "./Authenticate"

export class Authentication extends RequestGroup
{
    private static instance:Authentication;

    getInstance()
    {
        if(!Authentication.instance){
            Authentication.instance = new Authentication("authentication");
        }

        return Authentication.instance;
    }

    RegisterHTTPMethods()
    {
        console.log("Registering HTTP Methods in " + this.requestGroupPath)
        this.RegisterHTTPMethod(HTTPMethodType.post,"registration",Registration);
        this.RegisterHTTPMethod(HTTPMethodType.post,"authenticate",Authenticate);
    }
}