function scrolling(e) {
    var menu = document.getElementById('menu');
    var smoothScroll = window.pageYOffset || document.body.scrollTop;
    if (smoothScroll > 10) {
        console.log(menu);
        menu.style.background = "#222";
    } else {
        menu.style.background = "transparent"
    }
}
window.addEventListener("scroll", scrolling);
