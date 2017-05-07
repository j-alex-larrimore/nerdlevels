'use strict';
const config = require('./config');
const redis = require('redis').createClient;
const adapter = require('socket.io-redis');
const knox = require('knox');
const AWS = require('aws-sdk');

//social authentication
require('./auth')();

//Create an IO Server instance
let ioServer = app => {
    app.locals.chatrooms = [];
    const server = require('http').Server(app);
    const io = require('socket.io')(server);


    //Redis
    io.set('transports', ['websocket']);

    let pubClient = redis(config.redis.port, config.redis.host, {
       auth_pass: config.redis.password
    });

    let subClient = redis(config.redis.port, config.redis.host, {
        return_buffers: true,
        auth_pass: config.redis.password
    });

    //More for redis
    io.adapter(adapter({
        pubClient,
        subClient
    }));

    io.use((socket, next) =>{
       require('./session')(socket.request, {}, next);
    });
    require('./socket')(io, app);
    //returns the server instance with io locked on
    return server;
}

let knoxClient = knox.createClient({
    key: config.AWS_ACCESS_KEY_ID,
    secret: config.AWS_SECRET_ACCESS_KEY,
    bucket: "nerdlevels"
});

/*const router = require('express').Router();

router.get('/', (req, res, next) =>{
    //Because we didn't specify file type, express automatically uses ejs files
    //because that is the view engine
    //Express also finds this page because it looks in a folder called views
    res.render('login');
});*/

//angRouter: require('./angRoutes')(),
module.exports = {
    knoxClient,
    router: require('./routes')(),
    session: require('./session'),
    ioServer
}
