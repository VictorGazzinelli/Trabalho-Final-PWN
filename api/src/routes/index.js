const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('blá');
  res.send('blá');
  // res.redirect('/auth/github');
});

// router.get('/auth/github/callback',
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   (req, res) => {
//     res.redirect('/');
//   }
// );

module.exports = router;