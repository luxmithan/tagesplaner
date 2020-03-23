/**
 * Author:      Luxmithan Sukumar
 * File name:   masterPwd.js
 * Version:     1.0
 * Description: Middleware to check if master password is correct
 */

const BCRYPT = require('bcryptjs')

module.exports = (req, res, next) => {
  try {
    if (req.body.role != "Lehrperson") {
      next();
    }
    const masterPassword = "$2y$10$6cszkU94vQVqQgLHYOqkVO/iWP5hy8F3n.ysUPEHYmLs6q3zC199W"
    BCRYPT.compare(req.body.masterPassword, masterPassword, async (bErr, bResult) => {
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
    })
  }
  catch {
    return res.status(401).send({
      msg: 'Falsche Eingabe'
    });
  }
}