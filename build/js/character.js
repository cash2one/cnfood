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
        var mySwiper = $('.swiper-container').swiper({
            autoplay: 3000,
            loop: true,
            pagination: '.pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: false
        });
        mypublic.cnfood.paginationHover(mySwiper);
    });
});