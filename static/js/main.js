// Initialize the map centered on Esquimalt
var map = L.map('map').setView([48.4299, -123.415], 20
);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Create GeoTIFF layers
var layer1 = new L.LeafletGeotiff('/tiffs/alternate_4326.tif', {
    renderer: new L.LeafletGeotiff.Plotty({
        displayMin: 0,
        displayMax: 255,
        colorScale: 'viridis'
    })
});

var layer2 = new L.LeafletGeotiff('/tiffs/constance_4326.tif', {
    renderer: new L.LeafletGeotiff.Plotty({
        displayMin: 0,
        displayMax: 255,
        colorScale: 'viridis'
    })
});

// Initially hide the layers
map.removeLayer(layer1);
map.removeLayer(layer2);

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
