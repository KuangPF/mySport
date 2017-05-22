/**
 * Created by ForeverW on 2017/4/30.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;


var userLoginSchema=new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    size:{type:Array},
    pingjia:{type:Array}

});

module.exports=userLoginSchema;
