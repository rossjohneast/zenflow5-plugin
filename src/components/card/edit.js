import { __ } from "@wordpress/i18n";
import { useEffect, useState, useRef } from "@wordpress/element";
import { useMergeRefs } from "@wordpress/compose";
import {
	useBlockProps,
	InnerBlocks,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import {
	Spinner,
	ToolbarButton,
	PanelBody,
	TextareaControl,
	TextControl, 
	SelectControl,
	PanelRow,
	Button,
	FocalPointPicker,
	ToolbarGroup,
	Popover,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";
import { link, linkOff } from "@wordpress/icons";
import { prependHTTP } from "@wordpress/url";
import classnames from "classnames";
import "./editor.scss";

import sharedPaddingInspCnt from "../shared/padding/padding-insp-cnt.js";
import sharedPaddingClassnames from "../shared/padding/padding-classnames.js";
import sharedMarginInspCnt from "../shared/margin/margin-insp-cnt.js";
import sharedMarginClassnames from "../shared/margin/margin-classnames.js";

import sharedColorsInspCnt from "../../grid-blocks/shared/colors/color-insp-cnt.js";

// export default function Edit(props { isSelected, attributes, setAttributes }) {

	export default function Edit(props) {

    const { isSelected, attributes, setAttributes } = props;

	const NEW_TAB_REL = "noopener noreferrer";
	const richTextRef = useRef();

	const {
		imgID,
		imgAlt,
		imgURL,
		justifyContent,
		alignItems,
		linkTarget,
		linkRel,
		url,
		minHeightCard,
		equalCardHeights,
		urlImage,
		displayCardImgTop,
		backgroundColor,
		textColor,
		backgroundColorTheme,
		textColorTheme,
		bgTintColor,
		bgTintOpacity,
		bgTintColorTheme,
		imgURLFocalPointX,
		imgURLFocalPointY,
		urlImagefocalPointX,
		urlImagefocalPointY,
		shadow,
		border,
		backgroundSize
	} = attributes;

	function onToggleOpenInNewTab(value) {
		const newLinkTarget = value ? "_blank" : undefined;

		let updatedRel = linkRel;
		if (newLinkTarget && !linkRel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newLinkTarget && linkRel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		setAttributes({
			linkTarget: newLinkTarget,
			linkRel: updatedRel,
		});
	}

	// Use internal state instead of a ref to make sure that the component
	// re-renders when the popover's anchor updates.
	const [popoverAnchor, setPopoverAnchor] = useState(null);

	//To reposition the toolbar this was commented out
	// const ref = useRef();
	// const richTextRef = useRef();
	// const blockProps = useBlockProps( {
	// 	ref: useMergeRefs( [ setPopoverAnchor, ref ] ),
	// 	onKeyDown,
	// } );

	const [isEditingURL, setIsEditingURL] = useState(false);
	const isURLSet = !!url;
	const opensInNewTab = linkTarget === "_blank";

	function startEditing(event) {
		event.preventDefault();
		setIsEditingURL(true);
	}

	function unlink() {
		setAttributes({
			url: undefined,
			linkTarget: undefined,
			linkRel: undefined,
		});
		setIsEditingURL(false);
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingURL(false);
		}
	}, [isSelected]);

	function onKeyDown(event) {
		if (isKeyboardEvent.primary(event, "k")) {
			startEditing(event);
		} else if (isKeyboardEvent.primaryShift(event, "k")) {
			unlink();
			richTextRef.current?.focus();
		}
	}

	//End: Add link management

	//Start: focal point management
	const [focalPoint, setFocalPoint] = useState({
		x: attributes.focalPointX,
		y: attributes.focalPointY,
	});

	const [focalPointTopImage, setFocalPointTopImage] = useState({
		x: attributes.urlImagefocalPointX,
		y: attributes.urlImagefocalPointY,
	});

	// Grab this from atts when set in edit screen
	const focalUrl = attributes.urlImage;

	/* Example function to render the CSS styles based on Focal Point Picker value */
	const style = {
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${focalUrl})`,
		backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
		minHeight: minHeightCard,
		height: equalCardHeights ? "100%" : "",
		backgroundColor: backgroundColor
	};
	//End: focal point management

	// Grab this from atts when set in edit screen
	let imgTopFocalUrl = attributes.imgURL;

	const styleTopImage = {
		minHeight: 300,
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${imgTopFocalUrl})`,
		backgroundPosition: `${focalPointTopImage.x * 100}% ${focalPointTopImage.y * 100}%`,
		backgroundSize: backgroundSize
	};

	//Start: image upload management
	//The URL is what we use, the media ID may be useful
	function selectBgImg(el) {
		setAttributes({ urlImage: el.url, imgID: el.id });
	}
	//End: image upload management

	const overlayStyle = {
		backgroundColor: bgTintColor,
		opacity: bgTintOpacity,
	};

	const [imgPreview, setImgPreview] = useState(imgURL);

	const selectImg = (img) => {
		console.log(img)

		let newImgURL = null;

		//Blob images are uploaded
		//They are stored by WordPress before uploading to server
		//If a blob image we wont have sizes...
		if (isBlobURL(img.url)) {
			newImgURL = img.url;
		} else {
			//WordPress only creates an image size if original/upload is greater
			//Need to check if large is available else use full...
			newImgURL = img.sizes
				? img.sizes.large.url
				: img.media_details.sizes.large.source_url;

			//Only set attributes after upload is complete
			setAttributes({
				imgID: img.id,
				imgAlt: img.alt,
				imgURL: newImgURL
			});

			revokeBlobURL(imgPreview);
		}

		setImgPreview(newImgURL);
	};

	return (
		<>
			<div {...useBlockProps()}>
				<InspectorControls>

					{/* Top card image focal picker */}
					{attributes.imgURL && (
						<PanelBody title={__("Top Image settings")}>
							<PanelRow>
								<div>
									<fieldset>
										{/* https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/ */}
										<FocalPointPicker
											label={__("Focal point picker")}
											url={imgTopFocalUrl}
											value={focalPointTopImage}
											onDragStart={setFocalPointTopImage}
											onDrag={setFocalPointTopImage}
											onChange={() =>
												setAttributes({
													urlImageFocalPointX: focalPointTopImage.x,
													urlImageFocalPointY: focalPointTopImage.y,
												})
											}
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
											imgURL: undefined,
											urlImageFocalPointX: 0.5,
											urlImageFocalPointY: 0.5,
											//backgroundType: undefined
										})
									}
								>
									{__("Clear Media")}
								</Button>
							</PanelRow>

							<PanelRow className="w-100">
							<SelectControl
								label={__("Image Top Size", "zenflow5")}
								value={backgroundSize}
								options={[
									{ value: "cover", label: "Cover" },
									{ value: "contain", label: "Contain" },
									{ value: "100%", label: "100%" },
									{ value: "auto", label: "Auto" }
								]}
								onChange={(new_val) => {
									setAttributes({ backgroundSize: new_val });
								}}
							/>
						</PanelRow>

						</PanelBody>
						
					)}

					{attributes.urlImage && (
						<PanelBody title={__("Background Image settings")}>
							<PanelRow>
								<div>
									<fieldset>
										{/* https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/ */}
										<FocalPointPicker
											label={__("Focal point picker")}
											url={focalUrl}
											value={focalPoint}
											onDragStart={setFocalPoint}
											onDrag={setFocalPoint}
											onChange={() =>
												setAttributes({
													focalPointX: focalPoint.x,
													focalPointY: focalPoint.y,
												})
											}
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
									{__("Clear Media")}
								</Button>
							</PanelRow>
						</PanelBody>
					)}

					<PanelBody title={__("Settings", "zenflow5")}>

						{attributes.url && (
							<PanelRow>
								<TextControl
									label="Card link ARIA Label"
									value={ attributes.ariaLabel }
									onChange={ ( value ) => 
										setAttributes({ ariaLabel: value })
									}
								/>
							</PanelRow>
						)}

						<PanelRow>
							<ToggleControl
								label={__("Card Top Image Layout")}
								help={
									attributes.displayCardImgTop
										? "Show Image Top"
										: "Hide Image Top"
								}
								checked={attributes.displayCardImgTop}
								onChange={() =>
									setAttributes({ displayCardImgTop: !displayCardImgTop })
								}
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label={__("Card equalise height")}
								help={
									attributes.equalCardHeights
										? "Equal card height in a row."
										: "Unequal card height in a row."
								}
								checked={attributes.equalCardHeights}
								onChange={() =>
									setAttributes({ equalCardHeights: !equalCardHeights })
								}
							/>
						</PanelRow>

						<RangeControl
							label={__("Minimum height", "zenflow5")}
							min={0}
							max={2000}
							step={5}
							allowReset={true}
							resetFallbackValue={"0"}
							value={minHeightCard}
							onChange={(new_val) => {
								setAttributes({ minHeightCard: new_val });
							}}
						/>

						{!attributes.urlImage && (
							<>
								{imgPreview && !isBlobURL(imgPreview) && (
									<TextareaControl
										label={__("Alt Attribute", "zenflow5")}
										value={imgAlt}
										onChange={(imgAlt) => setAttributes({ imgAlt })}
										help={__(
											"Description of your image for screen readers",
											"zenflow5"
										)}
									/>
								)}
							</>
						)}
						<PanelRow className="w-100">
							<SelectControl
								label={__("Align Card Content", "zenflow5")}
								value={alignItems}
								options={[
									{ value: "align-items-start", label: "Start" },
									{ value: "align-items-end", label: "End" },
									{ value: "align-items-center", label: "Center" },
									{ value: "align-items-baseline", label: "Baseline" },
									{ value: "align-items-stretch", label: "Stretch" },
								]}
								onChange={(new_val) => {
									setAttributes({ alignItems: new_val });
								}}
							/>
						</PanelRow>

						<PanelRow className="w-100">
							<SelectControl
								label={__("Justify Card Content", "zenflow5")}
								value={justifyContent}
								options={[
									{ value: "justify-content-start", label: "Start" },
									{ value: "justify-content-end", label: "End" },
									{ value: "justify-content-center", label: "Center" },
									{ value: "justify-content-between", label: "Space-between" },
									{ value: "justify-content-around", label: "Space-around" },
									{ value: "justify-content-evenly", label: "Space-evenly" },
								]}
								onChange={(new_val) => {
									setAttributes({ justifyContent: new_val });
								}}
							/>
						</PanelRow>

						<PanelRow className="w-100">
							<SelectControl
								label={__("Shadow", "zenflow5")}
								value={shadow}
								options={[
									{ value: "shadow-none", label: "No Shadow" },
									{ value: "shadow-sm", label: "Shadow Small" },
									{ value: "shadow", label: "Shadow" },
									{ value: "shadow-lg", label: "Shadow Large" },
								]}
								onChange={(new_val) => {
									setAttributes({ shadow: new_val });
								}}
							/>
						</PanelRow>
						
						<PanelRow className="w-100">
							<SelectControl
								label={__("Border", "zenflow5")}
								value={border}
								options={[
									{ value: "", label: "Theme Default" },
									{ value: "border-0", label: "No Border" }
								]}
								onChange={(new_val) => {
									setAttributes({ border: new_val });
								}}
							/>
						</PanelRow>
					</PanelBody>


					{sharedPaddingInspCnt(props)}

					{sharedMarginInspCnt(props)}

					{sharedColorsInspCnt(props)}

					<PanelBody title={__("Overlay", "zenflow5")} initialOpen={true}>
						<RangeControl
							label={__("Overlay Opacity", "zenflow5")}
							min={0}
							max={1}
							step={0.05}
							allowReset={true}
							resetFallbackValue={""}
							value={bgTintOpacity}
							onChange={(new_val) => {
								setAttributes({ bgTintOpacity: new_val });
							}}
						/>

						<PanelRow className="w-100">
							<SelectControl
								label={__("Overlay Theme Color", "zenflow5")}
								value={bgTintColorTheme}
								options={[
									{ value: "", label: "Default (None)" },
									{ value: "bg-primary", label: "Primary" },
									{ value: "bg-secondary", label: "Secondary" },
									{ value: "bg-success", label: "Success" },
									{ value: "bg-danger", label: "Danger" },
									{ value: "bg-warning", label: "Warning" },
									{ value: "bg-info", label: "Info" },
									{ value: "bg-light", label: "Light" },
									{ value: "bg-dark", label: "Dark" },
									{ value: "bg-white", label: "White" },
								]}
								onChange={(new_val) => {
									setAttributes({ bgTintColorTheme: new_val });
								}}
							/>
						</PanelRow>
					</PanelBody>

					<PanelColorSettings
						title={__("Overlay Custom Color", "zenflow5")}
						initialOpen={false}
						colorSettings={[
							{
								value: bgTintColor,
								onChange: (colorValue) =>
									setAttributes({ bgTintColor: colorValue }),
								label: __("Overlay Color"),
							},
						]}
					></PanelColorSettings>
				</InspectorControls>

				{!imgURL &&
					<BlockControls group="other">
						<MediaReplaceFlow
							name={
								!attributes.urlImage
									? __("Add Background Image")
									: __("Replace Background Image")
							}
							mediaId={attributes.imgID}
							mediaURL={attributes.urlImage}
							allowedTypes={["image"]}
							accept="image/*"
							onSelect={selectBgImg}
							onError={(error) => console.error(error)}
						/>
					</BlockControls>
				}
				<BlockControls>
					<ToolbarGroup>
						{!isURLSet && (
							<ToolbarButton
								icon={link}
								title={__("Link")}
								onClick={startEditing}
							/>
						)}
						{isURLSet && (
							<ToolbarButton
								name="link"
								icon={linkOff}
								title={__("Unlink")}
								onClick={unlink}
								isActive={true}
							/>
						)}
					</ToolbarGroup>
				</BlockControls>
				{isSelected && (isEditingURL || isURLSet) && (
					<Popover
						onClose={() => {
							setIsEditingURL(false);
							richTextRef.current?.focus();
						}}
						anchor={popoverAnchor}
						focusOnMount={isEditingURL ? "firstElement" : false}
						__unstableSlotName={"__unstable-block-tools-after"}
						shift
					>
						<LinkControl
							className="wp-block-navigation-link__inline-link-input"
							value={{ url, opensInNewTab }}
							onChange={({
								url: newURL = "",
								opensInNewTab: newOpensInNewTab,
							}) => {
								setAttributes({ url: prependHTTP(newURL) });

								if (opensInNewTab !== newOpensInNewTab) {
									onToggleOpenInNewTab(newOpensInNewTab);
								}
							}}
							onRemove={() => {
								unlink();
								richTextRef.current?.focus();
							}}
							forceIsEditingLink={isEditingURL}
						/>
					</Popover>
				)}

				{imgPreview && (
					<BlockControls group="inline">
						<MediaReplaceFlow
							name={__("Replace Top Image", "zenflow5")}
							mediaId={imgID}
							mediaURL={imgURL}
							acceptedTypes={["image"]}
							accept={"image/*"}
							onSelect={selectImg}
							onError={(error) => console.error(error)}
						/>
						<ToolbarButton
							onClick={() => {
								setAttributes({
									imgID: 0,
									imgAlt: "",
									imgURL: "",
								});

								setImgPreview("");
							}}
						>
							{__("Remove Top Image", "zenflow5")}
						</ToolbarButton>
					</BlockControls>
				)}

				<div
					style={style}
					className={
						("card",
							classnames(
								'card',
								sharedPaddingClassnames(props),
								sharedMarginClassnames(props),
								[`${textColorTheme !== undefined ? `${textColorTheme}` : ""}`],
								[`${shadow !== undefined ? `${shadow}` : ""}`],
								[`${border !== undefined ? `${border}` : ""}`],
								[
									`${backgroundColorTheme !== undefined
										? `${backgroundColorTheme}`
										: ""
									}`,
								]
							))
					}
				>
					{attributes.displayCardImgTop && !attributes.urlImage && (
						<>
							<div className="img-wrapper">
								{imgPreview && (
									<div style={styleTopImage}>
										{/* <img src={imgPreview} className="card-img-top" alt={imgAlt} /> */}
									</div>
								)}
								{isBlobURL(imgPreview) && <Spinner />}
							</div>
							<MediaPlaceholder
								acceptedTypes={["image"]}
								accept={"image/*"}
								icon="format-image"
								multiple={false}
								labels={{ title: "Card Image Top" }}
								onSelect={selectImg}
								onError={(error) => console.error(error)}
								disableMediaButtons={imgPreview}
							/>
						</>
					)}
					<div
						className={classnames(
							[`${justifyContent !== undefined ? `${justifyContent}` : ""}`],
							[`${alignItems !== undefined ? `${alignItems}` : ""}`]
						)}
					>
						{/* <RichText
							tagName="h2"
							className='card-title h2'
							value={title}
							allowedFormats={['core/bold', 'core/italic', 'core/text-color']}
							onChange={(val) => setAttributes({ title: val })}
							placeholder={__('Card title')}
						/>

						<RichText
							tagName="p"
							className='card-text'
							value={text}
							allowedFormats={['core/bold', 'core/italic']}
							onChange={(val) => setAttributes({ text: val })}
							placeholder={__('Some quick example text.')}
						/> */}

						<InnerBlocks
							// template={[
							// 	["core/heading"],
							// 	["core/paragraph"],
							// 	[
							// 		"zenflow5/button",
							// 		{ display: "d-inline-block", btnStyle: "btn-primary" },
							// 	],
							// ]}
						/>
					</div>

					<div
						className={classnames("card-background-img-tint", [
							`${bgTintColorTheme !== undefined ? `${bgTintColorTheme}` : ""}`,
						])}
						style={overlayStyle}
					></div>
				</div>
			</div>
		</>
	);
}
