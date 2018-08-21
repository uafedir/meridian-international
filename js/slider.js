imageUrl = [
    {
        url: '/media/1.jpg',
        date: "August 18, 2018"
    },
    {
        url: '/media/2.jpg',
        date: "July 12, 2018"
    },
    {
        url: '/media/3.jpg',
        date: "May 31, 2018"
    },
    {
        url: '/media/4.jpg',
        date: "April 1, 2018"
    },
    {
        url: '/media/5.jfif',
        date: "September 1, 2017"
    }
];

_handleChange = function (position) {
    $(".bg-image").css("background-image", "url(" + imageUrl[position].url + ")");
    $(".rangeslider__handle").html(imageUrl[position].date);
};

$('input[type="range"]').rangeslider({
    polyfill: false,
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',
    onInit: function () {
        _handleChange(0);
    },
    onSlideEnd: function (position, value) {
        _handleChange(value);
        $(".rangeslider__handle").removeClass("is-moving").css("left", position);
    },
    onSlide: function (position, value) {
        $(".rangeslider__handle").addClass("is-moving").css("left", position);
    }
});
