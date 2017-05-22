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
var shoesEvaluationSchema=require('../models/shoesEvaluation/shoesEvaluationSchema');
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

    var mongooseShoesEvaluationModel=db.model('mongoose',shoesEvaluationSchema,'shoesEvaluation');
    mongooseShoesEvaluationModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var SEItemLists=result;
            console.log(SEItemLists.SELabel);
            res.render('shoes-evaluation',{
                username:usernameCookie,
                title:'球鞋测评',
                SEItemLists:SEItemLists
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

    var SEDetailID=req.params[0];
    var mongooseShoesEvaluationModel=db.model('mongoose',shoesEvaluationSchema,'shoesEvaluation');
    mongooseShoesEvaluationModel.find({_id:SEDetailID},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var SEContent=result[0].SEContent;
            SEDetailInfo=result[0];
            console.log(SEContent);
            res.render('shoes-evaluation-detail',{
                username:usernameCookie,
                SEContent:SEContent,
                title:SEDetailInfo.SECoverTile,
                SEDetailInfo:SEDetailInfo
            })
        }
    });

});

module.exports = router;