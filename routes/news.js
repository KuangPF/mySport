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
var newsSchema=require('../models/news/newsSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');


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


    var mongooseNewsModel=db.model('mongoose',newsSchema,'news');
    mongooseNewsModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var newsItemLists=result;
            console.log(newsItemLists.newsLabel);
            res.render('news',{
                username:usernameCookie,
                title:'足球资讯',
                newsItemLists:newsItemLists
            })
        }
    })
});

router.get('/detail/*',function (req,res,next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
    }

    var newsDetailID=req.params[0];
    var mongooseNewsModel=db.model('mongoose',newsSchema,'news');
    mongooseNewsModel.find({_id:newsDetailID},function (err,result) {
        if(err) {
            console.log(err)
        } {
            var newsDetailInfo=result[0];
            var newsDetailContent=result[0].newsDetailContent;
            res.render('news-detail',{
                username:usernameCookie,
                title:newsDetailInfo.newsDetailTitle,
                newsDetailInfo:newsDetailInfo,
                newsDetailContent:newsDetailContent
            })
        }
    });

});

module.exports = router;