//script for project pages

//animate open menu
(function() {
    const $menuToogler = $("#menu-toggler");
    const $menuMain = $("#menu-list-main");
    const $menuList = $("#menu-list");
    $menuMain.css('top', -$menuMain.outerHeight()).removeClass('hidden');
    $menuList.css('top', isMobileScreen() ? -$menuMain.outerHeight() - $menuList.outerHeight() - 3 : -$menuMain.outerHeight()).removeClass('hidden');
    $("#menu").css("height", $menuToogler.outerHeight() + $menuList.outerHeight() + 3);



    const animateMenuDown = function () {
        $menuList.animate({
            top: $menuList.outerHeight() + 'px'
        }, {
            duration: 350,
            complete: function () {
                $menuMain.removeClass('hidden');
                $menuMain.animate({
                        top: '0px'
                    },
                    {
                        duration: 150
                    });
                $menuList.addClass('hidden');
            }
        });
    };

    const animateMenuUp = function () {
        $menuMain.animate({
            top: -$menuMain.outerHeight() + 'px'
        }, {
            duration: 150,
            complete: function () {
                $menuList.removeClass('hidden');
                $menuList.animate({
                        top: '0px'
                    },
                    {
                        duration: 350
                    }
                );
                $menuMain.addClass('hidden');
            }
        });
    };


    const animateContentUp = function () {
        if (isMobileScreen()){
            $('.section-content, #footer').animate({
                    top: $menuList.outerHeight()
                },
                {
                    duration: 350
                }
            );
        }

    };
    const animateContentDown = function () {
        if(isMobileScreen()){
            $('.section-content, #footer').animate({
                    top: '0px'
                },
                {
                    duration: 350
                }
            );
        }
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
        tooglerMenu.reset();
        clicked = false;
        event.stopPropagation();
    };
    let clicked = false;
    $menuToogler.click(function () {
        if (isMobileScreen()) {
            if (clicked) {
                tooglerMenu.toogle();
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
            tooglerMenu.toogle();
        }
    });

    // let cachedWidth = $(window).width();
    // $(window).resize(function () {
    //     const newWidth = $(window).width();
    //     if (newWidth !== cachedWidth) {
    //         $menuList.css('top', !isMobileScreen() ? -$menuMain.outerHeight() : -$menuMain.outerHeight() - $menuList.outerHeight() - 3);
    //         cachedWidth = newWidth;
    //     }
    // });

    let cachedWidth = $(window).width();
    let cahedState = isMobileScreen();
    $(window).resize(function () {
        const newWidth = $(window).width();
        const newState = isMobileScreen();
        if (cahedState !== newState && newWidth !== cachedWidth) {

            tooglerMenu.reset();
            clicked = false;
            if (cahedState) {   // transition from mobile screen to desktop
                $menuMain.css('top', -$menuMain.outerHeight()).removeClass('hidden');
                $menuList.css('top', -$menuMain.outerHeight()).removeClass('hidden');
                $('.close-button').remove();
                // $('#menu-list').removeClass('menu-hidden');
                $('.section-content, #footer').removeAttr('style');
            } else {            // transition from desktop to mobile screen
                $menuList.css('top',-$menuMain.outerHeight() - $menuList.outerHeight() - 3).removeClass('hidden');
                $menuMain.css('top', -$menuMain.outerHeight()).removeClass('hidden');

                // $('#menu-list').addClass('menu-hidden');
            }
            cachedWidth = newWidth;
            cahedState = newState;
        }
    });


})();

//animate open projects in menu
(function() {
    $("#menu [data-menu=project]").click(function () {
        $("#menu [data-menu].hidden").slideToggle("fast");
    });
})();

(function() {
    $("#menu [data-menu=brochure]").click(function () {
        $("#menu [data-menu].hidden-brochure").slideToggle("fast");
    });
})();
//set dark palette
// (function () {
//   const panels = $.makeArray($('.panel:not(.image-panel, .p-0, .content-main .panel)'));
//   panels.forEach(function (panel) {
//       const number = Math.floor((Math.random() * 2));
//       switch (number) {
//         case 0:
//           panel.classList.add("very-darker");
//           break;
//         case 1:
//           panel.classList.add("gray");
//           break;
//       }
//     }
//   );
// })();