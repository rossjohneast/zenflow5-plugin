import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

import classnames from 'classnames';
import sharedMarginClassnames from "../../grid-blocks/shared/margin/margin-classnames.js";
import sharedPaddingClassnames from "../../grid-blocks/shared/padding/padding-classnames.js";
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
				sharedMarginClassnames(props),
				sharedPaddingClassnames(props)
			)
	});

	const inlineStyles = {};

	//If attributes has a value, assign property to the inlineStyles
	if (attributes.borderRadius) {
		inlineStyles.borderRadius = attributes.borderRadius + 'rem';
	}

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
		
		style={{
			...inlineStyles
		}}

		>
			
			{attributes.icon && attributes.iconBeforeText ? (
				<span className={
					classnames(
						'btn-icon-wrapper',
						[`${props.attributes.iconMargin !== undefined ? `m-${props.attributes.iconMargin}` : ''}`],
						[`${props.attributes.iconMarginT !== undefined ? `mt-${props.attributes.iconMarginT}` : ''}`],
						[`${props.attributes.iconMarginB !== undefined ? `mb-${props.attributes.iconMarginB}` : ''}`],
						[`${props.attributes.iconMarginL !== undefined ? `ms-${props.attributes.iconMarginL}` : ''}`],
						[`${props.attributes.iconMarginR !== undefined ? `me-${props.attributes.iconMarginR}` : 'me-1'}`],
						[`${props.attributes.iconMarginX !== undefined ? `mx-${props.attributes.iconMarginX}` : ''}`],
						[`${props.attributes.iconMarginY !== undefined ? `my-${props.attributes.iconMarginY}` : ''}`],
					)
				}>
					<Icon icon={BsIconsRegular[attributes.icon]} size={attributes.iconSize} />
				</span>
			) : null}

			
			{ attributes.content }


			{attributes.icon && !attributes.iconBeforeText ? (
				<span className={
					classnames(
						'btn-icon-wrapper',
						[`${props.attributes.iconMargin !== undefined ? `m-${props.attributes.iconMargin}` : ''}`],
						[`${props.attributes.iconMarginT !== undefined ? `mt-${props.attributes.iconMarginT}` : ''}`],
						[`${props.attributes.iconMarginB !== undefined ? `mb-${props.attributes.iconMarginB}` : ''}`],
						[`${props.attributes.iconMarginL !== undefined ? `ms-${props.attributes.iconMarginL}` : 'ms-1'}`],
						[`${props.attributes.iconMarginR !== undefined ? `me-${props.attributes.iconMarginR}` : ''}`],
						[`${props.attributes.iconMarginX !== undefined ? `mx-${props.attributes.iconMarginX}` : ''}`],
						[`${props.attributes.iconMarginY !== undefined ? `my-${props.attributes.iconMarginY}` : ''}`],
					)
				}>
					<Icon icon={BsIconsRegular[attributes.icon]} size={attributes.iconSize} />
				</span>
			) : null}
	
		</a>
	);
}
