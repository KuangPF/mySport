/**
 * Created by ForeverW on 2017/4/14.
 */
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