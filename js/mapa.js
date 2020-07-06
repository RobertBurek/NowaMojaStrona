var map = L.map('mapid').setView([52.2178, 21.0191], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.1828, 21.0191]).addTo(map)
    .bindPopup('Domaniewska 9/11 <br> 02-663 Warszawa');
    // .openPopup();

nPopup();