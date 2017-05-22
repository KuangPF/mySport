/**
 * Created by ForeverW on 2017/5/8.
 */
var express = require('express');
var crypto = require('crypto');
var cookie = require('cookie-parser');
var router = express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var q=require('q');
mongoose.Promise = global.Promise;
var itemSchema=require('../models/database/itemSchema');
var shoppingCartSchema=require('../models/shoopingCart/shoppingCartSchema');
var userAddressSchema=require('../models/userAddress/userAddress');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/mySport');


/*处理路由/item/.../order-confirm*/
router.get('/*/order-confirm', function(req, res, next) {
    var itemCollectionName;
    var itemOperationURL=req.params[0].split('/');
    var itemSort=itemOperationURL[0];
    var itemID=itemOperationURL[1];

    if(itemSort=='PremierLeague') {
        itemCollectionName='clubJerseyPremierLeague'
    } else if(itemSort=='Bundesliga') {
        itemCollectionName='clubJerseyBundesliga'
    } else if(itemSort=='LaLiga') {
        itemCollectionName='clubJerseyLaLiga'
    } else if(itemSort=='SerieA') {
        itemCollectionName='clubJerseySerieA'
    } else if(itemSort=='Ligue-1') {
        itemCollectionName='clubJerseyLigue-1'
    } else if(itemSort=='CSL') {
        itemCollectionName='clubJerseyCSL'
    }else if(itemSort=='Germany') {
        itemCollectionName='nationTeamJerseyGermany'
    } else if(itemSort=='Croatia') {
        itemCollectionName='nationTeamJerseyCroatia'
    } else if(itemSort=='Belgium') {
        itemCollectionName='nationTeamJerseyBelgium'
    } else if(itemSort=='Iceland') {
        itemCollectionName='nationTeamJerseyIceland'
    } else if(itemSort=='Chine') {
        itemCollectionName='nationTeamJerseyChina'
    } else if(itemSort=='Nike') {
        itemCollectionName='footballShoesNike'
    } else if(itemSort=='Adidas') {
        itemCollectionName='footballShoesAdidas'
    } else if(itemSort=='Umbro') {
        itemCollectionName='footballShoesUmbro'
    } else if(itemSort=='Mizuno') {
        itemCollectionName='footballShoesMizuno'
    } else if(itemSort=='Anta') {
        itemCollectionName='footballShoesAnta'
    } else if(itemSort=='Puma') {
        itemCollectionName='footballShoesPuma'
    } else if(itemSort=='contentRecommend') {
        itemCollectionName='contentRecommend'
    }else if(itemSort=='contentShoesAdidas') {
        itemCollectionName='contentShoesAdidas'
    }else if(itemSort=='contentShoesMizuno') {
        itemCollectionName='contentShoesMizuno'
    }else if(itemSort=='contentShoesNike') {
        itemCollectionName='contentShoesNike'
    }else if(itemSort=='contentTeamAtletico') {
        itemCollectionName='contentTeamAtletico'
    }else if(itemSort=='contentTeamDortmund') {
        itemCollectionName='contentTeamDortmund'
    }else if(itemSort=='contentTeamRealMadrid') {
        itemCollectionName='contentTeamRealMadrid'
    } else {
        itemCollectionName='footballBrand'
    }


    var mongooseItemModel=db.model('mongoose',itemSchema,itemCollectionName);
    var mongooseUserAddressModel=db.model('mongoose',userAddressSchema,'userAddress');
    //判断Cookies
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        if(usernameCookie==undefined) {
            console.log('login')
        } else {
            function getUserAddress() {
                var deferred=q.defer();
                mongooseUserAddressModel.find({username:usernameCookie},function (err,result) {
                    if(err) {
                        console.log(err);
                        deferred.reject(err);
                    } else {
                        deferred.resolve(result);
                    }
                });
                return deferred.promise;
            }
            getUserAddress().then(function (userAddress) {
                mongooseItemModel.find({_id:itemID},function (err,result) {
                    if(err) {
                        console.log(err);
                    } else {
                        var userInfo=userAddress[0];
                        var itemInfo=result[0];
                        console.log(userInfo.userAddress);
                        res.render('order-confirm',{
                            username:usernameCookie,
                            title:'确认订单',
                            customer:userInfo,
                            itemInfo:itemInfo,
                            userAddress:userInfo.userAddress
                        });

                    }
                });
            },function (err) {

            });

        }
    } else {
        res.send('no cookies');
    }

});


/*处理路由/item/.../pay*/
router.get('/*/pay', function(req, res, next) {
    var itemCollectionName;
    var itemOperationURL=req.params[0].split('/');
    var itemSort=itemOperationURL[0];
    var itemID=itemOperationURL[1];

    if(itemSort=='PremierLeague') {
        itemCollectionName='clubJerseyPremierLeague'
    } else if(itemSort=='Bundesliga') {
        itemCollectionName='clubJerseyBundesliga'
    } else if(itemSort=='LaLiga') {
        itemCollectionName='clubJerseyLaLiga'
    } else if(itemSort=='SerieA') {
        itemCollectionName='clubJerseySerieA'
    } else if(itemSort=='Ligue-1') {
        itemCollectionName='clubJerseyLigue-1'
    } else if(itemSort=='CSL') {
        itemCollectionName='clubJerseyCSL'
    }else if(itemSort=='Germany') {
        itemCollectionName='nationTeamJerseyGermany'
    } else if(itemSort=='Croatia') {
        itemCollectionName='nationTeamJerseyCroatia'
    } else if(itemSort=='Belgium') {
        itemCollectionName='nationTeamJerseyBelgium'
    } else if(itemSort=='Iceland') {
        itemCollectionName='nationTeamJerseyIceland'
    } else if(itemSort=='Chine') {
        itemCollectionName='nationTeamJerseyChina'
    } else if(itemSort=='Nike') {
        itemCollectionName='footballShoesNike'
    } else if(itemSort=='Adidas') {
        itemCollectionName='footballShoesAdidas'
    } else if(itemSort=='Umbro') {
        itemCollectionName='footballShoesUmbro'
    } else if(itemSort=='Mizuno') {
        itemCollectionName='footballShoesMizuno'
    } else if(itemSort=='Anta') {
        itemCollectionName='footballShoesAnta'
    } else if(itemSort=='Puma') {
        itemCollectionName='footballShoesPuma'
    }  else if(itemSort=='contentRecommend') {
        itemCollectionName='contentRecommend'
    }else if(itemSort=='contentShoesAdidas') {
        itemCollectionName='contentShoesAdidas'
    }else if(itemSort=='contentShoesMizuno') {
        itemCollectionName='contentShoesMizuno'
    }else if(itemSort=='contentShoesNike') {
        itemCollectionName='contentShoesNike'
    }else if(itemSort=='contentTeamAtletico') {
        itemCollectionName='contentTeamAtletico'
    }else if(itemSort=='contentTeamDortmund') {
        itemCollectionName='contentTeamDortmund'
    }else if(itemSort=='contentTeamRealMadrid') {
        itemCollectionName='contentTeamRealMadrid'
    }
    else {
        itemCollectionName='footballBrand'
    }

    var mongooseItemModel=db.model('mongoose',itemSchema,itemCollectionName);
    //判断cookies
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        if(usernameCookie==undefined) {
            res.send('请先登录！！');
        } else {
            mongooseItemModel.find({_id:itemID},function (err,result) {
                if(err) {
                    console.log(err);
                } else {
                    var itemInfo=result[0];
                    res.render('pay',{
                        username:usernameCookie,
                        itemInfo:itemInfo,
                        title:'订单支付'
                    })
                }
            });
        }
    } else {
        res.send('no cookies');
    }

});

/*处理路由/item/.../add-ShoppingCart*/
router.get('/*/add-ShoppingCart',function (req,res,next) {
    var itemCollectionName;
    var itemOperationURL=req.params[0].split('/');
    var itemSort=itemOperationURL[0];
    var itemID=itemOperationURL[1];

    if(itemSort=='PremierLeague') {
        itemCollectionName='clubJerseyPremierLeague'
    } else if(itemSort=='Bundesliga') {
        itemCollectionName='clubJerseyBundesliga'
    } else if(itemSort=='LaLiga') {
        itemCollectionName='clubJerseyLaLiga'
    } else if(itemSort=='SerieA') {
        itemCollectionName='clubJerseySerieA'
    } else if(itemSort=='Ligue-1') {
        itemCollectionName='clubJerseyLigue-1'
    } else if(itemSort=='CSL') {
        itemCollectionName='clubJerseyCSL'
    }else if(itemSort=='Germany') {
        itemCollectionName='nationTeamJerseyGermany'
    } else if(itemSort=='Croatia') {
        itemCollectionName='nationTeamJerseyCroatia'
    } else if(itemSort=='Belgium') {
        itemCollectionName='nationTeamJerseyBelgium'
    } else if(itemSort=='Iceland') {
        itemCollectionName='nationTeamJerseyIceland'
    } else if(itemSort=='Chine') {
        itemCollectionName='nationTeamJerseyChina'
    } else if(itemSort=='Nike') {
        itemCollectionName='footballShoesNike'
    } else if(itemSort=='Adidas') {
        itemCollectionName='footballShoesAdidas'
    } else if(itemSort=='Umbro') {
        itemCollectionName='footballShoesUmbro'
    } else if(itemSort=='Mizuno') {
        itemCollectionName='footballShoesMizuno'
    } else if(itemSort=='Anta') {
        itemCollectionName='footballShoesAnta'
    } else if(itemSort=='Puma') {
        itemCollectionName='footballShoesPuma'
    }  else if(itemSort=='contentRecommend') {
        itemCollectionName='contentRecommend'
    }else if(itemSort=='contentShoesAdidas') {
        itemCollectionName='contentShoesAdidas'
    }else if(itemSort=='contentShoesMizuno') {
        itemCollectionName='contentShoesMizuno'
    }else if(itemSort=='contentShoesNike') {
        itemCollectionName='contentShoesNike'
    }else if(itemSort=='contentTeamAtletico') {
        itemCollectionName='contentTeamAtletico'
    }else if(itemSort=='contentTeamDortmund') {
        itemCollectionName='contentTeamDortmund'
    }else if(itemSort=='contentTeamRealMadrid') {
        itemCollectionName='contentTeamRealMadrid'
    }
    else {
        itemCollectionName='footballBrand'
    }

    console.log(itemOperationURL,itemSort,itemID);
    var mongooseItemModel=db.model('mongoose',itemSchema,itemCollectionName);
    var mongooseShoppingCartModel=db.model('mongoose',shoppingCartSchema,'shoppingCart');
    //判断cookies
    if(req.headers.cookie!=undefined) {
        var Cookies={};
        var mySportCookies=req.headers.cookie;
        mySportCookies.split(';').forEach(function (Cookie) {
            var parts=Cookie.split('=');
            Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });
        var usernameCookie=Cookies.usernameCookies;
        if(usernameCookie==undefined) {
            console.log('请先登录')
        } else {
            function getUserAddress() {
                var deferred=q.defer();
                mongooseItemModel.find({_id:itemID},function (err,result) {
                    if(err) {
                        console.log(err);
                        deferred.reject(err);
                    } else {
                        deferred.resolve(result);
                    }
                });
                return deferred.promise;
            }
            getUserAddress().then(function (itemInfo) {
                var username=usernameCookie;
                var itemShopTitle=itemInfo[0].itemShopTitle;
                var itemSingleTitle=itemInfo[0].itemSingleTitle;
                var itemContentPicSrc=itemInfo[0].itemSinglePicOneSrc01;
                var itemColor='红色';
                var itemSize=itemInfo[0].itemSize[3];
                var itemOriginalPrice=itemInfo[0].itemPrice;
                var itemCurrentPrice=itemInfo[0].itemPrice;
                var itemNumber=1;
                var itemPrice=itemInfo[0].itemPrice;
                var itemRootUrl=itemInfo[0].itemRootUrl;
                var itemSort=itemInfo[0].itemSort;
                //var itemUrlNum=itemID;
                var shoppingCartInfo={
                    username:username,
                    itemShopTitle:itemShopTitle,
                    itemSingleTitle:itemSingleTitle,
                    itemSinglePicOneSrc01:itemContentPicSrc,
                    itemColor:itemColor,
                    itemSize:itemSize,
                    itemOriginalPrice:itemOriginalPrice,
                    itemCurrentPrice:itemCurrentPrice,
                    itemNumber:itemNumber,
                    itemPrice:itemPrice,
                    itemRootUrl:itemRootUrl,
                    itemSort:itemSort
                    //itemUrlNum:itemUrlNum
                };

                console.log(shoppingCartInfo);
                mongooseShoppingCartModel.create(shoppingCartInfo,function (err) {
                    if(err) {
                        console.log(err)
                    } else {
                        res.render('item', {
                            username:usernameCookie,
                            jerseyTitle:itemSort,
                            size:itemInfo[0].itemSize,
                            item:itemInfo[0],
                            itemEvaluations:itemInfo[0].itemEvaluations,
                            addShoppingCartSucceed:'ok'
                        } );
                    }
                });
            },function (err) {
                console.log(err);
            })
        }
    } else {
        res.send('no cookies');
    }
});

module.exports = router;