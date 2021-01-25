/**
 * Author:      Luxmithan Sukumar
 * File name:   knexConfig.js
 * Version:     1.0
 * Description: Config file for Knex to access the database
 */

module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: "",
    user: "",
    password: "",
    database: "",
    timezone: "UTC",
    dateStrings: true,
  },
});
