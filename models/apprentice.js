// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Apprentice = sequelize.define("apprentice", {
    // The apprentice's ID
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    // The apprentice's name
    name: Sequelize.STRING,
    // The apprentice's field of work
    field: Sequelize.STRING,
    // The apprentice's job
    job: Sequelize.STRING,
    // The apprentice's educational background
    education: Sequelize.STRING,
    // The apprentice's project
    descriptionOfSelf: Sequelize.STRING
}, {
        timestamps: false
    });

// Syncs with DB
Apprentice.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Apprentice;