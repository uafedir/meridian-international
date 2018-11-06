(function(){

    var slideIndex;
    $('.leaflet-marker-icon').on('click', function () {
            slideIndex = 1
            updateCaption(slideIndex)
            setTimeout(function(){
                showSlides(slideIndex); 
            }, 1)
        })

    function updateCaption(sliderIndex){
        var caption = $('.slideshow.active').next().find('.counter')
        var newCaption = caption.text()
        newCaption = sliderIndex + newCaption.slice(newCaption.indexOf('/'))
        caption.html(newCaption);
    }

    function plusSlide(n){
        showSlides(slideIndex += n)
        updateCaption(slideIndex);
    }

    

    function showSlides(n){
        $('.slider-control').off('click', '.next')
        $('.slider-control').off('click', '.prev')

        var slides = $('.slideshow.active').find('.slide');
        
        if(n > slides.length) {
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";

        $('.slider-control').on('click', '.next', function (){
            plusSlide(1)
        })
        $('.slider-control').on('click', '.prev', function (){
            plusSlide(-1)
        })
    }
})();