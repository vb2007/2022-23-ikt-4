const SCROLL_THRESHOLD = 100; // px
const NAV = document.getElementsByClassName("nav")[0];
const COLOR_CHANGE_DURATION = 500; // ms
const COLOR_CHANGE_INTERVAL = 16; // ms
const ALPHA_CHANGE_STEP = 1 / (COLOR_CHANGE_DURATION / COLOR_CHANGE_INTERVAL);
let navColor = "blue";
let navAlpha = 0;
let navColorStart;
let navColorEnd;

window.addEventListener('scroll', function() {
  if (this.window.scrollY >= SCROLL_THRESHOLD) {
    NAV.classList.add("nav_gorgetett");
  }
  else NAV.classList.remove("nav_gorgetett");
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