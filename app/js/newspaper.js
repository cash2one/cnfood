require.config({
　　　　paths:{
　　　　　　"jquery": "https://cdn.bootcss.com/jquery/1.8.2/jquery.min",
            "public":"public",
            "jqthumb":"../static/jqthumb.min",
            "common":"common"
　　　　},
        shim:{
            "jqthumb":{
                deps:["jquery"]
            }
        }
　　});
require(['jquery','public',"jqthumb","common"],function($){
    $(function(){
        var currentIndex = $('.paper-r ul li').index($('.active').parent('li'));
        var maxIndex = $('.paper-r ul li').children().length-1;
        if(currentIndex=='0'){
            $('#prevbm').hide();
        }
        if(currentIndex==maxIndex){
            $('#nextbm').hide()
        }
        if(currentIndex > '0'){
            $('#prevbm').attr('href',$('.active').parent('li').prev('li').find('a').attr('href'));
        }
        if(currentIndex < maxIndex){
            $('#nextbm').attr('href',$('.active').parent('li').next('li').find('a').attr('href'));
        }
        $('.paper-l a').mouseover(function(){
            $("."+$(this).attr('data-for')).closest('li').addClass('active');
        });
        $('.paper-l a').mouseout(function(){
            $("."+$(this).attr('data-for')).closest('li').removeClass('active');
        });
    });
})
