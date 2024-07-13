// Initialize the map centered on Esquimalt
var map = L.map('map').setView([48.4299, -123.415], 20);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// // Object to hold tile layers
// var tileLayers = {};

// // Fetch tile layer directories from the server
// fetch('/tile-directories')
//     .then(response => response.json())
//     .then(directories => {
//         directories.forEach(directory => {
//             var tileLayer = L.tileLayer(`/static/tiles/${directory}/{z}/{x}/{y}.png`, {
//                 tms: true,
//                 attribution: '&copy; Generated Tiles'
//             });

//             // Store the tile layer without adding it to the map
//             tileLayers[directory] = tileLayer;

//             // Create a checkbox for each layer
//             var checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.id = directory;
//             checkbox.addEventListener('change', function() {
//                 if (this.checked) {
//                     tileLayers[directory].addTo(map);
//                 } else {
//                     map.removeLayer(tileLayers[directory]);
//                 }
//             });

//             // Create a label for the checkbox
//             var label = document.createElement('label');
//             label.htmlFor = directory;
//             label.appendChild(document.createTextNode(directory));

//             // Append the checkbox and label to the layers control div
//             var controlDiv = document.getElementById('layers-control');
//             controlDiv.appendChild(checkbox);
//             controlDiv.appendChild(label);
//             controlDiv.appendChild(document.createElement('br'));
//         });
//     })
//     .catch(error => console.error('Error fetching tile directories:', error));
