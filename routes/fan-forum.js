/**
 * Created by ForeverW on 2017/5/15.
 */
var express = require('express');
var crypto = require('crypto');
var cookie = require('cookie-parser');
var router = express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var topicExchangeSchema=require('../models/topicExchange/topicExchange');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');

var app=express();
app.use(bodyParser.urlencoded({extended:false}));

router.get('/Competition-hall',function (req,res,next) {
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
        links:'https://www.zhibo8.cc/',
        linksName:'比赛大厅'
    };
    res.render('pageContinue',{
        username:usernameCookie,
        title:'比赛大厅',
        page:page
    })
});

router.get('/Football-match',function (req,res,next) {
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
        links:'http://www.yueqiu8.com/index.html',
        linksName:'约球比赛'
    };
    res.render('pageContinue',{
        username:usernameCookie,
        title:'约球比赛',
        page:page
    })
});

router.get('/Daily-communication',function (req,res,next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
    }

    var mongooseTopicExchangeModel=db.model('mongoose',topicExchangeSchema,'topicExchange');
    mongooseTopicExchangeModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var topicExchangeDetails=result;
            console.log(result);
            res.render('daily-communication',{
                username:usernameCookie,
                title:'日常交流',
                topicExchangeDetails:topicExchangeDetails
            })
        }
    })
});

router.post('/Daily-communication/topics-published',function (req,res,next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
    }
    var topicExchangeTitle=req.body.topicExchangeTitle;
    var topicExchangeContent=req.body.topicExchangeContent;
    var topicExchangeDate=new Date().toLocaleString();
    var topicExchangeUser=usernameCookie;
    var topicExchangeViews=1;
    var topicExchangeTalkNum=1;

    var topicExchangeDetail={
        topicExchangeTitle:topicExchangeTitle,
        topicExchangeContent:topicExchangeContent,
        topicExchangeUser:topicExchangeUser,
        topicExchangeDate:topicExchangeDate,
        topicExchangeViews:topicExchangeViews,
        topicExchangeTalkNum:topicExchangeTalkNum,
        topicExchangeCoverPicSrc01:'http://121.42.38.212:8080/mySport/clubJersey/La-Liga/Atletico01_01_01.jpg',
        topicExchangeCoverPicSrc02:'http://121.42.38.212:8080/mySport/clubJersey/La-Liga/Atletico01_02_01.jpg',
        topicExchangeCoverPicSrc03:'http://121.42.38.212:8080/mySport/clubJersey/La-Liga/Atletico01_03_01.jpg'
    };

    var mongooseTopicExchangeModel=db.model('mongoose',topicExchangeSchema,'topicExchange');
    mongooseTopicExchangeModel.create(topicExchangeDetail,function (err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/fan-forum/Daily-communication');
        }
    });
});
module.exports = router;