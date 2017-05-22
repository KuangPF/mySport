/**
 * Created by ForeverW on 2017/5/4.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;


var mongooseTestSchema=new mongoose.Schema({
    username:{type:String},
    size:{type:String}

});

module.exports=mongooseTestSchema;
