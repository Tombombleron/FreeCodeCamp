var iScrollPos = 0;
$(document).ready(function() {
    $("#header-link-home").click(function(){
        $("html, body").animate({
            scrollTop: $("#page-title").offset().top
        }, "slow");
        $("#navbar-home").addClass("active");
        $("#navbar-about, #navbar-port, #navbar-contact").removeClass("active");
    });
    $("#header-link-about").click(function(){
        $("html, body").animate({
            scrollTop: $("#about-div").offset().top
        }, "slow"); 
        $("#navbar-about").addClass("active");
        $("#navbar-home, #navbar-port, #navbar-contact").removeClass("active");
    });
    $("#header-link-port").click(function(){
        $("html, body").animate({
            scrollTop: $("#port-div").offset().top
        }, "slow"); 
        $("#navbar-port").addClass("active");
        $("#navbar-home, #navbar-about, #navbar-contact").removeClass("active");
    });
    $("#header-link-contact").click(function(){
        $("html, body").animate({
            scrollTop: $("#contact-div").offset().top
        }, "slow"); 
        $("#navbar-contact").addClass("active");
        $("#navbar-home, #navbar-port, #navbar-about").removeClass("active");
    });
    $(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            $("#navbar-container").fadeOut();
        } else {
           $("#navbar-container").fadeIn();
        }
        iScrollPos = iCurScrollPos;
    });
});