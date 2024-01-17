import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	SelectControl,
	PanelRow,
	ToggleControl,
} from "@wordpress/components";
import './editor.scss';

export default function Edit(props) {

	const { attributes, setAttributes } = props;

	return (
		<>

			<InspectorControls>

				<PanelBody title={__("Settings", "zenflow5")}>


					<PanelRow>
						<ToggleControl
							label={__("Copyright symbol")}
							help={
								attributes.showCopyrightSymbol
									? "Show"
									: "Hide"
							}
							checked={attributes.showCopyrightSymbol}
							onChange={() =>
								setAttributes({ showCopyrightSymbol: !attributes.showCopyrightSymbol })
							}
						/>
					</PanelRow>

					<PanelRow>
						<ToggleControl
							label={__("Year From")}
							help={
								attributes.showYearFrom
									? "Show"
									: "Hide"
							}
							checked={attributes.showYearFrom}
							onChange={() =>
								setAttributes({ showYearFrom: !attributes.showYearFrom })
							}
						/>
					</PanelRow>

					{attributes.showYearFrom
						&& (
							<PanelRow>
								<TextControl
									label="Year from"
									value={attributes.yearFrom}
									onChange={(value) =>
										setAttributes({ yearFrom: value })
									}
								/>
							</PanelRow>

						)
					}

					<PanelRow>
						<ToggleControl
							label={__("Year")}
							help={
								attributes.showYear
									? "Show"
									: "Hide"
							}
							checked={attributes.showYear}
							onChange={() =>
								setAttributes({ showYear: !attributes.showYear })
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Site Name")}
							help={
								attributes.showSiteName
									? "Show"
									: "Hide"
							}
							checked={attributes.showSiteName}
							onChange={() =>
								setAttributes({ showSiteName: !attributes.showSiteName })
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Rights Reserved")}
							help={
								attributes.showRightReserved
									? "Show"
									: "Hide"
							}
							checked={attributes.showRightReserved}
							onChange={() =>
								setAttributes({ showRightReserved: !attributes.showRightReserved })
							}
						/>
					</PanelRow>


					<PanelRow>
						{/* <SelectControl
							label={__('Information Type')}
							value={attributes.informationType}
							options={[
								{ value: '1', label: 'Copyright symbol, site name, current year' },
								{ value: '2', label: 'Copyright symbol, site name, year from - current year' },

							]}
							onChange={(new_val) => {
								setAttributes({ informationType: new_val })
							}} /> */}
					</PanelRow>


				</PanelBody>

			</InspectorControls>

			<div {...useBlockProps()}>

				{/* Future proofing if we want to change the layout */}
				{/* {attributes.informationType} */}

				{attributes.showCopyrightSymbol
					&& (
						<span>&copy; </span>
					)
				}

				{attributes.showYearFrom
					&& (
						<span>2012-CurrentYearPlaceholder. </span>
					)
				}

				{attributes.showYear
					&& (
						<span>CurrentYearPlaceholder. </span>
					)
				}

				{attributes.showSiteName
					&& (
						<span>SiteNamePlaceholder. </span>
					)
				}

				{attributes.showRightReserved
					&& (
						<span>All rights reserved. </span>
					)
				}

				<RichText
					tagName="span"
					placeholder="Type your sentence here..."
					value={attributes.customText}
					onChange={(newValue) => setAttributes({ customText: newValue })}
				/>

			</div>
		</>
	);
}
