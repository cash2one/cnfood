'use strict';

var cnfood = {
    oldScrollTop: $(window).scrollTop(),
    scrollDirection: function scrollDirection(upfunc, downfunc) {
        // **************判断向上还是向下滚****************************
        if (typeof upfunc !== 'function' && typeof downfunc !== 'function') return;
        var topEL = $('.top');
        $(window).on('scroll', function () {
            var newScrollTop = $(this).scrollTop();
            if (newScrollTop > cnfood.oldScrollTop) {
                // console.log('向下滑')
                if (!topEL.hasClass('top-hide')) {
                    topEL.addClass('top-hide');
                }
                downfunc();
            } else if (newScrollTop < cnfood.oldScrollTop) {
                // console.log('向上滑')
                if (topEL.hasClass('top-hide')) {
                    topEL.removeClass('top-hide');
                }
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
    fixedBox: function fixedBox(el, toggleTop) {
        if (el.length <= 0) return;
        if (toggleTop instanceof $) {
            toggleTop = toggleTop.offset().top;
        }
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var top = toggleTop - scrollTop;
            if (top <= 0) {
                el.addClass('fixed');
            } else {
                el.removeClass('fixed');
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
    // tops
    var tops = $('.tops-box');
    cnfood.scrollDirection(function () {
        tops.css('top', '50px');
    }, function () {
        tops.css('top', '0');
    });
    // 初始化上下滚动事件
    cnfood.fixedBox($('.tops-box'), $('.tops-box')
    // 切换logo
    );cnfood.hideLogo();
    // 初始化切换tops
    cnfood.tabsToggle($('.top-name'), $('.toplist-toggle .top-list-box'), 'selected');
});