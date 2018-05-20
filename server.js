// Dependencies
// =============================================================
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var server = require("http").createServer(app);
/*var http = require("http").Server(app);*/
var io = require("socket.io").listen(server);

var user = [];
var connections = [];


// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data-parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// ???????????????????????????????????????????????????????????????
app.use(methodOverride("_method"));

// Setup Handlebars
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
// =============================================================
app.use(express.static("./public/assets/html"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//Listen for connection and connect with chat
/*app.get("/", function(req, res) {
    res.sendFile(__dirname + "/client/index.html");
});*/


io.sockets.on("connection", function(socket) {
    connections.push(socket);
    console.log("Connected", connections.length);

    /*socket.on("chat message", function(msg) {
        io.emit("chat message", msg);
    });*/
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconected", connections.length)
});


/*app.use("/", routes);8*/
// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log("The Guild is connected on port " + port);
});