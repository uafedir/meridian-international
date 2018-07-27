let top_offset = $('#brand').outerHeight()
let anchors = $('[paginationAnchor]');
var anchors_top = []
let current_anchor_container = $('#current-page')
let current_anchor
let total_anchors_container = $('#total-pages')
let total_anchors = anchors.length
let page_up = $('#page-up')
let page_down = $('#page-down')

total_anchors_container.html(total_anchors)

$(window).on('load resize', anchorsCalculation)
$(window).on('load scroll', sidePagination)

function anchorsCalculation() {
	for (let i = 0; i < total_anchors; i++) {
		anchors_top[i] = $(anchors[i]).offset().top
	}
}

function sidePagination() {
	for (let i = 0; i < total_anchors; i++) {
		if ((anchors_top[i] - top_offset <= scrollPosition + 5)) {
			current_anchor = i + 1
			current_anchor_container.html(current_anchor)
		}
	}
}

page_up.on('click', function () {
	if (current_anchor !== 1) {
		$('html').animate({
			scrollTop: anchors_top[current_anchor - 2] - top_offset
		}, "slow")
	}
})

page_down.on('click', function () {
	if (current_anchor !== total_anchors) {
		$('html').animate({
			scrollTop: anchors_top[current_anchor] - top_offset
		}, "slow")
	}
})