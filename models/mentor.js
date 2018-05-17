// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Mentor = sequelize.define("mentor", {
    // The mentor's ID
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    // The mentor's name
    name: Sequelize.STRING,
    // The mentor's job
    job: Sequelize.STRING,
    // The mentor's educational background
    education: Sequelize.STRING,
    // The mentor's project
    projectDescription: Sequelize.STRING
}, {
        timestamps: false
    });

// Syncs with DB
Mentor.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Mentor;