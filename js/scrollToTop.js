$('#scroll-to-top').on('click', function (e) {
    //e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

const scrollTriggerFromBottom = 1800;// px
const toogleButton = function () {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > $(document).height() - scrollTriggerFromBottom) {
        $('#scroll-to-top').removeClass('hide');
    } else {
        $('#scroll-to-top').addClass('hide');
    }
};
$(window).on('scroll', function () {
    toogleButton();
});