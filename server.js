/**
 * Author:      Luxmithan Sukumar
 * File name:   server.js
 * Version:     1.0
 * Description: Main file to start productive application
 */

const EXPRESS = require('express');
const FALLBACK = require('express-history-api-fallback');
const MORGAN = require('morgan');
const KNEX = require('./config/knexConfig');
//PORT can be defined by an external web host but is 80 by default
const PORT = process.env.PORT || 80;
const APP = EXPRESS();

//Logs with essential information are created through morgan
MORGAN.token('body', (req, res) => {
  return JSON.stringify(req.body);
});
APP.use(MORGAN(':method :url :body :status'));

APP.use(EXPRESS.json());

//Uses Endpoints from both files
APP.use('/api/users', require('./routes/user'));
APP.use('/api/goals', require('./routes/goal'));

//Defines root folder for webapp build
let root = `${__dirname}/client/dist`;
APP.use(EXPRESS.static(root));
APP.use(FALLBACK('index.html', { root }));

//Shows in CMD if app is running
APP.listen(PORT, console.log('Tagesplaner is running on port ', PORT));

//Shows in CMD if database connection is available
KNEX.raw('SELECT VERSION();')
  .then(function (res) {
    console.log('Database connection has been successfully established');
  })
  .catch(function (err) {
    console.error('\nDatabase connection failed\n', err.stack);
  });
