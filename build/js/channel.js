"use strict";

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public",
        "swiper": "https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min"
    }
});

require(['jquery', 'public', "swiper"], function ($, mypublic, swiper) {
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
    });
});