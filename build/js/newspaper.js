"use strict";

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public",
        "mCustomScrollbar": "../static/jquery.mCustomScrollbar.min",
        "swiper": "https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min",
        "jqthumb": "../static/jqthumb.min"
    },
    shim: {
        "swiper": {
            exports: "swiper"
        },
        "mCustomScrollbar": {
            exports: "mCustomScrollbar"
        },
        "jqthumb": {
            deps: ["jquery"]
        }
    }
});