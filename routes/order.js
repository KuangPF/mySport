/**
 * Created by ForeverW on 2017/4/13.
 */
/**
 * Created by ForeverW on 2017/4/13.
 */
var express = require('express');
var crypto = require('crypto');
var cookieParser = require('cookie-parser');
var router = express.Router();


var app=express();
app.use(cookieParser());
/* GET register page. */
router.get('/', function(req, res, next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        res.render('order', { username:usernameCookie} );
    } else {
        res.render('order', { username:''} );
    }

});

module.exports = router;
