// Initialize the map centered on Esquimalt
var map = L.map('map').setView([48.4299, -123.415], 20
);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define the options for the GeoTIFF layer using the RGB renderer
var options = {
    renderer: new L.LeafletGeotiff.rgb({
        rBand: 0,
        gBand: 1,
        bBand: 2,
        alphaBand: 0,
        transpValue: 0
    })
};

// Create GeoTIFF layers
var layer1 = L.leafletGeotiff('/tiffs/alternate_4326.tif', options);

var layer2 = new L.LeafletGeotiff('/tiffs/constance_4326.tif', {
    renderer: new L.LeafletGeotiff.rgb({
        rBand: 0,
        // Optional, band index to use as G-band
        gBand: 1,
        // Optional, band index to use as B-band
        bBand: 2,
        // band index to use as alpha-band
        // NOTE: this can also be used in combination with transpValue, then referring to a
        // color band specifying a fixed value to be interpreted as transparent
        alphaBand: 0,
        // for all values equal to transpValue in the band alphaBand, the newly created alpha
        // channel will be set to 0 (transparent), all other pixel values will result in alpha 255 (opaque)
        transpValue: 0,
        renderer: renderer,
    })
});

// // Initially hide the layers
// map.removeLayer(layer1);
// map.removeLayer(layer2);

// // Layer control logic
// document.getElementById('layer1').addEventListener('change', function() {
//     if (this.checked) {
//         layer1.addTo(map);
//     } else {
//         map.removeLayer(layer1);
//     }
// });

// document.getElementById('layer2').addEventListener('change', function() {
//     if (this.checked) {
//         layer2.addTo(map);
//     } else {
//         map.removeLayer(layer2);
//     }
// });
