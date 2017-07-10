require.config({
　　　　paths:{
　　　　　　"jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
            "public":"public",
            "jqthumb":"../static/jqthumb.min",
             "common":"common",
            "html5shiv":"https://cdn.bootcss.com/html5shiv/r29/html5.min"
　　　　},
        shim:{
            "jqthumb":{
                deps:["jquery"]
            }
        }
　　});

require(['jquery','public',"common","html5shiv"], function ($,mypublic) {
        var people = $('.people');
        mypublic.cnfood.fixedBox(people, people);
        // 滚动时位移
        mypublic.cnfood.scrollDirection(function () {
            people.css('top', '50px')
        }, function () {
            people.css('top', '10px')
        });
                //调整图片
        mypublic.cnfood.jqthumb_img();
})
