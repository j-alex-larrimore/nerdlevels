'use strict';
const router = require('express').Router();
const db = require('../db');
const crypto = require('crypto');

//underscores in names in JS don't do anything but denote that they are going to be used privately
 let _registerRoutes = (routes, method) => {
     for(let key in routes){
         if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array))             {
             _registerRoutes(routes[key], key);
         }else{
             if(method === 'get'){
                 router.get(key, routes[key]);
             }else if(method === 'post'){
                 router.post(key, routes[key]);
             }else{
                 router.use(routes[key]);
             }
         }
     }
 }
 
 let route = routes=> {
     _registerRoutes(routes);
     return router;
 }
 
 //Find a single user based on a key
 let findOne = profileID =>{
     return db.userModel.findOne({
        'profileId': profileID 
     });
 }
 
 //create new user & return it
 let createNewUser = profile =>{
     return new Promise((resolve, reject) =>{
        let newChatUser = new db.userModel({
            profileId: profile.id,
            fullName: profile.displayName,
            profilePic: profile.photos[0].value || ''
        });
         
         newChatUser.save(error =>{
             if(error){
                 console.log("Error creating user");
                 reject(error);
             }else{
                 resolve(newChatUser);
             }
         });
     });
 }
 
 //ES6 promisified version of findById
 let findById = id => {
     return new Promise((resolve, reject)=>{
         db.userModel.findById(id, (error, user) =>{
             if(error){
                 reject(error);
             }else{
                 resolve(user);
             }
         });
     });
 }
 
 //middleware function to check if user is authenticated & logged in
 let isAuthenticated = (req, res, next) =>{
     if(req.isAuthenticated()){
         next();
     }else{
         res.redirect('/');
     }
 }
 
 let findRoomByName = (allrooms, room) => {
     //findIndex operates on arrays and gives reference to an element, its index and an array
     let findRoom = allrooms.findIndex((element, index, array) => {
         if(element.room === room){
             return true;
         }else{
             return false;
         }
     });
     return findRoom > -1 ? true : false;
 }
 
 let randomHex = () => {
     return crypto.randomBytes(24).toString('hex');
 }
 
 let findRoomById = (allrooms, roomID) => {
     return allrooms.find((element, index, array) => {
         if(element.roomID = roomID){
             return true;
         }else{
             return false;
         }
     });
 }
 
 //Add user to chatroom
 let addUserToRoom = (allrooms, data, socket) => {
     let getRoom = findRoomById(allrooms, data.roomID);
     if(getRoom !== undefined){
         let userID = socket.request.session.passport.user;
         let checkUser = getRoom.users.findIndex((element, index, array) =>{
            if(element.userID === userID){
                return true;
            } else{
                return false;
            }
         });
         
         if(checkUser > -1){
             getRoom.users.splice(checkUser, 1);
         }
         
         getRoom.users.push({
            socketID: socket.id,
             userID,
             user: data.user,
             userPic: data.userPic
         });
         
         socket.join(data.roomID);
         
         return getRoom;
     }
 }
 
 let removeUserFromRoom = (allrooms, socket) =>{
     for(let room of allrooms){
         let findUser = room.users.findIndex((element, index, array) => {
             if(element.socketID === socket.id){
                 return true;
             }else{
                 return false;
             }
         });
         
         if(findUser > -1){
             socket.leave(room.roomID);
            room.users.splice(findUser, 1);
             return room;
         }
     }
 }
 
 let getVideo = (req, res) =>{
     db.knoxClient.getFile(req, function(err, videoStream){
         if(err){
             console.log(err);
         }else{
             //var readableStream = fs.createReadStream(h.getVideo('https://s3.amazonaws.com/nerdlevels/'+ pject +'/' + cmpnt +'/' + vName));
                        /*videoStream.on('data', function(chunk){
                           data+=chunk; 
                        });*/
                        
                        videoStream.on('end', function(){
                           console.log("Video read end!"); 
                        });
         }
         return null;
     });
     //return db.knoxClient.get(req);
     
     //return 
 }
 
  function contains(a, obj) {
    var i = a.length;
    while (i--) {
        console.log(a[i] + " " + obj);
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
 
 let watchedVideo = (req, res) => {
     //Find user in DB
     //Check current watched videos to see if this is already there
     //Add video to watchedvideos
     db.userModel.findOne({'_id': req.user}, function(err, result){
         if(err != null){
             console.log(err);
         }else{
             if(result.watchedVideos != null && !contains(result.watchedVideos, req.video)){
                result.update({$push: {"watchedVideos": req.video}}, function(err, result){
                    if(err != null){
                         console.log(err);
                    }else{
                        console.log("Watched video Added!");
                    }
                });
            }else{
                 
             }
         }
             
         
     });
 }
 

 
 let unwatchVideo = (req, res) => {
     
 }
 
 module.exports = {
     route,
     findOne,
     createNewUser,
     findById,
     isAuthenticated,
     randomHex,
     findRoomByName,
     findRoomById,
     addUserToRoom,
     removeUserFromRoom,
     getVideo,
     watchedVideo,
     unwatchVideo
 }