"use strict";

define(['jquery', "public", "jqthumb"], function ($, mypublic) {
    'use strict';

    $(function () {
        // tops
        var tops = $('.tops-box');
        mypublic.cnfood.scrollDirection(function () {
            tops.css('top', '50px');
        }, function () {
            tops.css('top', '10px');
        });
        // 初始化上下滚动事件
        mypublic.cnfood.fixedBox($('.tops'), $('.tops-box')
        // 切换logo
        );mypublic.cnfood.hideLogo();
        // 初始化切换tops
        mypublic.cnfood.tabsToggle($('.top-name'), $('.toplist-toggle .top-list-box'), 'selected');
        //header中的鼠标悬浮出现二维码
        // cnfood.hoverHeadToggle();
    });
});