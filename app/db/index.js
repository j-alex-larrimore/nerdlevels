'use strict';
const config = require('../config');
const logger = require('../logger');
const Mongoose = require('mongoose').connect(config.dbURI);
const knox = require('knox');

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

//First try and making knox work in this project?
var knoxClient = knox.createClient({
    key: config.S3AccessKey,
    secret: config.S3Secret,
    bucket: config.S3Bucket
})

module.exports = {
    Mongoose, 
    userModel,
    knoxClient
}