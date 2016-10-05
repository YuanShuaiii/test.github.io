var main = document.getElementsByClassName("main");
function scroll(){
    if (window.pageYOffset){
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        };
    } else if (document.body.scrollTop){
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        };
    } else {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        };
    }
}
window.onscroll = function() {
    console.log(main[0].offsetTop);
    var Y = scroll().top;
    if(Y > document.body.clientHeight / 4){
        // current = scroll().top;
        clearInterval(window.timer);
        window.timer = setInterval(function () {
            main[0].style.opacity = Y / 800;
            var speed = (document.body.clientHeight - Y) / 50 ;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            Y += speed;
            window.scrollTo(0, Y);
            if (document.body.clientHeight == Y) {
                clearInterval(window.timer);
                main[0].style.opacity = 1;
            }
            if (main[0].style.opacity > .9){
                main[0].style.opacity = 1
            }
        }, 15);
        window.onscroll = null
    }
};
// console.log();