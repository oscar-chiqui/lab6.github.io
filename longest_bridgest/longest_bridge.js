
//array of objects to hold longest bridges & their data
bridges = [
    {"name": "Verrazano-Narrows Bridge", "city": "New York", "state": "NY", "span": 1298.4, "location": [40.6066, -74.0447]},
    {"name":"Golden Gate Bridge","city":"San Francisco and Marin","state":"CA","span":1280.2, "location":[37.8199,-122.4783]},
    {"name":"Mackinac Bridge","city":"Mackinaw and St Ignance","state":"MI","span":1158.0, "location":[45.8174,-84.7278]},
    {"name":"George Washington Bridge","city":"New York","state":"NY","span":1067.0, "location":[40.8517,-73.9527]},
    {"name":"Tacoma Narrows Bridge","city":"Tacoma and Kitsap","state":"WA","span":853.44, "location":[47.2690, -122.5517]},
]

//console.log(bridges)

let zoomLevel = 4
let middleUS_coordinates = [39.8283, -98.5795]
let map = L.map('bridge-map').setView(middleUS_coordinates,zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2l0dHlzdGlmZiIsImEiOiJja2ZxMmVmdzMwMThhMnhtcXcxdDNuN3d0In0.utlCNGpoPqguCHTEQUzEPg'
}).addTo(map)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//icon creation
let icon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [50,50],
    iconAnchor: [25, 25]
})

bridges.forEach(function (bridge){
    let popupText = `${bridge.name} <br> ${bridge.city}, ${bridge.state} <br> ${bridge.span} Meters long`
    let marker = L.marker(bridge.location, {icon: icon} ).addTo(map)
        .bindPopup(popupText)
        .addTo(map)
})
