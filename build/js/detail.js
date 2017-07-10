"use strict";

// var hits_id = 26572;
// var hits_modelid = 1;

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public",
        "swiper": "https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min",
        "jqthumb": "../static/jqthumb.min",
        "hits": "http://www.cnfood.com/api.php?op=count&id=" + hits_id + "&modelid=" + hits_modelid,
        "common": "common",
        "html5shiv": "https://cdn.bootcss.com/html5shiv/r29/html5.min"
    },
    shim: {
        "swiper": {
            exports: "swiper"
        },
        "jqthumb": {
            deps: ["jquery"]
        },
        "hits": {
            deps: ["jquery"]
        }
    }
});

require(['jquery', 'public', "swiper", "jqthumb", "hits", "common", "html5shiv"], function ($, mypublic, swiper) {
    //初始化top滚动事件
    mypublic.cnfood.fixedBox($('.news-show-l'), $('.news-show-r'));
    //底部推荐切换
    mypublic.cnfood.tabsToggle($('.tabs a'), $('.recommend-info .recommend-item'), 'selected');
    //qrcode
    var qrcode = $('.news-show-l');
    mypublic.cnfood.scrollDirection(function () {
        qrcode.css('top', '40px');
    }, function () {
        qrcode.css('top', '0');
    });
    var people = $('.people');
    mypublic.cnfood.fixedBox(people, people);
    // 滚动时位移
    mypublic.cnfood.scrollDirection(function () {
        people.css('top', '50px');
    }, function () {
        people.css('top', '10px');
    });
    //调整图片
    mypublic.cnfood.jqthumb_img();
});