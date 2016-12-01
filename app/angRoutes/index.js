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
            '/':[h.isAuthenticated, (req, res, next)=>{
                var vName,
                    vNumber, 
                    pject, 
                    cmpnt;
                db.singleVideoModel.findOne({'name': 'Adding+a+Story.flv'}, function(err, result){
                    if(err != null){
                        console.log(err);
                    }else if(result != null){
                       console.log("rightIndex");
                       vName = result.name;
                       vNumber = result.number;
                       pject = result.project;
                       cmpnt = result.component;
                       console.log("Launching index");
                        h.watchedVideo({'user': req.user._id, 'video':vName});
                        res.render('index', {
                        //res.render('AppComponent', {
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
            }]
        },
        'post':{
            
        },
        'NA': (req, res, next) =>{
            //Should be processing from server.js
            res.status(404).sendFile(process.cwd() + '/views/missing.htm');
        }
    }

    return h.route(routes);
}