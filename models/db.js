/**
 * Created by ForeverW on 2017/3/14.
 */
var MongoClient=require('mongodb').MongoClient;
var DB_Conn_STR='mongodb://localhost:27017/test';

/*//插入数据
var insertData=function (db,callback) {
    //连接到表
    var collection=db.collection('user');
    //插入数据
    var data=[{"username":'Kuang001',"password":'test001',"age":21,"email":"11111111@qq.com"}];
    collection.insert(data,function (err,result) {
        if(err) {
            console.log("Error:"+err);
            return;
        }
        callback(result);
    })
};

MongoClient.connect(DB_Conn_STR,function (err,db) {
    console.log("succeed");
    insertData(db,function (resulet) {
        console.log(resulet);
        db.close();
    })
});*/

//查询数据库
var selectData=function (db,callback) {
    //连接到表
    var collection=db.collection('user');
    //查询数据
    var whereStr={"age":21};
    collection.find(whereStr).toArray(function (err,result) {
        if(err) {
            console.log('Error:'+err);
            return;
        }
        callback(result);
    })
};

MongoClient.connect(DB_Conn_STR,function (err,db) {
    console.log("连接成功！");
    selectData(db,function (result) {
        console.log(result);
        for(var i=0;i<result.length;i++) {
            console.log(result[i].password)
        }
        db.close();
    })

});


/*//修改数据
var updataData=function (db,callback) {
    //连接到表
    var collection=db.collection('user');
    //更新数据
    var whereStr={"username":'Kuang001'};
    var updateStr={$set:{"email":'1111112@qq.com'}};
    collection.update(whereStr,updateStr,function (err,result) {
        if(err) {
            console.log("Error:"+err);
            return;
        }
        callback(result);
    })
};

MongoClient.connect(DB_Conn_STR,function (err,db) {
    console.log("succeed");
    updataData(db,function (result) {
        console.log(result);
        db.close();
    })
});*/


//删除数据
/*var deldata=function (db,callback) {
    var collection=db.collection('user');
    //删除数据
    var whereStr={"username":'Kuang001'};
    collection.remove(whereStr,function (err,result) {
        if(err) {
            console.log("Error"+err);
            return;
        }
        callback(result);
    })
};

MongoClient.connect(DB_Conn_STR,function (err,db) {
    console.log("succeed");
    deldata(db,function (result) {
        console.log(result);
        db.close();
    })
});*/















