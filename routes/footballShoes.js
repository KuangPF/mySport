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
var footballShoesSchema=require('../models/database/footballShoesSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');


/*NationalTeamJersey/Germany路由处理*/
router.get('/Germany',function (req,res,next) {

});

/*/footballShoes/Nike*/
router.get('/Nike',function (req,res,next) {
    var mongooseFootballShoesNikeModel=db.model('mongoose',footballShoesSchema,'footballShoesNike');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseFootballShoesNikeModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Nike',
                items:items
            } );
        }
    });
});

/*/footballShoes/Adidas路由处理*/
router.get('/Adidas',function (req,res,next) {
    var mongooseFootballShoesAdidasModel=db.model('mongoose',footballShoesSchema,'footballShoesAdidas');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseFootballShoesAdidasModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Adidas',
                items:items
            } );
        }
    });
});

/*/footballShoes/Umbro*/
router.get('/Umbro',function (req,res,next) {
    var mongooseFootballShoesUmbroModel=db.model('mongoose',footballShoesSchema,'footballShoesUmbro');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseFootballShoesUmbroModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Umbro',
                items:items
            } );
        }
    });
});

/*/footballShoes/Mizuno*/
router.get('/Mizuno',function (req,res,next) {
    var mongooseFootballShoesMizunoModel=db.model('mongoose',footballShoesSchema,'footballShoesMizuno');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseFootballShoesMizunoModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Mizuno',
                items:items
            } );
        }
    });
});

/*/footballShoes/Anta*/
router.get('/Anta',function (req,res,next) {
    var mongooseFootballShoesAntaModel=db.model('mongoose',footballShoesSchema,'footballShoesAnta');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseFootballShoesAntaModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Anta',
                items:items
            } );
        }
    });
});

/*/footballShoes/Puma*/
router.get('/Puma',function (req,res,next) {
    var mongooseFootballShoesPumaModel=db.model('mongoose',footballShoesSchema,'footballShoesPuma');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseFootballShoesPumaModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Puma',
                items:items
            } );
        }
    });
});


/*footballShoes/buy路由处理*/
router.get('/*', function(req, res, next) {
    console.log('buy');
    var footballShoesCollectionName;
    var clubJerseyURL=req.params[0].split('/');
    var itemSort=clubJerseyURL[0];
    var itemID=clubJerseyURL[2];
    if(itemSort=='Nike') {
        footballShoesCollectionName='footballShoesNike'
    } else if(itemSort=='Adidas') {
        footballShoesCollectionName='footballShoesAdidas'
    } else if(itemSort=='Umbro') {
        footballShoesCollectionName='footballShoesUmbro'
    } else if(itemSort=='Mizuno') {
        footballShoesCollectionName='footballShoesMizuno'
    } else if(itemSort=='Anta') {
        footballShoesCollectionName='footballShoesAnta'
    } else if(itemSort=='Puma') {
        footballShoesCollectionName='footballShoesPuma'
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
    var mongooseFootballShoesModel=db.model('mongoose',footballShoesSchema,footballShoesCollectionName);
    mongooseFootballShoesModel.find({_id:itemID},function (err,result) {
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