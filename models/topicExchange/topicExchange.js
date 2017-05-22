/**
 * Created by ForeverW on 2017/5/15.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;


var TopicExchangeSchema=new mongoose.Schema({
    topicExchangeTitle:{type:String},
    topicExchangeUser:{type:String},
    topicExchangeViews:{type:Number},
    topicExchangeTalkNum:{type:Number},
    topicExchangeDate:{type:String},
    topicExchangeContent:{type:String},
    topicExchangeCoverPicSrc01:{type:String},
    topicExchangeCoverPicSrc02:{type:String},
    topicExchangeCoverPicSrc03:{type:String}
});

module.exports=TopicExchangeSchema;