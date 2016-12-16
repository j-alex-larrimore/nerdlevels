'use strict';
const h = require('../helpers');
const passport = require('passport');
const config = require('../config');
const db = require('../db');
const fs = require('fs');
var nodemailer = require('nodemailer');

module.exports = () =>{
    let routes = {
        'get': {
            '/': (req, res, next)=> {
                console.log("landing");
                res.render('landing');
                //res.render('index');
            },
            '/aws/:id':(req, res, next)=>{
                db.knoxClient.getFile(req.params.id, function(err, videoStream){
                   videoStream.pipe(res); 
                });
            },
            '/about':(req, res, next)=>{
                res.render('about');
            },
            '/examples':(req, res, next)=>{
                res.render('coming');
            },
            '/blog':(req, res, next)=>{
                res.render('coming');
            },
            '/faq':(req, res, next)=>{
                res.render('coming');
            },
            '/index/:vName/:vidNum':[h.isAuthenticated, (req, res, next)=>{
                    db.singleVideoModel.find({}).sort({ projnumber: 1, compnumber : 1, number: 1}).exec(function(err, result){
                        if(err!=null){
                            console.log(err);
                        }else if(result != null){
                            req.user.lastWatched = req.params.vName;
                            req.user.save(error =>{
                                 if(error){
                                     console.log("Error updating user");
                                 }else{
                                     //console.log("Successfully updated user");
                                 }
                             });
                            db.singleVideoModel.findOne({'name': req.params.vName}, function(err, result2){
                                if(err!=null){
                                    console.log(err);
                                }else if(result2 != null){//Look up last view video from user and redirect to that one
                                    res.render('index', {
                                        vidTrack: result2.track,
                                        fileType: result2.filetype,
                                        vidName: result2.name,
                                        vidNumber: req.params.vidNum,
                                        vidProject: result2.project,
                                        vidDisplayComponent: result2.displaycomponent,
                                        vidDisplayName: result2.displayname,
                                        vids: result,
                                        vidComponent: result2.component
                                    });   
                                }else{
                                    console.log("Null Video Response");
                                    res.render('index', {
                                        vidTrack: '',
                                        vidName: '',
                                        vidNumber: '',
                                        vidProject: '',
                                        vids: result,
                                        vidDisplayComponent: '',
                                        vidDisplayName: '',
                                        vidComponent: ''
                                    });   
                                }
                            });
                            
                        }
                    });

                                
            }],
            '/index':[h.isAuthenticated, (req, res, next)=>{
                var vName,
                    vNumber, 
                    pject, 
                    cmpnt;
                    db.singleVideoModel.findOne({'name': req.user.lastWatched}, function(err, result){
                        if(err!=null){
                            console.log(err);
                        }else if(result != null){//Look up last view video from user and redirect to that one
                            res.redirect('/index/'+ result.name +'/' + result.number);
                        }else{
                            console.log("New User");
                            res.redirect('/index/introduction.mp4/1');
                        }
                    });

                   /*db.singleVideoModel.find(function(err, result){
                        if(err!=null){
                            console.log(err);
                        }else if(result != null){//Look up last view video from user and redirect to that one
                            //console.log(result);
                            res.redirect('/index/test0/12');
                        }
                    });*/
                    


                    

                    /*res.render('index', {
                        vidName: "test0.mp4",
                        vidNumber: "12",
                        project: "Platformer",
                        component: "new+folder"
                    });*/
                /*db.singleVideoModel.findOne({'name': 'Adding+a+Story.flv'}, function(err, result){
                    if(err != null){
                        console.log(err);
                    }else if(result != null){
                       //vName = result.name;
                       vNumber = result.number;
                       pject = result.project;
                       //cmpnt = result.component;
                       vName = "test0";
                        cmpnt = "new+folder";

                       console.log("loading index");
                       //MIGHT NEED NEXT LINE
                       // h.watchedVideo({'user': req.user._id, 'video':vName});
                        res.render('index', {
                        //res.render('AppComponent', {
                            user: req.user,
                            host: config.host,
                            vidName: vName,
                            vidNumber: vNumber,
                            project: pject,
                            component: cmpnt
                        });
                        
                        /*res.render('index', {
                            video: result
                         });*/
                          
                        /*db.knoxClient.getFile('https://s3.amazonaws.com/nerdlevels/'+ pject +'/' + cmpnt +'/' + vName, function(err, result){
                        
                           if(err != null){
                               console.log(err);
                           }else{
                               console.log("Got video file");
                               res.render('index', {
                                    video: result
                                });
                           }
                        });
                        //res.send(result);
                    }else{
                        console.log("Video not found!");
                    }
                })*/
                
            }],
            //Using /:id allows us to extract the id and store it in id keyword
            '/chat/:id':[h.isAuthenticated, (req, res, next)=>{
                //Find a chatroom with given id. We can access stuff like :id by using req.params
                let getRoom = h.findRoomById(req.app.locals.chatrooms, req.params.id);
                if(getRoom === undefined){
                    return next();
                }else{
                    //render if id is found
                    res.render('chatroom', {
                        user: req.user,
                        host: config.host,
                        room: getRoom.room,
                        roomID: getRoom.roomID
                    });
                }
                
            }],
            '/auth/facebook': passport.authenticate('facebook'),
            '/auth/facebook/callback': passport.authenticate('facebook', {
                successRedirect: '/index',
                failureRedirect: '/'
            }),
            '/auth/twitter': passport.authenticate('twitter'),
            '/auth/twitter/callback': passport.authenticate('twitter', {
                successRedirect: '/index',
                failureRedirect: '/'
            }),
            '/auth/google': passport.authenticate('google'),
            '/auth/google/callback': passport.authenticate('google', {
                successRedirect: '/index',
                failureRedirect: '/'
            }),
            '/logout':(req, res, next)=>{
                req.logout();
                res.redirect('/');
            },
            '/getsession': (req, res, next)=>{
                res.send("My fav" + req.session.favColor);
            },
            '/setsession': (req, res, next)=>{
                req.session.favColor = "Gray";
                res.send("session set");
            }/*,
            '/getvideo/:id':[h.isAuthenticated, (req, res, next)=>{
                db.singleVideoModel.findOne({'name': req.params.id}, function(err, result){
                    if(err != null){
                        console.log(err);
                    }else if(result != null){
                        /*db.knoxClient.getFile('https://s3.amazonaws.com/nerdlevels/'+ result.project +'/' + result.component +'/' + result.name, function(err, result){
                           if(err != null){
                               console.log(err);
                           }else{
                               console.log("Got video file");
                                res.render('index', {
                                    video: result
                                });
                           }
                        });*//*
                        h.watchedVideo({'user': req.user._id, 'video':result.name});
                        console.log("Rendering index");
                        res.render('index', {
                            user: req.user,
                            host: config.host,
                            vidName: result.name,
                            vidNumber: result.number,
                            project: result.project,
                            component: result.component
                        });
                    }else{
                        console.log("Video not found!");
                    }
                })
            }]*/
        },
        'post':{
            '/mail/contact_me.php' : (req, res, next) =>{
                
                // create reusable transporter object using the default SMTP transport
                var transporter = nodemailer.createTransport("SMTP",{
                    host: "smtp.gmail.com",
                    secureConnection: false,
                    port: 587,
                    requiresAuth: true,
                    domains: ["gmail.com", "googlemail.com"],
                    auth: {
                    user: config.emailAddress,
                    pass: config.emailPwd
                    }
                });
                
                
                // setup e-mail data with unicode symbols
                var mailOptions = {
                    from: req.body.email, // sender address
                    to: 'nerdlevels@nerdlevels.com', // list of receivers
                    subject: 'From: ' + req.body.email, // Subject line
                    text: req.body.message, // plaintext body
                    html: req.body.message // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        return console.log(error);
                    }
                    console.log('Message sent');
                });
            }
        },
        'NA': (req, res, next) =>{
            //Should be processing from server.js
            res.status(404).sendFile(process.cwd() + '/views/missing.htm');
        }
    }

    return h.route(routes);
}