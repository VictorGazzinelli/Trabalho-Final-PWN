const express = require('express');
const UserRepository = require('../respositories/UserRepository');

const router  = express.Router();

router.get('/', (req , res ) => {
    res.send("Hello World!");
});

module.exports = router;