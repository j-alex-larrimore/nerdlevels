'use strict';

if(process.env.NODE_ENV === 'production'){
    //Redis stuff all connected to online
    let redisURI = require('url').parse(process.env.REDIS_URL);
    let redisPassword = redisURI.auth.split(':')[1];
    
    module.exports = {
        host: process.env.host || "",
        url: process.env.siteURL,
        emailAddress: process.env.emailAddress,
        emailPwd: process.env.emailPwd,
        dbURI: process.env.dbURI,
        sessionSecret: process.env.sessionSecret,
        S3Bucket: process.env.S3Bucket,
        AWS_SECRET_ACCESS_KEY: process.env.S3Secret,
        AWS_ACCESS_KEY_ID: process.env.S3AccessKey,
        fb: {
            clientID: process.env.fbClientID,
            clientSecret: process.env.fbClientSecret,
            callbackURL: process.env.host + "/auth/facebook/callback",
            profileFields: ['id', 'displayName', 'photos']
        },
        twitter: {
            consumerKey: process.env.twClientID,
            consumerSecret: process.env.twClientSecret,
            callbackURL: process.env.host + "/auth/twitter/callback",
            profileFields: ['id', 'displayName', 'photos']
        },
        google: {
            clientID: process.env.ggClientID,
            clientSecret: process.env.ggClientSecret,
            callbackURL: process.env.host + "/auth/google/callback",
            profileFields: ['id', 'displayName', 'photos'],
            scope: ['email', 'profile']
        },
        redis: {
            host: redisURI.hostname,
            port: redisURI.port,
            password: redisPassword
        }
    }
}else{
    module.exports = require('./development.json');
}