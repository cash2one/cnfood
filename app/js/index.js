// (function ($) {

require.config({
　　　　paths:{
　　　　　　"jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
            "public":"public",
            "mCustomScrollbar":"../static/jquery.mCustomScrollbar.min",
            "swiper":"https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min"
　　　　},
        shim:{
            "swiper":{
                exports:"swiper"
            },
            "mCustomScrollbar":{
                exports:"mCustomScrollbar"
            }
        }
　　});


　　require(['jquery','public',"mCustomScrollbar","swiper"], function ($,mypublic,mCustomScrollbar,swiper) {
　　　　$(".content").mCustomScrollbar({
            theme: 'my-theme'
        });
        // ************首页左边栏滚动条显示*********************
        var content = $('.news-l');
        var fixedwrap = $('.fixed-wrap');
        $(document).on('mouseenter', content, function () {

        })
        // ********************************************************
        var mySwiper = new Swiper('.swiper-container',{
            autoplay: 4000,
            loop: true,
            pagination: '.pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: false
        });
        // 初始化轮播图左右箭头
        mypublic.cnfood.initSwiperArrow(mySwiper);
        //初始化top滚动事件
        mypublic.cnfood.fixedBox($('.fixed-wrap'), $('.news-l'));
        // 鼠标经过分页器换页
        mypublic.cnfood.paginationHover(mySwiper);
        // 固定左侧新闻栏
        var fixedwrap = $('.fixed-wrap')
        mypublic.cnfood.scrollDirection(function () {
            fixedwrap.css('top', '40px')
        }, function () {
            fixedwrap.css('top', '0')
        });
　　});

// })(jQuery);


