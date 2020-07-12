const express = require('express');
const UserRepository = require('../respositories/UserRepository');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/auth/github');
});

//router.get('/login', function(req, res) {
//    res.render('index', { title: 'Meu APP Final Github' });
//  });


module.exports = router;

