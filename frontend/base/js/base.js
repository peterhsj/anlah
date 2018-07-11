$(document).ready(function () {
    //引入各元件
    $('#headerTxt').load('header.html');
    $('#mainMenuTxt').load('mainMenu.html');
    $('#fatFooterTxt').load('fatFooter.html');
    $('#footerTxt').load('footer.html');

    // 字體放大
    $('.font-large').on('click', function (event) {
        /* Act on the event */
        event.preventDefault();
        if ($('.subContent').hasClass('smallFont')) {
            $('.subContent').removeClass('smallFont').addClass('largeFont');
        } else {
            $('.subContent').addClass('largeFont');
        }

        //  $('.subContent').css('font-size', '1.176rem');
    });
    // 字體放中
    $('.font-default').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        if ($('.subContent').hasClass('smallFont')) {
            $('.subContent').removeClass('smallFont');
        }
        if ($('.subContent').hasClass('largeFont')) {
            $('.subContent').removeClass('largeFont');
        }
    });
    // 字體放小
    $('.font-small').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        if ($('.subContent').hasClass('largeFont')) {
            $('.subContent').removeClass('largeFont').addClass('smallFont');
        } else {
            $('.subContent').addClass('smallFont');
        }
    });
});