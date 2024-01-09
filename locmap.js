mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2FhbmRyZW9zZSIsImEiOiJjbHF2OHNwamUyN3hoMmttd3F3a2xiNTF2In0.qJlH0NzCrTZotCID358FHA'; // Replace with your Mapbox API key

const mappa = new mapboxgl.Map({
  container: 'map-box',
  style: 'mapbox://styles/ericaandreose/clr5fspy401hb01qr7elchsk7',
  center: [0, 0],
  zoom: 1.5 // Initial zoom level
});

document.addEventListener('DOMContentLoaded', function () {
  const styleButtons = document.querySelectorAll('.jsstyle');

  styleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedStyle = this.getAttribute('map-style');
      mappa.setStyle(selectedStyle);
    });
  });
});