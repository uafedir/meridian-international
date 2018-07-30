$('html:not(.parallax) #menu-toggler').on('click', function(){
	if ($('#menu-list').hasClass('menu-hidden')) {
		$('#menu-list').removeClass('menu-hidden')
	} else {
		$('#menu-list').addClass('menu-hidden')
	}
})