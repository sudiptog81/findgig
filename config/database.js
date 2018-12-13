/* eslint-disable indent */
const Sequelize = require("sequelize");
module.exports = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    },
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
