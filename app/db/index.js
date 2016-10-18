'use strict';
const config = require('../config');
const logger = require('../logger');
const Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error', error =>{
    logger.log('error', 'Mongoose db connection error: ' + error);
});

//Create schema for storing user data
const chatUser = new Mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String
});

//turn schema into usable model
let userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
    Mongoose, 
    userModel
}