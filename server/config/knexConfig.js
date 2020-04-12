/**
 * Author:      Luxmithan Sukumar
 * File name:   knexConfig.js
 * Version:     1.0
 * Description: Config file for Knex to access the database
 */

module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'webuser',
    password: 'gibbiX12345',
    database: 'dayplanner_db',
    timezone: 'UTC',
    dateStrings: true
  }
});
