// var a = document.getElementsByClassName("ca-main");
// var ul = a[0].getElementsByTagName("ul");
// for(var i = 0 ; i < ul.length ; i++) {
//     var li = ul[i].getElementsByTagName("li");
//     for(var j = 0 ; j < li.length ; j++) {
//         var div = li[j].getElementsByTagName("div");
//         var img = li[j].getElementsByTagName("img");
//         div[0].onmouseover = function () {
//             // console.log(img[this.index].length);
//             img[0].style.transform = "scale(1.5,1.5)";
//             this.className = "current";
//             console.log("123");
//         };
//         div[0].onmouseout = function () {
//             img[0].style.transform = "scale(1,1)";
//             this.className = "album";
//         }
//     }
// }
var li = document.getElementsByTagName("li");
var img = document.getElementsByTagName("img");

for (var i = 0 ; i < img.length ; i++){
    var margin = (img[i].offsetWidth - img[i].offsetHeight) / 2 ;
    img[i].style.marginLeft = "-" + margin + "px";
    // console.log(margin);
}

$(document).ready(function () {
    var div = $('.ca-main div');
    div.mouseenter(function () {
        this.className = "current";
        $(this).nextAll().css("transform", "scale(1.5, 1.5)")
    });
    div.mouseleave(function () {
        this.className = "album";
        $(this).nextAll().css("transform", "scale(1, 1)")
    });
});

