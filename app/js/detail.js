(function ($) {
    //初始化top滚动事件
    cnfood.fixedBox($('.news-show-r'));
    //底部推荐切换
    cnfood.tabsToggle($('.tabs a'), $('.recommend-info .recommend-item'), 'selected');

})(jQuery);