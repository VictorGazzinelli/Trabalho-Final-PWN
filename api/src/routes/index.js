const express = require('express');
const UserRepository = require('../respositories/UserRepository');
var passport = require('passport');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/auth/github');
});

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://localhost:3001/');
  }
);

module.exports = router;

