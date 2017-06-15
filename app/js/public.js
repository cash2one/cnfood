var cnfood = {
    oldScrollTop: $(window).scrollTop(),
    topToggle: function (topEl, logo) {
        // **************首页左边栏固定js****************************
        $(window).on('scroll', function () {
            var content = $('.news-l');
            var fixedwrap = $('.fixed-wrap');
            var scrollTop = $(this).scrollTop();
            var offset = content.offset();
            var top = offset.top - scrollTop;
            // console.log(offset.top, scrollTop);
            var newScrollTop = $(this).scrollTop();
            if (scrollTop >= offset.top) {
                if (logo.is(':hidden')) {
                    logo.show();
                }
            } else {
                if (!logo.is(':hidden')) {
                    logo.hide();
                }
            }
            if (newScrollTop > cnfood.oldScrollTop) {
                // console.log('向下滑')
                if (!topEl.hasClass('top-hide')) {
                    topEl.addClass('top-hide');
                    $('.fixed-wrap').css('top','0');
                }
            } else if (newScrollTop < cnfood.oldScrollTop) {
                // console.log('向上滑')
                if (topEl.hasClass('top-hide')) {
                    topEl.removeClass('top-hide');
                    $('.fixed-wrap').css('top','40px');
                }
            }
            setTimeout(function () {
                cnfood.oldScrollTop = newScrollTop;
            }, 0);

            if (top <= 0) {
                fixedwrap.addClass('fixed');
            } else {
                fixedwrap.removeClass('fixed');
            }
        })
    }
}


