// function scroll(){
//     if (window.pageYOffset){
//         return {
//             top: window.pageYOffset,
//             left: window.pageXOffset
//         };
//     } else if (document.body.scrollTop){
//         return {
//             top: document.body.scrollTop,
//             left: document.body.scrollLeft
//         };
//     } else {
//         return {
//             top: document.documentElement.scrollTop,
//             left: document.documentElement.scrollLeft
//         };
//     }
// }
// var currentheight = document.getElementsByClassName("main");
// if(document.body.clientHeight == scroll().top) {
    if ($.fn.makisu.enabled) {

        var $sashimi = $('.sashimi');
        var $nigiri = $('.nigiri');
        var $maki = $('.maki');

        // Create Makisus

        $nigiri.makisu({
            selector: 'dd',
            overlap: 0.85,
            speed: 1.7
        });

        $maki.makisu({
            selector: 'dd',
            overlap: 0.6,
            speed: 0.85
        });

        $sashimi.makisu({
            selector: 'dd',
            overlap: 0.2,
            speed: 0.5
        });
        // Open all

        $('.demo .list').makisu('open');

        // Toggle on click

        $('.demo .toggle').on('click', function () {
            $('.demo .list').makisu('toggle');
        });

        // Disable all links

        $('.demo a').click(function (event) {
            event.preventDefault();
        });

    } else {

        $('.warning').show();
    }
// }