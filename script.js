function showcity(lat, lon, cityName = "Selected City") {
    document.getElementById("cityName").innerText = cityName;

    let mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01}%2C${lat - 0.01}%2C${lon + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lon}`;

    let mapFrame = document.getElementById("mapFrame")
    mapFrame.src = mapUrl;
}
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            showcity(lat, lon, "My Current Location");
        });
    }
    else {
        alert("Geolocation is not supported by your browser.")
    }
}
