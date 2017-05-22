/**
 * Created by ForeverW on 2017/4/14.
 */
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
});

/*尺码选择*/
$(function () {
    $(".shoe-size-num li").click(function () {
        $(this).each(function (index) {
            if($(".shoe-size-num li").hasClass("selected")) {
                $(".shoe-size-num li").removeClass("selected");
                $(this).addClass("selected");
            } else {
                $(this).addClass("selected");
            }
        })
    })
})