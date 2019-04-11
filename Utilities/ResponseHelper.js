"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
module.exports = /** @class */ (function () {
    function ResponseHelper(name, res, req) {
        this.RequestName = "none";
        this.RequestName = name;
        this.responseBody = res;
        this.requestBody = req;
    }
    ResponseHelper.prototype.JsonRequest_Succeded = function () {
        var jsonObj = __assign({ "request": "." + this.RequestName + "Request" }, this.requestBody.body);
        delete jsonObj["__v"];
        return jsonObj;
    };
    ResponseHelper.prototype.JsonResponse_Succeded = function (result) {
        var jsonObj = __assign({ "response": "." + this.RequestName + "Response" }, result._doc);
        delete jsonObj["__v"];
        console.log(jsonObj);
        return jsonObj;
    };
    ResponseHelper.prototype.JsonResponse_Failed = function (err) {
        var jsonObj = {
            "response": "." + this.RequestName + "Response",
            error: err
        };
        console.log(jsonObj);
        return jsonObj;
    };
    ResponseHelper.prototype.HTTP_OK = function (result) {
        return this.responseBody.status(200).json(this.JsonResponse_Succeded(result));
    };
    ResponseHelper.prototype.HTTP_UnprocessableEntity = function (err) {
        return this.responseBody.status(422).json(this.JsonResponse_Failed(err));
    };
    ResponseHelper.prototype.HTTP_InternalServerError = function (err) {
        return this.responseBody.status(500).json(this.JsonResponse_Failed(err));
    };
    return ResponseHelper;
}());
