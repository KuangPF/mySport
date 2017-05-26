/**
 * Created by ForeverW on 2017/4/14.
 */
/*
 * 导航栏切换
 */
$(function () {
    $("li").each(function(index){
        $(this).click(function(){
            $("li").removeClass("active");
            $("li").eq(index).addClass("active");
        });
    });
});

/*
 * 路由控制
 */
var app = angular.module('myAppOrder',["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when("/all-order",{
            templateUrl:"order_all.html",
            controller:"show1"
        })
        .when("/pre-payment",{
            templateUrl:"order_pre-payment.html",
            controller:"show2"
        })
        .when("/pre-delivery",{
            templateUrl:"order_pre-delivery.html",
            controller:"show3"
        })
        .when("/pre-received",{
            templateUrl:"order_pre-received.html",
            controller:"show3"
        })
        .when("/be-evaluated",{
            templateUrl:"order_be-evaluated.html",
            controller:"show3"
        })
        .otherwise("/all-order")

}]);

/*
 * 提示
 */
function orderTip() {
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
}

/*
 *分页
 */
function fy() {
    $(function () {
        $(".fy").each(function(index){
            $(this).click(function(){
                $(".fy").removeClass("active");
                $(".fy").eq(index).addClass("active");
            });
        });
    });
}

/*
* 删除订单
*/

function deleteOrder(orderID) {
    self.location.href='/order/delete/'+orderID;
}