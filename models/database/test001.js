/**
 * Created by ForeverW on 2017/4/29.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');//；连接数据库

db.find()