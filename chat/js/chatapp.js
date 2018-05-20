/*var chat = require("chat"),
    room = chat.room();
    client.write("hello");*/

//Initializing socket, connection to server
var socket = io.connect("http://localhost:3000");
socket.on("connect", function(data) {
    socket.emit("join", "Hello server from client");
});

//Listener for "thread" event, which updates messages
socket.on("thread", function(data) {
    $("#thread").append("<li>" + data + "</li>");
});

//Prevents form from submitting and sends a message to server
$("form").submit(function() {
    var message = $("#message").val().trim();
    socket.emit("messages", message);
    this.reset();
    return false;
});