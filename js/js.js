autoslider();
var left = 0;
// var timer = 0;

function autoslider() {
    // timer = 
    setTimeout(sliderLeft, 1500);
}
function sliderLeft() {
    var p = document.getElementById('polosa');
    left = left - 480;

    if (left < -520) {
        left = 0;
    }

    p.style.left = left + 'px';
    autoslider();
}