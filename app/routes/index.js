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
            },
            '/landingOld': (req, res, next)=>{
                res.render('landingOld');

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
            '/nouser':(req, res, next)=>{
              res.render('nouser');
            },
            '/accesserror':(req, res, next)=>{
              res.render('accesserror');
            },
            '/accessgiven/:email/:access':[h.isAuthenticated, (req, res, next)=>{
              //Checks if current user is an admin and makes sure they aren't granting admin privileges
              if(req.user.access != "admin" || req.params.access == "admin"){
                console.log("AG access error");
                res.redirect("accesserror");
              }else{
                db.userModel.findOne({'email': req.params.email}, function(err, result){
                    if(err!= null){
                      //No user found
                      console.log("AG not found");
                      res.redirect("nouser");
                    }else{
                      result.access = req.params.access;
                      result.save(error =>{
                           if(error){
                               console.log("Error updating user");
                           }else{
                               console.log("Successfully added access");
                           }
                       });
                      res.render('accessgiven');
                    }
                });

              }
            }],
            '/access':[h.isAuthenticated, (req, res, next)=>{
              if(req.user.access != "admin"){
                console.log("AE");
                res.redirect("accesserror");
              }else{
                console.log("access");
                res.render('access');
              }
            }],
            '/faq':(req, res, next)=>{
                res.render('coming');
            },
            '/index/:vName/:vProject/:vTrack':[h.isAuthenticated, (req, res, next)=>{
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
                                  //If user does not have access send them to an error page
                                  if(req.user.access != "admin" &&
                                    req.user.access != "full"){
                                    res.redirect("../../../accesserror");
                                  }else{

                                    h.watchedVideo({'user':req.user._id, 'video': (result2.name + result2.project)});
                                    console.log(result2.vidid + " " + result2.name);

                                    res.render('index', {
                                        vidID: result2.vidid,
                                        user: req.user,
                                        vidTrack: result2.track,
                                        fileType: result2.filetype,
                                        vidName: result2.name,
                                        vidNumber: result2.number,
                                        vidProject: result2.project,
                                        vidDisplayComponent: result2.displaycomponent,
                                        vidDisplayName: result2.displayname,
                                        vidScript: result2.script,
                                        vids: result,
                                        vidComponent: result2.component
                                    });
                                  }
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
                                        vidScript: '',
                                        vidComponent: ''
                                    });
                                }
                            });

                        }
                    });


            }],
            '/index':[h.isAuthenticated, (req, res, next)=>{
                    db.singleVideoModel.findOne({'name': req.user.lastWatched}, function(err, result){
                        if(err!=null){
                            console.log("indexerr" + err);
                        }else if(result != null){//Look up last view video from user and redirect to that one
                            res.redirect('/index/'+ result.name +'/' + result.project + '/' + result.track);
                        }else{
                            console.log("New User");
                            res.redirect('/index/introduction.mp4/Platformer/Game');
                        }
                    });

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
            }
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
