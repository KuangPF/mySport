/**
 * Created by ForeverW on 2017/4/14.
 */
/*导航栏*/

/*导航栏*/
$(function () {
    $("li").each(function(index){
        $(this).click(function(){
            $("li").removeClass("active");
            $("li").eq(index).addClass("active");
        });
    });
});

/*路由控制*/
var app = angular.module('shoppingCartApp',["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when("/all-shopping",{
            templateUrl:"shoppingCart_all.html",
            controller:"show1"
        })
        .when("/price-reduction",{
            templateUrl:"shoppingCart_price-reduction.html",
            controller:"show2"
        })
        .when("/stock-tight",{
            templateUrl:"shoppingCart_stock-tight.html",
            controller:"show3"
        })
        .otherwise("/all-shopping")

}]);

/*购物车物品数量增加*/
function itemAmountPlus() {
    var t=$("input[ name='itemAmount']");
    var singlePrice=parseFloat($(".singlePrice").text());
    var singleTotalPrice=parseFloat($(".singleTotalPrice").text());
    if((parseInt(t.val()))>=0) {
        $(".numMinus").removeClass("disabled");
        t.val(parseInt(t.val())+1);
        var currentSingleTotalPrice=singleTotalPrice+singlePrice;
        $(".singleTotalPrice").text(currentSingleTotalPrice);
    } else {
        t.val(parseInt(t.val())+1)
    }
}
/*购物车物品数量减少*/
function iteAmountMinus() {
    var t=$("input[ name='itemAmount']");
    var singlePrice=parseFloat($(".singlePrice").text());
    var singleTotalPrice=parseFloat($(".singleTotalPrice").text());
    if((parseInt(t.val())-1)<=0) {
        $(".numMinus").addClass("disabled");
        t.val(0);
        $(".singleTotalPrice").text(0)
    } else {
        t.val(parseInt(t.val())-1);
        var currentSinglePrice=singleTotalPrice-singlePrice;
        $(".singleTotalPrice").text(currentSinglePrice);
    }
}


/*模态框(删除)*/
function deleteShoppingCart(shoppingCartID) {
    self.location.href='/shopping-cart/delete/'+shoppingCartID;
}

/*单个购物车checkbox*/
function getShoppingCartChecked(checkbox) {
    if(checkbox.checked){
        var totalPrice=parseFloat($(".totalPrice").text());
        var singleTotalPrice=parseFloat($(".singleTotalPrice").text());
        var currentTotalPrice=totalPrice+singleTotalPrice;
        $(".totalPrice").text(currentTotalPrice);
    } else {
        var totalPrice=parseFloat($(".totalPrice-top").text());
        var singleTotalPrice=parseFloat($(".singleTotalPrice").text());
        var currentTotalPrice=totalPrice-singleTotalPrice;
        $(".totalPrice").text(currentTotalPrice);
    }
}

