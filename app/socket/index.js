'use strict';
const h = require('../helpers');

module.exports = (io, app) =>{
    let allrooms = app.locals.chatrooms;
    
    //io.of means we are listening in to roomsliste pipeline.
    //.on assigns an event listener for an event called connection, when client connects in
    io.of('/roomslist').on('connection', socket  =>{
        //Event listener for event asked for in a room
        socket.on('getChatrooms', () =>{
            socket.emit('chatRoomsList', JSON.stringify(allrooms));
        });
        
        socket.on('createNewRoom', newRoomInput =>{
           if(!h.findRoomByName(allrooms, newRoomInput)){
               allrooms.push({
                  room: newRoomInput,
                   roomID: h.randomHex(),
                   users: []
               });
               
               //Emit an updated list to the creator
               socket.emit('chatRoomsList', JSON.stringify(allrooms));
               //Emit updated list to everyone
               socket.broadcast.emit('chatRoomsList', JSON.stringify(allrooms));
           } 
        });
    });
    
    io.of('/chatter').on('connection', socket =>{
       socket.on('join', data => {
            console.log("join?");
           let usersList = h.addUserToRoom(allrooms, data, socket);
           socket.broadcast.to(data.roomID).emit('updateUsersList', JSON.stringify(usersList.users));
           socket.emit('updateUsersList', JSON.stringify(usersList.users));
       })
        
        socket.on('disconnect', () => {
            let room = h.removeUserFromRoom(allrooms, socket);
            socket.broadcast.to(room.roomID).emit('updateUsersList', JSON.stringify(room.users));
        }); 
        
        socket.on('newMessage', data=>{
           socket.to(data.roomID).emit('inMessage', JSON.stringify(data)); 
        });
    });
   
}