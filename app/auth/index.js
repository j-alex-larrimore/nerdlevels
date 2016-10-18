'use strict';
const passport = require('passport');
const config = require('../config');
const logger = require('../logger');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;
//const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
    //invoked by passport when authorized process ends. Creates a session. 
    //This is not the id from facebook, it is a mongo unique id
    passport.serializeUser((user, done)=>{
       done(null, user.id); 
    });
    
    passport.deserializeUser((id, done)=>{
        //Find user using the _id from mongo
        h.findById(id)
            .then(user => done(null, user))
            .catch(error => logger.log('error', 'Error when deserializing the user: ' + error));
    });
    
    let authProcessor = (accessToken, refreshToken, profile, done) =>{
        //Find a user in the local db using profile.id
        h.findOne(profile.id)
            .then(result =>{
               if(result){
                   done(null, result);
               }else{
                   //create new user and return
                   h.createNewUser(profile)
                        .then(newChatUser => done(null, newChatUser))
                        .catch(error => logger.log('error', 'Error when creating new user: ' + error));
               } 
            });
        //If found, return the user data using the done() 
        
        //if user is not found, create one locally and return
    }
    
    passport.use(new FacebookStrategy(config.fb, authProcessor));
   // passport.use(new TwitterStrategy(config.twitter, authProcessor));
}