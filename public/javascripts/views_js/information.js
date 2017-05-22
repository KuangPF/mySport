/**
 * Created by ForeverW on 2017/4/14.
 */
/*
 * angular-route路由控制
 */

var app = angular.module('userInformationApp',["ngRoute"]);
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

}]),


    /*
     * 切换折叠指示图标
     */
    $(function () {
        $(".panel-heading").click(function (e) {
            $(this).find("span").toggleClass("glyphicon-chevron-down")
            $(this).find("span").toggleClass("glyphicon-chevron-up")
        })
    }),


    /*
     * li路由配置
     */
    $(function() {
        $(".myInfo_basic").click(function() {
            javascript:location.href='#/user/baseInfo'
        });
        $(".myInfo_adr").click(function() {
            javascript:location.href='#/user/deliver_address'
        });
        $(".myInfo_pwd").click(function() {
            javascript:location.href='#/security/changePassword'
        });
        $(".myInfo_phone").click(function() {
            javascript:location.href='#/security/bindPhone'
        });
        $(".myInfo_alipay").click(function() {
            javascript:location.href='#/account/alipay'
        });
        $(".myInfo_weibo").click(function() {
            javascript:location.href='#/account/weibo'
        });
        $(".myInfo_share").click(function() {
            javascript:location.href='#/account/share'
        });
        $(".myInfo_hbs").click(function() {
            javascript:location.href='#/evaluation/hbs'
        });
        $(".myInfo_nfo").click(function() {
            javascript:location.href='#/evaluation/nfo'
        });
        $(".myInfo_eg").click(function() {
            javascript:location.href='#/evaluation/grade'
        });
        $(".myInfo_lu_month").click(function() {
            javascript:location.href='#/lu/month'
        });
        $(".myInfo_lu_all").click(function() {
            javascript:location.href='#/lu/all'
        })
    });


/*
 * 导航栏切换
 */
$(function () {
    $(".list-group-item").each(function(index){
        $(this).click(function(){
            $(".list-group-item").removeClass("leftNavActive");
            $(".list-group-item").eq(index).addClass("leftNavActive");
        });
    });
});


/*
 * 基本信息
 */

/*日期选择器*/
function getDate() {
    $(function () {
        $('#datetimepicker').datetimepicker({
            format: 'yyyy-mm-dd hh:ii'
        });

        $(".form_date").datetimepicker({
            language:  'zh-CN',
            startDate:'',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0

        });
    });
}


/*
 * 收货地址
 */
/*城市选择器*/

function getCity() {
    $(function () {
        'use strict';
        var $citypicker1 = $('#city-picker1');

        $citypicker1.citypicker();

        var $citypicker2 = $('#city-picker2');

        $citypicker2.citypicker({
            province: '重庆市',
            city: '重庆市',
            district: '南岸区'
        });

        var $citypicker3 = $('#city-picker3');

        $('#reset').click(function () {
            $citypicker3.citypicker('reset');
        });

        $('#destroy').click(function () {
            $citypicker3.citypicker('destroy');
        });

    });
    $(function () {
        $('[data-toggle="city-picker"]').citypicker();
    });
}

/*
 * 修改登录密码
 */

/*获取验证码*/
function getVerificationCodeOne() {
    var validCode=true;
    var time=60;
    var code=$(".msgsOne");
    if (validCode) {
        validCode=false;
        var t=setInterval(function  () {
            code.addClass("disabled msgs_font msgs_clicked");
            code.removeClass("btn-primary");
            time--;
            code.html(time+"秒");
            if (time==0) {
                clearInterval(t);
                code.html("重新获取");
                validCode=true;
                code.removeClass("btn-primary disabled");
                code.addClass("btn-danger msgs_again");

            }
        },1000)
    }
}


/*
 *手机绑定
 */

/*折叠面板的边框*/
$(function () {
    var clickNum=0;
    $("#phoneBind_btn").click(function () {
        clickNum++;
        if(clickNum % 2==0) {
            $("#phoneBind").css("border","none");
        } else {
            $("#phoneBind").css("border","1px solid #ddd");
        }

    });

    $("#ModifyPhoneBinding_btn").click(function () {
        clickNum++;
        if(clickNum % 2==0) {
            $("#ModifyPhoneBinding").css("border","none");
        } else {
            $("#ModifyPhoneBinding").css("border","1px solid #ddd");
        }

    })
})
/*获取验证码*/
function getVerificationCodeTwo() {
    var validCode=true;
    var time=60;
    var code=$(".msgsTwo");
    if (validCode) {
        validCode=false;
        var t=setInterval(function  () {
            code.addClass("disabled msgs_font msgs_clicked");
            code.removeClass("btn-primary");
            time--;
            code.html(time+"秒");
            if (time==0) {
                clearInterval(t);
                code.html("重新获取");
                validCode=true;
                code.removeClass("btn-primary disabled");
                code.addClass("btn-danger msgs_again");

            }
        },1000)
    }
}
function getVerificationCodeThree() {
    var validCode=true;
    var time=60;
    var code=$(".msgsThree");
    if (validCode) {
        validCode=false;
        var t=setInterval(function  () {
            code.addClass("disabled msgs_font msgs_clicked");
            code.removeClass("btn-primary");
            time--;
            code.html(time+"秒");
            if (time==0) {
                clearInterval(t);
                code.html("重新获取");
                validCode=true;
                code.removeClass("btn-primary disabled");
                code.addClass("btn-danger msgs_again");

            }
        },1000)
    }
}
function getVerificationCodeFour() {
    var validCode=true;
    var time=60;
    var code=$(".msgsFour");
    if (validCode) {
        validCode=false;
        var t=setInterval(function  () {
            code.addClass("disabled msgs_font msgs_clicked");
            code.removeClass("btn-primary");
            time--;
            code.html(time+"秒");
            if (time==0) {
                clearInterval(t);
                code.html("重新获取");
                validCode=true;
                code.removeClass("btn-primary disabled");
                code.addClass("btn-danger msgs_again");

            }
        },1000)
    }
}

/*
 * 微博绑定
 */
function bindOtherWeibo() {
    $("#weibo_bind").hide();
    $("#weibo_bind_other").show();
}
/*
 * weiboBack()方法
 */
function weiboBack() {
    $(function () {
        $("#weibo_bind_other").hide();
        $("#weibo_bind").show();
    })
}

/*
 *分享绑定
 */

/*bindRenRen()*/
function bindRenRen() {
    $("#bind_renren").hide();
    $("#renren_info").show();
}

/*backShareBind()*/
function backReRenBind() {
    $("#renren_info").hide();
    $("#bind_renren").show();
}

/*bindRenRen()*/
function bindDouBan() {
    $("#bind_douban").hide();
    $("#douban_info").show();
}

/*backDouBanBind()*/
function backDouBanBind() {
    $("#douban_info").hide();
    $("#bind_douban").show();
}

/*
 *已填评价
 */

/*表格全选框*/
function getAllChecked(checkbox) {
    if(checkbox.checked){
        $(".checkList :checkbox").prop("checked", true);
    }else{
        $(".checkList :checkbox").prop("checked", false);
    }
}
/*单选*/
function getChecked(checkbox) {

    if(checkbox.checked) {
        $(".checkAll").prop("checked",true);
    } else {
        if($(".checkList :checkbox").checked) {
        } else {
            //TODO
            // 全部取消的情况
        }
    }
}

/*
 *未填评价
 */

function nfoClick() {
    $.getScript("../public/javascripts/jQuery/jquery.min.js");
    $.getScript("../public/stylesheets/select/js/bootstrap-select.js");
}
/*搜索函数*/
function nfoSearch() {
    $(function () {
        $("#nfo").show();
    })
}