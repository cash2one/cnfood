var cnfood = {
    oldScrollTop: $(window).scrollTop(),
    scrollDirection: function (upfunc, downfunc) {
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
        })
    },
    hideLogo: function () {
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
        })
    },
    fixedBox: function (el, toggleTop,callback,callback1) {
        if (el.length <= 0) return;
        if (toggleTop instanceof $) {
            toggleTop = toggleTop.offset().top;
        }
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var top = toggleTop - scrollTop;
            if (top <= 0) {
                el.addClass('fixed');
                if(typeof callback ==='function') callback();
            } else {
                el.removeClass('fixed');
                if(typeof callback1 ==='function') callback1();
            }
        })
    },
    initSwiperArrow: function (swiper) {                 // 初始化轮播左右箭头
        var leftArrow = $('.icon-arrow-left-copy');
        var rightArrow = $('.icon-arrow-right');
        leftArrow.click(function () {
            swiper.swipePrev();
        })
        rightArrow.click(function () {
            swiper.swipeNext()
        })
    },
    tabsToggle: function (tabs, toggle, addTabsCss) {                             //tab页切换js
        if (tabs.length <= 0 && toggle.length <= 0) return;
        // console.log(tabs);
        tabs.each(function (i) {
            $(this).mouseover(function () {
                $(this).addClass(addTabsCss).siblings().removeClass(addTabsCss);
                toggle.eq(i).show().siblings().hide();
            })
        })
    },
    paginationHover: function (swiper) {        //鼠标移动到swiper分也时切换
        var page = $('.pagination span');
        page.mouseover(function () {
            $(this).click();
        })
    },
    hoverHeadToggle:function(){
        var li = $('header .link li');
        li.find('.iconfont').hover(function(){
            var qrcodeBox = $(this).parent().find('.qrcode-box');
            qrcodeBox.animate({
                opacity:'1',
                bottom:'-164px'
            })
        },function(){
            var qrcodeBox = $(this).parent().find('.qrcode-box');
            qrcodeBox.css('opacity','0')
        })
    }
}

$(function () {
    // tops
    var tops = $('.tops-box');
    cnfood.scrollDirection(function () {
        tops.css('top','50px')
    }, function () {
        tops.css('top','10px')
    });
    // 初始化上下滚动事件
    cnfood.fixedBox($('.tops-box'), $('.tops-box'))
    // 切换logo
    cnfood.hideLogo();
    // 初始化切换tops
    cnfood.tabsToggle($('.top-name'), $('.toplist-toggle .top-list-box'), 'selected');
    //header中的鼠标悬浮出现二维码
    // cnfood.hoverHeadToggle();
})

