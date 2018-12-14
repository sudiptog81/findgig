/* eslint-disable no-unreachable */
const db = require("./config/database");

module.exports = function hello() {
  db.authenticate()
    .then(() => {
      return "Passed";
      db.close();
    })
    .catch(err => {
      return `Error: ${err}`;
    });
  db.close();
  return "Passed";
};
