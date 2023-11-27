// Create a map instance and set its center and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (e.g., OpenStreetMap) to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A marker on the map!')
    .openPopup();
