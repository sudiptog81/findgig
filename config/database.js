/* eslint-disable indent */
const Sequelize = require("sequelize");
const DATABASE_URL =
  "postgres://egnhigrhidfoav:71536e9fe3c7067e8d20217f2a35872c9275f24abadb82eaa30b9346d5f66ac3@ec2-54-227-249-201.compute-1.amazonaws.com:5432/d7c13re0lk2iu";
module.exports = new Sequelize(DATABASE_URL);
