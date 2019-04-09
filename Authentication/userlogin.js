const express = require('express');
const authentication = express.Router();

//user signup
authentication.post('/signup',(req,res,next)=>
{
    res.status(200).json({
        message:"signup is called"
    });
});


authentication.post('/login',(req,res,next)=>
{
    res.status(200).json({
        message:"signin is called"
    });
});

authentication.delete('/:userID',(req,res,next)=>{
    res.status(200).json({
        message:"user deleted"
    })
})

class UserLogin
{
    initialize(expressApp){
        this.express = expressApp;
        console.log('userLogin class is initialized');
        this.RoutesHandler();
    }

    RoutesHandler()
    {
        this.express.use('/user',authentication);
    }
}

module.exports = new UserLogin();