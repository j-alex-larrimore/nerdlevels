'use strict';
const config = require('../config');
//const logger = require('../logger');
const Mongoose = require('mongoose').connect(config.dbURI);
const knox = require('knox');

Mongoose.connection.on('error', error =>{
    logger.log('error', 'Mongoose db connection error: ' + error);
});

var now = Date.now();

//Create schema for storing user data
const chatUser = new Mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String,
    watchedVideos:[String],
    lastWatched: String,
    subscription: {type: Boolean, default: false},
    subscriptionEnd: {type: Date, default: now }
});

//turn schema into usable model
let userModel = Mongoose.model('chatUser', chatUser);

var videoList = new Mongoose.Schema({
        track:String,
        project:String,
        component:String,
        name:String,
        projnumber: String,
        compnumber: String,
        number:String,
        displayname: String,
        displaycomponent: String,
        script: String,
        filetype: String
    });
    
let singleVideoModel = Mongoose.model('videoList', videoList);

//First try and making knox work in this project?
var knoxClient = knox.createClient({
    key: config.AWS_ACCESS_KEY_ID,
    secret: config.AWS_SECRET_ACCESS_KEY,
    bucket: config.S3Bucket
})


//
module.exports = {
    Mongoose, 
    userModel,
    singleVideoModel,
    knoxClient
}