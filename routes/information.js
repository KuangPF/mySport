/**
 * Created by ForeverW on 2017/4/13.
 */
var express = require('express');
var crypto = require('crypto');
var cookie = require('cookie-parser');
var router = express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var userInfoSchema=require('../models/user/userInfo');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');

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
        var mongooseUserInfoModel=db.model('mongoose',userInfoSchema,'userInfo');
        // 查询用户信息

        mongooseUserInfoModel.find({username:usernameCookie},function (err,result) {
            if(err) {
                console.log(err);
            } else {
                var userInfo=result[0];
                console.log(userInfo);
                res.render('information',{
                    username:usernameCookie,
                    userInfoUpdateSucceed:'',
                    userInfo:userInfo,
                    title:'用户信息'
                })
            }
        })
    } else {
        res.send('lskdfk')
    }
});


router.post('/save',function (req,res,next) {
    var Cookies={};
    var mySportCookies=req.headers.cookie;
    mySportCookies.split(';').forEach(function (Cookie) {
        var parts=Cookie.split('=');
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    var usernameCookie=Cookies.usernameCookies;
    var userNickName=req.body.userNickName;
    var userActualName=req.body.userActualName;
    var usernameIDNum=req.body.usernameIDNum;
    var usernameEmail=req.body.usernameEmail;
    var userSignature=req.body.userSignature;
    var userBirthDay=req.body.userBirthDay;

    var userInfoUpdate={
        userNickName:userNickName,
        userActualName:userActualName,
        usernameIDNum:usernameIDNum,
        usernameEmail:usernameEmail,
        userSignature:userSignature,
        userBirthDay:userBirthDay
    };
    console.log(userInfoUpdate);
    var mongooseUserInfoModel=db.model('mongoose',userInfoSchema,'userInfo');
    mongooseUserInfoModel.update({username:usernameCookie},userInfoUpdate,function (err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/information');
        }
    })

});

module.exports = router;
