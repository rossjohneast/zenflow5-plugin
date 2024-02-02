import block_icons from "../block-icons";
import { useState } from '@wordpress/element';
import {
	InspectorControls,
	InnerBlocks,
    PanelColorSettings,
	BlockControls,
	MediaReplaceFlow,
	ButtonBlockAppender
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	Button,
	RangeControl,
    SelectControl,
	FocalPointPicker
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

import classnames from 'classnames';

export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props;

	//Start: focal point management
	const [focalPoint, setFocalPoint] = useState({
		x: attributes.focalPointX,
		y: attributes.focalPointY,
	});

	// Grab this from atts when set in edit screen
	const focalUrl = attributes.urlImage;
	//End: focal point management

	//Start: image upload management
	//The URL is what we use, the media ID may be useful
	function selectImg(el) {
		setAttributes({ urlImage: el.url, imgID: el.id });
	};
	//End: image upload management

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (props.attributes.backgroundImage !== null) {
      BackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.backgroundImage} )`,
      };
    }

    const style = {
      minHeight: props.attributes.minHeightContainer,
      backgroundSize: props.attributes.backgroundImageSize,
      backgroundRepeat: props.attributes.backgroundImageRepeat,
      backgroundPosition: props.attributes.backgroundImagePos,

	  backgroundImage: `url(${focalUrl})`,
	  backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
    };

    function onImageSelect(imageObject) {
      setAttributes({
        backgroundImage: imageObject.sizes.full.url,
      });
    }

    const onRemoveImage = () => {
      setAttributes({
        //Remove image
        backgroundImage: null,
      });
    };

	return (
		<div {...useBlockProps()}>

			<BlockControls group="other">
				<MediaReplaceFlow
					name={!attributes.urlImage ? __('Add Background Image') : __('Replace Background Image')}
					mediaId={attributes.imgID}
					mediaURL={attributes.urlImage}
					allowedTypes={['image']}
					accept="image/*"
					onSelect={selectImg}
					onError={error => console.error(error)}
				/>
			</BlockControls>


			<InspectorControls>
				<Panel>
					<PanelBody
						title={__("Container Settings", "zenflow5")}
						initialOpen={true}
					>
						<RangeControl
							label={__("Minimum height", "zenflow5")}
							min={0}
							max={2000}
							step={5}
							allowReset={true}
							resetFallbackValue={"0"}
							value={props.attributes.minHeightContainer}
							onChange={(new_val) => {
								props.setAttributes({ minHeightContainer: new_val });
							}}
						/>

						<PanelRow className="w-100">
							<SelectControl
								label={__("Layout container width", "zenflow5")}
								value={props.attributes.layoutContainerOption}
								options={[
									{ value: "container", label: "container" },
									{ value: "container-sm", label: "container-sm" },
									{ value: "container-md", label: "container-md" },
									{ value: "container-lg", label: "container-lg" },
									{ value: "container-xl", label: "container-xl" },
									{ value: "container-xxl", label: "container-xxl" },
									{ value: "container-fluid", label: "container-fluid" },
								]}
								onChange={(new_val) => {
									props.setAttributes({ layoutContainerOption: new_val });
								}}
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody title={__('Background Image settings')} initialOpen={false}>

						{focalUrl && (
							<div>
								<PanelRow>
									<div>
										<fieldset>
											{/* https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/ */}
											<FocalPointPicker
												label={__('Focal point picker')}
												url={focalUrl}
												value={focalPoint}
												onDragStart={setFocalPoint}
												onDrag={setFocalPoint}
												onChange={() => setAttributes({ focalPointX: focalPoint.x, focalPointY: focalPoint.y })}
											/>
										</fieldset>
									</div>
								</PanelRow>
								<PanelRow>
									<Button
										variant="secondary"
										isSmall
										className="block-library-cover__reset-button"
										onClick={() =>
											setAttributes({
												urlImage: undefined,
												imgID: undefined,
												focalPointY: 0.5,
												focalPointX: 0.5,
												//backgroundType: undefined
											})
										}
									>
										{__('Clear Media')}
									</Button>
								</PanelRow>
								<PanelRow className="w-100">
									<SelectControl
										label={__('Background fixed', 'zenflow5')}
										value={props.attributes.backgroundImageAttachment}
										options={[
											{ value: 'initial', label: 'Initial' },
											{ value: 'fixed', label: 'Fixed' }
										]}
										onChange={(new_val) => {
											props.setAttributes({ backgroundImageAttachment: new_val })
										}} />
								</PanelRow>



								<PanelRow className="w-100">
									<SelectControl
										label={__('Background Size', 'zenflow5')}
										value={props.attributes.backgroundImageSize}
										options={[
											{ value: 'cover', label: 'Cover' },
											{ value: 'contain', label: 'Contain' },
											{ value: 'auto', label: 'Auto' },
											{ value: '100%', label: '100%' }
										]}
										onChange={(new_val) => {
											props.setAttributes({ backgroundImageSize: new_val })
										}} />
								</PanelRow>

								<PanelRow className="w-100">
									<SelectControl
										label={__('Background Repeat', 'zenflow5')}
										value={props.attributes.backgroundImageRepeat}
										options={[
											{ value: 'repeat', label: 'Repeat' },
											{ value: 'no-repeat', label: 'No-repeat' },
											{ value: 'repeat-x', label: 'Repeat-x' },
											{ value: 'repeat-y', label: 'Repeat-y' },
											{ value: 'space', label: 'Space' },
											{ value: 'round', label: 'Round' },
											{ value: 'initial', label: 'Initial' }
										]}
										onChange={(new_val) => {
											props.setAttributes({ backgroundImageRepeat: new_val })
										}} />
								</PanelRow>
							</div>

						)}

						<PanelRow className="w-100">
							<SelectControl
								label={__('Background Tint', 'zenflow5')}
								value={props.attributes.backgroundImageTint}
								options={[
									{ value: '', label: 'Tint None' },
									{ value: 'tint tint-01', label: '10%' },
									{ value: 'tint tint-02', label: '20%' },
									{ value: 'tint tint-03', label: '30%' },
									{ value: 'tint tint-04', label: '40%' },
									{ value: 'tint tint-05', label: '50%' },
									{ value: 'tint tint-06', label: '60%' },
									{ value: 'tint tint-07', label: '70%' },
									{ value: 'tint tint-08', label: '80%' },
									{ value: 'tint tint-09', label: '90%' },
								]}
								onChange={(new_val) => {
									props.setAttributes({ backgroundImageTint: new_val })
								}} />
						</PanelRow>

					</PanelBody>

				</Panel>
			</InspectorControls>

			<div
				className={
					classnames(
						'zenflow5-container',
						[`${props.attributes.layoutContainerOption}`]
					)}

				style={{
					...style,
					...BackgroundIsActive,
				}}
			>
				<InnerBlocks
					allowedBlocks={["zenflow5/row"]}
					template={[["zenflow5/row"]]}
				/>

				{/* <ButtonBlockAppender
					className="custom-text-appender has-icon"
					rootClientId={clientId}
				/> */}

				<div className="custom-text-appender-wrapper mt-3">
					<ButtonBlockAppender
						className="custom-text-appender has-icon"
						rootClientId={clientId}
					/>
				</div>

			</div>
		</div>
	);
}
