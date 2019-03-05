var quotes = [
    "Variousways design gets \"Todays Winner\" at csswinner.com. Showcasing only high quality and imaginative websites.",
    "A Variousways website was featured in Communication Arts Magazine \"Webpick of the Day\"",
    "Variousways websites featured in Awwwards Book: \"Through its pages you will find the websites that mark nowadays trends in web design, the ones that represent todays web standards, and the finest web design studios and agencies of the year.\"",
    "Jon Montenegro from variousways wins a AIGA Philadelphia Design Award for interactive design work. AIGA Philadelphia: “Our renowned panel of judges have spoken. The vast array of submissions has been narrowed down to the top 100, representing the best talent Philadelphia has to offer.”"
];

function showQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    var quote = quotes[index];

    $("#testimonials").html(quote).fadeIn(1000);
}

// https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
(function ($, sr) {
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this;
            var args = arguments;

            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }

                timeout = null;
            };

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind("resize", debounce(fn)) : this.trigger(sr);
    };
})(jQuery, "smartresize");

function checkSize() {
    var viewportWidth = window.innerWidth;

    if (viewportWidth > 767) {
        $("html").removeClass("mobile").removeClass("tablet").addClass("desktop");
    } else {
        $("html").addClass("mobile").removeClass("tablet").removeClass("desktop");
        $("#page1").css("height", $(window).height());
    }

    console.log(viewportWidth);
}

$(document).ready(function () {
    showQuote();

    setInterval(function () {
        $("#testimonials").fadeOut(1000, function () {
            showQuote();
        });
    }, 12000);

    $("#year").html(new Date().getFullYear());

    checkSize();

    $(window).smartresize(function () {
        checkSize();
    });

    $(".nav-icon").click(function () {
        $(this).toggleClass("open");
        $("header").toggleClass("open")
    });

    $("#nav > ul > li > a").click(function () {
        $("header.open").removeClass("open");
        $(".nav-icon").removeClass("open");
    });

    $("#back-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) {
            $("#back-to-top").fadeIn(500);
        } else {
            $("#back-to-top").fadeOut(500);
        }
    });

    $("#wrapper").fullpage({
        menu: "#nav ul",
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6", "section7"],
        css3: true,
        navigation: true,
        navigationPosition: "right",
        scrollOverflow: true,
        scrollingSpeed: 700,
        responsiveWidth: 767
    });
});
