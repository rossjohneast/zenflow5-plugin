
import { useBlockProps } from '@wordpress/block-editor';

import {
	InnerBlocks
  } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save(props) {

	const { attributes } = props;

	// Grab this from atts when set in edit screen
	const focalUrl = attributes.urlImage;

	const style = {
		minHeight: props.attributes.minHeightContainer,
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
					'zenflow5-container',
					[`${props.attributes.layoutContainerOption}`]
				)
		});

	  return (
		  <div
		  	  {...blockPropsClass}
			  style={{
				  ...style,
				  ...BackgroundIsActive,
			  }}
		  >
		  <InnerBlocks.Content />
		</div>
	  );
}
