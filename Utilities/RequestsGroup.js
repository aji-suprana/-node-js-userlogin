"use strict";
var express = require("express");
var HTTPMethodType_1 = require("./HTTPMethodType");
var router = require('express').Router();
module.exports = /** @class */ (function () {
    function RequestGroup(expressApp, _requestGroupPath) {
        this.expressApp = express();
        //http://<url>/[requestGroupPath]/
        this.requestGroupPath = 'null';
        this.expressApp = expressApp;
        this.requestGroupPath = "/" + _requestGroupPath;
        console.log("Request Group " + this.requestGroupPath + " Initialized");
        this.RegisterHTTPMethods();
        this.RoutesHandler();
    }
    RequestGroup.prototype.RegisterHTTPMethods = function () {
        throw "Request Group Child Classes have to implement RegisterHTTPMethods() method";
    };
    RequestGroup.prototype.RoutesHandler = function () {
        this.expressApp.use(this.requestGroupPath, router);
    };
    RequestGroup.prototype.RegisterHTTPMethod = function (MethodType, path, requestCB) {
        var curPath = '/' + path;
        var methodTypeName = HTTPMethodType_1.HTTPMethodType[MethodType];
        switch (MethodType) {
            case HTTPMethodType_1.HTTPMethodType.copy:
                router.copy(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.delete:
                router.delete(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.get:
                router.get(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.head:
                router.head(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.link:
                router.link(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.lock:
                router.lock(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.options:
                router.options(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.patch:
                router.patch(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.post:
                router.post(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.propfind:
                router.propfind(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.purge:
                router.purge(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.put:
                router.put(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.unlink:
                router.unlink(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.unlock:
                router.unlock(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            case HTTPMethodType_1.HTTPMethodType.view:
                router.view(curPath, requestCB);
                this.DebugRegisteredHTTPMethod(methodTypeName, path);
                break;
            default: console.log("HttpMethod does not exist");
        }
    };
    RequestGroup.prototype.DebugRegisteredHTTPMethod = function (methodName, path) {
        console.log("registered httpmethod:" + methodName + ",with path: /" + path);
    };
    return RequestGroup;
}());
