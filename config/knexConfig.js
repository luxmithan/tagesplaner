/**
 * Author:      Luxmithan Sukumar
 * File name:   knexConfig.js
 * Version:     1.0
 * Description: Config file for Knex to access the database
 */

module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: 'dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'vuwmoaub9w08dnzx',
    password: 'ozupaycjg6bzo3hp',
    database: 'fp5w7j7zad09op76',
    timezone: 'UTC',
    dateStrings: true
  }
});
