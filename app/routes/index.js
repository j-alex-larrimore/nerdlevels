'use strict';
const h = require('../helpers');
const passport = require('passport');
const config = require('../config');

module.exports = () =>{
    let routes = {
        'get': {
            '/': (req, res, next)=> {
                res.render('login');
            },
            //Can turn this route into an array so it runs isAuthenticated first
            '/rooms':[h.isAuthenticated, (req, res, next)=>{
                res.render('rooms', {
                    user: req.user,
                    host: config.host
                });
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
                successRedirect: '/rooms',
                failureRedirect: '/'
            }),
            '/auth/twitter': passport.authenticate('twitter'),
            '/auth/twitter/callback': passport.authenticate('twitter', {
                successRedirect: '/rooms',
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
            
        },
        'NA': (req, res, next) =>{
            //Should be processing from server.js
            res.status(404).sendFile(process.cwd() + '/views/404.htm');
        }
    }

    return h.route(routes);
}