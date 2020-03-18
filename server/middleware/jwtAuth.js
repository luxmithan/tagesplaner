/**
 * Author:      Luxmithan Sukumar
 * File name:   jwtAuth.js
 * Version:     1.0
 * Description: Middleware to check if access to endpoint is allowed
 */

const JWT = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const TOKEN = req.headers.authorization.split(' ')[1];
    const DECODED = JWT.verify(TOKEN, 'SECRETKEY');
    req.userData = DECODED;
    next();
  } catch (err) {
    return res.status(401).send({
      msg: 'Zugriff verweigert!'
    });
  }
} 