
import { useBlockProps } from '@wordpress/block-editor';
import {
	InnerBlocks
  } from '@wordpress/block-editor';

import classnames from "classnames";
import sharedPaddingClassnames from "../shared/padding/padding-classnames.js";
import sharedMarginClassnames from "../shared/margin/margin-classnames.js";
import sharedDisplayClassnames from "../shared/display/display-classnames";
import sharedtextAlignClassnames from "../shared/textalign/textalign-classnames";

export default function save(props) {
	const { attributes } = props;

	// Grab this from atts when set in edit screen
	const focalUrl = attributes.urlImage;

	const style = {
		minHeight: props.attributes.minHeightRow,
		color: props.attributes.textColor,
		backgroundColor: props.attributes.backgroundColor
	};

	//Only use the background inline style if its not null
	let BackgroundIsActive = "";
	if (focalUrl != null) {
	  BackgroundIsActive = {
		backgroundImage: `url(${ focalUrl })`,
		backgroundPosition: `${ attributes.focalPointX * 100 }% ${ attributes.focalPointY * 100 }%`,
		backgroundSize: props.attributes.backgroundImageSize,
		backgroundRepeat: props.attributes.backgroundImageRepeat
	  };
	}

		/** * Add class to block if img set. * * @link https://stackoverflow.com/a/72408500 */
		const blockPropsClass = useBlockProps.save({
			className: 
			classnames(
				'zenflow5-row',
				'row',
				[`${props.attributes.textColorTheme !== undefined ? `${props.attributes.textColorTheme}` : ''}`],
				[`${props.attributes.backgroundColorTheme !== undefined ? `${props.attributes.backgroundColorTheme}` : ''}`],
				[`${props.attributes.columnGutterWidth !== undefined ? `gx-${props.attributes.columnGutterWidth}` : ''}`],
				sharedPaddingClassnames(props),
				sharedMarginClassnames(props),
				sharedDisplayClassnames(props),
				sharedtextAlignClassnames(props),
				[`${props.attributes.backgroundImageTint !== undefined ? `${props.attributes.backgroundImageTint}` : ''}`],
			)
		});
  
	return (
		<div 
			{...blockPropsClass}

			style={{
				...style,
				...BackgroundIsActive
			}}
			
			{...props.attributes.animation && {'data-aos' : props.attributes.animation}}
			{...props.attributes.animationOffset && props.attributes.animation && {'data-aos-offset' : props.attributes.animationOffset}}
			{...props.attributes.animationDuration && props.attributes.animation  && {'data-aos-duration' : props.attributes.animationDuration}}
			{...props.attributes.animationDelay && props.attributes.animation  && {'data-aos-delay' : props.attributes.animationDelay}}
			{...props.attributes.animationEasing && props.attributes.animation  && {'data-aos-easing' : props.attributes.animationEasing}}
			{...props.attributes.animationOnce && props.attributes.animation  && {'data-aos-once' : props.attributes.animationOnce}}
			{...props.attributes.animationMirror && props.attributes.animation  && {'data-aos-mirror' : props.attributes.animationMirror}}
			{...props.attributes.animationPlacement && props.attributes.animation  && {'data-aos-anchor-placement' : props.attributes.animationPlacement}}
			
			>
			<InnerBlocks.Content />
		</div>
	);
}
