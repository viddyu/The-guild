// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("connection.js");

// Creates a "Character" model that matches up with DB
var Apprentice = sequelize.define("apprentice", {
    // The apprentice's ID
    ID: Sequelize.INTEGER,
    // The apprentice's name
    Name: Sequelize.STRING,
    // The apprentice's job
    Job: Sequelize.STRING,
    // The apprentice's educational background
    Education: Sequelize.STRING,
    // The apprentice's project
    Project: Sequelize.STRING,
    // The apprentice's tasks on the given project
    Tasks: Sequelize.STRING
}, {
        timestamps: false
    });

// Syncs with DB
Apprentice.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Apprentice;