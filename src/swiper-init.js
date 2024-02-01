// /**
//  * Link: https://wpengine.com/builders/create-a-slider-block/#concluding-initial-plugin-setup
//  * Swiper dependencies
//  *
//  * @see https://swiperjs.com/get-started
//  */
// import { Swiper } from 'swiper';
// import { Autoplay, Keyboard, Navigation, Pagination, EffectFade } from 'swiper/modules';



// /**
//  * Initialize the slider.
//  *
//  * @param {Element} container HTMLElement.
//  * @param {Object}  options   Slider parameters.
//  *
//  * @return {Object} Returns initialized slider instance.
//  *
//  * @see https://swiperjs.com/swiper-api#parameters
//  */
// export function SwiperInit( container, options = {} ) {
// 	const parameters = {
// 		modules: [ Autoplay, Keyboard, Navigation, Pagination, EffectFade ],
// 		autoplay: options?.autoplay ?? true,
// 		centeredSlides: options?.centerSlides ?? false,
// 		createElements: true,
// 		grabCursor: options?.grabCursor ?? true,
// 		initialSlide: 0,
//         slidesPerView: 1,
// 		keyboard: true,
// 		navigation: options?.navigation ?? true,
// 		pagination: options?.pagination ?? true,
// 		simulateTouch: options?.simulateTouch ?? true,
// 	};

// 	return new Swiper( container, parameters );
// }