// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};



function disableScroll() {
    $('body').addClass('stop-scrolling');
    $('body').bind('touchmove', function(e){e.preventDefault()});
}
