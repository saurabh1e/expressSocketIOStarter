module.exports = function(io) {
    var express = require('express');
    var router = express.Router();

    io.on('connection', function (socket) {
        io.emit('connected');
        socket.on('join', function (msg) {
            socket.join(msg['room']);
            console.log(msg, socket.rooms);
            socket.emit('room joined', socket.rooms);

        });
        socket.on('disconnect', function (msg) {
            socket.disconnect(true);
            socket.leaveAll();
            console.log(msg);
        });
        socket.on('connected', function(msg) {
            socket.emit('connected');
            console.log(msg);
        });
        socket.on('reconnecting', function(msg) {
            socket.emit('reconnecting');
            console.log(msg);
        });


    });
    return router;
};