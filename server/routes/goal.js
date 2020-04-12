/**
 * Author:      Luxmithan Sukumar
 * File name:   goal.js
 * Version:     1.0
 * Description: Script where the endpoints with operations on the daygoal table gets defined.
 */

const EXPRESS = require('express');
const KNEX = require('../config/knexConfig');
//Middleware for checking access permissions
//Gets used in first line of each protected endpoint
const JWTAUTH = require('../middleware/jwtAuth');

const GOAL = EXPRESS.Router();

//Creates goal and inserts it into DB
GOAL.post('/goal/create', JWTAUTH, async (req, res) => {
  let goal = req.body.goal;
  let description = req.body.description;
  let userFK = req.body.userFK;
  try {
    let results = await KNEX('daygoal').insert({ goal, description, userFK });
    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Selects goals of logged in user
GOAL.get('/goal/getForUser/:userFK', JWTAUTH, async (req, res) => {
  try {
    let results = await KNEX('daygoal').where('userFK', req.params.userFK);
    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Selects the created view from DB
GOAL.get('/goal/getAll', JWTAUTH, async (req, res) => {
  try {
    let results = await KNEX('daygoals');
    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Updates an existing goal on its values
GOAL.put('/goal/update', JWTAUTH, async (req, res) => {
  let id = req.body.id;
  let goal = req.body.goal;
  let description = req.body.description;
  let comment = req.body.comment;
  let finished = req.body.finished;
  try {
    let results = await KNEX('daygoal')
      .update({ id, goal, description, comment, finished })
      .where('id', req.body.id);
    res.json(results);
  } catch (err) {
    res.status(200).json(err);
  }
});

//Deletes goal entry from DB
GOAL.delete('/goal/delete/:id', JWTAUTH, async (req, res) => {
  try {
    let results = await KNEX('daygoal').where('id', req.params.id).del();
    res.json(results);
  } catch (err) {
    res.status(200).json(err);
  }
});

//Exports endpoints for them to be used in index.js
module.exports = GOAL;
