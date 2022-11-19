$(function (){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('#navbar-example2').addClass("scroll-efect");
        } else {
            $("#navbar-example2").removeClass("scroll-efect");
        }
    });
});