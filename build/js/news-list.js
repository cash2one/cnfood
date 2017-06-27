"use strict";

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
        "public": "public",
        "jqthumb": "../static/jqthumb.min"
    },
    shim: {
        "jqthumb": {
            deps: ["jquery"]
        }
    }
});
require(['jquery', 'public', "jqthumb"]);