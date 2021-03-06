/**
 * Created by ForeverW on 2017/5/9.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;


var itemSchema=new mongoose.Schema({
    itemContentPicSrc:{type:String},
    itemRootUrl:{type:String},
    itemSort:{type:String},
    itemPrice:{type:Number},
    itemBuyNum:{type:String},
    itemTitle:{type:String},
    itemShopTitle:{type:String},
    itemSingleTitle:{type:String},
    itemSize:{type:Array},
    itemSinglePicOneSrc01:{type:String},
    itemSinglePicOneSrc02:{type:String},
    itemSinglePicTwoSrc01:{type:String},
    itemSinglePicTwoSrc02:{type:String},
    itemSinglePicThreeSrc01:{type:String},
    itemSinglePicThreeSrc02:{type:String},
    itemSinglePicFourSrc01:{type:String},
    itemSinglePicFourSrc02:{type:String},
    itemEvaluations:{type:Array}
});

module.exports=itemSchema;