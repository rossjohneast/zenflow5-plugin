import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import classnames from 'classnames';
import sharedMarginClassnames from "../../grid-blocks/shared/margin/margin-classnames.js";
import BsIconsRegular from '../bs-icons/regular';

export default function save( props ) {

	const { attributes } = props

	// const blockProps = useBlockProps.save();

	/** * Add classes to block if set. * * @link https://stackoverflow.com/a/72408500 */
	const blockPropsClass = useBlockProps.save({
		className:
			classnames(
				'zenflow5-btn',
				'btn',
				[`${attributes.btnStyle || ''}`],
				[`${attributes.btnSize || ''}`],
				[`${attributes.btnWidth || ''}`],
				[`${attributes.textAlign || ''}`],
				[`${attributes.display || ''}`],
				[`${attributes.justifyContent || ''}`],
				[`${attributes.alignItems || ''}`],
				sharedMarginClassnames(props)
			)
	});

	return(
		<a {...blockPropsClass}
		
		id={attributes.customId || undefined}

		href={ attributes.url }
		target={ attributes.linkTarget }
		rel={ attributes.linkRel }
		aria-hidden={ !attributes.url }
		// aria-label={ attributes.ariaLabel }

		{...(attributes.ariaLabel && { 'aria-label': attributes.ariaLabel })}
		
		{...attributes.animation && {'data-aos' : attributes.animation}}
		{...attributes.animationOffset && attributes.animation && {'data-aos-offset' : attributes.animationOffset}}
		{...attributes.animationDuration && attributes.animation  && {'data-aos-duration' : attributes.animationDuration}}
		{...attributes.animationDelay && attributes.animation  && {'data-aos-delay' : attributes.animationDelay}}
		{...attributes.animationEasing && attributes.animation  && {'data-aos-easing' : attributes.animationEasing}}
		{...attributes.animationOnce && attributes.animation  && {'data-aos-once' : attributes.animationOnce}}
		{...attributes.animationMirror && attributes.animation  && {'data-aos-mirror' : attributes.animationMirror}}
		{...attributes.animationPlacement && attributes.animation  && {'data-aos-anchor-placement' : attributes.animationPlacement}}
		
		>
			{ attributes.content }
			{attributes.icon && (			
				<span className='btn-icon-wrapper ms-1'>
					<Icon icon={BsIconsRegular[attributes.icon]} size={attributes.iconSize}/>
				</span>
			)}
	
		</a>
	);
}
