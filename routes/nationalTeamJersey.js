/**
 * Created by ForeverW on 2017/4/30.
 */
var express = require('express');
var crypto = require('crypto');
var cookie = require('cookie-parser');
var router = express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var nationTeamJerseySchema=require('../models/database/nationTeamJerseySchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');



/*NationalTeamJersey/Germany路由处理*/
router.get('/Germany',function (req,res,next) {
    var mongooseNationTeamJerseyGermanyModel=db.model('mongoose',nationTeamJerseySchema,'nationTeamJerseyGermany');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseNationTeamJerseyGermanyModel.find({},function (err,result) {
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

/*NationalTeamJersey/Croatia路由处理*/
router.get('/Croatia',function (req,res,next) {
    var mongooseNationTeamJerseyCroatiaModel=db.model('mongoose',nationTeamJerseySchema,'nationTeamJerseyCroatia');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseNationTeamJerseyCroatiaModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Croatia',
                items:items
            } );
        }
    });
});

/*NationalTeamJersey/Belgium路由处理*/
router.get('/Belgium',function (req,res,next) {
    var mongooseNationTeamJerseyBelgiumModel=db.model('mongoose',nationTeamJerseySchema,'nationTeamJerseyBelgium');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseNationTeamJerseyBelgiumModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Belgium',
                items:items
            } );
        }
    });
});

/*NationalTeamJersey/Iceland*/
router.get('/Iceland',function (req,res,next) {
    var mongooseNationTeamJerseyIcelandModel=db.model('mongoose',nationTeamJerseySchema,'nationTeamJerseyIceland');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseNationTeamJerseyIcelandModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Iceland',
                items:items
            } );
        }
    });
});

/*NationalTeamJersey/China路由处理*/
router.get('/China',function (req,res,next) {
    var mongooseNationTeamJerseyChinaModel=db.model('mongoose',nationTeamJerseySchema,'nationTeamJerseyChina');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseNationTeamJerseyChinaModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'China',
                items:items
            } );
        }
    });
});


router.get('/*', function(req, res, next) {
    var nationTeamJerseyCollectionName;
    var clubJerseyURL=req.params[0].split('/');
    var itemSort=clubJerseyURL[0];
    var itemID=clubJerseyURL[2];
    if(itemSort=='Germany') {
        nationTeamJerseyCollectionName='nationTeamJerseyGermany'
    } else if(itemSort=='Croatia') {
        nationTeamJerseyCollectionName='nationTeamJerseyCroatia'
    } else if(itemSort=='Belgium') {
        nationTeamJerseyCollectionName='nationTeamJerseyBelgium'
    } else if(itemSort=='Iceland') {
        nationTeamJerseyCollectionName='nationTeamJerseyIceland'
    } else if(itemSort=='Chine') {
        nationTeamJerseyCollectionName='nationTeamJerseyChina'
    }

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
    var mongooseNationTeamJerseyModel=db.model('mongoose',nationTeamJerseySchema,nationTeamJerseyCollectionName);
    mongooseNationTeamJerseyModel.find({_id:itemID},function (err,result) {
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