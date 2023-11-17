import { useBlockProps } from '@wordpress/block-editor';
import {
  InnerBlocks
} from '@wordpress/block-editor';
import classnames from "classnames";

export default function save(props) {
    const { attributes } = props;

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (props.attributes.backgroundImage !== null) {
      BackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.backgroundImage} )`,
      };
    }

    const style = {
      backgroundColor: props.attributes.backgroundColor,
      color: props.attributes.textColor,
      backgroundSize: props.attributes.backgroundImageSize,
      backgroundAttachment: props.attributes.backgroundImageAttachment,
      backgroundRepeat: props.attributes.backgroundImageRepeat,
      minHeight: props.attributes.minHeightSection,
      backgroundPosition: props.attributes.backgroundImagePos,
    };

    return (
        <section 
          className={classnames(
            "zenflow5-section-cover",
            "section",
            [
              `${
                props.attributes.textColorTheme !== undefined
                  ? `${props.attributes.textColorTheme}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.backgroundColorTheme !== undefined
                  ? `${props.attributes.backgroundColorTheme}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.paddingSection !== undefined
                  ? `py-${props.attributes.paddingSection}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.backgroundImageTint !== undefined
                  ? `${props.attributes.backgroundImageTint}`
                  : ""
              }`,
            ]
          )}
          style={{
            ...style,
            ...BackgroundIsActive,
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
        </section>
    );
}
