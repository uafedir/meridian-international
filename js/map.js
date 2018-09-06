var mymap = L.map('mapid').setView([11.544239, 104.9262265], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 16,
    minZoom: 12,
    id: 'mapbox.run-bike-hike',
    accessToken: 'pk.eyJ1IjoicG9wY29ybnVhIiwiYSI6ImNqa3V3anhnMTA5c2Izc3EyaDNkeXpndm0ifQ.M-7kYgptBYJGRxKo1tA22w',
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
            html: '<h5>CASA</h5>',
            title: "casa"
        },
        position: [11.5485652, 104.937389]
    },
    skylar: {
        icon: {
            className: 'custom-marker-left-up skylar',
            html: '<h5>SKYLAR</h5>',
            title: "skylar"
        },
        position: [11.5358442, 104.926587]
    },
    last: {
        icon: {
            className: 'custom-marker-left-up last',
            html: '<h5>3RD</h5>',
            title: '3rd'
        },
        position: [11.549400, 104.929057]
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
    }
    $('.map-content').show();
    for (const markerKey in markerData) {
        $(`.map-content [data-flag-title=${markerData[markerKey].icon.title}]`).hide();
        $(`.${markerKey}`).removeClass('active');
    }
    $(`.map-content [data-flag-title=${title}]`).show();
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
            $("#menu [data-menu].hidden").slideToggle("fast");
        });
    }
})();