const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const errorHandler = require("./build/ErrorHandler/ErrorHandler")
const authentication = require("./build/Authentication/main")
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

authentication.Initialize(app,"authentication");
errorHandler.Initialize(app);

mongoose.connect(
    //"mongodb+srv://quest_god:QuestGod1@questgod-ftvdm.mongodb.net/test?retryWrites=true"
    "mongodb+srv://quest_god:"+
    //process.env.MONGO_ATLAS_PW+
    "QuestGod1"+
    "@questgod-ftvdm.mongodb.net/test?retryWrites=true",
    {
       useNewUrlParser: true
    }
);

//mongodb+srv://quest_god:<password>@questgod-ftvdm.mongodb.net/test?retryWrites=true



module.exports = app;