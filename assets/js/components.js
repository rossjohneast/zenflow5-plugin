document.addEventListener('DOMContentLoaded', function () {

    //BS carousel
    // const myCarouselElement = document.querySelector('#myCarousel')

    // const carousel = new bootstrap.Carousel(myCarouselElement, {
    //     interval: 2000,
    //     touch: false
    // })

});

jQuery(document).ready(function($) {
   
    // This applies the Zoom animation to the carousel items if option selected in the Inspector Controls
    // Ken Burns type Zoom effect is added via CSS
    $('.carousel').each(function () {
        
        // The current .carousel element
        let carousel = $(this); 
    
        carousel.find('.carousel-item section').each(function() {
            
            // The current .carousel-item section within the current .carousel
            let carouselItemSection = $(this); 
    
            // Get the background image and position from the source element
            let backgroundImage = carouselItemSection.css('background-image');
            let backgroundPosition = carouselItemSection.css('background-position');
    
            // Create a new element on the fly and set the background image and position
            let newElement = $('<div class="cloned-carousel-item"></div>').css({
                'background-image': backgroundImage,
                'background-position': backgroundPosition,
            });
    
            // Append the new element to the current .carousel-item section
            newElement.appendTo(carouselItemSection);
       
        });
    });

});