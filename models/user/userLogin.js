/**
 * Created by ForeverW on 2017/4/29.
 */
var mongoose = require('mongoose');

var Schema=mongoose.Schema;
var userLoginSchema = new Schema({
    username:String,
    usernameEmail:String,
    password:String,
    booleanLogin:Number
});

module.exports = userLoginSchema;