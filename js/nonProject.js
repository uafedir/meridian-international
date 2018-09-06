//script for non project pages

//animate open menu
(function () {

    const $menuToogler = $("#menu-toggler");
    const animateContentDown = function () {
        if (isMobileScreen()) {
            $('.section-content, #footer').animate({
                    top: $('#menu-list').outerHeight()
                },
                {
                    duration: 150
                }
            );
        }

    };
    const animateContentUp = function () {
        if (isMobileScreen()) {
            $('.section-content, #footer').animate({
                    top: '0px'
                },
                {
                    duration: 150
                }
            );
        }
    };
    const tooglerContent = toogler(animateContentDown, animateContentUp);

    let cachedWidth = $(window).width();
    let cahedState = isMobileScreen();
    $(window).resize(function () {
        const newWidth = $(window).width();
        const newState = isMobileScreen();
        if (cahedState !== newState && newWidth !== cachedWidth) {
            if (cahedState) {   // transition from mobile screen to desktop
                $('#menu-list').removeClass('menu-hidden');
                $('.section-content, #footer').removeAttr('style');
            } else {            // transition from desktop to mobile screen
                $('#menu-list').addClass('menu-hidden');
            }
            cachedWidth = newWidth;
            cahedState = newState;
        }
    });

    $menuToogler.on('click', function () {
        //$('#menu-list').addClass('menu-transition');
        tooglerContent.toogle();
        $('#menu-list').toggleClass('menu-hidden');
    });
})();

//animate open projects in menu and slide down content on mobile
(function () {
    const animateContentUpProjects = function () {
        $('.section-content').animate({
                top: `+=${3 * $("#menu .menu-item").outerHeight()}px`
            },
            {
                duration: 150
            }
        );
    };
    const animateContentDownProjects = function () {
        $('html:not(.parallax) .section-content').animate({
                top: `-=${3 * $("#menu .menu-item").outerHeight()}px`
            },
            {
                duration: 150
            }
        );
    };
    const contentToggle = toogler(animateContentUpProjects, animateContentDownProjects);
    $("#menu [data-menu=project]").click(function () {
        //open projects
        $("#menu [data-menu].hidden").slideToggle("fast");
        //slide down content
        if (isMobileScreen()) {
            contentToggle.toogle();
        }
    });
})();



