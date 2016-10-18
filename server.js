'use strict';
const express = require('express');
const app = express();
const chatCat = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);

//Because we are doing this we can treat what happens in the views as if the img js and css folders
//are in root folder. In other words, instead of ./img just /img
app.use(express.static('public'));
//View engine is a property in express. Whatever is in second set of quotes is
//automatically module imported and set 
app.set('view engine', 'ejs');

app.use('/', chatCat.session);
//hooks passport up to express, connects to request and response streams
app.use(passport.initialize());
//hooks express session middleware to passport (serialize & deserializeuser functions)
app.use(passport.session())
//brings in analytic logging middleware
app.use(require('morgan')('combined', {
    stream: {
        write: message=>{
            //write to logs with Winston
            chatCat.logger.log('info', message);
        }
    }
}));

app.use('/', chatCat.router);

//instead of app.listen we replaceapp with chatCat.ioServer
chatCat.ioServer(app).listen(app.get('port'), () =>{
    console.log('ChatCAT running on port: ', app.get('port'));
});