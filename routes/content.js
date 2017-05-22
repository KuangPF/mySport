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
var contentsSchema=require('../models/database/contentsSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');


/*content/recommend路由处理*/
router.get('/recommend', function(req, res, next) {
    //判断Cookies
    var mongooseContentRecommendModel=db.model('mongoose',contentsSchema,'contentRecommend');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseContentRecommendModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:'recommend',
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});


/*content/teamDortmund路由处理*/
router.get('/teamDortmund', function(req, res, next) {
    //判断Cookies
    var mongooseContentTeamDortmundModel=db.model('mongoose',contentsSchema,'contentTeamDortmund');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseContentTeamDortmundModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:'Dortmund',
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});


/*content/teamRealMadrid路由处理*/
router.get('/teamRealMadrid', function(req, res, next) {
    //判断Cookies
    var mongooseContentTeamRealMadridModel=db.model('mongoose',contentsSchema,'contentTeamRealMadrid');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseContentTeamRealMadridModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:'RealMadrid',
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});


/*content/teamAtletico路由处理*/
router.get('/teamAtletico', function(req, res, next) {
    //判断Cookies
    var mongooseContentTeamAtleticoModel=db.model('mongoose',contentsSchema,'contentTeamAtletico');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseContentTeamAtleticoModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:'Atletico',
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});

/*content/shoesNike路由处理*/
router.get('/shoesNike', function(req, res, next) {
    //判断Cookies
    var mongooseContentShoseNikeModel=db.model('mongoose',contentsSchema,'contentShoesNike');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseContentShoseNikeModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:'Nike',
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});

/*content/shoesAdidas路由处理*/
router.get('/shoesAdidas', function(req, res, next) {
    //判断Cookies
    var mongooseContentShoesAdidasModel=db.model('mongoose',contentsSchema,'contentShoesAdidas');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseContentShoesAdidasModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:'Adidas',
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});

/*content/shoesMizuno路由处理*/
router.get('/shoesMizuno', function(req, res, next) {
    //判断Cookies
    var mongooseContentShoesMizunoModel=db.model('mongoose',contentsSchema,'contentShoesMizuno');
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;

    }
    mongooseContentShoesMizunoModel.find({},function (err,result) {
        if(err) {
            console.log(err);
        } else {
            var item=result[0];
            var itemEvaluations=item.itemEvaluations;
            res.render('item', {
                username:usernameCookie,
                jerseyTitle:'Mizuno',
                size:item.itemSize,
                item:item,
                itemEvaluations:itemEvaluations,
                addShoppingCartSucceed:''
            } );
        }
    });
});

router.get('/buy',function (req,res,next) {
   //
});
module.exports=router;