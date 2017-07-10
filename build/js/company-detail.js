"use strict";

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public",
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

require(['jquery', 'public', "jqthumb", "common", "html5shiv"], function ($, mypublic) {
    $(function () {
        var staticNav = $('.static-nav');
        var a = staticNav.find('span a');
        var span = staticNav.find('span');
        var mcontent = $('.m-content h3');
        var offsetTop = [];
        mcontent.each(function () {
            offsetTop.push($(this).offset().top);
        });
        console.log(offsetTop);
        mypublic.cnfood.fixedBox(staticNav, staticNav, function () {
            staticNav.addClass('static-nav-fixed');
            var l = offsetTop.length;
            for (var i = 0; i < l; i++) {
                if ($(this).scrollTop() >= offsetTop[i] && $(this).scrollTop() <= offsetTop[i + 1]) {
                    a.eq(i).addClass('active').parent().siblings().find('a').removeClass('active');
                } else if ($(this).scrollTop() > offsetTop[l - 1]) {
                    a.eq(l - 1).addClass('active').parent().siblings().find('a').removeClass('active');
                }
            }
        }, function () {
            staticNav.removeClass('static-nav-fixed');
        });

        span.click(function () {
            var i = $(this).index();
            $('body').animate({
                scrollTop: offsetTop[i]
            });
        }
        //调整图片
        );mypublic.cnfood.jqthumb_img();
    });
});