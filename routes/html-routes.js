// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads main.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html.layout/main.html"));
  });

  // mentor route loads the mentor.html page
  app.get("/mentors", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html.layout/mentor.html"));
  });

  // apprentice route loads the apprentice.html page
  app.get("/apprentices", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html.layout/apprentice.html"));
  });
};
