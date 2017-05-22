/**
 * Created by ForeverW on 2017/4/28.
 */
var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pay', { username: 'Express' });
});

module.exports = router;
