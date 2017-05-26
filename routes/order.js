/**
 * Created by ForeverW on 2017/4/13.
 */
var express = require('express');
var crypto = require('crypto');
var cookieParser = require('cookie-parser');
var router = express.Router();

var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var orderSchema=require('../models/order/orderSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');



var app=express();
app.use(cookieParser());
/* GET order page. */
router.get('/', function(req, res, next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
    }

    var mongooseOrderModel=db.model('mongoose',orderSchema,'order');
    mongooseOrderModel.find({username:usernameCookie},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var orderItemLists=result;
            res.render('order',{
                username:usernameCookie,
                title:'订单页面',
                orderItemLists:orderItemLists

            })
        }
    })

});

router.get('/delete/*',function (req,res,next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        var orderID=req.params[0];
        var mongooseOrderModel=db.model('mongoose',orderSchema,'order');
        mongooseOrderModel.remove({_id:orderID},function (err) {
            if(err) {
                console.log(err);
            } else {
                res.redirect('/order');
                res.end();
            }
        })
    } else {
        console.log('else')
    }
});

module.exports = router;
