"use strict";

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public",
        "swiper": "https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min",
        "jqthumb": "../static/jqthumb.min",
        "common": "common",
        "html5shiv": "https://cdn.bootcss.com/html5shiv/r29/html5.min"
    },
    shim: {
        "jqthumb": {
            deps: ["jquery"]
        }
    }
});

require(['jquery', 'public', "swiper", "jqthumb", "common", "html5shiv"], function ($, mypublic, swiper) {
    $(function () {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 3000,
            loop: true,
            pagination: '.pagination',
            autoplayDisableOnInteraction: false,
            paginationClickable: true
        });
        // 初始化轮播图左右箭头
        mypublic.cnfood.initSwiperArrow(mySwiper);
        // 鼠标经过分页器换页
        mypublic.cnfood.paginationHover(mySwiper);
        //调整图片
        mypublic.cnfood.jqthumb_img();
    });
});