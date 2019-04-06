const userRoutes = require('./api/routes/users')

class UserLogin
{
    initialize(expressApp){
        this.express = expressApp;
        console.log('userLogin Library is imported');
        this.express.use('/users',userRoutes);
    }


}

module.exports =new UserLogin();
