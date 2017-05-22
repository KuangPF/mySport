/**
 * Created by ForeverW on 2017/4/28.
 */
var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var bodyParser=require('body-parser');
var multer = require('multer');

var app=express();
app.use(bodyParser.urlencoded({extended:false}));


/* GET register page. */
router.get('/', function(req, res) {
    res.cookie('usernameCookies','');
    res.redirect('/');
});


module.exports = router;