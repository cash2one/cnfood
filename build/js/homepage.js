"use strict";

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public"
    }
});

require(['jquery', 'public'], function ($, mypublic) {
    $(function () {
        var people = $('.people');
        mypublic.cnfood.fixedBox(people, people);
        // 滚动时位移
        mypublic.cnfood.scrollDirection(function () {
            people.css('top', '50px');
        }, function () {
            people.css('top', '10px');
        });
    });
});