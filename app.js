const express = require('express');
const app = express();

const userLogin = require('./userlogin/userlogin');

userLogin.initialize(app);

module.exports = app;

