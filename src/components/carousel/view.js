/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
 
document.addEventListener('DOMContentLoaded', function () {

    // Select all carousel containers on the page
    const carouselContainers = document.querySelectorAll('.wp-block-zenflow5-carousel');

    // Loop through each carousel container and initialize it
    carouselContainers.forEach((myCarouselElement) => {
       
        //Bootstrap carousel settings here...
        const carousel = new bootstrap.Carousel(myCarouselElement, {
            interval: 4000,
            touch: false
        });

        // Find the first carousel item and indicator item within this carousel
        const carouselItems = myCarouselElement.querySelectorAll('.carousel-item');
        const carouselIndicatorItems = myCarouselElement.querySelectorAll('.carousel-indicator-item');

        // Activate the first carousel item within this carousel
        if (carouselItems.length > 0) {
            carouselItems[0].classList.add('active');
        }
        
        // Activate the first carousel indicator within this carousel
        if (carouselIndicatorItems.length > 0) {
            carouselIndicatorItems[0].classList.add('active');
        }
   
    });

})
