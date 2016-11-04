'use strict';
const h = require('../helpers');
const passport = require('passport');
const config = require('../config');
const db = require('../db');
const fs = require('fs');

module.exports = () =>{
    let routes = {
        'get': {
            '/': (req, res, next)=> {
                res.render('login');
            },
            //Can turn this route into an array so it runs isAuthenticated first
            '/rooms':[h.isAuthenticated, (req, res, next)=>{
                console.log(req.user);
                res.render('rooms', {
                    user: req.user,
                    host: config.host
                });
            }],
            '/aws/:id':(req, res, next)=>{
                db.knoxClient.getFile(req.params.id, function(err, videoStream){
                   videoStream.pipe(res); 
                });
            },
            '/index':[h.isAuthenticated, (req, res, next)=>{
                console.log(req.user);
                var vName,
                    vNumber, 
                    pject, 
                    cmpnt;
                db.singleVideoModel.findOne({'name': 'Adding+a+Story.flv'}, function(err, result){
                    if(err != null){
                        console.log(err);
                    }else if(result != null){
                       
                       vName = result.name;
                       vNumber = result.number;
                       pject = result.project;
                       cmpnt = result.component;
                        h.watchedVideo({'user': req.user._id, 'video':vName});
                        res.render('index', {
                            user: req.user,
                            host: config.host,
                            vidName: vName,
                            vidNumber: vNumber,
                            project: pject,
                            component: cmpnt
                        });
                        //h.getVideo('https://s3.amazonaws.com/nerdlevels/'+ pject +'/' + cmpnt +'/' + vName);
                        
                        //var vid = h.getVideo('https://s3.amazonaws.com/nerdlevels/'+ pject +'/' + cmpnt +'/' + vName);
                        //console.log(vid);
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
                        });*/
                        //res.send(result);
                    }else{
                        console.log("Video not found!");
                    }
                })
                
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
            },
            '/getvideo/:id':[h.isAuthenticated, (req, res, next)=>{
                console.log(req.params.id);
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
                        });*/
                        h.watchedVideo({'user': req.user._id, 'video':result.name});
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
            }]
        },
        'post':{
            
        },
        'NA': (req, res, next) =>{
            //Should be processing from server.js
            res.status(404).sendFile(process.cwd() + '/views/404.htm');
        }
    }

    return h.route(routes);
}