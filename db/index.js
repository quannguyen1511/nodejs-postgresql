const Sequelize = require("sequelize");
var config = require("./../config").postgres;
const sequelize = new Sequelize(
  //   "postgres://postgres:quan1511@localhost:5432/mytestdb"
  "postgres://" +
    config.user +
    ":" +
    config.password +
    config.host +
    "/" +
    config.database
);

module.exports = sequelize;
