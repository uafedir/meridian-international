$(window).on('load resize', function () {
    $('html:not(.parallax) #menu-list').addClass('menu-hidden');
    $('.parallax #menu-list').removeClass('menu-hidden');
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
    $('#menu-list').addClass('menu-transition');
    tooglerContent();
    $('#menu-list').toggleClass('menu-hidden');
});