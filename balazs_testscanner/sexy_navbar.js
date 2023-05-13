const SCROLL_THRESHOLD = 69; // px
const NAV = document.getElementById("nav");

const COLOR_CHANGE_DURATION = 500; // ms
const COLOR_CHANGE_INTERVAL = 16; // ms
const COLOR_CHANGE_STEP = COLOR_CHANGE_INTERVAL / COLOR_CHANGE_DURATION;

let navColor = "blue";
let navColorStart;
let navColorEnd;

window.addEventListener('scroll', function() {
    if (window.scrollY >= SCROLL_THRESHOLD && navColor === "blue") {
        navColor = "red";
        navColorStart = performance.now();
        navColorEnd = navColorStart + COLOR_CHANGE_DURATION;
        requestAnimationFrame(updateNavColor);
    }
    else if (window.scrollY < SCROLL_THRESHOLD && navColor === "red") {
        navColor = "blue";
        navColorStart = performance.now();
        navColorEnd = navColorStart + COLOR_CHANGE_DURATION;
        requestAnimationFrame(updateNavColor);
    }
    });

    function updateNavColor(timestamp) {
        const progress = (timestamp - navColorStart) / COLOR_CHANGE_DURATION;
        if (progress >= 1) {
            NAV.style.backgroundColor = navColor;
            return;
        }

    NAV.style.backgroundColor = `rgba(${parseInt("ff", 16)},${parseInt("00", 16)},${parseInt("ff", 16)},${progress})`;
    requestAnimationFrame(updateNavColor);

    }