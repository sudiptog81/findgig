/* eslint-disable indent */
const Sequelize = require("sequelize");

// Change DB_name, DB_user, DB_pass and DB_host.
// Rename this file to database.js
module.exports = new Sequelize("DB_name", "DB_user", "DB_pass", {
  host: "DB_host",
  dialect: "postgres",
  // Uncomment if deploying
  // dialectOptions: {
  //   ssl: true
  // },
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
