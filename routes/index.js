var express = require('express');
var crypto = require('crypto');
var cookieParser = require('cookie-parser');
var router = express.Router();


var app=express();
app.use(cookieParser());
/* GET home page. */
router.get('/', function(req, res, next) {
    //判断是否存在Cookies
    /*res.render('index',{username:''})*/
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        res.render('index', { username:usernameCookie} );
    } else {
        res.render('index', { username:''} );
    }
});

module.exports = router;
