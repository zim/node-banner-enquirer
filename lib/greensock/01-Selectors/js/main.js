! function (e) {
    var t = (document.getElementById("header"), document.getElementsByTagName("h1"), document.getElementsByClassName("intro"), document.getElementsByClassName("list")[0].firstElementChild, document.getElementsByClassName("list")[0].children[1], document.getElementsByClassName("list")[0].lastElementChild, function (e) {
            return document.querySelector(e)
        }),
        n = function (e) {
            return document.querySelectorAll(e)
        },
        l = (t(".intro"), n("li"));
    TweenLite.to(l, 1.5, {
        y: 50,
        autoAlpha: 0
    })
}(jQuery);