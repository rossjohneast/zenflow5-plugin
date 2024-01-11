import { useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import classnames from "classnames";
import BsIconsRegular from '../bs-icons/regular';

import sharedMarginInspCnt from '../shared/margin/margin-insp-cnt.js';
import sharedMarginClassnames from '../shared/margin/margin-classnames.js';

const NEW_TAB_REL = 'noreferrer noopener';

export default function save(props) {

	const { attributes } = props;

	const { icon, iconSize, minWidth, minHeight,
		padding, margin, borderRadius, borderWidth, iconColor,
		backgroundColor, backgroundColorTheme,
		borderColor, borderColorTheme, iconColorTheme, displayIconBg } =
		attributes;

	const style = {
		color: iconColor
	};

	const styleOuter = {
		backgroundColor: backgroundColor,
		color: iconColor,
		 // Apply borderRadius only if it's not null or an empty string
  		borderRadius: borderRadius !== null && borderRadius !== '' && displayIconBg !== false ? borderRadius + 'rem' : undefined,
		borderWidth: borderWidth,
		borderColor: borderColor,
		// iconSize: iconSize,
		minHeight: minHeight,
		minWidth: minWidth,
	};

		/** * Add class to block if img set. * * @link https://stackoverflow.com/a/72408500 */
		const blockPropsClass = useBlockProps.save({
			className: 
				classnames(
					sharedMarginClassnames(props),
			)
		});

	return (
		<span {...blockPropsClass}>

			{attributes.url && 
				<a 
					className='icon-link' 
					href={attributes.url} 
					target={attributes.linkTarget} 
					rel={attributes.linkRel} 
					aria-hidden={!attributes.url}
					// aria-label={attributes.ariaLabel}
					{...(attributes.ariaLabel && { 'aria-label': attributes.ariaLabel })}
				></a>
			}

			<span
				className={
					classnames(
						'zenbuilder-icon-wrapper',
						[`${displayIconBg !== false ? 'icon-with-bg' : ''}`],
						[`${iconColorTheme !== undefined ? `${iconColorTheme}` : ''}`],
						[`${backgroundColorTheme !== undefined ? `${backgroundColorTheme}` : ''}`],
						[`${borderColorTheme !== undefined ? `${borderColorTheme}` : ''}`],
						[`${padding !== undefined ? `p-${padding}` : ''}`],
					)} style={{
						...styleOuter
					}}>

				<span className='hidden-icon-size'>
					<Icon icon={BsIconsRegular[icon]} size={iconSize} />
				</span>
				<span className='abs-pos-icon'>
					<Icon icon={BsIconsRegular[icon]} size={iconSize} />
				</span>

			</span>

		</span>

	);
}
