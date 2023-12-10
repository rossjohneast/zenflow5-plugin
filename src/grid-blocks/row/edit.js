import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { InnerBlocks,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    PanelColorSettings,
	BlockControls,
	MediaReplaceFlow
} from '@wordpress/block-editor';
import {
    PanelBody,
    PanelRow,
    Button,
    RangeControl,
    SelectControl,
	FocalPointPicker
 } from '@wordpress/components';


import './editor.scss';

import classnames from 'classnames';

import sharedPaddingInspCnt from "../shared/padding/padding-insp-cnt.js";
import sharedPaddingClassnames from "../shared/padding/padding-classnames.js";
import sharedMarginInspCnt from "../shared/margin/margin-insp-cnt.js";
import sharedMarginClassnames from "../shared/margin/margin-classnames.js";
import sharedColWidthClassnames from "../shared/col/colwidth-classnames.js";
import sharedColOffsetsClassnames from "../shared/col/coloffsets-classnames.js";
import sharedAnimationsInspCnt from "../shared/animation/aos-insp-cnt.js";
import sharedAnimationsPropsAtts from "../shared/animation/aos-insp-cnt.js";

import sharedDisplayInspCnt from "../shared/display/display-insp-cnt.js";
import sharedDisplayClassnames from "../shared/display/display-classnames";

import sharedTextAlignInspCnt from "../shared/textalign/textalign-insp-cnt";
import sharedtextAlignClassnames from "../shared/textalign/textalign-classnames";


export default function Edit(props) {
	const { attributes, setAttributes, textColor, backgroundColor } = props;


	//Start: focal point management
	const [focalPoint, setFocalPoint] = useState({
		x: attributes.focalPointX,
		y: attributes.focalPointY,
	});

	// Grab this from atts when set in edit screen
	const focalUrl = attributes.urlImage;

	/* Example function to render the CSS styles based on Focal Point Picker value */
	// const style = {
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundImage: `url(${focalUrl})`,
	// 	backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
	// };
		//End: focal point management


	//Start: image upload management
	//The URL is what we use, the media ID may be useful
	function selectImg(el) {
		setAttributes({ urlImage: el.url, imgID: el.id });
	};
	//End: image upload management



	//Only use the background inline style if its not null
	let BackgroundIsActive = '';
	if (props.attributes.backgroundImage !== null) {
		BackgroundIsActive = {
			backgroundImage: `url( ${props.attributes.backgroundImage} )`
		}
	}


	const style = {
		minHeight: props.attributes.minHeightRow,
		color: props.attributes.textColor,
		backgroundColor: props.attributes.backgroundColor,
		backgroundSize: props.attributes.backgroundImageSize,
		backgroundRepeat: props.attributes.backgroundImageRepeat,
		backgroundPosition: props.attributes.backgroundImagePos,

		backgroundImage: `url(${focalUrl})`,
		backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,

	};

	function onImageSelect(imageObject) {
		setAttributes({
			backgroundImage: imageObject.sizes.full.url
		});

	}

	const onRemoveImage = () => {
		setAttributes({
			//Remove image
			backgroundImage: null
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
				<PanelBody title={__('Row quick settings', 'zenflow5')}>

					<RangeControl
						label={__('Minimum height', 'zenflow5')}
						min={0}
						max={2000}
						step={5}
						allowReset={true}
						resetFallbackValue={'0'}
						value={props.attributes.minHeightRow}
						onChange={(new_val) => {
							props.setAttributes({ minHeightRow: new_val })
						}} />

					<RangeControl
						label={__('Column Gutter Width', 'zenflow5')}
						min={0}
						max={4}
						help={"Space between content columns"}
						allowReset={true}
						resetFallbackValue={''}
						value={props.attributes.columnGutterWidth}
						onChange={(new_val) => {
							props.setAttributes({ columnGutterWidth: new_val })
						}} />

					<RangeControl
						label={__('Margin Bottom (Desktop)', 'zenflow5')}
						min={0}
						max={5}
						allowReset={true}
						resetFallbackValue={undefined}
						value={props.attributes.marginLGB}
						onChange={(new_val) => {
							props.setAttributes({ marginLGB: new_val })
						}} />
				</PanelBody>

				<PanelBody title={__('Display settings', 'zenflow5')} initialOpen={false}>

					{sharedDisplayInspCnt(props)}

				</PanelBody>


				<PanelBody title={__('Theme colors', 'zenflow5')} initialOpen={false}>
					<PanelRow className="w-100">
						<SelectControl
							label={__('Background Color', 'zenflow5')}
							value={props.attributes.backgroundColorTheme}
							options={[
								{ value: '', label: 'Default (None)' },
								{ value: 'bg-primary', label: 'Primary' },
								{ value: 'bg-secondary', label: 'Secondary' },
								{ value: 'bg-success', label: 'Success' },
								{ value: 'bg-danger', label: 'Danger' },
								{ value: 'bg-warning', label: 'Warning' },
								{ value: 'bg-info', label: 'Info' },
								{ value: 'bg-light', label: 'Light' },
								{ value: 'bg-dark', label: 'Dark' },
								{ value: 'bg-white', label: 'White' },
							]}
							onChange={(new_val) => {
								props.setAttributes({ backgroundColorTheme: new_val })
							}} />
					</PanelRow>
					<PanelRow className="w-100">
						<SelectControl
							label={__('Text Color', 'zenflow5')}
							value={props.attributes.textColorTheme}
							options={[
								{ value: '', label: 'Default' },
								{ value: 'text-primary', label: 'Primary' },
								{ value: 'text-secondary', label: 'Secondary' },
								{ value: 'text-success', label: 'Success' },
								{ value: 'text-danger', label: 'Danger' },
								{ value: 'text-warning', label: 'Warning' },
								{ value: 'text-info', label: 'Info' },
								{ value: 'text-light', label: 'Light' },
								{ value: 'text-dark', label: 'Dark' },
								{ value: 'text-white', label: 'White' },
							]}
							onChange={(new_val) => {
								props.setAttributes({ textColorTheme: new_val })
							}} />
					</PanelRow>
				</PanelBody>

				<PanelColorSettings
					title={__('Custom colors', 'zenflow5')} initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
							label: __('Background Color'),
						},
						{
							value: textColor,
							onChange: (colorValue) => setAttributes({ textColor: colorValue }),
							label: __('Text Color'),
						},
					]}
				>

				</PanelColorSettings>
{focalUrl && (
					<PanelBody title={__('Background image')} initialOpen={false}>
						
					
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
)}
				{sharedPaddingInspCnt(props)}

				{sharedMarginInspCnt(props)}

				{sharedTextAlignInspCnt(props)}

				{sharedAnimationsInspCnt(props)}

			</InspectorControls>

			<div
				className={
					classnames(
						'zenflow5-row',
						'row',
						[`${props.attributes.textColorTheme !== undefined ? `${props.attributes.textColorTheme}` : ''}`],
						[`${props.attributes.backgroundColorTheme !== undefined ? `${props.attributes.backgroundColorTheme}` : ''}`],
						[`${props.attributes.columnGutterWidth !== undefined ? `gx-${props.attributes.columnGutterWidth}` : ''}`],
						sharedPaddingClassnames(props),
						sharedMarginClassnames(props),
						sharedtextAlignClassnames(props),
						sharedDisplayClassnames(props),
						[`${props.attributes.backgroundImageTint !== undefined ? `${props.attributes.backgroundImageTint}` : ''}`],
						[`${props.attributes.justifyContent !== undefined ? `${props.attributes.justifyContent}` : ''}`],
						[`${props.attributes.alignItems !== undefined ? `${props.attributes.alignItems}` : ''}`],
						[`${props.attributes.display !== undefined ? `${props.attributes.display}` : ''}`]
					)}
				style={{
					...style,
					...BackgroundIsActive
				}}>
				<InnerBlocks
					allowedBlocks={['zenflow5/col']}
					template={[
						['zenflow5/col'],
						['zenflow5/col']
					]}
				/>

			</div>
		</div>
	);
}
