/* eslint-disable indent */
const Sequelize = require("sequelize");
module.exports = new Sequelize(
  "d7c13re0lk2iu",
  "egnhigrhidfoav",
  "71536e9fe3c7067e8d20217f2a35872c9275f24abadb82eaa30b9346d5f66ac3",
  {
    host: "ec2-54-227-249-201.compute-1.amazonaws.com",
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
