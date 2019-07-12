"use strict";

var imageUrl = [ {
  url: '/media/01.jpg',
  date: "21 November 2018"
}, {
  url: '/media/5.jpg',
  date: "15 January 2019"
}, {
  url: '/media/21_jan.jpg',
  date: "21 January 2019"
}, {
  url: '/media/28_jan.jpg',
  date: "28 January 2019"
}, {
  url: '/media/04_feb.jpg',
  date: "04 February 2019"
}, {
  url: '/media/11_feb.jpg',
  date: "11 February 2019"
}, {
  url: '/media/18_feb.jpg',
  date: "18 February 2019"
}, {
  url: '/media/25_feb.jpg',
  date: "25 February 2019"
}, {
  url: '/media/05_mar.jpg',
  date: "05 March 2019"
}, {
  url: '/media/11_mar.jpg',
  date: "11 March 2019"
}, {
  url: '/media/26_mar.jpg',
  date: "26 March 2019"
}, {
  url: '/media/01_apr.jpg',
  date: "01 April 2019"
}, {
  url: '/media/08_apr.jpg',
  date: "08 April 2019"
}, {
  url: '/media/22_apr.jpg',
  date: "22 April 2019"
}, {
  url: '/media/29_apr.jpg',
  date: "29 April 2019"
}, {
  url: '/media/07_may.jpg',
  date: "07 May 2019"
}, {
  url: '/media/13_may.jpg',
  date: "13 May 2019"
}, {
  url: '/media/21_may.jpg',
  date: "21 May 2019"
}, {
  url: '/media/28_may.jpg',
  date: "28 May 2019"
}, {
  url: '/media/03_jun.jpg',
  date: "03 June 2019"
}, {
  url: '/media/10_jun.jpg',
  date: "10 June 2019"
}, {
  url: '/media/17_jun.jpg',
  date: "17 June 2019"
}, {
  url: '/media/25_jun.jpg',
  date: "25 June 2019"
}, {
  url: '/media/01_jul.jpg',
  date: "01 July 2019"
}, {
  url: '/media/08_jul.jpg',
  date: "08 July 2019"
}
];

// function myTimeOut() {
//   var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
//   var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2500;
//   var max = $("input[type=range]").attr("max");
//   var width = parseFloat($(".slider-pager").css("width"));
//   var nextSlide = slide == imageUrl.length - 1 ? 0 : slide + 1; //   $("#bg-current").removeClass("bg-hidden");

//   setTimeout(function () {
//     if (keepGoing) {
//       $(".rangeslider__handle").css("left", width / max * slide);

//       _handleChange(slide);

//       currentSlide = nextSlide;
//       myTimeOut(nextSlide);
//     }
//   }, duration);
// }

// var keepGoing = false;
// var currentSlide = 0;

// function startLoop(slide) {
//   keepGoing = true;
//   myTimeOut(slide);
// }

// function stopLoop() {
//   keepGoing = false;
// }

// function _handleChange(position) {
//   if (position != 0) {
//     $(".rangeslider__handle").html(imageUrl[position].date);
//     $("#bg-current").css("background-image", "url(" + imageUrl[position - 1].url + ")");
//     $("#bg-next").css("background-image", "url(" + imageUrl[position].url + ")");
//     //     position = 0;
//     // }

//     $("#bg-current").addClass("bg-hidden");
//     setTimeout(function () {
//       $("#bg-current").css("background-image", "url(" + imageUrl[position].url + ")");
//       $(".rangeslider__handle").html(imageUrl[position].date);

//       if (position >= imageUrl.length - 1) {
//         position = -1;
//       }

//       $("#bg-next").css("background-image", "url(" + imageUrl[position + 1].url + ")");
//       $("#bg-current").removeClass("bg-hidden");
//     }, 2000);
//   } else {
//     $(".rangeslider__handle").html(imageUrl[0].date);
//     $("#bg-current").css("background-image", "url(" + imageUrl[0].url + ")"); // if(position > imageUrl.length - 1){
//   }
// }

;
$('input[type="range"]').rangeslider({
  polyfill: false,
  rangeClass: 'rangeslider',
  disabledClass: 'rangeslider--disabled',
  horizontalClass: 'rangeslider--horizontal',
  verticalClass: 'rangeslider--vertical',
  fillClass: 'rangeslider__fill',
  handleClass: 'rangeslider__handle',
  onInit: function onInit() {
    $(".rangeslider__handle").html(imageUrl[0].date);
  }
});



$(document).ready(function () {
  var slides = [];
  var data = [];
  var max = $("input[type=range]").attr("max");
  var width = parseFloat($(".slider-pager").css("width"));
  for (let i = 0; i < imageUrl.length; i++) {
    slides[i] = imageUrl[i].url;
    data[i] = imageUrl[i].data;
  }
  for(var item in slides){
    var slide = '<figure class="bg-image-web" style="background-image:url(\''+ slides[item] + '\')"></figure>';
    $('.page-webcam').append(slide);
  }
  var pageSlides = document.querySelectorAll('.bg-image-web:not(.showing)');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000);

  function nextSlide(){
    pageSlides[currentSlide].className = 'bg-image-web';
    currentSlide = (currentSlide+1)%(pageSlides.length);
    pageSlides[currentSlide].className = 'bg-image-web showing';
    $(".rangeslider__handle").html(imageUrl[currentSlide].date);
    $(".rangeslider__handle").css("left", width / max * currentSlide);
  }

  var playing = true;
  var pauseButton = document.getElementById('stop-btn');
  
  function playSlideshow(){
    $("#stop-btn .oi").addClass("oi-media-pause");
    $("#stop-btn .oi").removeClass("oi-media-play");
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
  }

  function pauseSlideshow(){
    $("#stop-btn .oi").addClass("oi-media-play");
    $("#stop-btn .oi").removeClass("oi-media-pause");
    playing = false;
    clearInterval(slideInterval);
  }

  pauseButton.onclick = function(){
    if(playing){ 
      pauseSlideshow(); 
    }else{ 
      playSlideshow(); 
    }
  };
});

