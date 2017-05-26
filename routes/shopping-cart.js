/**
 * Created by ForeverW on 2017/4/13.
 */
var express = require('express');
var crypto = require('crypto');
var cookie = require('cookie-parser');
var router = express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var q=require('q');
mongoose.Promise = global.Promise;
var shoppingCartSchema=require('../models/shoopingCart/shoppingCartSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');

/* GET shoppingCart page. */
router.get('/', function(req, res, next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

        var mongooseShoppingCartModel=db.model('mongoose',shoppingCartSchema,'shoppingCart');
        mongooseShoppingCartModel.find({username:usernameCookie},function (err,result) {
            if(err) {
                console.log(err);
            } else {
                var shoppingCartsAll=result;
                res.render('shopping-cart',{
                    username:usernameCookie,
                    title:'购物车',
                    shoppingCartsAll:shoppingCartsAll
                    }

                );
                console.log(shoppingCartsAll);
            }
        })
    } else {
        res.render('shopping-cart', { username: '' });
    }
});


/*/shoppingCart delete*/
router.get('/delete/*',function (req,res,next) {
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        var shoppingCardID=req.params[0];
        console.log(shoppingCardID);
        var mongooseShoppingCartModel=db.model('mongoose',shoppingCartSchema,'shoppingCart');
        mongooseShoppingCartModel.remove({_id:shoppingCardID},function (err) {
            if(err) {
                console.log(err);
            } else {
                res.redirect('/shopping-cart');
                res.end();
            }
        })
    } else {
        console.log('else')
    }
});
module.exports = router;
