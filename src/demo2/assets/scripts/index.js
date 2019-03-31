initialize(false);

document.getElementById("turnOn").addEventListener("click", function () {
    removeClass(document.getElementById("actions").querySelector("li.active"), "active");
    addClass(this, "active");

    fullpage_api.parallax.init();
});

document.getElementById("turnOff").addEventListener("click", function () {
    removeClass(document.getElementById("actions").querySelector("li.active"), "active");
    addClass(this, "active");

    fullpage_api.parallax.destroy();
});

document.querySelectorAll("select").forEach(function (selectBox) {
    selectBox.addEventListener("change", function () {
        var fullPageOption = this.getAttribute("data-option");
        var value = this.value;

        if (fullPageOption === "offset") {
            fullpage_api.parallax.setOption("offset", value);
        } else if (fullPageOption === "type") {
            fullpage_api.parallax.setOption("type", value);
        } else if (fullPageOption === "autoScrolling") {
            fullpage_api.setAutoScrolling(value === "true");
        } else {
            fullpage_api.destroy("all");
            initialize(value === "true");
        }
    });
});

// https://github.com/lightingspaces/shelflyne
function initialize(hasScrollBar) {
    new fullpage("#myContainer", {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        menu: "#menu",
        anchors: ["page1", "page2", "page3", "page4"],
        slidesNavigation: true,
        parallax: true,
        parallaxKey: "c2hlbGZseW5lLmNvbS5hdV8zMXJjR0Z5WVd4c1lYZz1BcHA=",
        parallaxOptions: {
            type: "reveal",
            percentage: 62,
            property: "translate"
        },
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollBar: hasScrollBar,
        fitToSection: false
    });
}

function addClass(item, className) {
    if (item.classList) {
        item.classList.add(className);
    } else {
        item.className += " " + className;
    }

    return item;
}

function removeClass(item, className) {
    if (item.classList) {
        item.classList.remove(className);
    } else {
        item.className = item.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }

    return item;
}

function index(item, selector) {
    var children = item.parentNode.childNodes;
    var num = 0;

    for (var i = 0; i < children.length; i++) {
        if (children[i] == item) return num;
        if (children[i].nodeType == 1) num++;
    }

    return -1;
}
