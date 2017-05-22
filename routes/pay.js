/**
 * Created by ForeverW on 2017/4/13.
 */
var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pay', { title: 'Express' });
});

module.exports = router;
