new fullpage("main", {
    licenseKey: "9E3D4FA8-CC7D4361-84F62357-1D7AC074",
    menu: "nav",
    anchors: ["home", "fun", "family", "adventure"],
    sectionSelector: "section",
    slideSelector: "aside",
    slidesNavigation: true,
    parallax: true,
    parallaxKey: "Y2FtcGdvZ2Fib2IuY29tX3RFU2NHRnlZV3hzWVhnPXg5ag==",
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    scrollingSpeed: 1000,
    autoScrolling: true,
    scrollBar: false,
    fitToSection: false
});

document.getElementById("nav-toggle").addEventListener("click", () => toggleNav());
document.querySelectorAll("nav>a").forEach((item) => item.addEventListener("click", () => closeNav()));

function openNav() {
    document.getElementById("nav-toggle").classList.add("open");
    document.querySelector("nav").classList.add("open");
}

function closeNav() {
    document.getElementById("nav-toggle").classList.remove("open");
    document.querySelector("nav").classList.remove("open");
}

function toggleNav() {
    document.getElementById("nav-toggle").classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
}
