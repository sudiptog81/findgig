/* eslint-disable indent */
const Sequelize = require("sequelize");
module.exports = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:123456@localhost/findgig",
  {
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
