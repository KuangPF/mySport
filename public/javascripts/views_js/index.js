/**
 * Created by ForeverW on 2017/4/14.
 */
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        items : 5,
        lazyLoad : true,
        autoPlay : true,
        navigation : true,
        navigationText :  true,
        pagination : false,
    });
});

//图片轮播
$(function () {
    $("#slider").responsiveSlides({
        auto: true,
        speed: 1000,
        namespace: "callbacks",
        pager: false,
        nav:true
    });
});