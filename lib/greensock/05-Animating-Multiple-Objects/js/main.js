! function (e) {
    var a = e("img"),
        o = e("h2"),
        r = e("h1"),
        t = e(".intro"),
        u = e("ul li"),
        s = new TimelineLite;
    s.from(r, .3, {
        y: -15,
        autoAlpha: 0,
        ease: Power1.easeOut
    }).from(t, .3, {
        y: -15,
        autoAlpha: 0,
        ease: Power1.easeOut
    }, "-=0.15").from(a, .3, {
        y: -15,
        autoAlpha: 0,
        ease: Power1.easeOut
    }, "-=0.15").from(o, .3, {
        y: -15,
        autoAlpha: 0,
        ease: Power1.easeOut
    }, "-=0.15").from(u, .3, {
        y: -15,
        autoAlpha: 0,
        ease: Power1.easeOut
    }, "-=0.15")
}(jQuery);