$(document).ready(function(){

    $(window).scroll(function () {
        if ($(this).scrollTop() > $('body').height() - $(window).height() -5) {
            $('.page-shadow').fadeOut(50);
        }
        else {
            $('.page-shadow').fadeIn(50);
        }
    });
});