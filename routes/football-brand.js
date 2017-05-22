/**
 * Created by ForeverW on 2017/5/4.
 */
var express = require('express');
var crypto = require('crypto');
var cookie = require('cookie-parser');
var router = express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var footballBrandSchema=require('../models/database/footballBrandSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');



/*football-brand路由处理*/
router.get('/',function (req,res,next) {
    var mongooseFootballBrandModel=db.model('mongoose',footballBrandSchema,'footballBrand');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseFootballBrandModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Germany',
                items:items
            } );
        }
    });
});

/*football-brand/../buy路由处理*/
router.get('/*', function(req, res, next) {
    console.log("brand")
    var clubJerseyURL=req.params[0].split('/');
    var itemSort=clubJerseyURL[0];
    var itemID=clubJerseyURL[2];

    //判断username是否存在
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    var mongooseFootballBrandModel=db.model('mongoose',footballBrandSchema,'footballBrand');
    mongooseFootballBrandModel.find({_id:itemID},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:itemSort,
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});

module.exports=router;
