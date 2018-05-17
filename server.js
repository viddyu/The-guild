// Dependencies
// =============================================================
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

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
app.use(express.static(process.cwd() + "./views/html.layout"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


/*app.use("/", routes);8*/
// Starts the server to begin listening
// =============================================================
app.listen(port, function(){
	console.log("The Guild is connected on port " + port);
});