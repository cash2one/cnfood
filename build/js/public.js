'use strict';

var cnfood = {
    oldScrollTop: $(window).scrollTop(),
    scrollDirection: function scrollDirection(upfunc, downfunc) {
        // **************判断向上还是向下滚****************************
        if (typeof upfunc !== 'function' && typeof downfunc !== 'function') return;
        $(window).on('scroll', function () {
            var newScrollTop = $(this).scrollTop();
            if (newScrollTop > cnfood.oldScrollTop) {
                // console.log('向下滑')
                downfunc();
            } else if (newScrollTop < cnfood.oldScrollTop) {
                // console.log('向上滑')
                upfunc();
            }
            setTimeout(function () {
                cnfood.oldScrollTop = newScrollTop;
            }, 0);
        });
    },
    hideLogo: function hideLogo() {
        var top = 244;
        var logo = $('.logo');
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            if (scrollTop >= top) {
                if (logo.is(':hidden')) {
                    logo.show();
                }
            } else {
                if (!logo.is(':hidden')) {
                    logo.hide();
                }
            }
        });
    },
    fixedBox: function fixedBox(el) {
        var fixedwrap = $('.top-linkage');
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var offset = el.offset();
            var top = offset.top - scrollTop;
            if (top <= 0) {
                fixedwrap.addClass('fixed');
            } else {
                fixedwrap.removeClass('fixed');
            }
        });
    },
    initSwiperArrow: function initSwiperArrow(swiper) {
        // 初始化轮播左右箭头
        var leftArrow = $('.icon-arrow-left-copy');
        var rightArrow = $('.icon-arrow-right');
        leftArrow.click(function () {
            swiper.swipePrev();
        });
        rightArrow.click(function () {
            swiper.swipeNext();
        });
    },
    tabsToggle: function tabsToggle(tabs, toggle, addTabsCss) {
        //tab页切换js
        if (tabs.length <= 0 && toggle.length <= 0) return;
        // console.log(tabs);
        tabs.each(function (i) {
            $(this).mouseover(function () {
                $(this).addClass(addTabsCss).siblings().removeClass(addTabsCss);
                toggle.eq(i).show().siblings().hide();
            });
        });
    },
    paginationHover: function paginationHover(swiper) {
        var page = $('.pagination span');
        page.mouseover(function () {
            $(this).click();
        });
    }
};

$(function () {
    var topEL = $('.top');
    var linkage = $('.top-linkage');
    // 初始化上下滚动事件
    cnfood.scrollDirection(function () {
        if (topEL.hasClass('top-hide')) {
            topEL.removeClass('top-hide');
            linkage.css('top', '40px');
        }
    }, function () {
        if (!topEL.hasClass('top-hide')) {
            topEL.addClass('top-hide');
            linkage.css('top', '0');
        }
    });
    // 切换logo
    cnfood.hideLogo();
    // 初始化切换tops
    cnfood.tabsToggle($('.top-name'), $('.toplist-toggle .top-list-box'), 'selected');
});