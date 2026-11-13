/* Limos home page: mobile menu, header shadow, scroll reveal, screenshot fallback. */
(function () {
    "use strict";

    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");

    function setMenu(open) {
        if (!toggle || !nav) return;
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        nav.classList.toggle("is-open", open);
    }

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            setMenu(toggle.getAttribute("aria-expanded") !== "true");
        });
        nav.addEventListener("click", function (e) {
            if (e.target.closest("a")) setMenu(false);
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { setMenu(false); toggle.focus(); }
        });
    }

    function onScroll() {
        if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Real app screenshots: put PNGs in assets/screens/ (home.png, scan.png ...)
       and list their names in js/screens.js. Any screen not listed keeps its
       built-in preview illustration, so there are never broken images. */
    var shots = window.LIMOS_SCREENS || [];
    document.querySelectorAll(".screen[data-shot]").forEach(function (el) {
        var name = el.getAttribute("data-shot");
        if (shots.indexOf(name) === -1) return;
        var img = new Image();
        img.alt = el.getAttribute("data-alt") || "";
        img.decoding = "async";
        img.onload = function () { el.appendChild(img); };
        img.src = "assets/screens/" + name + ".png";
    });

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll("[data-reveal]");
    if (reduce || !("IntersectionObserver" in window)) {
        items.forEach(function (el) { el.classList.add("in"); });
        return;
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el, i) {
        el.style.transitionDelay = ((i % 3) * 80) + "ms";
        io.observe(el);
    });
})();
