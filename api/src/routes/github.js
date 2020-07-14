var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET GitHub authentication */

router.get('/', passport.authenticate('github'));

router.get('/callback',
  passport.authenticate('github'),
  function (_, res) {
    // Pega informações do Objeto Usuario e retorna para quem fez o Login
    //res.redirect('/admin');
  });

module.exports = router;