//\\const User = require('../models/user');

module.exports = function Authenticate(req,res,next) {
    // function body
    // optional return; 
    console.log("login is called");
    res.status(200).json({
        message:"login is called"
    });
 } 
