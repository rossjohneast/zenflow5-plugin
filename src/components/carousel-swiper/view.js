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
 * If you're not making any changes to this file because your project doesn't need any 
 * JavaScript running in the front-end, then you should delete this file and remove 
 * the `viewScript` property from `block.json`. 
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
 
/**
 * Shared Swiper config.
 */
// import { SwiperInit } from '../../swiper-init';
import { Swiper } from 'swiper';
import { Autoplay, Keyboard, Navigation, Pagination, EffectFade } from 'swiper/modules';


document.addEventListener('DOMContentLoaded', () => {
    const defaultOptions = {
        breakpointsInverse: true,
        observer: true,
        autoplay: true,
		centeredSlides: false,
		createElements: true,
		grabCursor: true,
		initialSlide: 0,
        slidesPerView: 1,
		keyboard: true,
		modules: [ Autoplay, Keyboard, Navigation, Pagination, EffectFade ],
		navigation: true,
		pagination: true,
		simulateTouch: true,
    };

    const nSlider = document.querySelectorAll('.swiper');

    [].forEach.call(nSlider, function (slider, index, arr) {
        const data = slider.getAttribute('data-swiper') || '{}';
        const dataOptions = JSON.parse(data);

        const options = Object.assign({}, defaultOptions, dataOptions);

        const swiper = new Swiper(slider, options);

        console.log(options.autoplay);

        /* stop on hover */
        // if (options.autoplay === true) {
        //     slider.addEventListener('mouseenter', function (e) {
        //         swiper.autoplay.stop();
        //         console.log('autoplay stopped');
        //     });

        //     slider.addEventListener('mouseleave', function (e) {
        //         swiper.autoplay.start();
        //         console.log('autoplay started');
        //     });
        // }
    });
});
