alert('test1 done, menu script here');
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
            if (cahedState) {   
                $('#menu-list').removeClass('menu-hidden');
                $('.section-content, #footer').removeAttr('style');
            } else {            
                $('#menu-list').addClass('menu-hidden');
            }
            cachedWidth = newWidth;
            cahedState = newState;
        }
    });

    $menuToogler.on('click', function () {
        tooglerContent.toogle();
        $('#menu-list').toggleClass('menu-hidden');
    });
})();

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
        $("#menu [data-menu].hidden").slideToggle("fast");
        if (isMobileScreen()) {
            contentToggle.toogle();
        }
    });
})();