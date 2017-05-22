/**
 * Created by ForeverW on 2017/5/10.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;


var shoppingCartSchema=new mongoose.Schema({
    username:{type:String},
    itemShopTitle:{type:String},
    itemSingleTitle:{type:String},
    itemSinglePicOneSrc01:{type:String},
    itemColor:{type:String},
    itemSize:{type:String},
    itemOriginalPrice:{type:Number},
    itemCurrentPrice:{type:Number},
    itemNumber:{type:Number},
    itemPrice:{type:Number},
    itemRootUrl:{type:String},
    itemSort:{type:String},
    itemUrlNum:{type:Number}
});

module.exports=shoppingCartSchema;