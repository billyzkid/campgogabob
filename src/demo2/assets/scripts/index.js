new fullpage("main", {
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    menu: "nav",
    anchors: ["home", "fun", "family", "adventure"],
    sectionSelector: "section",
    slideSelector: "aside",
    slidesNavigation: true,
    parallax: true,
    parallaxKey: "c2hlbGZseW5lLmNvbS5hdV8zMXJjR0Z5WVd4c1lYZz1BcHA=",
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    scrollingSpeed: 1000,
    autoScrolling: true,
    scrollBar: false,
    fitToSection: false
});

document.getElementById("nav-toggle").addEventListener("click", function (e) {
    this.classList.toggle("open");
});
