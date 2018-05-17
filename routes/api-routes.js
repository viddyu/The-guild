// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Apprentice = require("../models/apprentice.js");
var Mentor = require("../models/mentor.js");

// Routes
// =============================================================
module.exports = function(app) {

  // app.post("/api/mentor_submission", function(req, res) {
  //   Mentor.create({ ID: req.body.id, name: req.body.name })
  //   .then( () => return );
  // })

// Getting Mentors & Apprentices Data
// ========================================================
  
// Get all mentors
app.get("/api/all-mentors", function(req, res) {
  Mentor.findAll({}).then(function(results) {
    res.json(results);
  });
});

// Get all apprentices
app.get("/api/all-apprentices", function(req, res) {
  Apprentice.findAll({}).then(function(results) {
    res.json(results);
  });
});

// ========================================================

// Get a specific apprentice by their field
app.get("/api/:field", function(req, res) {
  Apprentice.findAll({
    where: {
      Field: req.params.field
    }
  }).then(function(results) {
    res.json(results);
  });
});

// Get a specific apprentice by their education
app.get("/api/:education", function(req, res) {
  Apprentice.findAll({
    where: {
      Field: req.params.field
    }
  }).then(function(results) {
    res.json(results);
  });
});

// Adding Mentors & Apprentices Data
// ========================================================

// Add a Mentor
app.post("/api/new-mentor", function(req, res) {
  console.log("Mentor Data:");
  console.log(req.body);
  Mentor.create({
    id: req.body.id,
    name: req.body.name,
    job: req.body.job,
    education: req.body.education
    projectDescription: req.body.projectDescription
  });
});

// Add an Apprentice
app.post("/api/new-apprentice", function(req, res) {
  console.log("Apprentice Data:");
  console.log(req.body);
  Apprentice.create({
    id: req.body.id,
    name: req.body.name,
    job: req.body.job,
    education: req.body.education
    descriptionOfSelf: req.body.descriptionOfSelf
  });
});

// Adding Mentors & Apprentices Data
// ========================================================

// Delete a Mentor
app.post("/api/delete", function(req, res) {
  console.log("Mentor Data:");
  console.log(req.body);
  Mentor.destroy({
    where: {
      id: req.body.id
    }
  });
});

// Delete an Apprentice
app.post("/api/delete", function(req, res) {
  console.log("Apprentice Data:");
  console.log(req.body);
  Apprentice.destroy({
    where: {
      id: req.body.id
    }
  });
});

// ========================================================

};
