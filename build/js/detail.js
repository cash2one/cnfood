'use strict';

(function ($) {
    //初始化top滚动事件
    cnfood.fixedBox($('.news-show-l'), $('.news-show-r'));
    //底部推荐切换
    cnfood.tabsToggle($('.tabs a'), $('.recommend-info .recommend-item'), 'selected');
    //qrcode
    var qrcode = $('.news-show-l');
    cnfood.scrollDirection(function () {
        qrcode.css('top', '40px');
    }, function () {
        qrcode.css('top', '0');
    });
    var people = $('.people');
    cnfood.fixedBox(people, people);
    // 滚动时位移
    cnfood.scrollDirection(function () {
        people.css('top', '50px');
    }, function () {
        people.css('top', '10px');
    });
})(jQuery);