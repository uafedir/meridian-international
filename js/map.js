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
    zoomControl:true,
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
    html: '<div>LAGOM</div><div>sdklvsmd</div>',
});

var customMarkerLeftUp = L.marker([51.48, -0.095], {
    icon: myIconLeftUp,
    title: "customLeftUp"
}).addTo(mymap);



//RightUp
var myIconRightUp = L.divIcon({
    className: 'custom-marker-right-up',
    html: '<div>LAGOM</div><div>sdklvsmd</div>',

});

var customMarkerRightUp = L.marker([51.48, -0.095], {
    icon: myIconRightUp,
    title: "customRightUp"
}).addTo(mymap);



//LeftDown
var myIconLeftDown = L.divIcon({
    className: 'custom-marker-left-down',
    html: '<div>LAGOM</div><div>sdklvsmd</div>',

});

var customMarkerLeftDown = L.marker([51.48, -0.095], {
    icon: myIconLeftDown,
    title: "customLeftDown"
}).addTo(mymap);



//RightDown
var myIconRightDown = L.divIcon({
    className: 'custom-marker-right-down',
    html: '<div>LAGOM</div><div>sdklvsmd</div>',

});

var customMarkerRightDown = L.marker([51.48, -0.095], {
    icon: myIconRightDown,
    title: "customRightDown"
}).addTo(mymap);

const flagMapping = {
   'customLeftUp':1,
   'customRightUp':2,
   'customLeftDown':3,
   'customRightDown':4,
};

function onCustomMarkerClick(e) {
    const number = e.target.options.title;
    console.log(e.target.options.title);
    console.log(flagMapping[number]);
    $('#menu-list').hide();
    $('#menu').css('width', '100%');
    if ($('#menu-toggler .close-button').length === 0){
      $('#menu-toggler').append('<i class="oi oi-x close-button"></i>');
    }
    $('.map-content').show();
    $('.map-content [data-number=1]').hide();
    $('.map-content [data-number=2]').hide();
    $('.map-content [data-number=3]').hide();
    $('.map-content [data-number=4]').hide();
    $(`.map-content [data-number=${flagMapping[number]}]`).show();

}

customMarkerLeftUp.on('click', onCustomMarkerClick);
customMarkerRightUp.on('click', onCustomMarkerClick);
customMarkerRightDown.on('click', onCustomMarkerClick);
customMarkerLeftDown.on('click', onCustomMarkerClick);
