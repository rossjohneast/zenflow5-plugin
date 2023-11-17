import { __ } from '@wordpress/i18n';
import { 
	useBlockProps,
	InnerBlocks,
	InspectorControls  
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl
  } from '@wordpress/components';


import './editor.scss';

export default function Edit(props) {

	const { setAttributes } = props;

	const { clientId, attributes } = props;

	return (
		<div { ...useBlockProps() }>


<InspectorControls>
	<PanelBody title={__("Carousel item interval", "zenflow5")} initialOpen={true}>
		<RangeControl
			label={__("Milliseconds", "zenflow5")}
			min={0}
			max={100000}
			step={500}
			allowReset={true}
			resetFallbackValue={"5000"}
			value={attributes.interval}
			onChange={(new_val) => {
			props.setAttributes({ interval: new_val });
			}}
		/>
	</PanelBody>
</InspectorControls>


			<InnerBlocks
				allowedBlocks={['zenflow5/section', 'zenflow5/container', 'zenflow5/row', 'zenflow5/col', 'core/image']}
				template={[
					['core/image']
				]}
			/>
		</div>
	);
}
