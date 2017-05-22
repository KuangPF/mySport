/**
 * Created by ForeverW on 2017/5/9.
 */

var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

/**
 * 用户收货地址模型
 */
var userAddressSchema= new mongoose.Schema({
    username:{type:String},
    userActualName:{type:String},
    usernameEmail:{type:String},

    //用户地址
    userAddress:{type:Array}
    /*cityOne:{type:String},
    cityTwo:{type:String},
    cityThree:{type:String},
    cityStreet:{type:String},
    addressDetail:{type:String},
    addressStatus:{type:Number}*/
});
module.exports = userAddressSchema;