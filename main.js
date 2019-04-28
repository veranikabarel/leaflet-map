let mymap = L.map('mapid', {
    doubleClickZoom: false,
    closePopupOnClick: false,
}).fitWorld();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

mymap.on('click', onMapClick);

function onMapClick(e) {
    addMarker(e.latlng);
    addPlaces(e.latlng)
}

function addMarker(latlng) {
    L.marker(latlng, {
        draggable: true
    }).addTo(mymap);
}

function addPlaces(latlng) {
    var table = document.getElementById("list");
    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode(latlng));
    table.appendChild(tr);
}