function load_map() {
    var location = [38.72968, -9.14605]
    var map = L.map('map').setView(location, 17);

    var pin = L.icon({
        iconUrl: "../resources/map_pin.png",
        iconSize:     [30, 52],
        iconAnchor:   [15, 50],
    });
    L.marker(location, {icon: pin}).addTo(map);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}