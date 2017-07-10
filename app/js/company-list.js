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
require(['jquery','public',"jqthumb","common","html5shiv"],function($,mypublic){
    //调整图片
    mypublic.cnfood.jqthumb_img();
})