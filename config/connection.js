// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("guild_db", "root", "", {
    host: "localhost",
    // Which database dialect to use, only give ONE
    dialect: "mysql",
    // Performance tool
    // Speeds up connection establishment; keeps particular number of connections in a "pool"
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Exports the connection for other files to use
module.exports = sequelize;