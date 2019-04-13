//const RequestGroup = require('../Utilities/RequestsGroup')
//const HTTPMethodType = require('../Utilities/HTTPMethodType').HTTPMethodType;

import {HTTPMethodType} from '../Engine/index'
import {RequestGroup} from'../Engine/index'

//Requests
import {Registration} from "./Registration"
import {Authenticate} from "./Authenticate"

export class RG_Authentication extends RequestGroup
{
    private static instance:RG_Authentication;

    getInstance()
    {
        if(!RG_Authentication.instance){
            RG_Authentication.instance = new RG_Authentication("authentication");
        }

        return RG_Authentication.instance;
    }

    RegisterHTTPMethods()
    {
        console.log("Registering HTTP Methods in " + this.requestGroupPath)
        this.RegisterHTTPMethod(HTTPMethodType.post,"registration",Registration);
        this.RegisterHTTPMethod(HTTPMethodType.post,"authenticate",Authenticate);
    }
}