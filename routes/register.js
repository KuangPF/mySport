var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var bodyParser=require('body-parser');
var cookie = require('cookie-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var userRegisterSchema=require('../models/user/userLogin');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');


var app=express();

app.use(bodyParser.urlencoded({extended:false}));

/* GET register page. */
router.get('/', function(req, res, next) {
    res.render('register', { username: '' });
    next();
});
router.post('/', function(req, res) {
    var username=req.body.username;
    var usernameEmail=req.body.email;
    var password=req.body.password;
    console.log(username,usernameEmail,password);

    var registerInfo={
        username:username,
        usernameEmail:usernameEmail,
        password:password
    };

    var mongooseRegisterModel=db.model('mongoose',userRegisterSchema,'userLogin');
    mongooseRegisterModel.create(registerInfo,function (err) {
        if(err) {
            console.log(err);
        } else {
            res.cookie('usernameCookies',username,{ expires: new Date(Date.now() + 900000), httpOnly: true });
            setTimeout(function () {
                res.redirect('/register/register_succeed');
            },1000);

        }
    })
});

router.get('/register_succeed', function(req, res,next) {
    res.render('register-succeed',{
        username:''
    });
    next();
});

module.exports = router;
