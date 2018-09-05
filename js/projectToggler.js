const animateContentUpProjects = function () {
    const contentTop = $('.section-content').css('top');
    console.log(contentTop);
    console.log(contentTop + 3*$("#menu .menu-item").outerHeight() + 'px');
    $('.section-content').animate({
            top: `+=${3*$("#menu .menu-item").outerHeight()}px`
        },
        {
            duration: 150
        }
    );
};
const animateContentDownProjects = function () {
    const contentTop = $('.section-content').css('top');
    $('html:not(.parallax) .section-content').animate({
            top: `-=${3*$("#menu .menu-item").outerHeight()}px`
        },
        {
            duration: 150
        }
    );
};
const contentToggle = toogler(animateContentUpProjects, animateContentDownProjects);
//open projects
$("#menu [data-menu=project]").click(function () {
    $("#menu [data-menu].hidden").slideToggle("fast");
    if (isMobileScreen()) {
        contentToggle();
    }
});