import {
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	// Swiper id is used to match navigation elements to each slider
	const blockPropsClass = useBlockProps.save({
		className: `
			swiper 
			${attributes.swiperId} 
			${attributes.desaturateImg ? ' swiper--bw-imgs' : ''} 
			${attributes.navigationOutside ? ' swiper--nav-outside' : ''} 
			${attributes.paginationOutside ? ' swiper--pag-outside' : ''}
			${attributes.customUITheme ? attributes.customUITheme : ''}
			${attributes.customWPImages ? attributes.customWPImages : ''}
		`
	});

	const swiperData = {
		slidesPerView: attributes.slidesPerViewXS,
		spaceBetween: attributes.spaceBetweenXS,
		centeredSlides: attributes.centeredSlides,
		loop: attributes.loop,
		autoHeight: attributes.autoHeight,
		fadeEffect: attributes.fadeEffect ? {
			crossFade: true
		} : false,
		autoplay: attributes.autoPlay ? {
			delay: attributes.delay || 5000,
			disableOnInteraction: attributes.disableOnInteraction,
			pauseOnMouseEnter: attributes.pauseOnMouseEnter,
			stopOnLastSlide: attributes.stopOnLastSlide
		} : false,
        navigation: attributes.navigation ? {
			nextEl: `.next-${attributes.swiperId}`, // Update selector
			prevEl: `.prev-${attributes.swiperId}`, // Update selector
            disabledClass: 'disabled_swiper_button'
        } : false,
        pagination: attributes.pagination ? {
            el: `.swiper-pagination-${attributes.swiperId}`, // Update selector
            type: 'bullets',
			clickable: attributes.paginationClickable,
        } : false,
		breakpoints: {}
	};

	// Add fade effect conditionally based on attribute values
	if (attributes.fadeEffect) {
		swiperData.effect = "fade";
	}

	// Add breakpoints conditionally based on attribute values
	if (attributes.slidesPerViewSM) {
		swiperData.breakpoints[576] = {
			slidesPerView: attributes.slidesPerViewSM,
		};
	}

	if (attributes.slidesPerViewMD) {
		swiperData.breakpoints[768] = {
			slidesPerView: attributes.slidesPerViewMD,
		};
	}

	if (attributes.slidesPerViewLG) {
		swiperData.breakpoints[992] = {
			slidesPerView: attributes.slidesPerViewLG,
		};
	}

	if (attributes.slidesPerViewXL) {
		swiperData.breakpoints[1200] = {
			slidesPerView: attributes.slidesPerViewXL,
		};
	}

	if (attributes.slidesPerViewXXL) {
		swiperData.breakpoints[1400] = {
			slidesPerView: attributes.slidesPerViewXXL,
		};
	}

	return (

		<>
			<div
				{...blockPropsClass}
				data-swiper={JSON.stringify(swiperData)}
			>
				{/* <!-- Additional required wrapper --> */}
                <div className={`swiper-wrapper ${attributes.swiperId}`}>
					{/* <!-- Slides --> */}
					<InnerBlocks.Content />

				</div>

				{/* <!-- If we need pagination --> */}
				{attributes.pagination && !attributes.paginationOutside && (
                	<div className={`swiper-pagination swiper-pagination-${attributes.swiperId}`}></div>
				)}

				{/* <!-- If we need navigation buttons --> */}
				{attributes.navigation && !attributes.navigationOutside && (
					<>
						<div className={`swiper-button-prev prev-${attributes.swiperId} ${!attributes.navigation ? 'disabled_swiper_button' : ''}`}></div>
						<div className={`swiper-button-next next-${attributes.swiperId} ${!attributes.navigation ? 'disabled_swiper_button' : ''}`}></div>
					</>
				)}

				{/* <!-- If we need scrollbar --> */}
                <div className={`swiper-scrollbar ${attributes.swiperId}`}></div>
		
			</div>


			{/* <!-- If we need pagination outside --> */}
			{attributes.pagination && attributes.paginationOutside && (
				<div className='swiper-pag-outside-wrapper'>
						<div className={`swiper-pagination swiper-pagination-${attributes.swiperId}`}></div>
				</div>
			)}


			{/* Navigation buttons outside of swiper container */}
			{attributes.navigation && attributes.navigationOutside && (
				<div className='swiper-button-outside-wrapper'>
					<div className={`swiper-button-prev swiper-button-prev-outside prev-${attributes.swiperId} ${!attributes.navigation ? 'disabled_swiper_button' : ''}`}></div>
					<div className={`swiper-button-next swiper-button-next-outside next-${attributes.swiperId} ${!attributes.navigation ? 'disabled_swiper_button' : ''}`}></div>
				</div>
			)}
		</>

	);
}
