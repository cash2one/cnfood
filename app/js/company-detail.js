$(function(){
    var staticNav = $('.static-nav');
    var mcontent = $('.m-content h3');
    var offsetTop = [];
    mcontent.each(function(){
        offsetTop.push($(this).offset().top);
    })
    cnfood.fixedBox(staticNav,staticNav,function(){
        staticNav.addClass('static-nav-fixed');
        
    },function(){
        staticNav.removeClass('static-nav-fixed');
    });
})