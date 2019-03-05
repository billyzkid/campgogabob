var isPhoneDevice = "ontouchstart" in document.documentElement;

$(document).ready(function () {
    //new WOW().init();

    var offset = 220;
    var duration = 500;

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery("#back-to-top").fadeIn(duration);
        } else {
            jQuery("#back-to-top").fadeOut(duration);
        }
    });

    jQuery("#back-to-top").click(function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
    });

    (function ($, sr) {
        var debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this;
                var args = arguments;

                function delayed() {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                };

                if (timeout) clearTimeout(timeout);
                else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        }
        jQuery.fn[sr] = function (fn) {
            return fn ? this.bind("resize", debounce(fn)) : this.trigger(sr);
        };
    })(jQuery, "smartresize");

    function viewport() {
        var e = window;
        var a = "inner";

        if (!("innerWidth" in window)) {
            a = "client";
            e = document.documentElement || document.body;
        }

        return {
            width: e[a + "Width"],
            height: e[a + "Height"]
        };
    }

    function checkSize() {
        var vpWidth = viewport().width;
        console.log(vpWidth);
        if (vpWidth >= 768) {
            $("html").removeClass("mobile").removeClass("tablet").addClass("desktop");
        } else if (vpWidth <= 767) {
            $("html").addClass("mobile").removeClass("tablet").removeClass("desktop");
            var viewH = $(window).height();
            $("#page1").css("height", viewH);
            console.log("change");
        }
    }
    $(window).smartresize(function () {
        checkSize();
    });

    checkSize();

    // $("#testimonials").load("assets/php/quotes.php", function () {
    //     $("#testimonials").fadeIn(1000);
    // });

    // var refreshId = setInterval(function () {
    //     $("#testimonials").fadeOut(1000, function () {
    //         $("#testimonials").load("assets/php/quotes.php?randval=" + Math.random(), function () {
    //             $("#testimonials").fadeIn(1000);
    //         });
    //     });
    // }, 12000);

    $.ajaxSetup({ cache: false });

    function getYear() {
        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("year").innerHTML = n;
    }

    getYear();

    $(".nav-icon").click(function () {
        $(this).toggleClass("open");
        $("header").toggleClass("open")
    });

    (function ($) {
        "use strict";
        $.fn.heightFull = function () {
            var totalHeight = $("window").height();
            var heightMinus = totalHeight;
            $(this).css("height", heightMinus);
        };
    }(jQuery));

    $("main section").heightFull();

    $(window).resize(function () {
        $("main section").heightFull();
    });

    $("#nav > ul > li > a").click(function () {
        $("header.open").removeClass("open");
        $(".nav-icon").removeClass("open");
    });

    if (isPhoneDevice) {
        //mobile
    } else {

    }

    $("#wrapper").fullpage({
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6", "section7"],
        menu: "#nav ul",
        css3: true,
        "navigation": true,
        "navigationPosition": "right",
        scrollingSpeed: 700,
        scrollOverflow: true,
        responsiveWidth: 767
    });
});
