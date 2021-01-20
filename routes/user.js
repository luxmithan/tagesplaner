/**
 * Author:      Luxmithan Sukumar
 * File name:   user.js
 * Version:     1.0
 * Description: Script where the endpoints with operations on the user table gets defined.
 */

const EXPRESS = require("express");
const KNEX = require("../config/knexConfig");
//Middleware for checking access permissions
//Gets used in first line of each protected endpoint
const JWTAUTH = require("../middleware/jwtAuth");
const MASTERPWD = require("../middleware/masterPwd");
const BCRYPT = require("bcryptjs");
const JWT = require("jsonwebtoken");

const USER = EXPRESS.Router();

//Creates new user in DB
USER.post("/", MASTERPWD, async (req, res) => {
  //Checks if username already exists and gives error if true
  let results = await KNEX("user").where("username", req.body.username);
  if (results.length) {
    return res.status(409).send({
      msg: "Dieser Username ist schon vergeben.",
    });
  }
  //Hashes password and inserts into DB
  BCRYPT.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).send({
        msg: err,
      });
    } else {
      let results = await KNEX("user").insert({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role,
        grade: req.body.grade,
        password: hash,
      });
      return res.json(results);
    }
  });
});

//Login and creates Authentication Token
USER.post("/login", async (req, res) => {
  //Checks if user really exists
  let results = await KNEX("user").where("username", req.body.username);
  if (!results.length) {
    return res.status(401).send({
      msg: "Es befindet sich kein Account mit diesem Username.",
    });
  }
  let user = results[0];
  BCRYPT.compare(req.body.password, user.password, async (bErr, bResult) => {
    if (bErr) {
      return res.status(401).send({
        msg: "Falscher Username/Passwort",
      });
    }
    //Gives back Authentication Token for access to all endpoints
    if (bResult) {
      let token = JWT.sign(
        {
          username: user.username,
          userId: user.id,
        },
        "SECRETKEY",
        { expiresIn: "10h" }
      );
      return res.status(200).send({
        token: token,
        user: user,
      });
    } else {
      return res.status(401).send({
        msg: "Falsches Passwort.",
      });
    }
  });
});

//Changes password of logged in user
USER.put("/", JWTAUTH, async (req, res) => {
  let user = await KNEX("user")
    .where("id", req.body.id)
    .then((data) => data[0]);
  let passwordCorrect = await BCRYPT.compare(req.body.password, user.password);
  //Error if password is incorrect
  if (!passwordCorrect) {
    return res.status(401).send({
      msg: "Das momentane Passwort wurde falsch eingegeben.",
    });
  }
  //inserts new password
  try {
    let hash = await BCRYPT.hash(req.body.newPassword, 10);
    let results = await KNEX("user")
      .update({
        password: hash,
      })
      .where("id", req.body.id);
    res.json(results);
  } catch (err) {
    res.status(200).json(err);
  }
});

//Deletes logged in user
USER.delete("/:id", JWTAUTH, async (req, res) => {
  try {
    let results = await KNEX("user").where("id", req.params.id).del();
    res.json(results);
  } catch (err) {
    res.status(200).json(err);
  }
});

//Exports endpoints for them to be used in index.js
module.exports = USER;
