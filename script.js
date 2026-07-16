// สร้างแผนที่
const map = L.map("map").setView([13.7563,100.5018],11);

// แผนที่ OpenStreetMap
L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
    attribution:"© OpenStreetMap"
}
).addTo(map);
