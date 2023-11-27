var looper;
var degrees = 0;

function rotateAnimation(el, speed) {
    var cog1 = document.getElementById(el);
    if (navigator.userAgent.match("Chrome")) {
        cog1.style.webkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        cog1.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        cog1.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        cog1.style.oTransform = "rotate(" + degrees + "deg)";
    } else {
        cog1.style.transform = "rotate(" + degrees + "deg)";
    }
    looper = setTimeout(function() {
        rotateAnimation(el, speed);
    }, speed);
    degrees++;
    if (degrees > 359) {
        degrees = 1;
    }
}

rotateAnimation ("rotate", 40);