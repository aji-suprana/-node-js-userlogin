const express = require('express');
const mongoose = require('mongoose');

const app = express();
const userLogin = require('./userlogin/userlogin');
const errorHandler = require("./errorHandler/ErrorHandler")

userLogin.initialize(app);
errorHandler.initialize(app);

mongoose.connect(
    //"mongodb+srv://quest_god:QuestGod1@questgod-ftvdm.mongodb.net/test?retryWrites=true"
    "mongodb+srv://quest_god:"+
    process.env.MONGO_ATLAS_PW+
    "@questgod-ftvdm.mongodb.net/test?retryWrites=true",
    {
       useNewUrlParser: true
    }
);

//mongodb+srv://quest_god:<password>@questgod-ftvdm.mongodb.net/test?retryWrites=true

module.exports = app;