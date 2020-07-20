const express = require('express');
const ensureAuthentication = require('../../utils').ensureAuthentication;

const router = express.Router();

router.get('/', ensureAuthentication, async (req, res) => {
    res.render('lists' , {user: req.user});
});

module.exports = router;