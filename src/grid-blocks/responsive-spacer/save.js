import { useBlockProps } from '@wordpress/block-editor';
import classnames from "classnames";
export default function save(props) {

	const { attributes } = props;

  	/** * Add class to block if img set. * * @link https://stackoverflow.com/a/72408500 */
	const blockPropsClass = useBlockProps.save({
		className: 
    classnames(
      "zenflow5-responsive-spacer",
      [
        `${
          props.attributes.paddingB !== undefined
            ? `pb-${props.attributes.paddingB}`
            : ""
        }`,
      ],
      [
        `${
          props.attributes.paddingSMB !== undefined
            ? `pb-sm-${props.attributes.paddingSMB}`
            : ""
        }`,
      ],
      [
        `${
          props.attributes.paddingMDB !== undefined
            ? `pb-md-${props.attributes.paddingMDB}`
            : ""
        }`,
      ],
      [
        `${
          props.attributes.paddingLGB !== undefined
            ? `pb-lg-${props.attributes.paddingLGB}`
            : ""
        }`,
      ],
      [
        `${
          props.attributes.paddingXLB !== undefined
            ? `pb-xl-${props.attributes.paddingXLB}`
            : ""
        }`,
      ],
      [
        `${
          props.attributes.paddingXXLB !== undefined
            ? `pb-xxl-${props.attributes.paddingXXLB}`
            : ""
        }`,
      ]
    )
    });

	return (
		<div
        { ...useBlockProps.save() }  {...blockPropsClass}
        aria-hidden="true"
      ></div>
	);
}
