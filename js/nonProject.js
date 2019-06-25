"use strict";

//script for non project pages
//animate open menu
(function () {
  var $menuToogler = $("#menu-toggler");

  var animateContentDown = function animateContentDown() {
    if (isMobileScreen()) {
      $('.section-content, #footer').animate({
        top: $('#menu-list').outerHeight()
      }, {
        duration: 150
      });
    }
  };

  var animateContentUp = function animateContentUp() {
    if (isMobileScreen()) {
      $('.section-content, #footer').animate({
        top: '0px'
      }, {
        duration: 150
      });
    }
  };

  var tooglerContent = toogler(animateContentDown, animateContentUp);
  var cachedWidth = $(window).width();
  var cahedState = isMobileScreen();
  $(window).resize(function () {
    var newWidth = $(window).width();
    var newState = isMobileScreen();

    if (cahedState !== newState && newWidth !== cachedWidth) {
      if (cahedState) {
        // transition from mobile screen to desktop
        $('#menu-list').removeClass('menu-hidden');
        $('.section-content, #footer').removeAttr('style');
      } else {
        // transition from desktop to mobile screen
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
})(); //animate open projects in menu and slide down content on mobile


(function () {
  var animateContentUpProjects = function animateContentUpProjects() {
    $('.section-content').animate({
      top: "+=".concat(3 * $("#menu .menu-item").outerHeight(), "px")
    }, {
      duration: 150
    });
  };

  var animateContentDownProjects = function animateContentDownProjects() {
    $('html:not(.parallax) .section-content').animate({
      top: "-=".concat(3 * $("#menu .menu-item").outerHeight(), "px")
    }, {
      duration: 150
    });
  };

  var contentToggle = toogler(animateContentUpProjects, animateContentDownProjects);
  $("#menu [data-menu=project]").click(function () {
    //open projects
    $("#menu [data-menu].hidden").slideToggle("fast"); //slide down content

    if (isMobileScreen()) {
      contentToggle.toogle();
    }
  });
})();