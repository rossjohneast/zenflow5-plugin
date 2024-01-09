import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import classnames from 'classnames';
import sharedMarginClassnames from "../../grid-blocks/shared/margin/margin-classnames.js";
import BsIconsRegular from '../bs-icons/regular';

export default function save( props ) {

	const { attributes } = props

	const blockProps = useBlockProps.save();

	return(
		<a { ...blockProps }
		
		id={attributes.customId || undefined}

		className={
			classnames(
			'zenflow5-btn',
			'btn',
				[`${attributes.btnStyle !== undefined ? `${attributes.btnStyle}` : ''}`],
				[`${attributes.btnSize !== undefined ? `${attributes.btnSize}` : ''}`],
				[`${attributes.btnWidth !== undefined ? `${attributes.btnWidth}` : ''}`],
				[
					`${attributes.textAlign !== undefined
						? `${attributes.textAlign}`
						: ""
					}`,
				],
				[
					`${attributes.display !== undefined
						? `${attributes.display}`
						: ""
					}`,
				],
				[
					`${attributes.justifyContent !== undefined
						? `${attributes.justifyContent}`
						: ""
					}`,
				],
				[
					`${attributes.alignItems !== undefined
						? `${attributes.alignItems}`
						: ""
					}`,
				],
				sharedMarginClassnames(props)
				)}
		
		href={ attributes.url }
		target={ attributes.linkTarget }
		rel={ attributes.linkRel }
		aria-hidden={ !attributes.url }
		aria-label={ attributes.ariaLabel }
		
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
