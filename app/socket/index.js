'use strict';
const h = require('../helpers');

module.exports = (io, app) =>{
    let allrooms = app.locals.chatrooms;
    
    //io.of means we are listening in to roomslist pipeline.
    //.on assigns an event listener for an event called connection, when client connects in
    io.of('/roomslist').on('connection', socket  =>{
        //Event listener for event asked for in a room
        socket.on('getChatrooms', () =>{
            socket.emit('chatRoomsList', JSON.stringify(allrooms));
        });
       
    });
   
}