/**
 * Created by ForeverW on 2017/4/27.
 */
var app = angular.module("itemApp", [], function(){

});

app.controller("itemController", [ '$scope', function($scope){
    /*ItemPara*/
    $scope.itemParaTilte='NIKE耐克足球鞋2017春新款鬼牌2代AG钉人造草地足球鞋 844419-015';
    $scope.itemParaPriceLabel='价格:';
    $scope.itemParaPrice='￥529.00';
    $scope.itemParaPriceReduction='降价通知 ';
    $scope.itemParaPromotionLabel='促销';
    $scope.itemParaManJian='满减';
    $scope.itemParaManJianContent='满300.00减10.00，满600.00减20.00，满900.00减35.00';
    $scope.itemFreightLabel='运费';
    $scope.itemFreightsellerAddress='上海';
    $scope.itemFreightBuyerAddress='重庆';
    $scope.itemFreightExpressDeliveryPrice='0.00';
    $scope.itemDetailMonthSales=100;
    $scope.itemDetailCumulativeEvaluation=100;
    $scope.itemDetailIntegral=100;


    $scope.itemDetalInStock='库存221件';

}]);











































