// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("connection.js");

// Creates a "Character" model that matches up with DB
var Mentor = sequelize.define("mentor", {
    // The mentor's ID
    ID: Sequelize.INTEGER,
    // The mentor's name
    Name: Sequelize.STRING,
    // The mentor's job
    Job: Sequelize.STRING,
    // The mentor's educational background
    Education: Sequelize.STRING,
    // The mentor's project
    Project: Sequelize.STRING
}, {
        timestamps: false
    });

// Syncs with DB
Mentor.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Mentor;