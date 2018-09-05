// $(window).ready(function () {
//     if (isMobileScreen()) {
//         $('#menu-list').addClass('menu-hidden');
//     } else {
//         $('#menu-list').removeClass('menu-hidden');
//     }
// });

let cachedWidth = $(window).width();
$(window).resize( function () {
    const newWidth = $(window).width();
    if (newWidth !== cachedWidth) {
        if (isMobileScreen()) {
            $('#menu-list').addClass('menu-hidden');
        } else {
            $('#menu-list').removeClass('menu-hidden');
        }
        cachedWidth = newWidth;
    }
});

const $menuToogler = $("#menu-toggler");
const animateContentUp = function () {
    $('html:not(.parallax) .section-content').animate({
            top: $('#menu-list').outerHeight()
        },
        {
            duration: 150
        }
    );
};
const animateContentDown = function () {
    $('html:not(.parallax) .section-content').animate({
            top: '0px'
        },
        {
            duration: 150
        }
    );
};
const tooglerContent = toogler(animateContentUp, animateContentDown);

$menuToogler.on('click', function () {
    //$('#menu-list').addClass('menu-transition');
    tooglerContent();
    $('#menu-list').toggleClass('menu-hidden');
});