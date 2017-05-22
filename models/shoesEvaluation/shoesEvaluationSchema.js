/**
 * Created by ForeverW on 2017/5/15.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;


var ShoesEvaluationSchema=new mongoose.Schema({
    SECoverPicSrc:{type:String},
    SECoverTile:{type:String},
    SECoverContent:{type:String},
    SELabel:{type:Array},
    SECoverDate:{type:String},
    SEAdminName:{type:String},
    SEReleaseTime:{type:String},
    SEViews:{type:Number},
    SEContent:{type:Array},
    SEEditComments:{type:String}
});

module.exports=ShoesEvaluationSchema;