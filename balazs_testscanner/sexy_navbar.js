const SCROLL_THRESHOLD = 69; // px
const NAV = document.getElementById("nav");
const COLOR_CHANGE_DURATION = 500; // ms
const COLOR_CHANGE_INTERVAL = 16; // ms
const ALPHA_CHANGE_STEP = 1 / (COLOR_CHANGE_DURATION / COLOR_CHANGE_INTERVAL);
let navColor = "blue";
let navAlpha = 0;
let navColorStart;
let navColorEnd;

window.addEventListener('scroll', function() {
  if (window.scrollY >= SCROLL_THRESHOLD && navColor === "blue") {
    navColor = "red";
    navAlpha = 0;
    navColorStart = performance.now();
    navColorEnd = navColorStart + COLOR_CHANGE_DURATION;
    requestAnimationFrame(updateNavColor);
  } else if (window.scrollY < SCROLL_THRESHOLD && navColor === "red") {
    navColor = "blue";
    navAlpha = 0;
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
  navAlpha += ALPHA_CHANGE_STEP;
  NAV.style.backgroundColor = `rgba(${parseInt("ff", 16)},${parseInt("00", 16)},${parseInt("ff", 16)},${navAlpha})`;
  requestAnimationFrame(updateNavColor);
}
