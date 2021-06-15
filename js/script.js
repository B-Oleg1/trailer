let showTrailer = document.getElementById('showTrailer'),
    showSpareParts = document.getElementById('showSpareParts'),
    showTowBars = document.getElementById('showTowBars'),
    trailer = document.getElementById('trailer'),
    spareParts = document.getElementById('spareParts'),
    towBars = document.getElementById('towBars');

showTrailer.addEventListener('click', function() {
    trailer.style.display = 'block';
    towBars.style.display = 'none';
    spareParts.style.display = 'none';
});

showSpareParts.addEventListener('click', function() {
    spareParts.style.display = 'block';
    trailer.style.display = 'none';
    towBars.style.display = 'none';
});

showTowBars.addEventListener('click', function() {
    towBars.style.display = 'block';
    trailer.style.display = 'none';
    spareParts.style.display = 'none';
});