/**
 * Created by ForeverW on 2017/4/13.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var cookie = require('cookie-parser');
mongoose.Promise = global.Promise;
var userLoginSchema=require('../models/user/userLogin');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');

var app=express();
app.use(bodyParser.urlencoded({extended:false}));


/* GET login page. */
router.get('/',function (req,res) {
    res.cookie('loginTipCookie','');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        res.cookie('loginTipCookie','');
        var usernameCookie=Cookies.usernameCookies;
        var loginTipCookie=Cookies.loginTipCookie;
        res.render('login', {
            username:usernameCookie,
            loginTip:loginTipCookie
        } );
        res.cookie('loginTipCookie','');
    } else {
        res.render('login',{
            username:'',
            loginTip:'loginTipCookie'
        });

    }

});


router.post('/', function(req, res,next) {
    //清除缓存
    res.cookie('loginTipCookie','');

    var usernameReq=req.body.username;
    var passwordReq=req.body.password;

    var mongooseLoginModel=db.model('mongoose',userLoginSchema,'userLogin');

    mongooseLoginModel.find({
        $and: [
            {username: usernameReq}, {password:passwordReq}
        ]
    },function (err,result) {
        if(err) {
            console.log(err);
        } if (result.length==1) {
            //设置用户名的Cookies
            res.cookie('usernameCookies',usernameReq,{ expires: new Date(Date.now() + 90000000), httpOnly: true });
            req.username=usernameReq;
            res.redirect('/');
        } else {
            res.cookie('loginTipCookie','login again',{ expires: new Date(Date.now() + 1000), httpOnly: true });
            res.redirect('/login');
        }
    });
});

router.get('/password_forget', function(req, res) {
    res.render('password-forget', { username: '' });
});



module.exports = router;
