// (function ($) {

require.config({
　　　　paths:{
　　　　　　"jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
            "public":"public",
            "mCustomScrollbar":"https://cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.concat.min",
            "swiper":"https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min",
            "jqthumb":"../static/jqthumb.min",
            "common":"common",
            "html5shiv":"https://cdn.bootcss.com/html5shiv/r29/html5.min"
　　　　},
        shim:{
            "swiper":{
                exports:"swiper"
            },
            "mCustomScrollbar":{
                exports:"mCustomScrollbar",
                deps:["jquery"]
            },
            "jqthumb":{
                deps:["jquery"]
            }
        }
　　});


　　require(['jquery','public',"mCustomScrollbar","swiper","jqthumb","common","html5shiv"], function ($,mypublic,mCustomScrollbar,swiper,common) {

        
　　　　$(".content").mCustomScrollbar({
            theme: 'my-theme',
            autoHideScrollbar: true,
            mouseWheel:{ 
                enable:true
            }
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
        //文章切换ajax

        $('.news-tab').find('li').click(function(){
            var index = $(this).index();
            console.log(index);
            $(this).addClass('selected').siblings().removeClass('selected');
            $('.toggle-box .origin-news').eq(index).addClass('active').siblings().removeClass('active');
            console.log($('.origin-news').eq(index))
        });

        //调整图片
        mypublic.cnfood.jqthumb_img();

　　});

// })(jQuery);


