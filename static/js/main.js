// Initialize the map centered on Esquimalt
var map = L.map('map').setView([48.4299, -123.415], 20
);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Placeholder for georeferenced TIFF layers
var layer1 = L.imageOverlay('/tiffs/placeholder1.tiff', [[48.428, -123.369], [48.43, -123.365]]).addTo(map);
var layer2 = L.imageOverlay('/tiffs/placeholder2.tiff', [[48.428, -123.37], [48.43, -123.366]]);

// Initially hide the layers
layer1.remove();
layer2.remove();

// Layer control logic
document.getElementById('layer1').addEventListener('change', function() {
    if (this.checked) {
        layer1.addTo(map);
    } else {
        map.removeLayer(layer1);
    }
});

document.getElementById('layer2').addEventListener('change', function() {
    if (this.checked) {
        layer2.addTo(map);
    } else {
        map.removeLayer(layer2);
    }
});
