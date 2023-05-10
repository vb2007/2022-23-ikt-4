const SCROLL_THRESHOLD = 69; // px

const NAV = document.getElementById("nav");

window.addEventListener('scroll', function() {
    if (window.scrollY >= SCROLL_THRESHOLD) {
        NAV.style.backgroundColor = "red";
    }
    else {
        NAV.style.backgroundColor = "blue";
    }
});
  