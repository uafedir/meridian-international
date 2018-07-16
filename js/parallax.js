var scrollSpeed = 4;
var breakpoint = 768;
var page = $('#page');
var section = $('.page-section');
var sectionTop = [];
var content = $('.section-content');
var scr_h
var scr_w

var sectionsNumber = $('.page-section').length;

$(window).on('load resize', function () {
    scr_h = $(window).height();
    scr_w = $(window).outerWidth();
    let parallax_enable = (scr_w >= breakpoint);
    parallax(parallax_enable);
})

function parallax(parallax_enable) {
    if (parallax_enable) {
        runParallax();
    } else {
        stopParallax();
    }
}

function runParallax() {
    page.addClass('parallax')
    for (let i = 0; i < section.length; i++) {
        $.each(content, function(){$(this).css('top',0)});
        $(section[i]).css('max-height', '');

        let sectionHeight = $(section[i]).outerHeight();
        let contentHeight = $(content[i]).outerHeight();
        let temp = 300 + sectionHeight - ((scrollSpeed - 1) * sectionHeight / 10)
        let maxHeigth = (temp < scr_h + 300) ? (scr_h + 300) : (temp)
        $(section[i]).css('max-height', maxHeigth + 'px');
        sectionTop[i] = $(section[i]).offset().top;
        scrollParallax()
    }
    $(window).on('scroll', scrollParallax);
}

function stopParallax() {
    page.removeClass('parallax');
    init = false;
    $(window).off('scroll', scrollParallax)
}

function scrollParallax() {
    var scrollPosition = $(window).scrollTop()
    for (let i = 0; i < section.length; i++) {
        let drop = scrollPosition - sectionTop[i];
        let shift = -(scrollSpeed-1)*drop/10;
        $(content[i]).css('top', shift+'px')
    }
}
