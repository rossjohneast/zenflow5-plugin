import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	RichText
} from '@wordpress/block-editor';
import classnames from "classnames";

import sharedPaddingClassnames from "../shared/padding/padding-classnames.js";

import sharedMarginClassnames from "../shared/margin/margin-classnames.js";

export default function save(props) {

	const { attributes } = props;

		const { imgID, imgAlt, imgURL, title, text, cardType, 
		justifyContent, alignItems, minHeightCard, 
		equalCardHeights, urlImage, backgroundColor, backgroundColorTheme, 
		textColorTheme, bgTintColor, bgTintOpacity, bgTintColorTheme, 
		urlImageFocalPointX, urlImageFocalPointY, shadow, border,
		backgroundSize } = attributes;

	const blockProps = useBlockProps.save();

	// Grab this from atts when set in edit screen
	const focalUrl = attributes.urlImage;

	//Only use the inline style if its not null
	let minHeightCardIsActive = '';
	if (minHeightCard !== null) {
		minHeightCardIsActive = {
			minHeight: minHeightCard
		}
	}

	//Only use the inline style if its not null
	let bgIsActive = '';
	if (urlImage) {
		bgIsActive = {
			backgroundRepeat: 'no-repeat',
			backgroundImage: `url(${focalUrl})`,
			backgroundPosition: attributes.focalPointX ? `${attributes.focalPointX * 100}% ${attributes.focalPointY * 100}%` : '',
		}
	}

	// Grab this from atts when set in edit screen
	const imgTopFocalUrl = attributes.imgURL;

	const styleTopImage = {
		// aspectRatio: '3/2',
		paddingTop: '56.25%',
		minHeight: 300,
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${imgURL})`,
		backgroundPosition: urlImageFocalPointX ? `${urlImageFocalPointX * 100}% ${urlImageFocalPointY * 100}%`: '',
		backgroundSize: backgroundSize
	};

	//Only use the inline style if its not null
	let equalCardHeightsIsActive = '';
	if (equalCardHeights == true) {
		equalCardHeightsIsActive = {
			height: '100%',
		}
	}

	const style = {
		// height: equalCardHeights ? '100%' : '',
		backgroundColor: backgroundColor
	};

	const overlayStyle = {
		backgroundColor: bgTintColor,
		opacity: bgTintOpacity
	};

	return (
		<div 
			{...useBlockProps.save()} 
			className={
				(
					classnames(
						'wp-block-zenflow5-card',
						'card',
						sharedPaddingClassnames(props),
						sharedMarginClassnames(props),
						[`${textColorTheme !== undefined ? `${textColorTheme}` : ""}`],
						[`${shadow !== undefined ? `${shadow}` : ""}`],
						[`${border !== undefined ? `${border}` : ""}`],
						[
							`${backgroundColorTheme !== undefined
								? `${backgroundColorTheme}`
								: ""
							}`,
						]
					))
			}
			style={
				{
					...style,
					...minHeightCardIsActive,
					// ...bgIsActive,
					...equalCardHeightsIsActive
				}
			}
		>


			{attributes.url && (
				attributes.ariaLabel ? (
					<RichText.Content
						tagName="a"
						className='card-bg-link-overlay'
						href={attributes.url}
						value={attributes.linkText}
						target={attributes.linkTarget}
						rel={attributes.linkRel}
						aria-label={attributes.ariaLabel}
					/>
				) : (
					<RichText.Content
						tagName="a"
						className='card-bg-link-overlay'
						href={attributes.url}
						value={attributes.linkText}
						target={attributes.linkTarget}
						rel={attributes.linkRel}
					/>
				)
			)}


		{imgURL &&
			// <div style={styleTopImage} className="card-img-top">
			<div className="card-img-top">
				{/* <img src={imgURL} className="d-none" alt={imgAlt} /> */}
				{/* Gutenberg custom block with responsive images */}
				{/* https://stackoverflow.com/questions/51886254/gutenberg-custom-block-with-responsive-images */}
				<img src={imgURL} className={' wp-image-' + imgID} alt={imgAlt} />
			</div>
		}

			{/* {attributes.displayCardImgTop && imgURL && } */}
			<div className={classnames(
				'card-body',
				[
					`${justifyContent !== undefined
						? `${justifyContent}`
						: ""
					}`,
				],
				[
					`${alignItems !== undefined
						? `${alignItems}`
						: ""
					}`,
				],
				[`${textColorTheme !== undefined ? `${textColorTheme}` : ''}`],
				[`${backgroundColorTheme !== undefined ? `${backgroundColorTheme}` : ''}`],
			)}
			>

				<InnerBlocks.Content />

			</div>

			{urlImage && (
				<div className='card-background-img' style={bgIsActive}></div>
			)}

			<div className={
				classnames(
					'card-background-img-tint',
					[`${bgTintColorTheme !== undefined ? `${bgTintColorTheme}` : ''}`],
				)}
				style={overlayStyle}></div>

		</div>
	);
}
