(function(){
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function updateCaption(sliderIndex){
        var caption = $('.slider-caption span');
        var newCaption = caption.text()
        newCaption = sliderIndex + newCaption.slice(newCaption.indexOf('/'))
        caption.html(newCaption);
    }

    function plusSlide(n){
        showSlides(slideIndex += n)
        updateCaption(slideIndex);
    }

    function showSlides(n) {
        var slides = $('.slider').find('.showSlide');
        
        if(n > slides.length) {
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }
        
        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    $('.slider-control-gallery .next').on('click', function (){
        plusSlide(1)
    })
    $('.slider-control-gallery .prev').on('click', function (){
        plusSlide(-1)
    })
})();