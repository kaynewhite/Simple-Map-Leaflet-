// starting view ng map mo
var map = L.map('map').setView([14.544353685802088, 121.06898321287294], 13);

// tiles ng openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// chords ng mga places
var places = [
  { coords: [14.550771531576594, 121.06811417716808], name: "Home", note: "Where my story began." },
  { coords: [14.43040103174962, 121.44928790409115], name: "School", note: "Learned and grew here." },
  { coords: [14.455022208091533, 121.469844353975], name: "Eco Park", note: "Peaceful place to relax." },
  { coords: [14.960914993022044, 120.89034809868872], name: "The Spot", note: "Had amazing memories here." },
  { coords: [14.412900392745208, 121.44852079261598], name: "Favorite Spotting Area", note: "Dami chix." },
];

// markers ng mga places
places.forEach(p => {
  L.marker(p.coords).addTo(map)
    .bindPopup(`<b>${p.name}</b><br>${p.note}`);
});
