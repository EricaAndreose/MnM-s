mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2FhbmRyZW9zZSIsImEiOiJjbHF2OHNwamUyN3hoMmttd3F3a2xiNTF2In0.qJlH0NzCrTZotCID358FHA';

// Define map variable in a higher scope
let map;

// Function to initialize the map
function initializeMap() {
  return new mapboxgl.Map({
    container: 'map-box',
    style: 'mapbox://styles/ericaandreose/clr5fspy401hb01qr7elchsk7',
    center: [0, 0],
    zoom: 0.2 // Initial zoom level
  });
}

// Define an array to keep track of markers
const markers = [];

// Function to add markers based on .place elements
function addMarkers() {
  // Clear existing markers from the map
  markers.forEach(marker => marker.remove());
  markers.length = 0; // Clear the array

  // Process place spans and add custom-shaped markers within the "externalContentColumn" div
  const externalContentColumn = document.getElementById('externalContentColumn');
  const placeSpans = externalContentColumn.querySelectorAll('.place');

  placeSpans.forEach(span => {
    const placeName = span.textContent;

    // Use Mapbox Geocoding API to get coordinates for the place
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${placeName}.json?access_token=${mapboxgl.accessToken}`)
      .then(response => response.json())
      .then(data => {
        if (data.features.length > 0) {
          const coordinates = data.features[0].geometry.coordinates;

          // Create a custom-shaped marker and add it to the map
          const marker = new mapboxgl.Marker({
            element: createCustomMarkerElement(placeName), // Custom marker element
          })
            .setLngLat(coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h2>${placeName}</h2>`))
            .addTo(map);

          // Add the marker to the array for tracking
          markers.push(marker);

          // Log success message to the console for debugging
          console.log(`Marker added for ${placeName}`);
        } else {
          // Log an error message to the console if no features are found
          console.error(`No features found for ${placeName}`);
        }
      })
      .catch(error => console.error(error));
  });
}


function createCustomMarkerElement(placeName) {
  const el = document.createElement('div');
  el.className = 'custom-marker';
  el.innerHTML = '<div style="width: 20px; height: 20px; color: red; font-size: 18px; position: relative;">X</div>';

  return el;
}


document.addEventListener('DOMContentLoaded', function () {
  const styleButtons = document.querySelectorAll('.jsstyle');
  map = initializeMap(); // Assign the map to the global variable

  styleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedStyle = this.getAttribute('map-style');
      map.setStyle(selectedStyle);
    });
  });
});