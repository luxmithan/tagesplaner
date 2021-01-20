/**
 * Author:      Luxmithan Sukumar
 * File name:   knexConfig.js
 * Version:     1.0
 * Description: Config file for Knex to access the database
 */

module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: "phtfaw4p6a970uc0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ns8uhm83a23qcmzm",
    password: "h5bzgiupuu1jr6hj",
    database: "zdn09kahmiisx4ud",
    timezone: "UTC",
    dateStrings: true,
  },
});
