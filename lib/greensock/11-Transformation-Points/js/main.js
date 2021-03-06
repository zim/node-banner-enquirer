! function (e) {
    var a = (e(".box"), e("#boxSVG")),
        o = e("#boxHTML"),
        t = e("#htmlDOT"),
        s = e("#boxSVG .circ"),
        r = e("#boxSVG rect"),
        n = e("#boxSVG .circStroke"),
        u = e("#boxSVG text"),
        P = e(".line"),
        i = e("button"),
        O = e("body"),
        w = e(".thanks"),
        d = new TimelineLite({
            paused: !0
        }),
        l = new TimelineMax;
    d.to(o, .7, {
        x: "100%",
        y: "100%",
        ease: Power2.easeInOut
    }).to(a, .7, {
        x: "100%",
        y: "100%",
        ease: Power2.easeInOut
    }).addPause().to(o, .7, {
        left: "50%",
        top: "50%",
        ease: Power2.easeInOut
    }).to(a, .7, {
        left: "50%",
        top: "50%",
        ease: Power2.easeInOut
    }).addPause().to(o, .7, {
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        ease: Power2.easeInOut
    }).to(t, .7, {
        left: 0,
        top: 0,
        ease: Power2.easeInOut
    }).addPause().to(a, .7, {
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        ease: Power2.easeInOut
    }).to(s, .7, {
        attr: {
            cx: 0,
            cy: 0
        },
        ease: Power2.easeInOut
    }).addPause().to(o, .7, {
        rotation: 90,
        transformOrigin: "100% 100%",
        ease: Power2.easeInOut
    }).addPause().to(a, .7, {
        rotation: 90,
        transformOrigin: "100% 100%",
        ease: Power2.easeInOut
    }).addPause().to(o, .7, {
        xPercent: -100,
        rotation: 0,
        ease: Power2.easeInOut
    }).addPause().to(a, .7, {
        x: "0%",
        rotation: 0,
        ease: Power2.easeInOut
    }).addPause().to(t, .7, {
        left: "50%",
        top: "50%",
        ease: Power2.easeInOut
    }).to(s, .7, {
        attr: {
            cx: 100,
            cy: 100
        },
        ease: Power2.easeInOut
    }, "-=0.7").addPause().to([a, o], .7, {
        rotation: 720,
        transformOrigin: "50% 50%",
        ease: Power2.easeInOut
    }).addPause().to(o, .7, {
        rotationX: -180,
        transformOrigin: "0% 50%",
        ease: Power2.easeInOut
    }).to(a, .7, {
        rotationY: -180,
        transformOrigin: "100% 50%",
        ease: Power2.easeInOut
    }).addPause().to(o, .7, {
        rotationX: -360,
        ease: Power2.easeInOut
    }).to(a, .7, {
        rotationY: -360,
        ease: Power2.easeInOut
    }).add(l), l.set(n, {
        autoAlpha: 0
    }).to([o, a], .7, {
        x: "-50%",
        ease: Power2.easeInOut
    }).to([o, a], 3, {
        rotation: -1440,
        transformOrigin: "50% 50%",
        ease: Power4.easeIn
    }).to([r, o, u, s], .3, {
        autoAlpha: 0,
        ease: Power0.easeNone
    }, "-=0.3").to(n, .3, {
        autoAlpha: 1,
        ease: Power0.easeNone
    }, "-=0.3").to(P, .2, {
        scale: .1,
        autoAlpha: 0,
        ease: Power4.easeIn
    }, "-=0.2").to(a, .3, {
        scale: 1.1,
        transformOrigin: "50% 50%",
        ease: Power4.easeOut
    }).to(a, .2, {
        scale: .2,
        autoAlpha: 0,
        ease: Power4.easeOut
    }).to(O, .2, {
        backgroundColor: "#2b4d66",
        ease: Power0.easeNone
    }, "-=0.2").to(i, .3, {
        opacity: 0
    }, "-=0.2").fromTo(w, .4, {
        autoAlpha: 0,
        scale: .8
    }, {
        autoAlpha: 1,
        scale: 1,
        ease: Back.easeOut
    }, "-=0.2"), e("#btnNext").on("click", function () {
        d.play()
    }), e("#btnPrev").on("click", function () {
        d.reverse()
    })
}(jQuery);