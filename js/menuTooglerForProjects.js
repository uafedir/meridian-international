const $menuToogler = $("#menu-toggler");
const $menuMain = $("#menu-list-main");
const $menuList = $("#menu-list");
$menuMain.css('top', -$menuMain.outerHeight()).show();
$menuList.css('top', !isMobileScreen() ? -$menuMain.outerHeight() : -$menuMain.outerHeight() - $menuList.outerHeight() - 3);
$("#menu").css("height", $menuToogler.outerHeight() + $menuList.outerHeight());
$(window).on('resize', function () {
    $menuList.css('top', !isMobileScreen() ? -$menuMain.outerHeight() : -$menuMain.outerHeight() - $menuList.outerHeight() - 3);
});

const animateMenuDown = function () {
    $menuMain.removeClass('hidden');
    $menuList.animate({
        top: ($menuList.outerHeight() + 3) + 'px'
    }, {
        duration: 350,
        complete: function () {
            $menuMain.animate({
                    top: '0px'
                },
                {
                    duration: 150,
                });
            $menuList.addClass('hidden');
        }
    });
};
const animateMenuUp = function () {
    $menuList.removeClass('hidden');
    $menuMain.animate({
        top: -$menuMain.outerHeight() + 'px'
    }, {
        duration: 150,
        complete: function () {
            $menuList.animate({
                    top: -$menuMain.outerHeight() + 'px'
                },
                {
                    duration: 350,
                }
            );
            $menuMain.addClass('hidden');
        }
    });
};

const animateContentUp = function () {
    $('html:not(.parallax) .section-content').animate({
            top: $menuList.outerHeight()
        },
        {
            duration: 350
        }
    );
};
const animateContentDown = function () {
    $('html:not(.parallax) .section-content').animate({
            top: '0px'
        },
        {
            duration: 350
        }
    );
};

const tooglerMenu = toogler(animateMenuDown, animateMenuUp);
const onCloseMenu = function (event) {
    $menuMain.animate({
            top: -$menuMain.outerHeight()
        },
        {
            duration: 350,
            complete: function () {
                $menuMain.removeClass('hidden');
                $menuList.removeClass('hidden');
            }
        });
    $menuList.animate({
            top: -$menuMain.outerHeight() - $menuList.outerHeight() - 3
        },
        {
            duration: 350,
            complete: function () {
                $menuMain.removeClass('hidden');
                $menuList.removeClass('hidden');
            }
        });
    animateContentDown();
    $('.close-button').remove();
    clicked = false;
    event.stopPropagation();
};
let clicked = false;
$menuToogler.click(function () {
    if (isMobileScreen()) {
        if (clicked) {
            tooglerMenu();
        } else {
            $('#menu-toggler').append('<i class="oi oi-x close-button"></i>');
            $('.close-button').click(onCloseMenu);
            $menuList.animate({
                top: -$menuMain.outerHeight() + 'px'
            }, {
                duration: 350
            });
            animateContentUp();
            clicked = true;
        }
    } else {
        tooglerMenu();
    }
});