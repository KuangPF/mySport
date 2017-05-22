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
var clubJerseySchema=require('../models/database/clubJerseySchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');




/*ClubJersey/Premier-League路由处理*/
router.get('/Premier-League', function(req, res, next) {
    //判断Cookies
    var mongooseClubJerseyPremierLeagueModel=db.model('mongoose',clubJerseySchema,'clubJerseyPremierLeague');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseClubJerseyPremierLeagueModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Premier-League',
                items:items
            } );
        }
    });
});

/*ClubJersey/Bundesliga路由处理*/
router.get('/Bundesliga', function(req, res, next) {
    //判断Cookies
    var mongooseClubJerseyBundesligaModel=db.model('mongoose',clubJerseySchema,'clubJerseyBundesliga');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseClubJerseyBundesligaModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Bundesliga',
                items:items
            } );
        }
    });
});

/*ClubJersey/La-Liga路由处理*/
router.get('/La-Liga', function(req, res, next) {
    //判断Cookies
    var mongooseClubJerseyLaLigaModel=db.model('mongoose',clubJerseySchema,'clubJerseyLaLiga');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseClubJerseyLaLigaModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'La-Liga',
                items:items
            } );
        }
    });
});

/*ClubJersey/Serie-A路由处理*/
router.get('/Serie-A', function(req, res, next) {
    var mongooseClubJerseySerieAModel=db.model('mongoose',clubJerseySchema,'clubJerseySerieA');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseClubJerseySerieAModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'SerieA',
                items:items
            } );
        }
    });
});

/*ClubJersey/Ligue-1路由处理*/
router.get('/Ligue-1', function(req, res, next) {
    var mongooseClubJerseyLigue1Model=db.model('mongoose',clubJerseySchema,'clubJerseyLigue-1');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseClubJerseyLigue1Model.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'Ligue1',
                items:items
            } );
        }
    });
});

/*ClubJersey/CSL路由处理*/
router.get('/CSL', function(req, res, next) {
    var mongooseClubJerseyCSLModel=db.model('mongoose',clubJerseySchema,'clubJerseyCSL');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseClubJerseyCSLModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var items=result;
            res.render('items-list', {
                username:usernameCookie,
                jerseyTitle:'CSL',
                items:items
            } );
        }
    });
});

/*clubJersey/buy路由处理*/
router.get('/*', function(req, res, next) {
    var clubJerseyCollectionName;
    var clubJerseyURL=req.params[0].split('/');
    var itemSort=clubJerseyURL[0];
    var itemID=clubJerseyURL[2];
    if(itemSort=='PremierLeague') {
        clubJerseyCollectionName='clubJerseyPremierLeague'
    } else if(itemSort=='Bundesliga') {
        clubJerseyCollectionName='clubJerseyBundesliga'
    } else if(itemSort=='LaLiga') {
        clubJerseyCollectionName='clubJerseyLaLiga'
    } else if(itemSort=='SerieA') {
        clubJerseyCollectionName='clubJerseySerieA'
    } else if(itemSort=='Ligue-1') {
        clubJerseyCollectionName='clubJerseyLigue-1'
    } else if(itemSort=='CSL') {
        clubJerseyCollectionName='clubJerseyCSL'
    }

    //判断username是否存在
    if (req.headers.cookie == undefined) {
    } else {
        var Cookies = {};
        var mySportCookies = req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts = Cookie.split('=');
            Cookies[parts[0].trim()] = ( parts[1] || '' ).trim();
        });
        var usernameCookie = Cookies.usernameCookies;

    }
    var mongooseClubJerseyModel=db.model('mongoose',clubJerseySchema,clubJerseyCollectionName);
    mongooseClubJerseyModel.find({_id:itemID},function (err,result) {
        if (!err) {
            var item = result[0];
            var itemEvaluations = item.itemEvaluations;
            res.render('item', {
                username: usernameCookie,
                jerseyTitle: itemSort,
                size: item.itemSize,
                item: item,
                itemEvaluations: itemEvaluations,
                addShoppingCartSucceed:''
            });
        } else {
            console.log(err);
        }
    });
});
module.exports = router;