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
        paginationClickable: true,
        autoplayDisableOnInteraction: false
    });
    // 初始化轮播图左右箭头
    cnfood.initSwiperArrow(mySwiper);
    //初始化top滚动事件
    cnfood.fixedBox($('.fixed-wrap'), $('.news-l'));
    // 鼠标经过分页器换页
    cnfood.paginationHover(mySwiper);
    // 固定左侧新闻栏
    var fixedwrap = $('.fixed-wrap');
    cnfood.scrollDirection(function () {
        fixedwrap.css('top', '40px');
    }, function () {
        fixedwrap.css('top', '0');
    });
})(jQuery);