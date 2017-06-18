$(function () {
    var mySwiper = $('.swiper-container').swiper({
        autoplay: 3000,
        loop: true,
        pagination: '.pagination',
        autoplayDisableOnInteraction: false
    });
    var leftArrow = $('.channel-focus .icon-arrow-left-copy');
    var rightArrow = $('.channel-focus .icon-arrow-right');
    leftArrow.click(function () {
        mySwiper.swipePrev();
    })
    rightArrow.click(function () {
        mySwiper.swipeNext()
    })
})