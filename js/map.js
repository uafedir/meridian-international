// var mymap = L.map('mapid').setView([11.544239, 104.9262265], 14);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     maxZoom: 16,
//     minZoom: 12,
//     id: 'mapbox.run-bike-hike',
//     accessToken: 'pk.eyJ1IjoicG9wY29ybnVhIiwiYSI6ImNqa3V3anhnMTA5c2Izc3EyaDNkeXpndm0ifQ.M-7kYgptBYJGRxKo1tA22w',
//     maxBoundsViscosity: 0.9,
//     bounceAtZoomLimits: false,
//     zoomControl: true,
//     tms: false,
//     noWrap: true,
//     opacity: 1.0,
// }).addTo(mymap);

L.mapbox.accessToken = 'pk.eyJ1IjoiZGVudm9sIiwiYSI6ImNqb2VmdDMxazFuOWYzdm9qc2RrMmFzNGUifQ.PI8PZeCUIHPdDiL2-qW8RQ';
var mymap = L.map('mapid').setView([11.56, 104.91], 14);

// Add tiles from the Mapbox Static API tiles endpoint
// (https://www.mapbox.com/api-documentation/#retrieve-raster-tiles-from-styles)
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    'https://api.mapbox.com/styles/v1/denvol/cjoefwnl140r02spaivah9ulu/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 16,
        minZoom: 12,
        maxBoundsViscosity: 0.9,
        bounceAtZoomLimits: false,
        zoomControl: true,
        tms: false,
        noWrap: true,
        opacity: 1.0,
    }).addTo(mymap);

mymap.setMaxBounds([
    [11.475132, 104.8365973],
    [11.622882, 105.020376]
]);
const markerData = {
    casa: {
        icon: {
            className: 'custom-marker-right-up casa',
            html: '<h5>CASA BY MERIDIAN</h5>',
            title: "casa"
        },
        position: [11.5485652, 104.937389]
    },
    skylar: {
        icon: {
            className: 'custom-marker-left-up skylar',
            html: '<h5>SKYLAR BY MERIDIAN</h5>',
            title: "skylar"
        },
        position: [11.5358442, 104.926587]
    },
    flatiron: {
        icon: {
            className: 'custom-marker-left-up flatiron',
            html: '<h5>FLATIRON BY MERIDIAN</h5>',
            title: 'flatiron'
        },
        position: [11.5726359, 104.9077589]
    }
};

for (const markerDataKey in markerData) {
    const marker = L.marker(markerData[markerDataKey].position, {
        icon: L.divIcon(markerData[markerDataKey].icon)
    }).addTo(mymap);
    marker.on('click', onCustomMarkerClick);
}

function onCustomMarkerClick(e) {
    const title = e.target.options.icon.options.title;
    const className = e.target.options.icon.options.className;
    $('#menu-list').hide();
    $('#menu').addClass('showed-map-content');
    if ($('#menu-toggler .close-button').length === 0) {
        $('#menu-toggler').addClass('close-panel');
        $('#menu-toggler').append('<i class="oi oi-x close-button"></i>');
        $('.close-button').click(function (event) {
                $('#menu-list').show();
                $('#menu').removeClass('showed-map-content');
                $('.map-content').hide();
                for (const markerKey in markerData) {
                    $(`.map-content [data-flag-title=${markerData[markerKey].icon.title}]`).hide();
                    $(`.${markerKey}`).removeClass('active');
                }
                $('.close-button').remove();
                event.stopPropagation();
            }
        );
        $('.close-panel').click(function (event) {
            $('#menu').removeClass('showed-map-content');
            $('.map-content').hide();
            $('.close-button').remove();
            $('#menu-list').show();
            $('#menu-list').removeClass('close-panel');
            event.stopPropagation();
        });
    }
    $('.map-content').show();
    for (const markerKey in markerData) {
        $(`.map-content [data-flag-title=${markerData[markerKey].icon.title}]`).hide().find('.slideshow').removeClass('active');
        $(`.${markerKey}`).removeClass('active');
    }
    $(`.map-content [data-flag-title=${title}]`).show().find('.slideshow').addClass('active');
    $(`.${className.split(' ').join('.')}`).addClass('active');
}

(function () {

    const $menuToogler = $("#menu-toggler");

    let cachedWidth = $(window).width();
    let cahedState = isMobileScreen();
    $(window).resize(function () {
        const newWidth = $(window).width();
        const newState = isMobileScreen();
        if (cahedState !== newState && newWidth !== cachedWidth) {
            if (cahedState) {   // transition from mobile screen to desktop
                $('#menu-list').removeClass('menu-hidden');
            } else {            // transition from desktop to mobile screen
                $('#menu-list').addClass('menu-hidden');
            }
            cachedWidth = newWidth;
            cahedState = newState;
        }
    });

    $menuToogler.on('click', function () {
        //$('#menu-list').addClass('menu-transition');
        $('#menu-list').toggleClass('menu-hidden');
    });
})();

//animate open projects in menu
(function () {
    if (!$('#menu').hasClass('showed-map-content')) {
        $("#menu [data-menu=project]").click(function () {
            //open projects
            $("#menu [data-menu=map],#menu [data-menu=casa],#menu [data-menu=skylar],#menu [data-menu=Flatiron]").slideToggle("fast");
        });
    }
})();