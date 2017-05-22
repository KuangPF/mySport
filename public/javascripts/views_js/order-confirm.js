/**
 * Created by ForeverW on 2017/4/14.
 */
/*收获地址选择*/
$(function () {
    $(".order-confirm-addr").click(function () {
        $(this).each(function () {
            if($(".order-confirm-addr").hasClass("address-select")) {
                $(".order-confirm-addr").removeClass("address-select");
                $(".order-confirm-addr").addClass("address-not-select");
                $(this).removeClass("address-not-select");
                $(this).addClass("address-select");
            } else {
                $(this).addClass("address-select");
            }
        })
    })
});