// Jelenlegi ikon eltárolása
var current = 0;
var icons = ['https://icons-for-free.com/iconfiles/png/512/scan-131979013378547785.png',
 'https://cdn-icons-png.flaticon.com/512/6927/6927609.png'];
// Ikno cseréje/frissítése fél másodpercenként
setInterval(function () {
    // Következő ikon beolvasása
    var icon = (++current % icons.length);
    // Ikon linkjének megragadása
    var url = icons[icon];
    // Elemek frissítése
    document.getElementById('icon-a').href = url;
    document.getElementById('icon-b').href = url;
}, 500);