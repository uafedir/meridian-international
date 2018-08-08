var scrollSpeed = 3.5;
var breakpoint = 768;
var page = $('#page');
var section = $('.page-section');
var sections_num = section.length
var sectionTop = [];
var content = $('.section-content');
var section_bg = $('section.page-section > figure.bg-image')
var scr_h
var scr_w
var document_height
var scrollPosition

$(window).on('load resize', function () {
	document_height = $(document).outerHeight()
	scr_h = $(window).outerHeight();
	scr_w = $(window).outerWidth();
	let parallax_enable = (scr_w >= breakpoint);
	parallax(parallax_enable);
	sidePagination();
})

function parallax(parallax_enable) {
	if (parallax_enable) {
		runParallax();
	} else {
		stopParallax();
	}
}

function runParallax() {
	$('html').addClass('parallax')
	for (let i = 0; i < sections_num; i++) {
		// $.each(content, function () {
		// 	$(this).css('top', 0)
		// });
		// $(section[i]).css('max-height', '');

		let sectionHeight = $(section[i]).outerHeight();
		let temp = 300 + sectionHeight - ((scrollSpeed - 1) * sectionHeight / 10)
		let maxHeigth = (temp < scr_h + 300) ? (scr_h + 300) : (temp)
		// $(section[i]).css('max-height', maxHeigth + 'px');
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
	scrollPosition = $(window).scrollTop()
	for (let i = 0; i < section.length; i++) {
		let drop = scrollPosition - sectionTop[i];
		let shift = -(scrollSpeed - 1) * drop / 10;
		// $(content[i]).css('top', shift + 'px')
		$(section_bg[i]).css('top', -shift + 'px')
	}
}