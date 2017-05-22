/**
 * Created by ForeverW on 2017/4/27.
 */
var app = angular.module("userInformationApp", ["ngRoute"], function(){

});
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when("/user/baseInfo",{
            templateUrl:"baseInfo.html"
        })
        .when("/user/deliver_address",{
            templateUrl:"deliver_address.html"
        })
        .when("/security/changePassword",{
            templateUrl:"changePassword.html"
        })
        .when("/security/bindPhone",{
            templateUrl:"bindPhone.html"
        })
        .when("/account/alipay",{
            templateUrl:"alipay.html"
        })
        .when("/account/weibo",{
            templateUrl:"weibo.html"
        })
        .when("/account/share",{
            templateUrl:"share.html"
        })
        .when("/evaluation/hbs",{
            templateUrl:"hbs.html"
        })
        .when("/evaluation/nfo",{
            templateUrl:"nfo.html"
        })
        .when("/evaluation/grade",{
            templateUrl:"grade.html"
        })
        .when("/lu/month",{
            templateUrl:"month.html"
        })
        .when("/lu/all",{
            templateUrl:"all.html"
        })
        .otherwise("/main")

}]),

app.controller("userInformationController", [ '$scope', function($scope){

}]);