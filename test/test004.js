/**
 * Created by ForeverW on 2017/5/9.
 */

var mongoose=require('mongoose');
var q=require('q');
mongoose.Promise = global.Promise;
var userLoginSchema=require('../models/database/userLoginSchema');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/nodeTest');

var mongooseModel=db.model('mongoose',userLoginSchema,'mySportUsers001');
function getInfo() {
    var deferred = q.defer();
    mongooseModel.find({username:'testModel001'},function (err,result) {
        if(err) {
            console.log(err);
            deferred.reject(err);
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
}
getInfo().then(function(successData){
    console.log(successData);
},function(err){
    console.log(err);
});
db.close();
