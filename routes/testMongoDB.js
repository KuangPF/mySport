/**
 * Created by ForeverW on 2017/4/30.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/nodeTest');

/*连接错误*/
db.on('error',function (error) {
    console.log(error);
});


/*Schema结构*/
var mongooseSchema=new mongoose.Schema({
    username:{type:String,default:'username'},
    title:{type:String},
    content:{type:String},
    time:{type:Date,default:Date.now},
    age:{type:Number}
});


/*添加Mongoose实例方法*/
mongooseSchema.methods.findbyusername=function(username,callback) {
    return this.model('mongoose').find({username:username},callback);
};

/*添加mongoose静态方法，静态方法在Model层就能使用*/
mongooseSchema.statics.findbytitle=function (title,callback) {
    return this.model('mongoose').find({title:title},callback);
};

//model
var mongooseModel=db.model('mongoose',mongooseSchema,'mySportUsers');

//增加记录，基于entity操作

var doc={username:'demo_username',title:'demo_title',content:'demo_title'};
var mongooseEntity=new mongooseModel(doc);
mongooseEntity.save(function(error) {
    if(error) {
        console.log(error)
    } else {
        console.log('save OK!');
    }
    db.close();
});

//查询
mongooseModel.findbytitle('demo_title',function (error,result) {
    if(error) {
        console.log(error);
    } else {
        for(var i=0;i<result.length;i++) {
            console.log(result[i]._id);
        }
    }
    db.close();
});


































