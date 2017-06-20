$(function () {
    var people = $('.people');
    cnfood.fixedBox(people, people);
    // 滚动时位移
    cnfood.scrollDirection(function () {
        people.css('top', '50px')
    }, function () {
        people.css('top', '10px')
    });
})