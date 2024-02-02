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
	TextControl,
	ToggleControl,
	Button,
	SelectControl
} from '@wordpress/components';

import { useEffect } from '@wordpress/element';

import './editor.scss';

export default function Edit(props) {

	const { setAttributes, clientId, attributes } = props;

	useEffect(() => {
		//This conditional is useful to only set the id attribute once
		//when the component mounts for the first time
		if (attributes.id === '') {
			setAttributes({ "swiperId": "id" + clientId });
		} else {
			// Code to handle the case when attributes.id is not empty
			// You can add any logic you need for this case here
			setAttributes({ "swiperId": "id" + clientId + 2 });
		}

	}, [])

	//This is a placeholder if we want to add styles in the editor screen
	const blockPropsClass = useBlockProps({
		className: 'additionalClassName'
	});

	return (
		<div {...blockPropsClass}>

			<InspectorControls>

				<PanelBody title={__("Settings", "zenflow5")} initialOpen={true}>

					<p>Select the UI theme:</p>
					<SelectControl
						value={props.attributes.customUITheme}
						options={[
							{ label: 'Dark', value: 'swiper--ui-dark' },
							{ label: 'Light', value: 'swiper--ui-light' },
							{ label: 'Primary', value: 'swiper--ui-primary' },
							{ label: 'Secondary', value: 'swiper--ui-secondary' },
						]}
						onChange={(new_theme_val) => {
							props.setAttributes({ customUITheme: new_theme_val });
						}}
					/>

					<p>Handle WP Images:</p>
					<SelectControl
						value={props.attributes.customWPImages}
						options={[
							{ label: 'Contain', value: 'swiper--wp-img-contain' },
							{ label: 'Cover', value: 'swiper--wp-img-cover' },
							{ label: 'None', value: 'swiper--wp-img-none' },
						]}
						onChange={(new_theme_val) => {
							props.setAttributes({ customWPImages: new_theme_val });
						}}
						help="Manually set a consistent height for each WordPress image block to ensure slider consistency"
					/>

					<ToggleControl
						label="Fade Effect"
						checked={props.attributes.fadeEffect}
						onChange={() => {
							props.setAttributes({ fadeEffect: !props.attributes.fadeEffect });
						}}
						help="Only works with one slide"
					/>

					<ToggleControl
						label="Auto height"
						checked={props.attributes.autoHeight}
						onChange={() => {
							props.setAttributes({ autoHeight: !props.attributes.autoHeight });
						}}
						help="Adapts height to the height of the currently active slide"
					/>

					<ToggleControl
						label="Arrow navigation"
						checked={props.attributes.navigation}
						onChange={() => {
							props.setAttributes({ navigation: !props.attributes.navigation });
						}}
					/>

					<ToggleControl
						label="Arrow navigation outside"
						checked={props.attributes.navigationOutside}
						onChange={() => {
							props.setAttributes({ navigationOutside: !props.attributes.navigationOutside });
						}}
					/>

					<ToggleControl
						label="Pagination bullets"
						checked={props.attributes.pagination}
						onChange={() => {
							props.setAttributes({ pagination: !props.attributes.pagination });
						}}
					/>

					<ToggleControl
						label="Pagination outside"
						checked={props.attributes.paginationOutside}
						onChange={() => {
							props.setAttributes({ paginationOutside: !props.attributes.paginationOutside });
						}}
					/>

					<ToggleControl
						label="Pagination clickable"
						checked={props.attributes.paginationClickable}
						onChange={() => {
							props.setAttributes({ paginationClickable: !props.attributes.paginationClickable });
						}}
					/>

					<ToggleControl
						label="Loop slides"
						checked={props.attributes.loop}
						onChange={() => {
							props.setAttributes({ loop: !props.attributes.loop });
						}}
					/>

					<ToggleControl
						label="Center slides"
						checked={props.attributes.centeredSlides}
						onChange={() => {
							props.setAttributes({ centeredSlides: !props.attributes.centeredSlides });
						}}
					/>

					<TextControl
						label={__("Space between slides (px)", "zenflow5")}
						type="number"
						value={props.attributes.spaceBetweenXS}
						allowReset={true}
						resetFallbackValue={"24"}
						onChange={(new_val) => {
							props.setAttributes({ spaceBetweenXS: new_val });
						}}
					/>
					<Button
						variant="secondary"
						onClick={() => {
							// Reset the value to the fallback value when the button is clicked
							props.setAttributes({ spaceBetweenXS: "24" }); // Change "24" to your desired fallback value
						}}
					>
						{__("Reset", "zenflow5")}
					</Button>

				</PanelBody>

				<PanelBody title={__("Auto play", "zenflow5")} initialOpen={true}>

					<ToggleControl
						label="Auto play"
						checked={props.attributes.autoPlay}
						onChange={() => {
							props.setAttributes({ autoPlay: !props.attributes.autoPlay });
						}}
					/>

					{props.attributes.autoPlay && (
						<>
							<ToggleControl
								label="Auto play: disable on interaction"
								checked={props.attributes.disableOnInteraction}
								onChange={() => {
									props.setAttributes({ disableOnInteraction: !props.attributes.disableOnInteraction });
								}}
							/>
							<ToggleControl
								label="Auto play: pause on mouse enter"
								checked={props.attributes.pauseOnMouseEnter}
								onChange={() => {
									props.setAttributes({ pauseOnMouseEnter: !props.attributes.pauseOnMouseEnter });
								}}
							/>
							<ToggleControl
								label="Auto play: stop on last slide"
								checked={props.attributes.stopOnLastSlide}
								onChange={() => {
									props.setAttributes({ stopOnLastSlide: !props.attributes.stopOnLastSlide });
								}}
							/>

							<TextControl
								label={__("Auto play: delay (Milliseconds)", "zenflow5")}
								type="number"
								value={props.attributes.delay}
								allowReset={true}
								resetFallbackValue={5000}
								onChange={(new_val) => {
									props.setAttributes({ delay: new_val });
								}}
							/>
							<Button
								variant="secondary"
								onClick={() => {
									// Reset the value to the fallback value when the button is clicked
									props.setAttributes({ delay: 5000 }); // Change "24" to your desired fallback value
								}}
								aria-label={__("Reset delay", "zenflow5")} // Provide an accessible label for the button
							>
								{__("Reset", "zenflow5")}
							</Button>

						</>
					)}

				</PanelBody>

				<PanelBody title={__("Slides per view", "zenflow5")} initialOpen={false}>

					<RangeControl
						label={__("Number of slides XS (0)", "zenflow5")}
						min={1}
						max={20}
						step={1}
						allowReset={true}
						resetFallbackValue={"1"}
						value={props.attributes.slidesPerViewXS}
						onChange={(new_val) => {
							props.setAttributes({ slidesPerViewXS: new_val });
						}}
					/>

					<RangeControl
						label={__("Number of slides SM (576)", "zenflow5")}
						min={1}
						max={20}
						step={1}
						allowReset={true}
						resetFallbackValue={null}
						value={props.attributes.slidesPerViewSM}
						onChange={(new_val) => {
							props.setAttributes({ slidesPerViewSM: new_val });
						}}
					/>

					<RangeControl
						label={__("Number of slides MD (768)", "zenflow5")}
						min={1}
						max={20}
						step={1}
						allowReset={true}
						resetFallbackValue={null}
						value={props.attributes.slidesPerViewMD}
						onChange={(new_val) => {
							props.setAttributes({ slidesPerViewMD: new_val });
						}}
					/>

					<RangeControl
						label={__("Number of slides LG (992)", "zenflow5")}
						min={1}
						max={20}
						step={1}
						allowReset={true}
						resetFallbackValue={null}
						value={props.attributes.slidesPerViewLG}
						onChange={(new_val) => {
							props.setAttributes({ slidesPerViewLG: new_val });
						}}
					/>

					<RangeControl
						label={__("Number of slides XL (1200)", "zenflow5")}
						min={1}
						max={20}
						step={1}
						allowReset={true}
						resetFallbackValue={null}
						value={props.attributes.slidesPerViewXL}
						onChange={(new_val) => {
							props.setAttributes({ slidesPerViewXL: new_val });
						}}
					/>

					<RangeControl
						label={__("Number of slides XXL (1400)", "zenflow5")}
						min={1}
						max={20}
						step={1}
						allowReset={true}
						resetFallbackValue={null}
						value={props.attributes.slidesPerViewXXL}
						onChange={(new_val) => {
							props.setAttributes({ slidesPerViewXXL: new_val });
						}}
					/>

					{/* <RangeControl
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
				*/}
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={['zenflow5/carousel-swiper-item']}
				template={[
					['zenflow5/carousel-swiper-item'],
					['zenflow5/carousel-swiper-item'],
					['zenflow5/carousel-swiper-item']
				]}
			/>

			<ButtonBlockAppender
				className="slider-appender has-icon"
				rootClientId={clientId}
			/>

		</div>
	);
}
