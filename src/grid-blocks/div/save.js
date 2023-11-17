
import {
    InnerBlocks
}
    from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import sharedPaddingClassnames from '../shared/padding/padding-classnames.js';
import sharedMarginClassnames from '../shared/margin/margin-classnames.js';
import sharedColWidthClassnames from '../shared/col/colwidth-classnames.js';
import sharedColOffsetsClassnames from '../shared/col/coloffsets-classnames.js';
import sharedtextAlignClassnames from "../shared/textalign/textalign-classnames";


export default function save(props) {

    const { attributes } = props;

    // Grab this from atts when set in edit screen
    const focalUrl = attributes.urlImage;

    const widthAsPercentage = props.attributes.width ? props.attributes.width + '%' : null;

    const style = {
        color: props.attributes.textColor,
        minHeight: props.attributes.minHeightDiv,
        width: widthAsPercentage
    };

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (focalUrl != null) {
        BackgroundIsActive = {
            backgroundImage: `url(${focalUrl})`,
            backgroundPosition: `${attributes.focalPointX * 100}% ${attributes.focalPointY * 100}%`,
            backgroundSize: props.attributes.backgroundImageSize,
            backgroundRepeat: props.attributes.backgroundImageRepeat
        };
    }

    const colStyleOuter = {
        backgroundColor: props.attributes.backgroundColor,
        color: props.attributes.textColor,
        backgroundSize: props.attributes.backgroundImageSize,
        backgroundAttachment: props.attributes.backgroundImageAttachment,
        backgroundRepeat: props.attributes.backgroundImageRepeat,
        backgroundPosition: props.attributes.backgroundImagePos
    };

	/** * Add class to block if img set. * * @link https://stackoverflow.com/a/72408500 */
	const blockPropsClass = useBlockProps.save({
		className: 
            classnames(
                "zenflow5-div",
                sharedColWidthClassnames(props),
                sharedColOffsetsClassnames(props),
                [`${props.attributes.display !== undefined ? `${props.attributes.display}` : ''}`],
                sharedMarginClassnames(props),
                sharedPaddingClassnames(props),
                sharedtextAlignClassnames(props),
                [`${props.attributes.textColorTheme !== undefined ? `${props.attributes.textColorTheme}` : ''}`],
                [`${props.attributes.backgroundColorTheme !== undefined ? `${props.attributes.backgroundColorTheme}` : ''}`],
                [`${props.attributes.backgroundImageTint !== undefined ? `${props.attributes.backgroundImageTint}` : ''}`],
                [`${props.attributes.justifyContent !== undefined ? `${props.attributes.justifyContent}` : ''}`],
                [`${props.attributes.alignItems !== undefined ? `${props.attributes.alignItems}` : ''}`],
        )
    });

    return (
        <div
            {...useBlockProps.save()} {...blockPropsClass}
                style={
                    style, {
                        ...style,
                        ...colStyleOuter,
                        ...BackgroundIsActive
                    }
                }

            {...props.attributes.animation && { 'data-aos': props.attributes.animation }}
            {...props.attributes.animationOffset && props.attributes.animation && { 'data-aos-offset': props.attributes.animationOffset }}
            {...props.attributes.animationDuration && props.attributes.animation && { 'data-aos-duration': props.attributes.animationDuration }}
            {...props.attributes.animationDelay && props.attributes.animation && { 'data-aos-delay': props.attributes.animationDelay }}
            {...props.attributes.animationEasing && props.attributes.animation && { 'data-aos-easing': props.attributes.animationEasing }}
            {...props.attributes.animationOnce && props.attributes.animation && { 'data-aos-once': props.attributes.animationOnce }}
            {...props.attributes.animationMirror && props.attributes.animation && { 'data-aos-mirror': props.attributes.animationMirror }}
            {...props.attributes.animationPlacement && props.attributes.animation && { 'data-aos-anchor-placement': props.attributes.animationPlacement }}

        >
            <InnerBlocks.Content
            />
        </div>
    );
}
