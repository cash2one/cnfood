$(function () {
    var mySwiper = $('.swiper-container').swiper({
        autoplay: 3000,
        loop: true,
        pagination: '.pagination',
        autoplayDisableOnInteraction: false,
        paginationClickable :true
    });
    // 初始化轮播图左右箭头
    cnfood.initSwiperArrow(mySwiper);
    // 鼠标经过分页器换页
    cnfood.paginationHover(mySwiper);
})