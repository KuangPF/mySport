/**
 * Created by ForeverW on 2017/5/15.
 */
var express = require('express');
var crypto = require('crypto');
var cookie = require('cookie-parser');
var router = express.Router();

router.get('/',function (req,res,next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
    }

    var page={
        links:'http://www.kitstown.com/team',
        linksName:'球队队徽'
    };
    res.render('pageContinue',{
        username:usernameCookie,
        title:'球队队徽',
        page:page
    })
});

module.exports = router;