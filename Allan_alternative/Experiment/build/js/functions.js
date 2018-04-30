/*!
 * THE GREATEST SHOWMAN - Functions Core (c) 2018 <bahaasamir.me>
 */

$(function() {
    "use strict";
    var e, a = $(window).width(),
        t = $(window).height(),
        o = ($("body").attr("id"), !1),
        i = !1,
        n = navigator.userAgent.indexOf("Chrome") > -1,
        s = navigator.userAgent.indexOf("Safari") > -1,
        r = "Home",
        c = !1,
        l = !0,
        d = !1;
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge|maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (o = !0), o && $("body").addClass("isMobile"), n && s && (s = !1), s && $(window).bind("pageshow", function(e) {
        e.originalEvent.persisted && window.location.reload()
    });
    var u, h = (u = {}, function(e, a, t) {
        t || (t = "uniqueId"), u[t] && clearTimeout(u[t]), u[t] = setTimeout(e, a)
    });
    window.onload = function() {
        i = !0
    }, window.onfocus = function() {
        !0
    }, window.onblur = function() {
        !1
    }, $(window).bind("beforeunload", function() {
        0 == $(".unload").length && ($("body").append('<div class="unload"></div>'), $("body *").unbind(), $(".unload").fadeIn())
    });
    var w, p, m, f, v = $(".load_bg"),
        T = $(".append_bg"),
        g = $(".load_img"),
        y = !0,
        x = !0,
        M = !1,
        _ = !1,
        b = !1,
        k = 100,
        S = !0,
        A = !1,
        C = !1,
        O = $("#tracks audio"),
        P = $(".audio"),
        I = new TimelineMax,
        D = new SplitText(".quote_set h1", {
            type: "words,chars"
        }),
        F = new SplitText(".quote_set p", {
            type: "chars"
        }),
        N = D.chars.length,
        E = F.chars,
        V = $(".main_content h1"),
        z = new SplitText(".main_content h1", {
            type: "words,chars"
        }),
        q = new SplitText(".main_content h2", {
            type: "words"
        }),
        Y = new SplitText(".main_content h3", {
            type: "words,chars"
        }),
        L = z.words,
        B = q.words,
        G = Y.chars,
        H = ($(".main_bg"), $("#main_video").find("video")[0]),
        X = $("#main_video_rev").find("video")[0];
    $("#tracks").find("audio")[0];

    function W(e) {
        var a = $(".loader_progress"),
            t = e;
        TweenMax.to(a, 1.5, {
            x: -1 * e + "%",
            ease: Power2.easeOut,
            force3D: !0,
            onComplete: function() {
                0 == t && a.animate({
                    opacity: 0
                }, function() {
                    $(".site_loader").remove()
                })
            }
        })
    }

    function R(e) {
        $("#" + e).removeClass("active").animate({
            volume: 0
        }, 500, function() {
            $("#" + e)[0].pause()
        })
    }

    function j() {
        $.each($("#tracks > audio"), function() {
            var e = $(this)[0],
                a = $(this).attr("id");
            $(this).hasClass("active") && $("#" + a).animate({
                volume: 0
            }, 500, function() {
                e.pause()
            })
        })
    }

    function U(e, a, t) {
        function o(t) {
            var o;
            0 != (o = "current" != e ? $("#" + e) : $("#tracks > audio.active")).length && (o[0].play(), 1 == t && o.addClass("active"), 1 == a ? (o[0].currentTime = 0, 0 == C && (o[0].volume = 1)) : 0 == C && (o[0].volume = 0, o.animate({
                volume: 1
            }, 500)))
        }
        0 != $("#tracks > audio.active").length && 1 == a ? $.each($("#tracks > audio"), function() {
            var e = $(this)[0],
                a = $(this).attr("id");
            $(this).hasClass("active") && (1 == t && $(this).removeClass("active"), $("#" + a).animate({
                volume: 0
            }, 500, function() {
                e.pause(), o(t)
            }))
        }) : o(t)
    }

    function K(e) {
        O.each(function() {
            $(this).animate({
                volume: 0
            }, e)
        })
    }

    function Q(e) {
        O.each(function() {
            $(this).animate({
                volume: 1
            }, e)
        })
    }
    $(".main_content h1 > div, .main_content h2 > div, .main_content h3 > div").addClass("_out"), e = setInterval(function() {
        1 == i && (clearInterval(e), function() {
            for (var e = 0; e < N; e++) I.from(D.chars[e], 2, {
                opacity: 0,
                y: 10,
                ease: Power2.easeOut,
                force3D: !0
            }, Math.random());
            TweenMax.set(".quote_set", {
                autoAlpha: 1
            }), TweenMax.from(".headphones", 2, {
                autoAlpha: 0,
                rotation: 180,
                y: 100,
                ease: Power4.easeOut,
                force3D: !0
            }), TweenMax.staggerFrom(E, 1, {
                opacity: 0,
                y: 10,
                ease: Power2.easeOut,
                force3D: !0,
                delay: 1.5
            }, .06, function() {
                w = setInterval(function() {
                    if (1 == y && 1 == x && 1 == M && 1 == _) {
                        nt.init(), nt.off(), clearInterval(w), se(), W(0), U("TheGreatestShowman", !0, !0), o ? m.play() : H.play(), I.set("#main, header, .site", {
                            autoAlpha: 1
                        }).to(".quote_set p", .5, {
                            opacity: 0
                        }).staggerTo(D.words, .5, {
                            opacity: 0,
                            y: -20,
                            ease: Power2.easeIn,
                            force3D: !0
                        }, -.06, "-=0.5").staggerFrom(B, 1, {
                            opacity: 0,
                            y: 20,
                            ease: Power2.easeOut,
                            force3D: !0
                        }, -.1, "-=0.5").staggerFrom(L, 1, {
                            opacity: 0,
                            y: 20,
                            ease: Power2.easeOut,
                            force3D: !0
                        }, -.1, "-=1").staggerFrom(G, .8, {
                            opacity: 0,
                            x: 20,
                            ease: Power2.easeOut,
                            force3D: !0
                        }, .02, "-=1").to(".headphones", .5, {
                            opacity: 0,
                            y: -20,
                            ease: Power2.easeIn,
                            force3D: !0
                        }, "-=2").call(function() {
                            l = !1
                        }).staggerFrom("#main ._up, header ._up", .5, {
                            y: 20,
                            opacity: 0,
                            ease: Power2.easeOut,
                            force3D: !0
                        }, .1, "-=2.3");
                        var e = anime.timeline();
                        e.add([{
                            targets: "#lineDrawing .lines path",
                            strokeDashoffset: [anime.setDashoffset, 0],
                            easing: "easeInOutSine",
                            duration: 2e3,
                            delay: function(e, a) {
                                return 70 * a
                            }
                        }, {
                            targets: "#lineDrawing .fill path",
                            opacity: [0, 1],
                            fill: "#fff",
                            duration: 2500,
                            delay: 3e3,
                            offset: 0,
                            complete: function() {
                                $("#lineDrawing .lines, .site_logo.gold svg > g:first-child").fadeOut()
                            }
                        }])
                    }
                }, 400)
            })
        }(), W(80), T.each(function(e) {
            var a = $(this),
                t = a.attr("data-src");
            a.removeAttr("data-src").removeClass(".append_bg").css({
                "background-image": "url(" + t + ")"
            })
        }), 0 != g.length && (x = !1, g.each(function(e) {
            var a = $(this),
                t = a.attr("data-src"),
                o = g.length;
            $("<img/>").attr("src", t).load(function() {
                a.removeAttr("data-src").attr("src", t).removeClass("load_img"), o == e + 1 && (g.removeClass(".load_img"), x = !0)
            })
        })), 0 != v.length && (y = !1, v.each(function(e) {
            var a = $(this),
                t = a.attr("data-src"),
                i = v.length;
            $("<img/>").attr("src", t).load(function() {
                if (a.removeAttr("data-src").css({
                        "background-image": "url(" + t + ")"
                    }), i == e + 1) {
                    if (v.removeClass(".load_bg"), y = !0, k > 20 && (W(20), k = 20), X.currentTime = 0, H.currentTime = 0, o) {
                        var n = $("#MainCanvasRender");
                        m = new CanvasVideoPlayer({
                            videoSelector: "#VID-Main",
                            canvasSelector: "#CVS-Main",
                            canvasWrap: n,
                            audio: !1,
                            resetOnLastFrame: !1
                        }), f = new CanvasVideoPlayer({
                            videoSelector: "#VID-MainRev",
                            canvasSelector: "#CVS-MainRev",
                            canvasWrap: n,
                            audio: !1,
                            resetOnLastFrame: !1
                        }), m.play(), f.play(), b = !0
                    } else H.play(), X.play(), Pa.get(0).play();
                    H.onended = function(e) {
                        0 == M && (H.currentTime = 0, M = !0, k > 60 && (W(60), k = 60))
                    }, X.onended = function(e) {
                        0 == _ && (X.currentTime = 0, _ = !0, k > 50 && (W(50), k = 50))
                    }, o || (Pa.get(0).onended = function(e) {
                        0 == b && (Pa.get(0).currentTime = 0, b = !0)
                    })
                }
            })
        })))
    }, 500), $(".audio").click(function() {
        0 == C ? (C = !0, K(500), P.addClass("muted")) : (C = !1, Q(500), P.removeClass("muted"))
    }), $(window).blur(function() {
        0 == C && K(500)
    }).focus(function() {
        0 == C && Q(500)
    });
    var J = $(".burger_menu");
    J.click(function(e) {
        $(this);
        return 0 == A ? (A = !0, J.addClass("open"), TweenMax.to("#Menu", 1, {
            autoAlpha: 1
        }), TweenMax.to(".site_logo", 1, {
            opacity: .2
        }, 0), TweenMax.set(".site_logo", {
            css: {
                className: "+=scaled"
            }
        }), St.restart(), 1 == c && (TweenMax.set("header", {
            css: {
                className: "-=dark"
            }
        }), TweenMax.to(".site_logo, header .btn_set", .5, {
            autoAlpha: 1
        })), TweenMax.to("#back", 1, {
            "margin-left": -94,
            opacity: 0,
            ease: Power3.easeOut,
            force3D: !0
        })) : Ot(), !1
    }), $(".site_logo").click(function() {
        1 == Et ? zt() : "Home" != r && 0 == l && (l = !0, "DiscoverIntro" == r ? Se() : "Stories" == r ? Ce() : "TheShow" != r && "TheShowGet" != r && "loadTheShow" != r || ot(), setTimeout(function() {
            te()
        }, 3e3))
    });
    var Z = $("._text_up"),
        ee = $(".award");
    $.each(Z, function(e, a) {
        var t = new TimelineMax({
                paused: !0
            }),
            o = $(this),
            i = new SplitText(o, {
                type: "chars"
            }).chars;
        t.staggerTo(i, .3, {
            y: -5,
            opacity: 0,
            ease: Power3.easeIn,
            force3D: !0
        }, .015, 0).staggerTo(i, .3, {
            y: 0,
            opacity: 1,
            ease: Power3.easeOut,
            force3D: !0
        }, .015, .3), a.animation = t
    }), $.each(ee, function(e, a) {
        var t = new TimelineMax({
                paused: !0
            }),
            o = $(this).find("._element");
        t.to(o, .25, {
            scale: 1.1,
            ease: Power3.easeInOut,
            force3D: !0
        }).to(o, .25, {
            scale: 1,
            ease: Back.easeOut,
            force3D: !0
        }, .25), a.animation = t
    }), o || ee.bind("mouseenter", function() {
        this.animation.restart()
    }), Z.bind("click touchstart", function() {
        this.animation.restart()
    });
    var ae = V.find("div > div");

    function te() {
        l = !0, r = "Home", H.currentTime = .1, h(function() {
            TweenMax.set(".site_logo", {
                css: {
                    className: "-=scaled"
                }
            }), TweenMax.set(".site_logo", {
                css: {
                    className: "-=gold"
                }
            }), TweenMax.set("#main", {
                "z-index": 999
            }), TweenMax.set("#main_video", {
                "z-index": 99
            }), TweenMax.set("#main_video_rev", {
                "z-index": 1
            }), o ? m.play() : H.play(), U("TheGreatestShowman", !0, !0), TweenMax.staggerTo("#main ._out", .8, {
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
                force3D: !0
            }, -.06), TweenMax.to("#back", 1, {
                "margin-left": -94,
                opacity: 0,
                ease: Power3.easeOut,
                force3D: !0
            }), TweenMax.to(".site_logo", 1, {
                opacity: 1
            }), setTimeout(function() {
                l = !1
            }, 1e3)
        }, 500)
    }

    function oe() {
        X.currentTime = .1, S = !1, l = !0, setTimeout(function() {
            TweenMax.set("#main_video_rev", {
                "z-index": 99
            }), TweenMax.set("#main_video", {
                "z-index": 1
            }), o ? f.play() : X.play(), R("TheGreatestShowman"), TweenMax.staggerTo("#main ._out", 1, {
                y: -30,
                opacity: 0,
                ease: Power2.easeOut,
                force3D: !0
            }, .02, function() {
                setTimeout(function() {
                    TweenMax.set(".site_logo", {
                        css: {
                            className: "+=scaled"
                        }
                    }), S = !0, r = "", l = !1
                }, 1e3)
            }), TweenMax.to(".site_logo", 1, {
                opacity: .2
            }), TweenMax.set("#main", {
                "z-index": 1
            })
        }, 500)
    }
    V.bind("mousemove", function(e) {
        var a, t, o = $(window).width() / 2;
        e.pageX > o ? (a = e.pageX - o, t = 1 + parseInt(a / 100) / 100) : (a = o - e.pageX, t = 1 - parseInt(a / 100) / 100), t >= 1 && TweenMax.to($(".main_bg"), 2, {
            scale: t,
            force3D: !0
        }), ae.each(function() {
            var e = $(this),
                a = event.pageX - $(this).offset().left,
                t = event.pageY - $(this).offset().top,
                o = Math.atan2(t, a);
            TweenMax.to(e, .4, {
                x: 20 * Math.cos(o),
                y: 20 * Math.sin(o),
                scale: .9,
                force3D: !0
            })
        })
    }).bind("mouseleave", function(e) {
        TweenMax.to(ae, .8, {
            x: 0,
            y: 0,
            scale: 1,
            force3D: !0
        }), TweenMax.to(".main_bg", 1, {
            scale: 1,
            force3D: !0
        })
    }), $("#DiscoverBtn").click(function() {
        0 == l && (l = !0, oe(), p = setInterval(function() {
            1 == S && (clearInterval(p), ke())
        }, 400))
    });
    var ie = $(".awards").flickity(),
        ne = !1;

    function se() {
        if (a = $(window).width(), t = $(window).height(), a <= 768)
            if (t <= 920) $(".discover_nav").css({
                top: 170
            }), $(".slides_timer").css({
                top: "",
                bottom: 120
            });
            else {
                var e = $(".wrapper").offset().top;
                $(".discover_nav").css({
                    top: parseInt(e) + 10,
                    bottom: ""
                }), $(".slides_timer").css({
                    top: parseInt(e + 500 - 30),
                    bottom: ""
                })
            } else $(".discover_nav").css({
            top: "",
            bottom: ""
        }), $(".slides_timer").css({
            top: "",
            bottom: ""
        });
        a <= 640 ? 0 == ne && (ne = !0, ie.flickity({
            prevNextButtons: !1,
            contain: !0,
            pageDots: !1,
            selectedAttraction: .03,
            cellAlign: "center",
            friction: .3
        })) : 1 == ne && (ne = !1, ie.flickity("destroy"))
    }
    ie.flickity("destroy"), $(window).bind("resize", function() {
        h(function() {
            se()
        }, 200)
    }), $("#back").click(function() {
        0 == l && (0 == c ? 1 == Et ? zt() : "DiscoverIntro" == r ? (TweenMax.to("#back", 1, {
            "margin-left": -94,
            opacity: 0,
            ease: Power3.easeOut,
            force3D: !0
        }), Se(), setTimeout(function() {
            te()
        }, 2e3)) : "Stories" == r ? (TweenMax.to("#back", 1, {
            "margin-left": -94,
            opacity: 0,
            ease: Power3.easeOut,
            force3D: !0
        }), Ce(), setTimeout(function() {
            te(), TweenMax.set(de.add(le), {
                autoAlpha: 0
            })
        }, 3e3)) : "TheShow" != r && "TheShowGet" != r && "loadTheShow" != r || (ot(), setTimeout(function() {
            ke()
        }, 2e3)) : $t())
    }), $("#shopnow").click(function() {
        0 == l & !$(this).hasClass("active") && ($(this).addClass("active"), 1 == A && J.click(), 0 == c ? "Home" == r ? (oe(), setTimeout(function() {
            Ya()
        }, 3e3)) : "DiscoverIntro" == r ? (Se(), setTimeout(function() {
            Ya()
        }, 3e3)) : "Stories" == r && (Ce(), setTimeout(function() {
            Ya(), TweenMax.set(de.add(le), {
                autoAlpha: 0
            })
        }, 3e3)) : ($t(), setTimeout(function() {
            Ya()
        }, 1e3)))
    });
    var re, ce, le = $("#StoriesSection"),
        de = $("#discover"),
        ue = $("#discoverIntroCanvas"),
        he = (new TimelineMax({
            paused: !0
        }), $("#VID-Intro")),
        we = $(".mousemove_instructions"),
        pe = $("#role_progress"),
        me = we.find("h2"),
        fe = we.find("h1 > span:first-child"),
        ve = new SplitText(fe, {
            type: "words"
        }),
        Te = new SplitText(pe, {
            type: "words"
        }),
        ge = ve.words,
        ye = Te.words,
        xe = !1,
        Me = a / 2;

    function $e(e) {
        Me = e.pageX
    }
    document.addEventListener("mousemove", $e, !1), document.addEventListener("mouseenter", $e, !1), o && new CanvasVideoPlayer({
        videoSelector: "#VID-Intro",
        canvasSelector: "#CVS-Intro",
        canvasWrap: de,
        audio: !1,
        resetOnLastFrame: !1
    });
    var _e = !0;

    function be(e, a) {
        var t = re * e / $(window).width(),
            o = (t = Math.round(100 * t) / 100, parseInt(Math.round(100 * e) / $(window).width()));
        0 == xe ? (clearTimeout(ce), $(me).html("Yeah! You are almost there"), ce = setTimeout(function() {
            $(me).html("Keep Moving")
        }, 1e3), 1 == a ? TweenMax.to(pe, .5, {
            width: o + "%",
            force3D: !0
        }) : TweenMax.set(pe, {
            width: o + "%"
        }), he.get(0).currentTime = parseFloat(t), o > 60 ? (TweenMax.to(me, .5, {
            opacity: 1
        }), o >= 95 && (xe = !0, TweenMax.to(pe, .5, {
            width: "100%",
            force3D: !0
        }), TweenMax.to(me, .5, {
            opacity: 0
        }))) : TweenMax.to(me, .5, {
            opacity: 0
        })) : 1 == _e && 0 == l && (_e = !1, clearTimeout(ce), TweenMax.staggerTo(ge, 1, {
            opacity: 0,
            y: -20,
            ease: Power3.easeOut
        }, -.07), TweenMax.staggerTo(ye, 1, {
            opacity: 0,
            y: -20,
            ease: Power3.easeOut
        }, -.07), TweenMax.set(Pe, {
            "z-index": 999,
            autoAlpha: 1
        }), TweenMax.set(de, {
            "z-index": 1
        }), TweenMax.set("#doorB", {
            autoAlpha: 0
        }), TweenMax.from(".hideWhileVideo, .stories_footer", 1, {
            autoAlpha: 0,
            delay: 2
        }), setTimeout(function() {
            d = !0, Ne.eq(0).click(), xe = !1
        }, 500))
    }

    function ke() {
        l = !0, 1 == o ? (d = !0, TweenMax.set(le, {
            autoAlpha: 1
        }), TweenMax.set(Pe, {
            "z-index": 999,
            autoAlpha: 1
        }), TweenMax.from(".hideWhileVideo, .stories_footer", 1, {
            autoAlpha: 0,
            delay: 2
        }), Ne.eq(0).click()) : (r = "DiscoverIntro", _e = !0, TweenMax.to("#back", 1, {
            "margin-left": 0,
            opacity: 1,
            ease: Power3.easeInOut,
            force3D: !0
        }), TweenMax.set(".site_logo", {
            css: {
                className: "+=scaled"
            }
        }), TweenMax.set(".site_logo", {
            css: {
                className: "-=gold"
            }
        }), TweenMax.to(".site_logo", 1, {
            opacity: .2
        }), TweenMax.set(de.add(le), {
            autoAlpha: 1
        }), TweenMax.set(de, {
            "z-index": 999
        }), TweenMax.set(Pe, {
            "z-index": 1,
            autoAlpha: 0
        }), TweenMax.staggerFromTo(ge, 1, {
            opacity: 0,
            x: 20,
            y: 0
        }, {
            opacity: 1,
            x: 0,
            ease: Power3.easeOut
        }, .07), TweenMax.staggerFromTo(ye, 1, {
            opacity: 0,
            x: 20,
            y: 0
        }, {
            opacity: 1,
            x: 0,
            ease: Power3.easeOut
        }, .07), TweenMax.set("#doorA", {
            autoAlpha: 1
        }), TweenMax.fromTo("#doorA .d_top", 2, {
            y: "0%"
        }, {
            y: "-100%",
            ease: Power3.easeInOut,
            delay: 1
        }), TweenMax.fromTo("#doorA .d_bottom", 2, {
            y: "0%"
        }, {
            y: "100%",
            ease: Power3.easeInOut,
            delay: 1,
            onComplete: function() {
                l = !1
            }
        }), re = he.get(0).duration, ue.mousemove(function(e) {
            be(Me = e.clientX, !0)
        }), be(Me, !1))
    }

    function Se() {
        _e = !1, l = !0, TweenMax.staggerFromTo(ge, 1, {
            opacity: 1,
            x: 0,
            y: 0
        }, {
            opacity: 0,
            x: -20,
            ease: Power3.easeOut
        }, .07), TweenMax.staggerFromTo(ye, 1, {
            opacity: 1,
            x: 0,
            y: 0
        }, {
            opacity: 0,
            x: -20,
            ease: Power3.easeOut
        }, .07), TweenMax.to(me, .5, {
            opacity: 0
        }), TweenMax.fromTo("#doorA .d_top", 2, {
            y: "-100%"
        }, {
            y: "0%",
            ease: Power3.easeInOut
        }), TweenMax.fromTo("#doorA .d_bottom", 2, {
            y: "100%"
        }, {
            y: "0%",
            ease: Power3.easeInOut,
            onComplete: function() {
                TweenMax.set(de.add(le), {
                    autoAlpha: 0
                }), TweenMax.set(de, {
                    "z-index": 1
                }), TweenMax.set("#doorA", {
                    autoAlpha: 0
                }), r = "", l = !1
            }
        })
    }
    var Ae = !1;

    function Ce() {
        d = !1, Oe && Oe.pause(), TweenMax.set(".site_logo", {
            css: {
                className: "-=gold"
            }
        }), TweenMax.to(".site_logo", 1, {
            opacity: .2
        }), TweenMax.set("#doorB", {
            autoAlpha: 1
        }), TweenMax.fromTo("#doorB .d_top", 2, {
            y: "-100%"
        }, {
            y: "0%",
            ease: Power3.easeInOut
        }), TweenMax.fromTo("#doorB .d_bottom", 2, {
            y: "100%"
        }, {
            y: "0%",
            ease: Power3.easeInOut,
            onComplete: function() {
                1 == Ta && (Ae = !0, fa.click()), j(), Ne.removeClass("active"), $(".story_slide").css({
                    visibility: "hidden"
                }).removeClass("hide"), Ne.add(Fe).removeClass("active"), Ee.add(Ve).removeClass("active")
            }
        }), TweenMax.set(Pe, {
            autoAlpha: 0,
            delay: 2
        })
    }
    var Oe, Pe = $("#stories"),
        Ie = new TimelineMax,
        De = $(".scanner > i"),
        Fe = $(".discover_nav li"),
        Ne = $("#hidden_nav > i"),
        Ee = $(".timer_group"),
        Ve = $(".timer_tube"),
        ze = $("#getTimerValue"),
        qe = 10;

    function Ye() {
        Oe && (Oe.paused(!Oe.paused()), Oe.paused() && ze.html('<i class="fas fa-play"></i>'))
    }

    function Le(e) {
        var a = new TimelineMax({
                paused: !0,
                delay: .5
            }),
            t = $("#" + e);
        a.from(t.find(".media_photo > i > span"), 1.5, {
            scale: 1.05,
            ease: Power3.easeOut,
            force3D: !0
        }).set(t.find("p > span:nth-child(2) > div"), {
            css: {
                className: "-=fill"
            }
        }, 0).staggerFrom(t.find("h1 > div"), 1, {
            opacity: 0,
            y: 20,
            ease: Power3.easeOut
        }, .15, 0).staggerFrom(t.find("p"), 1, {
            opacity: 0,
            y: 20,
            ease: Power3.easeOut
        }, .05, 0).staggerTo(t.find("p > span:nth-child(2) > div"), .5, {
            css: {
                className: "+=fill"
            }
        }, .5, 0).staggerFrom(t.find("p > div"), 1.5, {
            opacity: 0,
            y: 10,
            ease: Power3.easeOut
        }, .04, 0), a.restart()
    }

    function Be(e) {
        var a, t = $("#hidden_nav > i.active"),
            o = $("#hidden_nav > i").length;
        0 != (a = "next" == e ? t.next("i") : t.prev("i")).length && a.click(), t.index() == o - 1 && 1 == d && (Ce(), setTimeout(function() {
            Ya()
        }, 2e3)), 0 == t.index() && 1 == d && $("#back").click()
    }
    $.each(Fe, function(e, a) {
        var t = new TimelineMax({
                paused: !0
            }),
            o = $(this),
            i = new SplitText(o.find("span"), {
                type: "chars"
            }).chars;
        t.staggerFrom(i, .3, {
            y: 5,
            opacity: 0,
            ease: Power3.easeOut,
            force3D: !0
        }, .01), a.animation = t
    }), 0 == o && Fe.mouseenter(function() {
        this.animation.play()
    }).mouseleave(function() {
        (a = $(window).width()) <= 768 ? this.animation.reverse() : $(this).hasClass("active") || this.animation.reverse()
    }), Fe.click(function() {
        var e = $(this).attr("data-group");
        $(this).hasClass("active") || $("#hidden_nav > i[data-group=" + e + "]").click()
    }), Ve.mouseenter(function() {
        $(this).hasClass("active") && (Oe && Oe.pause(), ze.html('<i class="fas fa-pause"></i>'))
    }).mouseleave(function() {
        $(this).hasClass("active") && Oe && Oe.play()
    }).click(function() {
        var e = $(this).attr("data-id");
        $(this).hasClass("active") || $("#hidden_nav > i[data-id=" + e + "]").click()
    }), new SplitText(".story_content h1", {
        type: "chars, words"
    }), new SplitText(".story_slide p", {
        type: "words"
    }), TweenLite.set(".story_slide p", {
        perspective: 400
    }), $(document).keyup(function(e) {
        38 === e.which ? Be("previous") : 40 === e.which ? Be("next") : 32 === e.which && "Stories" == r && Ye()
    });

    function Ge(e) {
        var t = $("#hidden_nav > i.active").attr("data-slide"),
            o = $(".timer_group.active").find(".timer_tube").eq(t - 1),
            i = o.find("i");
        Ve.removeClass("active"), o.addClass("active"), Oe = new TimelineMax, (a = $(window).width()) <= 768 ? Oe.staggerTo(o.prevAll().find("i"), .2, {
            x: "0%",
            ease: Power0.easeNone
        }, .2, 0).staggerTo(o.nextAll().find("i"), .2, {
            x: "-100%",
            ease: Power0.easeNone
        }, -.2, 0).to(i, .5, {
            x: "-100%",
            ease: Power3.easeOut
        }).to(i, qe, {
            x: "0%",
            ease: Power0.easeNone,
            onUpdate: He,
            onComplete: function() {
                Be("next"), ze.html('<i class="fas fa-check"></i>')
            }
        }) : Oe.staggerTo(o.prevAll().find("i"), .2, {
            y: "0%",
            ease: Power0.easeNone
        }, .2, 0).staggerTo(o.nextAll().find("i"), .2, {
            y: "-100%",
            ease: Power0.easeNone
        }, -.2, 0).to(i, .5, {
            y: "-100%",
            ease: Power3.easeOut
        }).to(i, qe, {
            y: "0%",
            ease: Power0.easeNone,
            onUpdate: He,
            onComplete: function() {
                Be("next"), ze.html('<i class="fas fa-check"></i>')
            }
        })
    }

    function He() {
        var e = parseInt(100 * Oe.progress());
        ze.html(e + "%")
    }
    Ne.click(function() {
        var e, t, i = $(this).index(),
            n = $(this).attr("data-id"),
            s = $("#hidden_nav > i.active").attr("data-group"),
            c = $(this).attr("data-group"),
            l = !0,
            u = $("#tracks > #audio-" + c).index();
        $("#tracks").find("audio")[u];
        l = s == c, 1 != d || $(this).hasClass("active") || (TweenMax.set(".site_logo", {
            css: {
                className: "+=gold"
            }
        }), TweenMax.to(".site_logo", 1, {
            opacity: 1
        }, 0), d = !1, r = "Stories", Oe && Oe.pause(), Ne.removeClass("active"), 1 == l ? (e = $("#" + n), $(this).addClass("active"), $(".story_slide:not(.active)").css({
            visibility: "hidden"
        }), $(".story_slide.active").addClass("hide"), e.css({
            visibility: "visible"
        }), Le(n), Ge(i), Ze(e), setTimeout(function() {
            $(".story_slide").removeClass("hide active"), e.addClass("active"), $(".story_slide:not(.active)").css({
                visibility: "hidden"
            })
        }, 1e3), setTimeout(function() {
            d = !0
        }, 1500)) : (t = $("i[data-group=" + c + "]").first(), n = t.attr("data-id"), e = $("#" + n), t.addClass("active"), Fe.removeClass("active"), $(".discover_nav li[data-group=" + c + "]").addClass("active"), 0 == o && Fe.each(function() {
            $(this).hasClass("active") ? a <= 768 && this.animation.play() : this.animation.reverse()
        }), Ee.hide().removeClass("active"), $(".timer_group[data-group=" + c + "]").show().addClass("active"), (a = $(window).width()) <= 768 ? TweenMax.set(".timer_tube > i", {
            x: "-100%"
        }) : TweenMax.set(".timer_tube > i", {
            y: "-100%"
        }), Ze(e), U("audio-" + c, !0, !0), Ie.set(De, {
            visibility: "visible"
        }).fromTo(De, .6, {
            y: "100%"
        }, {
            y: "0%",
            ease: Power3.easeOut,
            force3D: !0
        }).call(function() {
            TweenMax.set(de, {
                autoAlpha: 0
            }), $(".story_slide").css({
                visibility: "hidden"
            }).removeClass("hide active"), e.addClass("active").css({
                visibility: "visible"
            }), Le(n), Ge(i)
        }).to(De, 1.2, {
            y: "-100%",
            ease: Power3.easeOut,
            force3D: !0
        }).set(De, {
            visibility: "hidden"
        }).call(function() {
            d = !0
        })))
    }), $(document).on("mousemove", function(e) {
        var t = e.pageX,
            o = e.pageY;
        a = $(window).width(), "Stories" == r && (a <= 768 ? (ze.css("left", t), ze.css("top", o - 30)) : (ze.css("left", t - 30), ze.css("top", o - 10)))
    }), Ee.hover(function() {
        TweenMax.to(ze, .3, {
            autoAlpha: 1,
            ease: Power0.easeNone
        })
    }, function() {
        TweenMax.to(ze, .3, {
            autoAlpha: 0,
            ease: Power0.easeNone
        })
    });
    var Xe, We, Re, je, Ue, Ke, Qe, Je = {};

    function Ze(e) {
        if (We = (Xe = e).find(".story_content"), Xe.find(".media_photo"), Re = Xe.find(".media_video"), 1 == (je = Xe.find(".media_inline_video")).length) {
            var a = je.find("video")[0];
            if (a.currentTime = 0, o) {
                var t = je.attr("data-id");
                Je[t].play()
            } else a.play()
        }
        e.hasClass("has_video") ? h(function() {
            TweenMax.to(".middle > h3", 1, {
                autoAlpha: 1,
                y: 0,
                ease: Power3.easeOut
            }), TweenMax.set(aa, {
                autoAlpha: 1
            })
        }, 1e3) : (TweenMax.to(".middle > h3", 1, {
            autoAlpha: 0,
            y: 15,
            ease: Power3.easeOut
        }), TweenMax.set(aa, {
            autoAlpha: 0
        }))
    }
    $(".media_inline_video").each(function(e) {
        if (o) {
            var a, t = $(this),
                i = t.find("canvas"),
                n = t.find("video"),
                s = "#" + i.attr("id"),
                r = "#" + n.attr("id"),
                c = i.closest(".story_wrap");
            a = !!n.attr("loop"), t.attr("data-id", e), Je[e] = new CanvasVideoPlayer({
                videoSelector: r,
                canvasSelector: s,
                canvasWrap: c,
                framesPerSecond: 30,
                audio: !1,
                loop: a,
                resetOnLastFrame: !1
            })
        }
    }), window.human = !1;
    var ea, aa = $("#HoldRender"),
        ta = document.querySelector("#HoldRender"),
        oa = ta.getContext("2d"),
        ia = 30,
        na = 0,
        sa = 0,
        ra = "ontouchstart" in window || navigator.msMaxTouchPoints ? "touchstart" : "mousedown",
        ca = ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.3)"];

    function la() {
        Ke = $(window).width(), Qe = $(window).height(), ta.width = 2 * Ke, ta.height = 2 * Qe, ta.style.width = Ke + "px", ta.style.height = Qe + "px", oa.scale(2, 2)
    }

    function da(e, a) {
        var t, o, i, n, s = {};
        return s.x = e, s.y = a, s.color = ca[anime.random(0, ca.length - 1)], s.radius = anime.random(5, 32), s.endPos = (t = s, o = anime.random(0, 360) * Math.PI / 180, i = anime.random(50, 180), n = [-1, 1][anime.random(0, 1)] * i, {
            x: t.x + n * Math.cos(o),
            y: t.y + n * Math.sin(o)
        }), s.draw = function() {
            oa.beginPath(), oa.arc(s.x, s.y, s.radius, 0, 2 * Math.PI, !0), oa.fillStyle = s.color, oa.fill()
        }, s
    }

    function ua(e) {
        for (var a = 0; a < e.animatables.length; a++) e.animatables[a].target.draw()
    }

    function ha(e, a) {
        for (var t, o, i = (t = a, (o = {}).x = e, o.y = t, o.color = "#FFF", o.radius = .1, o.alpha = .5, o.lineWidth = 6, o.draw = function() {
                oa.globalAlpha = o.alpha, oa.beginPath(), oa.arc(o.x, o.y, o.radius, 0, 2 * Math.PI, !0), oa.lineWidth = o.lineWidth, oa.strokeStyle = o.color, oa.stroke(), oa.globalAlpha = 1
            }, o), n = [], s = 0; s < ia; s++) n.push(da(e, a));
        anime.timeline().add({
            targets: n,
            x: function(e) {
                return e.endPos.x
            },
            y: function(e) {
                return e.endPos.y
            },
            radius: .1,
            duration: anime.random(1200, 1800),
            easing: "easeOutExpo",
            update: ua
        }).add({
            targets: i,
            radius: anime.random(50, 100),
            lineWidth: 0,
            alpha: {
                value: 0,
                easing: "linear",
                duration: anime.random(800, 1200)
            },
            duration: anime.random(2e3, 3800),
            easing: "easeOutExpo",
            update: ua,
            offset: 0
        })
    }
    la(), window.addEventListener("resize", la, !1);
    var wa = anime({
        duration: 1 / 0,
        update: function() {
            oa.clearRect(0, 0, ta.width, ta.height)
        }
    });
    ta.addEventListener(ra, function(e) {
        var a;
        window.human = !0, wa.play(), a = e, ea = aa.offset(), na = a.clientX || a.touches[0].clientX, sa = a.clientY - ea.top || a.touches[0].clientY - ea.top, ha(na, sa)
    }, !1);
    var pa = new TimelineMax({
            paused: !0
        }),
        ma = new TimelineMax({
            paused: !0
        }),
        fa = $("#skip_video"),
        va = !1,
        Ta = !1;
    new SplitText(fa.add(".middle h3"), {
        type: "chars"
    }), pa.to("#hold_progress", 2, {
        width: "100%",
        ease: Power3.easeInOut
    }).call(function() {
        va = !0, Ta = !0, d = !1, j(), TweenMax.to(".hideWhileVideo", .5, {
                autoAlpha: 0
            }), TweenMax.set(aa, {
                autoAlpha: 0
            }), ma.restart(), TweenMax.to(We, .5, {
                scale: 1.1,
                autoAlpha: 0,
                ease: Power3.easeOut,
                force3D: !0
            }), TweenMax.to(Re.add(".navigation_progress"), .5, {
                autoAlpha: 1
            }),
            function(e) {
                var a = e.find("canvas"),
                    t = e.find("video"),
                    i = "#" + a.attr("id"),
                    n = "#" + t.attr("id"),
                    s = a.closest(".story_wrap"),
                    r = e.find("video")[0];
                o ? ((Ue = new CanvasVideoPlayer({
                    videoSelector: n,
                    canvasSelector: i,
                    canvasWrap: s,
                    audio: !0,
                    timelineSelector: ".js-timeline",
                    resetOnLastFrame: !1
                })).play(), TweenMax.set(ga, {
                    width: 0
                })) : (r.volume = 0, r.currentTime = 0, r.play(), e.find("video").animate({
                    volume: 1
                }, 1e3), r.onplay = function() {
                    TweenMax.ticker.addEventListener("tick", c)
                }, r.onpause = function() {
                    TweenMax.ticker.removeEventListener("tick", c)
                }, TweenMax.set(ga, {
                    width: "100%",
                    scaleX: 0
                }));

                function c() {
                    TweenMax.set(ga, {
                        scaleX: (r.currentTime / r.duration).toFixed(5)
                    })
                }
                r.onended = function() {
                    o || TweenMax.ticker.removeEventListener("tick", c), fa.click()
                }
            }(Re), pa.pause(0, !0)
    }), ma.staggerFromTo(".middle h3 > span > div", 1, {
        opacity: 1,
        x: 0
    }, {
        opacity: 0,
        x: -10,
        ease: Power3.easeOut,
        force3D: !0
    }, .01, 0).staggerFromTo(".middle h3 > span > i div", 1, {
        opacity: 1,
        x: 0
    }, {
        opacity: 0,
        x: -10,
        ease: Power3.easeOut,
        force3D: !0
    }, .01, 0).set(fa, {
        autoAlpha: 1
    }, 0).staggerFromTo(fa.find("div"), 1, {
        opacity: 0,
        x: 10
    }, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        force3D: !0
    }, .03), aa.bind("touchstart mousedown", function(e) {
        0 == va && (pa.kill().play(), Oe.pause())
    }), aa.bind("touchend mouseup", function(e) {
        0 == va && (pa.reverse(), h(function() {
            Ye()
        }, 500))
    }), fa.click(function() {
        var e;
        va = !1, d = !0, Ta = !1, TweenMax.to(".hideWhileVideo", .5, {
            autoAlpha: 1
        }), TweenMax.to(fa, .5, {
            autoAlpha: 0
        }), TweenMax.set(".middle h3 div", {
            opacity: 1,
            x: 0
        }), TweenMax.set("#hold_progress", {
            width: "0%"
        }), e = Re.find("video")[0], TweenMax.to(We, .5, {
            scale: 1,
            autoAlpha: 1,
            ease: Power3.easeOut,
            force3D: !0
        }), TweenMax.to(Re.add(".navigation_progress"), .5, {
            autoAlpha: 0
        }), o ? Ue.pause() : e.pause(), setTimeout(function() {
            0 == Ae && (!1, Be("next")), Ae = !1, o && Ue.unbind()
        }, 1e3), U("current", !1, !0)
    });
    var ga = $(".navigation_progress i");
    var ya, xa = new TimelineMax({
            paused: !0
        }),
        Ma = new TimelineMax({
            paused: !0
        }),
        $a = new TimelineMax,
        _a = $("#theshowCirc"),
        ba = $("#theshowCircDial"),
        ka = $("#theshowCircVal"),
        Sa = $(".theshow_title h1"),
        Aa = $(".theshow_title h2"),
        Ca = $(".theshow_title h3"),
        Oa = $(".theshow_bg"),
        Pa = $("#VID-TheShowBG"),
        Ia = $("#VID-TheShow"),
        Da = $(".theshow_footer"),
        Fa = new SplitText(Sa, {
            type: "words"
        }),
        Na = new SplitText(Aa, {
            type: "words"
        }),
        Ea = new SplitText(Ca, {
            type: "chars"
        }),
        Va = !1,
        za = {
            siteY: 0
        };

    function qa() {
        Va = !1, ya = !1, xa.reverse(), Ia.get(0).pause(), Ia.get(0).volume = 0, Ia.get(0).currentTime = 0, $("#audio-theshow").get(0).currentTime = 0, $("#audio-theshow").get(0).volume = 1, TweenMax.set(".theshow_media, .theshow_get_movie", {
            autoAlpha: 0
        }), TweenMax.set(_a.add(Da), {
            autoAlpha: 0
        }), ba.val(0).trigger("change"), ka.html('<i class="fas fa-play"></i>'), $("#audio-theshow").get(0).currentTime = 0, $("#audio-theshow").get(0).volume = 1
    }
    for (TweenMax.set(Sa, {
            perspective: 370
        }), Ma.call(function() {
            $("#audio-theshow").get(0).play(), TweenMax.set(".theshow_content, #TheShow", {
                autoAlpha: 1
            }), TweenMax.set(".site_logo", {
                css: {
                    className: "+=scaled"
                }
            }), TweenMax.set(".showEnd", {
                css: {
                    className: "-=shown"
                }
            }), r = "loadTheShow", qa()
        }), et = 0; et < Fa.words.length; et++) Ma.fromTo(Fa.words[et], 3, {
        transformStyle: "preserve-3d",
        transformOrigin: "center -10px",
        rotationX: 140,
        opacity: 0
    }, {
        rotationX: 0,
        ease: Elastic.easeOut,
        opacity: 1
    }, .6 + .3 * et);

    function Ya() {
        l = !0, $("#shopnow").addClass("active"), 1 == o ? (TweenMax.set(".theshow_bg, #TheShow video, #TheShow canvas", {
            autoAlpha: 0
        }), TweenMax.set("#TheShow, .theshow_media", {
            autoAlpha: 1
        }), TweenMax.set(".site_logo", {
            css: {
                className: "+=scaled"
            }
        }), TweenMax.set(".showEnd", {
            css: {
                className: "-=shown"
            }
        }), Xa.restart()) : Ma.restart()
    }
    Ma.staggerFromTo(Na.words, .1, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, .23, 1.8).staggerFromTo(Ea.chars, 1, {
        x: 20,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }, .02, "-=0.5").call(function() {
        l = !1, TweenMax.set(Oa.add(Pa), {
            autoAlpha: 1
        }), Pa.get(0).currentTime = 0, Pa.get(0).play(), TweenMax.to(Pa, 1, {
            autoAlpha: 0,
            delay: 2.3
        }), TweenMax.fromTo(_a, 1, {
            scale: 1.2,
            autoAlpha: 0
        }, {
            scale: .5,
            autoAlpha: 1,
            ease: Power3.easeOut,
            delay: 2
        }), setTimeout(function() {
            TweenMax.set(Oa, {
                autoAlpha: 0
            }), TweenMax.to("#back", 1, {
                "margin-left": 0,
                opacity: 1,
                ease: Power3.easeInOut,
                force3D: !0
            })
        }, 2300)
    }), _a.bind("touchstart mousedown", function(e) {
        0 == Va && (xa.kill().play(), TweenMax.to(_a, .35, {
            scale: 1,
            ease: Back.easeOut
        }))
    }).bind("touchend mouseup", function(e) {
        var a;
        0 == Va && (xa.reverse(), a = 1 == o ? .5 : .7, TweenMax.to(_a, .4, {
            scale: a,
            ease: Back.easeOut
        }))
    }), 0 == o && _a.bind("mouseenter", function(e) {
        0 == Va && TweenMax.to(_a, .35, {
            scale: .7,
            ease: Back.easeOut
        })
    }).bind("mouseleave", function(e) {
        0 == Va && TweenMax.to(_a, .4, {
            scale: .5,
            ease: Back.easeOut
        })
    }), ba.knob({
        displayInput: !1,
        thickness: .1,
        readOnly: !0,
        width: 90,
        height: 90,
        fgColor: "#d6a45d",
        bgColor: "#2e2e2e"
    }), xa.to(za, 1, {
        siteY: 100,
        ease: Power0.easeNone,
        onUpdate: function() {
            var e;
            ba.val(za.siteY).trigger("change"), e = za.siteY > 0 ? parseInt(za.siteY) + "%" : '<i class="fas fa-play"></i>', ka.html(e), za.siteY >= 98 ? ka.html('<i class="fas fa-check"></i>') : ka.html(e)
        }
    }).call(function() {
        Va = !0, TweenMax.to(_a, 1.5, {
            scale: 0,
            autoAlpha: 0,
            ease: Back.easeInOut
        }), TweenMax.staggerTo(Fa.words, .8, {
            opacity: 0,
            ease: Power3.easeOut
        }, -.05), TweenMax.staggerTo(Na.words, .8, {
            opacity: 0,
            ease: Power3.easeOut
        }, -.1), TweenMax.staggerTo(Ea.chars, .8, {
            x: -10,
            opacity: 0,
            ease: Power3.easeOut,
            onComplete: function() {
                ! function() {
                    function e() {
                        var e, a = Math.floor(Ia.get(0).currentTime);
                        Math.floor(a / 60);
                        e = a < 10 ? "0" + Math.floor(a) : Math.floor(a), $("#current").html(e), 24 == e && (ya = !0, Xa.restart())
                    }
                    r = "TheShow", $("#audio-theshow").get(0).pause(), $("#audio-theshow").get(0).currentTime = 0, $("#audio-theshow").get(0).volume = 0, TweenMax.to(".theshow_media", .5, {
                        autoAlpha: 1
                    }), Ia.get(0).currentTime = 0, Ia.get(0).volume = 0, Ia.get(0).play(), Ia.animate({
                        volume: 1
                    }, 1e3), Ia.get(0).onplay = function() {
                        TweenMax.ticker.addEventListener("tick", e)
                    }, Ia.get(0).onpause = function() {
                        TweenMax.ticker.removeEventListener("tick", e)
                    }, Ia.get(0).onended = function() {
                        TweenMax.ticker.removeEventListener("tick", e)
                    }, TweenMax.set(".theshow_content", {
                        autoAlpha: 0
                    }), TweenMax.set(".site_logo", {
                        css: {
                            className: "-=gold"
                        },
                        delay: 2
                    }), TweenMax.to(".site_logo", 1, {
                        opacity: .2,
                        delay: 2
                    }), TweenMax.set("#doorC", {
                        autoAlpha: 1
                    }), TweenMax.fromTo("#doorC .d_top", 2, {
                        y: "0%"
                    }, {
                        y: "-100%",
                        ease: Power3.easeInOut
                    }), TweenMax.fromTo("#doorC .d_bottom", 2, {
                        y: "0%"
                    }, {
                        y: "100%",
                        ease: Power3.easeInOut,
                        onComplete: function() {
                            l = !1, TweenMax.set("#doorC", {
                                autoAlpha: 0
                            }), TweenMax.set("#doorC > i", {
                                y: "0%"
                            })
                        }
                    })
                }()
            }
        }, .02)
    }), $(".theshow_media").on("mousemove", function(e) {
        var a = e.pageX,
            t = e.pageY,
            o = $(".fixed_skip").innerWidth() / 2;
        0 == ya && (clearTimeout(La), TweenMax.to(".fixed_skip", .5, {
            autoAlpha: 1
        }), La = setTimeout(function() {
            TweenMax.to(".fixed_skip", .5, {
                autoAlpha: 0
            })
        }, 1e3), TweenMax.to(".fixed_skip", 1, {
            x: a - o,
            y: t - 40,
            ease: Power4.easeOut
        }))
    }).click(function() {
        var e = Ia.get(0).currentTime;
        0 == ya && e < 23 && (Ia.get(0).currentTime = 23)
    });
    var La, Ba, Ga, Ha, Xa = new TimelineMax({
            paused: !0
        }),
        Wa = $(".theshow_get_movie"),
        Ra = new SplitText(Wa.find("h3"), {
            type: "words"
        }),
        ja = new SplitText(Wa.find("h2"), {
            type: "words"
        }),
        Ua = new SplitText(Wa.find("h1"), {
            type: "words"
        }),
        Ka = $(".d_stores li"),
        Qa = $(".g_logo"),
        Ja = $("#mySVG").width(),
        Za = $("#mySVG").height();
    Xa.set(Wa, {
        autoAlpha: 1
    }).call(function() {
        r = "TheShowGet", TweenMax.set(".showEnd", {
            css: {
                className: "+=shown"
            }
        })
    }).set(".site_logo", {
        css: {
            className: "+=gold"
        }
    }).to(".fixed_skip", 1, {
        autoAlpha: 0
    }).staggerFromTo(Ra.words, .1, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, .2, .5).staggerFromTo(Ua.words, .12, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, .2, "+=0.2").staggerFromTo(Ka, .3, {
        scale: 1.1,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1
    }, .2, "-=0.1").staggerFromTo(ja.words, .1, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, .13, 3).fromTo(Qa, 1, {
        scale: 1.1,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1
    }).set(Da, {
        autoAlpha: 1
    }).staggerFromTo(".y_link", .1, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, .2).to(".site_logo", 1, {
        opacity: 1
    }, 0);
    for (var et = 0; et < 10; et++) {
        var at = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        at.setAttributeNS(null, "class", "dot"), at.setAttributeNS(null, "width", 7), at.setAttributeNS(null, "height", 12), document.getElementById("mySVG").appendChild(at), TweenMax.set($(".dot")[et], {
            x: tt(Ja),
            y: 0,
            rotation: tt(180),
            opacity: 1,
            scale: tt(.5) + .5,
            fill: "hsl(" + (Ga = 34, Ha = 36, Ga + Math.floor(Math.random() * (Ha - Ga))) + ",50%,50%)"
        }), Ba = $(".dot")[et], $a.to(Ba, tt(5) + 4, {
            y: Za,
            ease: Linear.easeNone,
            repeat: -1,
            delay: -5
        }, 0).to(Ba, tt(5) + 1, {
            x: "+=70",
            repeat: -1,
            yoyo: !0,
            ease: Sine.easeInOut
        }, 0).to(Ba, tt(5) + 1, {
            scaleX: .2,
            rotation: tt(360),
            repeat: -1,
            yoyo: !0,
            ease: Sine.easeInOut
        }, 0).to(Ba, tt(1) + .5, {
            opacity: 0,
            repeat: -1,
            yoyo: !0,
            ease: Sine.easeInOut
        }, 0)
    }

    function tt(e) {
        return Math.random() * e
    }

    function ot() {
        l = !0, r = "", $("#shopnow").removeClass("active"), $("#audio-theshow").animate({
            volume: 0
        }, 500, function() {
            $(this).get(0).pause(), $(this).get(0).currentTime = 0, $(this).get(0).volume = 1
        }), "loadTheShow" == r || "TheShow" != r && "TheShowGet" != r || Ia.animate({
            volume: 0
        }, 500), TweenMax.to("#TheShow", 1, {
            autoAlpha: 0,
            onComplete: function() {
                l = !1, qa()
            }
        })
    }
    var it = document.querySelector("#TroupeVS"),
        nt = new Smooth({
            section: it,
            native: !1,
            preload: !0,
            ease: .2,
            noscrollbar: !0,
            direction: "vertical",
            callback: function(e) {
                var a, t, o, i, n;
                a = e, t = $(".troupe_wrap").innerHeight(), o = $(window).height(), i = a / (t - o), n = Math.round(100 * i), ut = a > dt ? "down" : "up", dt = a, TweenMax.to(".troupe_progress > i", .5, {
                    y: n + "%"
                }), rt.each(function() {
                    var e, a, t, o, i, n, s = $(this);
                    s.isInViewport() && (this.animation.play().timeScale(1), s.addClass("unbind")), s.isFullyVisible() ? s.addClass("active") : s.removeClass("active"), e = $(".troupe_box.active").last().index(), a = st.eq(e), t = String(e).charAt(String(e).length - 1), o = $(".slide_a .count_animate"), i = $(".slide_b .count_animate"), n = i.find("span").eq(parseInt(t)).position().top, a.hasClass("active") || (st.removeClass("active simi_active"), st.eq(e).addClass("active"), TweenMax.to(i, .5, {
                        y: -n,
                        ease: Power3.easeOut
                    }), e < 9 ? TweenMax.to(o, .5, {
                        y: -54,
                        ease: Power3.easeOut
                    }) : 9 == e && TweenMax.to(o, .5, {
                        y: -0,
                        ease: Power3.easeOut
                    }), h(function() {
                        ! function() {
                            a && a.kill();
                            var e = $(".troupe_nav li.active").index(),
                                a = new TimelineMax({
                                    paused: !0
                                }),
                                t = $(".troupe_v.active"),
                                o = lt.eq(e);
                            t.removeClass("active"), o.addClass("active");
                            var i = t.find("h1 > div > div"),
                                n = t.find("h2 > div > div"),
                                s = o.find("h1 > div > div"),
                                r = o.find("h2 > div > div");
                            "down" == ut ? a.staggerTo(i, 1, {
                                y: "-100%",
                                ease: Expo.easeInOut
                            }, .05, 0).staggerTo(n, 1, {
                                y: "-10",
                                autoAlpha: 0,
                                ease: Expo.easeInOut
                            }, .01, 0).staggerFromTo(s, 1, {
                                y: "100%"
                            }, {
                                y: "0%",
                                ease: Expo.easeInOut
                            }, .05, 0).staggerFromTo(r, 1, {
                                y: "10",
                                autoAlpha: 0
                            }, {
                                y: "0",
                                autoAlpha: 1,
                                ease: Expo.easeInOut,
                                onComplete: function() {
                                    l = !1
                                }
                            }, .01, 0) : a.staggerTo(i, 1, {
                                y: "100%",
                                ease: Expo.easeInOut
                            }, -.05, 0).staggerTo(n, 1, {
                                y: "10",
                                autoAlpha: 0,
                                ease: Expo.easeInOut
                            }, -.01, 0).staggerFromTo(s, 1, {
                                y: "-100%"
                            }, {
                                y: "0%",
                                ease: Expo.easeInOut
                            }, -.05, 0).staggerFromTo(r, 1, {
                                y: "-10",
                                autoAlpha: 0
                            }, {
                                y: "0",
                                autoAlpha: 1,
                                ease: Expo.easeInOut,
                                onComplete: function() {
                                    l = !1
                                }
                            }, -.01, 0), a.play()
                        }()
                    }, 500))
                })
            }
        }),
        st = $(".troupe_nav li"),
        rt = $(".troupe_box"),
        ct = $(".troupe_box_media"),
        lt = $(".troupe_v"),
        dt = 0,
        ut = "down";

    function ht() {
        lt.each(function() {
            var e = $(this).find("h1 > div > div"),
                a = $(this).find("h2 > div > div");
            TweenMax.set(e, {
                y: "100%"
            }), TweenMax.set(a, {
                autoAlpha: 0,
                y: 10
            })
        })
    }
    new SplitText(lt.find("h1"), {
        type: "lines,words"
    }), new SplitText(lt.find("h2"), {
        type: "words,chars"
    }), TweenMax.set(ct, {
        scale: 1.1
    }), rt.each(function(e, a) {
        var t = new TimelineMax({
                paused: !0
            }),
            o = $(this),
            i = o.find(ct),
            n = o.children("i");
        $(this).hasClass("unbind") || (t.set(o.add(i), {
            autoAlpha: 1
        }).fromTo(n, 1, {
            y: 0
        }, {
            y: "-100%",
            ease: Power3.easeOut
        }).fromTo(i, 2, {
            scale: 1.1
        }, {
            scale: 1,
            ease: Power3.easeOut
        }, "-=1"), a.animation = t)
    }), jQuery.fn.isFullyVisible = function() {
        var e = $(window),
            a = {
                top: e.scrollTop()
            };
        a.bottom = a.top + e.height();
        var t = this.height();
        t = Math.round(t);
        var o = this.offset();
        return o.top = o.top + t, o.bottom = o.top + this.outerHeight(), !(a.bottom < o.top || a.top > o.bottom)
    }, $.fn.isInViewport = function() {
        var e = $(this).offset().top,
            a = e + $(this).outerHeight(),
            t = $(window).scrollTop(),
            o = t + $(window).height();
        return a > t && e < o
    }, ht(), st.click(function() {
        if (!$(this).hasClass("active")) {
            var e = $(this).index(),
                a = rt.eq(e).position().top;
            st.removeClass("active"), $(this).addClass("active"), nt.scrollTo(a)
        }
    });
    var wt, pt, mt, ft, vt, Tt, gt, yt, xt = (vt = function() {
        window.addEventListener("mousemove", gt, !1), void 0 != window.DeviceMotionEvent && window.addEventListener("devicemotion", Tt, !1)
    }, Tt = function(e) {
        var a = 1 * event.accelerationIncludingGravity.x,
            t = 1 * event.accelerationIncludingGravity.y,
            o = 1 * event.accelerationIncludingGravity.z,
            i = 20 * Math.atan2(t, o),
            n = 20 * Math.atan2(a, o);
        i = Math.round(1e3 * i) / 1e3, n = Math.round(1e3 * n) / 1e3, yt(n, i)
    }, gt = function(e) {
        e = e || window.event, mt = e.pageX, ft = e.pageY;
        var a = mt / window.innerWidth - .3,
            t = ft / window.innerHeight - .3;
        yt(7 * a, 7 * t)
    }, yt = function(e, a) {
        $("body").hasClass("noTilt") || (TweenMax.to(wt, 1, {
            rotationY: -e,
            rotationX: -a,
            ease: Power1.easeOut,
            transformPerspective: 1e3,
            transformOrigin: "center"
        }), TweenMax.to(pt, 1, {
            y: 3 * -a,
            x: 3 * -e,
            ease: Power1.easeOut,
            transformOrigin: "center"
        }))
    }, {
        init: function() {
            mt = 0, ft = 0, wt = rt, pt = ct, vt()
        }
    });

    function Mt() {
        var e;
        l = !0, c = !0, nt.on(), "Stories" == r ? 1 == Ta ? (e = Re.find("video")[0], o ? Ue.pause() : e.pause()) : (j(), Oe && (Oe.pause(), ze.html('<i class="fas fa-play"></i>'))) : "TheShow" == r || "TheShowGet" == r || "loadTheShow" == r ? ($("#tracks > audio").removeClass("active"), "loadTheShow" == r ? R("audio-theshow") : Ia.get(0).pause()) : j(), U("audio-thetroupe", !0, !1), TweenMax.set("#TheTroupe", {
            autoAlpha: 1
        }), TweenMax.set("#TheTroupe", {
            css: {
                className: "+=active"
            }
        }), TweenMax.to("header", .5, {
            autoAlpha: 0
        }), setTimeout(function() {
            nt.scrollTo(2)
        }, 500), TweenMax.staggerFrom("#TheTroupe ._up", 1, {
            y: 20,
            opacity: 0,
            ease: Power3.easeOut,
            force3D: !0,
            delay: .5
        }, .2), TweenMax.set("body", {
            css: {
                className: "-=noTilt"
            }
        }), setTimeout(function() {
            TweenMax.set("header", {
                css: {
                    className: "+=dark"
                }
            }), TweenMax.set("#back", {
                "margin-left": 0,
                opacity: 1
            }), TweenMax.set(".site_logo, header .btn_set", {
                autoAlpha: 0
            }), TweenMax.to("header", .5, {
                autoAlpha: 1
            })
        }, 1e3)
    }

    function $t() {
        var e;
        l = !0, c = !1, R("audio-thetroupe"), "Stories" == r ? 1 == Ta ? (e = Re.find("video")[0], o ? Ue.play() : e.play()) : (U("current", !1, !0), Oe && Oe.play()) : "TheShow" == r || "TheShowGet" == r || "loadTheShow" == r ? "loadTheShow" == r ? U("audio-theshow") : 0 == ya && Ia.get(0).play() : U("current", !1, !0), TweenMax.set("#TheTroupe", {
            css: {
                className: "-=active"
            }
        }), TweenMax.set("body", {
            css: {
                className: "+=noTilt"
            }
        }), TweenMax.to("header", .5, {
            autoAlpha: 0
        }), setTimeout(function() {
            TweenMax.set("#TheTroupe", {
                autoAlpha: 0
            }), TweenMax.set("header", {
                css: {
                    className: "-=dark"
                }
            }), "Home" == r && TweenMax.set("#back", {
                "margin-left": -94,
                opacity: 0
            }), TweenMax.set(".site_logo, header .btn_set", {
                autoAlpha: 1
            }), TweenMax.to("header", .5, {
                autoAlpha: 1
            }), nt.scrollTo(0), setTimeout(function() {
                nt.off(), ht(), st.removeClass("active").eq(0).addClass("simi_active"), rt.removeClass("active unbind"), rt.each(function() {
                    this.animation.reverse().timeScale(10), l = !1
                })
            }, 1e3)
        }, 1e3)
    }
    s && 0 != o || xt.init(), $(".troupeIn").click(function() {
        0 == l && Mt()
    }), $("#troupeOut").click(function() {
        0 == l && $t()
    });
    var _t = $(".m_main_link"),
        bt = !1,
        kt = !0;
    TweenMax.set(".menu_bg", {
            opacity: 0,
            "-webkit-filter": "grayscale(100%)",
            filter: "grayscale(100%)"
        }),
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
    var St = new TimelineMax({
            paused: !0
        }),
        At = new SplitText(_t.find("span:nth-child(1)"), {
            type: "chars"
        }),
        Ct = (new SplitText(_t.find("span:nth-child(2)"), {
            type: "chars"
        }), new SplitText(_t.find("span:nth-child(3)"), {
            type: "chars"
        }), At.chars.length);
    for (et = 0; et < Ct; et++) St.from(At.chars[et], 1, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut,
        force3D: !0
    }, Math.random());

    function Ot(e) {
        kt = !0, J.removeClass("open"), TweenMax.to("#Menu", 1, {
            autoAlpha: 0
        }), "Home" == r && TweenMax.set(".site_logo", {
            css: {
                className: "-=scaled"
            }
        }), 1 == c && (TweenMax.set("header", {
            css: {
                className: "+=dark"
            }
        }), TweenMax.to(".site_logo, header .btn_set", .5, {
            autoAlpha: 0
        })), (1 == c || "Home" != r && "BehindTheScenes" != e) && TweenMax.to("#back", 1, {
            "margin-left": 0,
            opacity: 1,
            ease: Power3.easeOut,
            force3D: !0
        }), TweenMax.to(".site_logo", 1, {
            opacity: 1,
            onComplete: function() {
                $(".menu_bg").removeClass("active"), _t.removeClass("selected clicked"), TweenMax.set(".menu_bg", {
                    opacity: 0,
                    "-webkit-filter": "grayscale(100%)",
                    filter: "grayscale(100%)"
                }), A = !1, e && e != r && (1 == c && "TheTroupe" != e && "Awards" != e && $t(), 1 == Et && "Awards" != e && zt(), "TheTroupe" != e && "Awards" != e ? "Home" == r ? oe() : "DiscoverIntro" == r ? Se() : "Stories" == r ? Ce() : "TheShow" == r || "TheShowGet" == r || "loadTheShow" == r ? ot() : "BehindTheScenes" == r && It() : "Awards" == e ? 1 == c ? ($t(), setTimeout(function() {
                    Vt()
                }, 2e3)) : Vt() : 0 == c && setTimeout(function() {
                    Mt()
                }, 500), setTimeout(function() {
                    "Home" == e ? te() : "DiscoverIntro" == e ? ke() : "TheShow" == e ? Ya() : "BehindTheScenes" == e && Pt()
                }, 3e3))
            }
        })
    }

    function Pt() {
        $("#playYT").click(), TweenMax.to("#BehindTheScenes", 1, {
            autoAlpha: 1,
            delay: 1
        }), TweenMax.to("header", 1, {
            autoAlpha: 0
        })
    }

    function It() {
        $("#pauseYT").click(), TweenMax.to("#BehindTheScenes", 1, {
            autoAlpha: 0,
            ease: Power3.easeOut,
            onComplete: function() {
                TweenMax.to("header", 1, {
                    autoAlpha: 1
                }), $("#stopYT").click()
            }
        })
    }

    function Dt(e) {
        $("#playYT").click(function() {
            e.target.playVideo()
        }), $("#pauseYT").click(function() {
            e.target.pauseVideo()
        }), $("#stopYT").click(function() {
            e.target.stopVideo()
        })
    }

    function Ft(e) {
        0 === e.data && It()
    }
    $(".BehindTheScenesIn").click(function() {
        ot(), setTimeout(function() {
            Pt()
        }, 1e3)
    }), $(".close").click(function() {
        It(), setTimeout(function() {
            te()
        }, 1e3)
    }), window.onYouTubePlayerAPIReady = function() {
        new YT.Player("player", {
            height: "1080",
            width: "1920",
            videoId: "N3tM4aouaIc",
            events: {
                onReady: Dt,
                onStateChange: Ft
            },
            playerVars: {
                controls: 0,
                autoplay: 0,
                rel: 0,
                fs: 0,
                showinfo: 0,
                start: 60
            }
        })
    };
    var Nt = new TimelineMax({
            paused: !0
        }),
        Et = !1;

    function Vt() {
        l = !0, Et = !0, TweenMax.to("#Awards", 1, {
            autoAlpha: 1
        }), TweenMax.to("#back", 1, {
            "margin-left": 0,
            opacity: 1,
            ease: Power3.easeOut,
            force3D: !0
        }), Nt.restart()
    }

    function zt() {
        Et = !1, "Home" == r && TweenMax.to("#back", 1, {
            "margin-left": -94,
            opacity: 0,
            ease: Power3.easeOut,
            force3D: !0
        }), TweenMax.to("#Awards", 1, {
            autoAlpha: 0,
            onComplete: function() {
                Nt.reverse().timeScale(3)
            }
        })
    }

    function qt() {
        return function(e) {
            e = window.event || e;
            var a = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            return 0 == l && 0 == c && 0 == Et && (a < 0 ? "Home" == r ? ($("#DiscoverBtn").click(), l = !0) : "Stories" == r && Be("next") : "DiscoverIntro" == r || "TheShow" == r || "TheShowGet" == r || "loadTheShow" == r ? ($("#back").click(), l = !0) : "Stories" == r && Be("previous")), !1
        }
    }
    Nt.staggerFromTo(".awards_box", 2, {
        y: 10,
        autoAlpha: 0
    }, {
        y: 0,
        autoAlpha: 1,
        ease: Power3.easeOut
    }, .2, 0).staggerFromTo("#Awards .award", 2, {
        scale: 1.1,
        autoAlpha: 0
    }, {
        scale: 1,
        ease: Power3.easeOut,
        autoAlpha: 1
    }, .2, 0).call(function() {
        l = !1
    }), window.addEventListener ? (window.addEventListener("mousewheel", qt(), !1), window.addEventListener("DOMMouseScroll", qt(), !1)) : sq.attachEvent("onmousewheel", qt())
});