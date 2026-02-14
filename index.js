
var express = require('express');
var socket = require('socket.io');
var app = express();
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function(){
  console.log('listening to port ' + PORT);
});

// serve static files from current directory
app.use(express.static(__dirname));

// socket setup
var io = socket(server);
io.on('connection', function(socket){
  console.log('made socket connection', socket.id);

  // Escuchar mensajes del cliente
  socket.on('chat message', function(msg){
    console.log('received message from', socket.id, ':', msg);
    // Retransmitir a todos los clientes
    io.emit('chat message', msg);
    console.log('broadcasted message:', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected', socket.id);
  });
});