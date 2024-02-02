import { __ } from '@wordpress/i18n';
import { 
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	ButtonBlockAppender 
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	ToggleControl 
  } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import './editor.scss';


export default function Edit(props) {

	const { setAttributes } = props;

	const { clientId, attributes } = props;

	const { innerBlockCount } = useSelect(select => ({
		innerBlockCount: select('core/block-editor').getBlockCount(clientId)
	}))

	// Update the innerBlockCount attribute
	setAttributes({ innerBlockCount });

	/*useEffect is a React hook that triggers during the component's life 
	cycle parts, but when giving it an empty array as a second argument
	it will only trigger on mounting the component*/

	useEffect(() => {
	//This conditional is useful to only set the id attribute once
	//when the component mounts for the first time
		//attributes.id === '' && setAttributes( { "id": clientId } )

		if (attributes.id === '') {
			setAttributes({ "id": clientId });
		} else {
			// Code to handle the case when attributes.id is not empty
			// You can add any logic you need for this case here
			setAttributes({ "id": clientId + 2 });
		}

	}, [])


	//This is a placeholder if we want to add styles in the editor screen
	const blockPropsClass = useBlockProps({
		className: 'additionalClassName'
	});

	return (
		<div { ...blockPropsClass }>

			{/* {attributes.innerBlockCount} */}
			
			<InspectorControls>
				<PanelBody title={__("Carousel minimum height", "zenflow5")} initialOpen={true}>
					<RangeControl
						label={__("Min Height", "zenflow5")}
						min={0}
						max={2000}
						step={5}
						allowReset={true}
						resetFallbackValue={"0"}
						value={props.attributes.minHeight}
						onChange={(new_val) => {
						props.setAttributes({ minHeight: new_val });
						}}
					/>
					<RangeControl
						label={__("Maximum Width", "zenflow5")}
						min={0}
						max={4000}
						step={5}
						allowReset={true}
						resetFallbackValue={""}
						value={props.attributes.maxWidth}
						onChange={(new_val) => {
						props.setAttributes({ maxWidth: new_val });
						}}
					/>
					<ToggleControl
						label="Dark controls"
						checked={props.attributes.darkControls}
						onChange={() => {
							props.setAttributes({ darkControls: !props.attributes.darkControls });
						}}
					/>
					<ToggleControl
						label="Bullets underneath"
						checked={props.attributes.bulletsUnder}
						onChange={() => {
							props.setAttributes({ bulletsUnder: !props.attributes.bulletsUnder });
						}}
					/>
				</PanelBody>
				<PanelBody title={__("Animation", "zenflow5")} initialOpen={true}>
					<ToggleControl
								label="Cross Fade Animation"
						checked={props.attributes.crossFade}
						onChange={() => {
							props.setAttributes({ crossFade: !props.attributes.crossFade });
						}}
						/>
					<ToggleControl
								label="Zoom Animation"
						checked={props.attributes.zoomAnimation}
						onChange={() => {
							props.setAttributes({ zoomAnimation: !props.attributes.zoomAnimation });
						}}
						/>
				</PanelBody>

			</InspectorControls>

			<InnerBlocks
				allowedBlocks={['zenflow5/carousel-item']}
				template={[
					['zenflow5/carousel-item'],
					['zenflow5/carousel-item'],
					['zenflow5/carousel-item']
				]}
			/>

			<ButtonBlockAppender
				className="custom-text-appender has-icon"
				rootClientId={clientId}
			/>

		</div>
	);
}
