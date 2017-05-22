/**
 * Created by ForeverW on 2017/4/13.
 */
var express = require('express');
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.cookies) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        res.render('item', {
            username:usernameCookie,
            itemSlidesSrcOneB: 'images/single/zq1.jpg' ,itemSlidesSrcOne:'images/single/z1.jpg',
            itemSlidesSrcTwoB: 'images/single/zq2.jpg' ,itemSlidesSrcTwo:'images/single/z2.jpg',
            itemSlidesSrcThreeB: 'images/single/zq3.jpg' ,itemSlidesSrcThree:'images/single/z3.jpg',
            itemSlidesSrcFourB: 'images/single/zq4.jpg' ,itemSlidesSrcFour:'images/single/z4.jpg'
        } );
    } else {
        res.render('item', {
            username:'',
            itemSlidesSrcOneB: 'images/single/zq1.jpg' ,itemSlidesSrcOne:'images/single/z1.jpg',
            itemSlidesSrcTwoB: 'images/single/zq2.jpg' ,itemSlidesSrcTwo:'images/single/z2.jpg',
            itemSlidesSrcThreeB: 'images/single/zq3.jpg' ,itemSlidesSrcThree:'images/single/z3.jpg',
            itemSlidesSrcFourB: 'images/single/zq4.jpg' ,itemSlidesSrcFour:'images/single/z4.jpg'
        } );
    }
});

module.exports = router;
