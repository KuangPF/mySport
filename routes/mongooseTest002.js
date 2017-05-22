/**
 * Created by ForeverW on 2017/5/5.
 */
/**
 * Created by ForeverW on 2017/4/30.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var userLoginSchema=require('../models/database/userLoginSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/nodeTest');

/*连接错误*/
db.on('error',function (error) {
    console.log(error);
});

/*var mongooseSchema=new mongoose.Schema({
 username:{type:String},
 password:{type:String}

 });*/

var mongooseModel=db.model('mongoose',userLoginSchema,'mongooseTest002');
var doc={username:'testModel001',password:'12345678'};

//新增
/*mongooseModel.create(doc,function (err) {
 if(err) {
 console.log(err);
 } else {
 console.log('save OK!');
 }
 db.close();
 });*/

//查询
/*var username='testModel001';
var password=1234567;
mongooseModel.find({
    $and: [
        {username: username}, {password:password}
    ]
},function (err,result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result[0].size.length);
    }
});*/

mongooseModel.find({},function (err,result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result[0].pingjia[0].name);
    }
});

//修改
/*
 mongooseModel.update({username:'testModel001'},{username:'testModel002'},function (err) {
 if(err) {
 console.log(err);
 } else {
 console.log("update OK!");
 }
 });*/

//删除
/*mongooseModel.remove({username:'testModel001'},function (err) {
 if(err) {
 console.log(err);
 } else {
 console.log('remove Succeed!');
 }
 });*/
