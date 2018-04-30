$(document).ready(function(){


var _t=$(".m_main_link");

_t.mouseenter(function() {
            var e = $(this).parent().index(),
                a = $(".menu_bg").eq(e);
            1 == kt && (bt = !1, 0 == $(".menu_bg.active").length ? TweenMax.to(a, 1, {
                opacity: 1,
                scale: 1,
                ease: Power3.easeOut
            }) : TweenMax.set(a, {
                opacity: 1,
                scale: 1,
                ease: Power3.easeOut
            }), $(".menu_bg").removeClass("active"), _t.removeClass("selected"), $(this).addClass("selected"), a.addClass("active"), $(".menu_bg").each(function() {
                if (!$(this).hasClass("active")) {
                    var e = $(this);
                    TweenMax.to(e, 1, {
                        opacity: 0,
                        scale: 1.05,
                        ease: Power3.easeOut
                    })
                }
            }))
        }).mouseleave(function() {
            1 == kt && (bt = !0, h(function() {
                1 == bt && (_t.removeClass("selected"), $(".menu_bg").removeClass("active"), TweenMax.to(".menu_bg", 2, {
                    opacity: 0,
                    scale: 1.1,
                    ease: Power3.easeOut
                }))
            }, 100))
        }).click(function() {
            if (1 == kt) {
                kt = !1;
                var e = $(this).attr("data-href");
                $(this).addClass("clicked"), St.reverse(), TweenMax.fromTo(".menu_bg", 1.5, {
                    "-webkit-filter": "grayscale(100%)",
                    filter: "grayscale(100%)"
                }, {
                    "-webkit-filter": "grayscale(0%)",
                    filter: "grayscale(0%)",
                    onComplete: function() {
                        Ot(e)
                    }
                })
            }
        });

















});