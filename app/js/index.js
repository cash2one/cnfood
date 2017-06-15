(function ($) {
    $(".content").mCustomScrollbar({
        theme: 'my-theme'
    });
    // ************首页左边栏滚动条显示*********************
    var content = $('.news-l');
    var fixedwrap = $('.fixed-wrap');
    $(document).on('mouseenter', content, function () {

    })
    // ********************************************************
    cnfood.topToggle($('.top'),$('.logo'));
    var mySwiper = $('.swiper-container').swiper({
        loop: true
    });
})(jQuery);


