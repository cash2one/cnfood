'use strict';

(function ($) {
    $(".content").mCustomScrollbar({
        theme: 'my-theme'
    });
    // ************首页左边栏滚动条显示*********************
    var content = $('.news-l');
    var fixedwrap = $('.fixed-wrap');
    $(document).on('mouseenter', content, function () {}
    // ********************************************************
    );var mySwiper = $('.swiper-container').swiper({
        autoplay: 4000,
        loop: true,
        pagination: '.pagination',
        autoplayDisableOnInteraction: false
    });
    // 初始化轮播图左右箭头
    cnfood.initSwiperArrow(mySwiper);
    //初始化top滚动事件
    cnfood.fixedBox($('.news-l'));
    // 鼠标经过分页器换页
    cnfood.paginationHover(mySwiper);
})(jQuery);