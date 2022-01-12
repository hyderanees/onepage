$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active-header");
            $("#header .navbar-light .navbar-nav .nav-link") .css('color' , 'white')
            $("#header .navbar-light .navbar-brand") .css('color' , 'white')
        }
        else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active-header");
           $("#header .navbar-light .navbar-nav .nav-link") .css('color' , 'white');
           $("#header .navbar-light .navbar-brand") .css('color' , 'white')
        }
    });
});
