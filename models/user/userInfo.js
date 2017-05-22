/**
 * Created by ForeverW on 2017/5/9.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

/**
 * 用户模型
 */
var userInfoCshema= new mongoose.Schema({

    /*用户基本信息*/
    username:{type:String},
    userActualName:{type:String},
    usernameIDNum:{type:String},
    usernameEmail:{type:String},
    password:{type:String},
    booleanLogin:{type:Number},
    telephoneNum:{type:Number},
    userBirthDay:{type:String},
    userNickName:{type:String},
    userSignature:{type:String}

});
module.exports = userInfoCshema;