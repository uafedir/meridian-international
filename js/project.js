"use strict";

//script for project pages
//animate open menu
(function () {
  var $menuToogler = $("#menu-toggler");
  var $menuMain = $("#menu-list-main");
  var $menuList = $("#menu-list");
  $menuMain.css('top', -$menuMain.outerHeight()).removeClass('hidden');
  $menuList.css('top', isMobileScreen() ? -$menuMain.outerHeight() - $menuList.outerHeight() - 3 : -$menuMain.outerHeight()).removeClass('hidden');
  $("#menu").css("height", $menuToogler.outerHeight() + $menuList.outerHeight() + 180);

  var animateMenuDown = function animateMenuDown() {
    $menuList.animate({
      top: $menuList.outerHeight() + 'px'
    }, {
      duration: 350,
      complete: function complete() {
        $menuMain.removeClass('hidden');
        $menuMain.animate({
          top: '0px'
        }, {
          duration: 150
        });
        $menuList.addClass('hidden');
      }
    });
  };

  var animateMenuUp = function animateMenuUp() {
    $menuMain.animate({
      top: -$menuMain.outerHeight() + 'px'
    }, {
      duration: 150,
      complete: function complete() {
        $menuList.removeClass('hidden');
        $menuList.animate({
          top: '0px'
        }, {
          duration: 350
        });
        $menuMain.addClass('hidden');
      }
    });
  };

  var animateContentUp = function animateContentUp() {
    if (isMobileScreen()) {
      $('.section-content, #footer').animate({
        top: $menuList.outerHeight()
      }, {
        duration: 350
      });
    }
  };

  var animateContentDown = function animateContentDown() {
    if (isMobileScreen()) {
      $('.section-content, #footer').animate({
        top: '0px'
      }, {
        duration: 350
      });
    }
  };

  var tooglerMenu = toogler(animateMenuDown, animateMenuUp);

  var onCloseMenu = function onCloseMenu(event) {
    $menuMain.animate({
      top: -$menuMain.outerHeight()
    }, {
      duration: 350,
      complete: function complete() {
        $menuMain.removeClass('hidden');
        $menuList.removeClass('hidden');
      }
    });
    $menuList.animate({
      top: -$menuMain.outerHeight() - $menuList.outerHeight() - 3
    }, {
      duration: 350,
      complete: function complete() {
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

  var clicked = false;
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
  }); // let cachedWidth = $(window).width();
  // $(window).resize(function () {
  //     const newWidth = $(window).width();
  //     if (newWidth !== cachedWidth) {
  //         $menuList.css('top', !isMobileScreen() ? -$menuMain.outerHeight() : -$menuMain.outerHeight() - $menuList.outerHeight() - 3);
  //         cachedWidth = newWidth;
  //     }
  // });

  var cachedWidth = $(window).width();
  var cahedState = isMobileScreen();
  $(window).resize(function () {
    var newWidth = $(window).width();
    var newState = isMobileScreen();

    if (cahedState !== newState && newWidth !== cachedWidth) {
      tooglerMenu.reset();
      clicked = false;

      if (cahedState) {
        // transition from mobile screen to desktop
        $menuMain.css('top', -$menuMain.outerHeight()).removeClass('hidden');
        $menuList.css('top', -$menuMain.outerHeight()).removeClass('hidden');
        $('.close-button').remove(); // $('#menu-list').removeClass('menu-hidden');

        $('.section-content, #footer').removeAttr('style');
      } else {
        // transition from desktop to mobile screen
        $menuList.css('top', -$menuMain.outerHeight() - $menuList.outerHeight() - 3).removeClass('hidden');
        $menuMain.css('top', -$menuMain.outerHeight()).removeClass('hidden'); // $('#menu-list').addClass('menu-hidden');
      }

      cachedWidth = newWidth;
      cahedState = newState;
    }
  });
})(); //animate open projects in menu

(function () {
  $("#menu [data-menu=brochure-item-1]").click(function () {
    $("#menu [data-menu].hidden-brochure-item-1").slideToggle("fast");
    $("#menu [data-menu].hidden-brochure-item-2").slideUp("fast");
    $("#menu [data-menu].hidden-brochure-item-3").slideUp("fast");
  });
})();

(function () {
  $("#menu [data-menu=brochure-item-2]").click(function () {
    $("#menu [data-menu].hidden-brochure-item-2").slideToggle("fast");
    $("#menu [data-menu].hidden-brochure-item-1").slideUp("fast");
    $("#menu [data-menu].hidden-brochure-item-3").slideUp("fast");
  });
})();

(function () {
  $("#menu [data-menu=brochure-item-3]").click(function () {
    $("#menu [data-menu].hidden-brochure-item-3").slideToggle("fast");
    $("#menu [data-menu].hidden-brochure-item-2").slideUp("fast");
    $("#menu [data-menu].hidden-brochure-item-1").slideUp("fast");
  });
})();

(function () {
  $("#menu [data-menu=project]").click(function () {
    $("#menu [data-menu].hidden").slideToggle("fast");
  });
})();

(function () {
  $("#menu [data-menu=brochure]").click(function () {
    $("#menu [data-menu].hidden-brochure").slideToggle("fast");
    $("#menu [data-menu].hidden-brochure-item-1").slideUp("fast");
    $("#menu [data-menu].hidden-brochure-item-2").slideUp("fast");
    $("#menu [data-menu].hidden-brochure-item-3").slideUp("fast");
  });
})(); //set dark palette
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