if (document.documentElement.clientWidth > 980) {
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".header-bg").addClass("black-bg");
    } else {
        $(".header-bg").removeClass("black-bg");
    }
});
}





if (document.documentElement.clientWidth > 980) {
$(document).ready(function(){
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
  
    console.log('st', st)
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
      
        // We want to hide both the red and black bars on scroll down every time
        $('.header').removeClass('nav-top').addClass('nav-up');
        $('.top-line').addClass('top-up');
    } else {
        // Scroll Up
        if(st <= 50) {
          // If we are 50px from the top of the screen then show the red and black bars.
          $('.top-line').removeClass('top-up');
          $('.header').removeClass('nav-up').removeClass('nav-top');
        } else {
          // If we are more than 50px from the top then we want to show only
          // the red bar at the top of the screen
          $('.header').removeClass('nav-up').addClass('nav-top');
        }
    }
    lastScrollTop = st;
}
});
};


//]]> 