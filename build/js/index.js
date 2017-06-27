"use strict";

// (function ($) {

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public",
        "mCustomScrollbar": "../static/jquery.mCustomScrollbar.min",
        "swiper": "https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min",
        "jqthumb": "../static/jqthumb.min"
    },
    shim: {
        "swiper": {
            exports: "swiper"
        },
        "mCustomScrollbar": {
            exports: "mCustomScrollbar"
        },
        "jqthumb": {
            deps: ["jquery"]
        }
    }
});

require(['jquery', 'public', "mCustomScrollbar", "swiper", "jqthumb"], function ($, mypublic, mCustomScrollbar, swiper) {

    // 初始化左侧新闻滚动条
    $(".content").mCustomScrollbar({
        theme: 'my-theme'
    });
    // ************首页左边栏滚动条显示*********************
    var content = $('.news-l');
    var fixedwrap = $('.fixed-wrap');
    $(document).on('mouseenter', content, function () {}
    // ********************************************************
    );var mySwiper = new Swiper('.swiper-container', {
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
    var fixedwrap = $('.fixed-wrap');
    mypublic.cnfood.scrollDirection(function () {
        fixedwrap.css('top', '40px');
    }, function () {
        fixedwrap.css('top', '0');
    });

    //文章切换ajax

    $('.news-tab').find('li').click(function () {
        var index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        console.log(index);
        if (index === 0) {
            $('.origin-news').show();
            $('.new-news').hide();
        } else {
            $('.origin-news').hide();
            $('.new-news').show();
            $('.news-list').html('');
            $('.loading').show();
            // ajax请求
        }
    });
    // 创建新闻添加
    function tabsToggle(res) {
        $.each(res, function (i) {
            var newsl = $('<div class="news-item"><div class="img img-pt"><a href="javascript:;"><img src="' + res[i].img + '" alt="">' + '</a></div><h1><a href="' + res[i].url + '" target="_blank">' + res[i].title + '</a>' + '</h1><div class="tags tags-pt"><span class="tags-box"></span><div class="time">' + res[i].time + '</div></div></div>');

            $.each(res[i].tags, function (j) {
                var tags = $('span class="tag">' + res[i].tags[j] + '</span>');
                newsl.find('.tags-box').append(tags);
            });

            var newsbox = $('.new-news');
            newsbox.html('');
            newsbox.append(newsl);
        });
    }
});

// })(jQuery);