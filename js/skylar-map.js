L.mapbox.accessToken = 'pk.eyJ1IjoibWVyaWRpYW5pbnRlcm5hdGlvbmFsIiwiYSI6ImNqb2ZwZ3pyMDA0dW4za213eHdsdWYzZmYifQ.SHgtcRk7sZemuADSZQY3Vg';
var mymap = L.map('map').setView([11.54, 104.92], 14);

L.tileLayer(
    'https://api.mapbox.com/styles/v1/meridianinternational/cjog2mfuv2pyo2st95cw238xp/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 16,
        minZoom: 12,
        maxBoundsViscosity: 0.9,
        bounceAtZoomLimits: false,
        tms: false,
        noWrap: true,
        opacity: 1.0,
    }).addTo(mymap);

mymap.setMaxBounds([
    [11.475132, 104.8365973],
    [11.622882, 105.020376]
]);

const markerData = {
    skylar: {
        icon: {
            className: 'custom-marker-left-up skylar',
            html: '<h5>SKYLAR BY MERIDIAN</h5>',
            title: "skylar"
        },
        position: [11.5358442, 104.926587]
    }
};

for (const markerDataKey in markerData) {
    const marker = L.marker(markerData[markerDataKey].position, {
        icon: L.divIcon(markerData[markerDataKey].icon),
        zIndexOffset: 10000
    }).addTo(mymap);
    marker.on('click', function(){
        window.location = "/map/index.html?mapMarker=skylar";
    })
}

