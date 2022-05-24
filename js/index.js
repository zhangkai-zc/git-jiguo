
//图标闪烁
var logo = document.querySelector('img');
var opacity_1 = 0.5;
var opacity_2 = 1;
var timer = null;
logo.onmouseover = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        if (logo.style.opacity > opacity_1) {
            logo.style.opacity = opacity_1;
            logo.style.transition = 'opacity 1s ease';
        } else if (logo.style.opacity < opacity_2) {
            logo.style.opacity = opacity_2;
            logo.style.transition = 'opacity 1s ease';
        }
    }, 400)
}


logo.onmouseout = function () {
    clearInterval(timer);
    logo.style.opacity = opacity_2;
}