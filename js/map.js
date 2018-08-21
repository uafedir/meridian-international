var mymap = L.map('mapid').setView([51.48, -0.095], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    minZoom: 13,
    id: 'mapbox.run-bike-hike',
    //mapbox.streets
    //mapbox.light
    //mapbox.dark
    //mapbox.satellite
    //mapbox.streets-satellite
    //mapbox.wheatpaste
    //mapbox.streets-basic
    //mapbox.comic
    //mapbox.outdoors
    //mapbox.run-bike-hike
    //mapbox.pencil
    //mapbox.pirates
    //mapbox.emerald
    //mapbox.high-contrast
    accessToken: 'pk.eyJ1IjoicG9wY29ybnVhIiwiYSI6ImNqa3V3anhnMTA5c2Izc3EyaDNkeXpndm0ifQ.M-7kYgptBYJGRxKo1tA22w',
    maxBoundsViscosity: 0.9,
    bounceAtZoomLimits: false,
    zoomControl: true,
    tms: false,
    noWrap: true,
    opacity: 1.0,
}).addTo(mymap);

mymap.setMaxBounds([
    [51.394493, -0.262299],
    [51.583683, 0.040512]
]);


//
//
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }
//
// mymap.on('click', onMapClick);
//

//LeftUp
var myIconLeftUp = L.divIcon({
    className: 'custom-marker-left-up',
    html: '<h5>CASA</h5>',
});

var customMarkerLeftUp = L.marker([51.49, -0.096], {
    icon: myIconLeftUp,
    title: "custom-marker-left-up"
}).addTo(mymap);


//RightUp
var myIconRightUp = L.divIcon({
    className: 'custom-marker-right-up',
    html: '<h5>SKYLAR</h5>',

});

var customMarkerRightUp = L.marker([51.48, -0.095], {
    icon: myIconRightUp,
    title: "custom-marker-right-up"
}).addTo(mymap);


//LeftDown
var myIconLeftDown = L.divIcon({
    className: 'custom-marker-left-down',
    html: '<h5>3RD</h5>',

});

var customMarkerLeftDown = L.marker([51.47, -0.094], {
    icon: myIconLeftDown,
    title: "custom-marker-left-down"
}).addTo(mymap);


const flagMapping = {
    'custom-marker-left-up': 1,
    'custom-marker-right-up': 2,
    'custom-marker-left-down': 3,
};

function onCustomMarkerClick(e) {
    const number = e.target.options.title;
    const className = e.target.options.icon.options.className;
    $('#menu-list').hide();
    $('#menu').addClass('showed-map-content');
    if ($('#menu-toggler .close-button').length === 0) {
        $('#menu-toggler').append('<i class="oi oi-x close-button"></i>');
        $('.close-button').click(function () {
                $('#menu-list').show();
                $('#menu').removeClass('showed-map-content');
                $('.map-content').hide();
                for (var key in flagMapping) {
                    $(`.map-content [data-number=${flagMapping[key]}]`).hide();
                    $(`.${key}`).removeClass('active');
                }
                $('.close-button').remove();
            }
        );
    }
    $('.map-content').show();
    for (var key in flagMapping) {
        $(`.map-content [data-number=${flagMapping[key]}]`).hide();
        $(`.${key}`).removeClass('active');
    }
    $(`.map-content [data-number=${flagMapping[number]}]`).show();
    $(`.${className}`).addClass('active');
}

customMarkerLeftUp.on('click', onCustomMarkerClick);
customMarkerRightUp.on('click', onCustomMarkerClick);
customMarkerLeftDown.on('click', onCustomMarkerClick);
