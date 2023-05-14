const SCROLL_THRESHOLD = 100; // px
const NAV = document.getElementsByClassName("nav")[0];

window.addEventListener('scroll', function() {
  if (this.window.scrollY >= SCROLL_THRESHOLD) NAV.classList.add("nav_gorgetett");
  else NAV.classList.remove("nav_gorgetett");
});