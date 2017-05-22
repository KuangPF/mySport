/**
 * Created by ForeverW on 2017/4/27.
 */
app.controller("orderController", [ '$scope', function($scope){
    $scope.orderNavAllOrder='所有订单';
    $scope.orderNavPrePayment='代付款';
    $scope.orderNavPreDelivery='代发货';
    $scope.orderNavPreReecived='待收货';
    $scope.orderNavBtnSearch='搜索';


    /*OrderTableHeader*/
    $scope.orderDetailList=[
        {
            'sort':'商品'
        },
        {
            'sort':'单价'
        },
        {
            'sort':'数量'
        },
        {
            'sort':'商家操作'
        },
        {
            'sort':'实付款'
        },
        {
            'sort':'交易状态'
        },
        {
            'sort':'交易操作'
        }

    ]

}]);
