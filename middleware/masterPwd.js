/**
 * Author:      Luxmithan Sukumar
 * File name:   masterPwd.js
 * Version:     1.0
 * Description: Middleware to check if master password is correct
 */

const BCRYPT = require('bcryptjs');

module.exports = (req, res, next) => {
  try {
    if (req.body.role == 'Lernende/r') {
      next();
    } else {
      // The masterpassword is stored here
      const MASTERPASSWORD =
        '$2y$10$UFW2jY0p2RCJMIK0NS9nSOQivkyMXMGIn1FhRcItoLjh8nO64csAS';
      BCRYPT.compare(
        req.body.masterPassword,
        MASTERPASSWORD,
        async (bErr, bResult) => {
          if (bErr) {
            return res.status(401).send({
              msg: 'Falsche Eingabe'
            });
          }
          if (bResult) {
            next();
          } else {
            return res.status(401).send({
              msg: 'Falsches Masterpasswort.'
            });
          }
        }
      );
    }
  } catch (err) {
    return res.status(401).send({
      msg: 'Falsche Eingabe'
    });
  }
};
