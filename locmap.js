mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2FhbmRyZW9zZSIsImEiOiJjbHF2OHNwamUyN3hoMmttd3F3a2xiNTF2In0.qJlH0NzCrTZotCID358FHA'; // Replace with your Mapbox API key

const mappa = new mapboxgl.Map({
  container: 'map-box',
  style: 'mapbox://styles/ericaandreose/clqvgxzcs00zv01o36el44ju0',
  center: [0, 0],
  zoom: 1.5 // Initial zoom level
});

