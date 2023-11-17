import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const isFadeToggle = true;

	//Add our banner CSS classname to the default WP block classname 
	// const blockPropsClass = useBlockProps.save({
	// 	className: 'carousel slide' + `${isFadeToggle ? ' carousel-fade ' : ''}`
	// });

	const blockPropsClass = useBlockProps.save({
		className: `carousel slide${attributes.crossFade ? ' carousel-fade' : ''} ${attributes.zoomAnimation ? ' carousel-zoom' : ''}`
	});

	// function getRandomString(length) {
	// 	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	// 	let randomString = '';
	// 	for (let i = 0; i < length; i++) {
	// 	  const randomIndex = Math.floor(Math.random() * characters.length);
	// 	  randomString += characters.charAt(randomIndex);
	// 	}
	// 	return randomString;
	//   }

	// //The orignal block ID/ClientID is very long so we are breaking it down
	// //We also append a random string to prevent duplicate block having same ID
	// const originalString = `${ attributes.id }`;
	// const lastSixCharacters = originalString.slice(-6);
	// const randomString = getRandomString(4);

	// //Final ID we use...
	// const blockIdFormatted = lastSixCharacters + randomString;

	//One of our IDs also needs a '#' character appending
	const blockId = 'carouselID-' + `${ attributes.id }`;
	const blockIdWithHash = '#carouselID-' + `${ attributes.id }`;

	//Dynamically create the buttons/indicators and attach the block ID
	//We pass in innerblockcount to check how many we need...
	function CarouselButtons({ count }) {
		
		const buttons = [];
	  
		for (let i = 0; i < count; i++) {
		  buttons.push(
			<button
			  key={i}
			  type="button"
			  data-bs-target={blockIdWithHash}
			  data-bs-slide-to={i}
			  className="carousel-indicator-item"
			  aria-label={`Slide ${i + 1}`}
			></button>
		  );
		}
	  
		return <>{buttons}</>;
	 
	}

	const style = {
		minHeight:  attributes.minHeight + 'px',
		maxWidth: attributes.maxWidth
	};

	return (
		<div {...blockPropsClass} id={blockId} data-bs-ride="carousel"
		
		style={
			(style,
			{
			  ...style,
			})
		  }
		
		>

			<div className="carousel-indicators">
				<CarouselButtons count={attributes.innerBlockCount} />
			</div>

			<div className="carousel-inner" 
			
			style={
				(style,
				{
				  ...style,
				})
			  }
			
			// style={{ height: attributes.height + 'px' }}
			
			>
				<InnerBlocks.Content />
			</div>

			<button className="carousel-control-prev" type="button" data-bs-target={blockIdWithHash} data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			
			<button className="carousel-control-next" type="button" data-bs-target={blockIdWithHash} data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>

		</div>
	);
}
