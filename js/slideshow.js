(function(){

    var slideIndex = 1;
        showSlides(slideIndex);

    function updateCaption(sliderIndex){
        var caption = $('.slider-caption').find('span') 
        var newCaption = caption.text()
        newCaption = sliderIndex + newCaption.slice(newCaption.indexOf('/'))
        caption.html(newCaption);
    }

    function plusSlide(n){
        showSlides(slideIndex += n)
        updateCaption(slideIndex);
    }
    $('.next').on('click', function (){
        plusSlide(1)
        
    })
    $('.prev').on('click', function (){
        plusSlide(-1) 
        
    })
    

    function showSlides(n){
        var slides = $('.slideshow').find('.slide');
        console.log(slides)
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
    }
})();