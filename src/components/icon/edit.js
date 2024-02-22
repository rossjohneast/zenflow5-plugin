import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import {
	InspectorControls,
	useBlockProps,
	__experimentalLinkControl as LinkControl,
	PanelColorSettings,
	BlockControls
} from '@wordpress/block-editor';
import {
	RadioControl,
	ToolbarGroup,
	ToolbarButton,
	Popover,
	PanelBody,
	PanelRow,
	ToggleControl,
	Icon,
	RangeControl,
	TabPanel,
	SelectControl,
	TextControl
} from '@wordpress/components';
import classnames from "classnames";
import { link, linkOff } from '@wordpress/icons';
import { prependHTTP } from '@wordpress/url';
import './editor.scss';
import BsIconsRegular from '../bs-icons/regular';
import sharedIconInspCnt from "../shared/icon/icon-insp-cnt.js";

import sharedPaddingInspCnt from "../../grid-blocks/shared/padding/padding-insp-cnt.js";
import sharedPaddingClassnames from "../../grid-blocks/shared/padding/padding-classnames.js";
import sharedMarginInspCnt from "../../grid-blocks/shared/margin/margin-insp-cnt.js";
import sharedMarginClassnames from "../../grid-blocks/shared/margin/margin-classnames.js";

export default function Edit(props) {

	const { isSelected, attributes, setAttributes } =
		props;

	const NEW_TAB_REL = 'noreferrer noopener';

	// const iconsNew = BsIconsRegular;

	const { icon, iconSize, minWidth, minHeight,
		padding, margin, borderRadius, borderWidth, iconColor,
		backgroundColor, backgroundColorTheme,
		borderColor, borderColorTheme, iconColorTheme,
		linkTarget, rel, url, displayIconBg } =
		attributes;

	const selectedIcon = icon ?? 'clipboardHeart';

	const style = {
		color: iconColor
	};

	const styleOuter = {
		backgroundColor: backgroundColor,
		color: iconColor,
		borderRadius: borderRadius + 'rem',
		borderWidth: borderWidth,
		borderColor: borderColor,
		iconSize: iconSize,
		minHeight: minHeight,
		minWidth: minWidth,
	};

	// Links from GB
	function onToggleOpenInNewTab(value) {
		const newLinkTarget = value ? '_blank' : undefined;

		let updatedRel = rel;
		if (newLinkTarget && !rel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newLinkTarget && rel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		setAttributes({
			linkTarget: newLinkTarget,
			rel: updatedRel,
		});
	}

	// Use internal state instead of a ref to make sure that the component
	// re-renders when the popover's anchor updates.
	const [popoverAnchor, setPopoverAnchor] = useState(null);

	const ref = useRef();
	const richTextRef = useRef();
	const blockProps = useBlockProps({
		ref: useMergeRefs([setPopoverAnchor, ref]),
		onKeyDown,
	});

	const [isEditingURL, setIsEditingURL] = useState(false);
	const isURLSet = !!url;
	const opensInNewTab = linkTarget === '_blank';

	function startEditing(event) {
		event.preventDefault();
		setIsEditingURL(true);
	}

	function unlink() {
		setAttributes({
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		});
		setIsEditingURL(false);
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingURL(false);
		}
	}, [isSelected]);

	function onKeyDown(event) {
		if (isKeyboardEvent.primary(event, 'k')) {
			startEditing(event);
		} else if (isKeyboardEvent.primaryShift(event, 'k')) {
			unlink();
			richTextRef.current?.focus();
		}
	}
	//End links from GB


	const fruit = ['apple', 'banana', 'orange', 'grapefruit',
    'mango', 'strawberry', 'peach', 'apricot'];

	const [filter, setFilter] = useState('');

	return (
		<>
			<InspectorControls>

				<PanelBody title={__("Settings", "zenflow5")}>
					{attributes.url && (
						<PanelRow>
							<TextControl
								label="Icon link ARIA Label"
								value={ attributes.ariaLabel }
								onChange={ ( value ) => 
									setAttributes({ ariaLabel: value })
								}
							/>
						</PanelRow>
					)}
				</PanelBody>

				{sharedIconInspCnt(props)}

				{sharedPaddingInspCnt(props)}

				{sharedMarginInspCnt(props)}


			{/* <PanelBody title={__('Theme colors', 'zenbuilder')} className={"components-panel-children-w-100"}>
					<PanelRow className={"w-100"}>
				<PanelColorSettings
					title={__('Custom colors', 'zenflow5')}
					initialOpen={true}
					colorSettings={[
						{
							value: iconColor,
							onChange: (colorValue) => setAttributes({ iconColor: colorValue }),
							label: __('Icon Color'),
						},
						{
							value: backgroundColor,
							onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
							label: __('Background Color'),

						},
						{
							value: borderColor,
							onChange: (colorValue) => setAttributes({ borderColor: colorValue }),
							label: __('Border Color'),
						},
					]}>
				</PanelColorSettings>

				</PanelRow>
				</PanelBody> */}

				<PanelBody title={__('Theme colors', 'zenbuilder')} className={"components-panel-children-w-100"}>
					<PanelRow className={"w-100"}>
						<SelectControl
							className={"w-100"}
							label={__('Icon Color', 'zenbuilder')}
							value={iconColorTheme}
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
								setAttributes({ iconColorTheme: new_val })
							}} />
					</PanelRow>
					<PanelRow  className={"w-100"}>
						<SelectControl
							className={"w-100"}
							label={__('Background Color', 'zenbuilder')}
							value={backgroundColorTheme}
							options={[
								{ value: '', label: 'Default' },
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
								setAttributes({ backgroundColorTheme: new_val })
							}} />
					</PanelRow>
					<PanelRow  className={"w-100"}>
						<SelectControl
							className={"w-100"}
							label={__('Border Color', 'zenbuilder')}
							value={borderColorTheme}
							options={[
								{ value: '', label: 'Default' },
								{ value: 'border-primary', label: 'Primary' },
								{ value: 'border-secondary', label: 'Secondary' },
								{ value: 'border-success', label: 'Success' },
								{ value: 'border-danger', label: 'Danger' },
								{ value: 'border-warning', label: 'Warning' },
								{ value: 'border-info', label: 'Info' },
								{ value: 'border-light', label: 'Light' },
								{ value: 'border-dark', label: 'Dark' },
								{ value: 'border-white', label: 'White' },
							]}
							onChange={(new_val) => {
								setAttributes({ borderColorTheme: new_val })
							}} />
					</PanelRow>

				</PanelBody>

				<PanelColorSettings
						title={__("Custom Icon Colors", "zenflow5")}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: (colorValue) =>
									setAttributes({ backgroundColor: colorValue }),
								label: __("Background Color"),
							},
							{
								value: iconColor,
								onChange: (colorValue) =>
									setAttributes({ iconColor: colorValue }),
								label: __("Icon Color"),
							},
							{
								value: borderColor,
								onChange: (colorValue) => setAttributes({ borderColor: colorValue }),
								label: __('Border Color'),
							},
						]}
					></PanelColorSettings>

				<PanelBody title={__("Icon Style", "zenflow5")}>

					<PanelRow>
						<ToggleControl
							label={__("Icon background")}
							help={
								attributes.displayIconBg
									? "Add background (Set a width and height)"
									: "Remove background"
							}
							checked={attributes.displayIconBg}
							onChange={() =>
								setAttributes({ displayIconBg: !displayIconBg })
							}
						/>
					</PanelRow>


					{displayIconBg && (
						<>
							<RangeControl
								label={__('Background Min Width', 'zenbuilder')}
								min={0}
								max={1000}
								allowReset={true}
								resetFallbackValue={undefined}
								value={minWidth}
								onChange={(new_val) => {
									setAttributes({ minWidth: new_val })
								}} />

							<RangeControl
								label={__('Background Min Height', 'zenbuilder')}
								min={0}
								max={1000}
								allowReset={true}
								resetFallbackValue={undefined}
								value={minHeight}
								onChange={(new_val) => {
									setAttributes({ minHeight: new_val })
								}} />
							{/* <RangeControl
								label={__('Background Padding', 'zenbuilder')}
								min={0}
								max={5}
								allowReset={true}
								resetFallbackValue={undefined}
								value={padding}
								onChange={(new_val) => {
									setAttributes({ padding: new_val })
								}} /> */}

							{/* <RangeControl
								label={__('Background Margin', 'zenbuilder')}
								min={0}
								max={5}
								allowReset={true}
								resetFallbackValue={undefined}
								value={margin}
								onChange={(new_val) => {
									setAttributes({ margin: new_val })
								}} /> */}
							<RangeControl
								label={__('Background Border Radius', 'zenbuilder')}
								min={0}
								max={1000}
								step={0.25}
								allowReset={true}
								resetFallbackValue={undefined}
								value={borderRadius}
								onChange={(new_val) => {
									setAttributes({ borderRadius: new_val })
								}} />

							<RangeControl
								label={__('Background Border Width', 'zenbuilder')}
								min={0}
								max={100}
								allowReset={true}
								resetFallbackValue={undefined}
								value={borderWidth}
								onChange={(new_val) => {
									setAttributes({ borderWidth: new_val })
								}} />
						</>
					)
					}
				</PanelBody>

				{displayIconBg && (
						<>
							{sharedMarginInspCnt(props)}
						</>
					)}



			</InspectorControls>
			<span {...useBlockProps()} {...setPopoverAnchor}>

			{/* <p>
    Type to filter the list:
    <input id="filter"
      name="filter"
      type="text"
	  value={filter}
  onChange={event => setFilter(event.target.value)}
    />
  </p>
  <ul>
{fruit.filter(f => f.includes(filter) || filter === '')
      .map(f => <li key={f}>{f}</li>)}
</ul> */}


				<span
					className={
						classnames(
							'zenbuilder-icon-wrapper',
							[`${displayIconBg !== false ? 'icon-with-bg' : ''}`],
							[`${iconColorTheme !== undefined ? `${iconColorTheme}` : ''}`],
							[`${backgroundColorTheme !== undefined ? `${backgroundColorTheme}` : ''}`],
							[`${borderColorTheme !== undefined ? `${borderColorTheme}` : ''}`],
							[`${padding !== undefined ? `p-${padding}` : ''}`],
							sharedMarginClassnames(props),
							sharedPaddingClassnames(props),
							// [`${margin !== undefined ? `m-${margin}` : ''}`]
						)} style={{
							...styleOuter
						}}>
					<span style={style}>
						<Icon icon={BsIconsRegular[icon]} size={iconSize} />
					</span>
				</span>
			</span>
			<BlockControls>
				<ToolbarGroup>
					{!isURLSet && (
						<ToolbarButton
							icon={link}
							title={__('Link')}
							onClick={startEditing}
						/>
					)}
					{isURLSet && (
						<ToolbarButton
							name="link"
							icon={linkOff}
							title={__('Unlink')}
							onClick={unlink}
							isActive={true}
						/>
					)}
				</ToolbarGroup>
			</BlockControls>
			{isSelected && (isEditingURL || isURLSet) && (
				<Popover
					placement="bottom-start"
					onClose={() => {
						setIsEditingURL(false);
						richTextRef.current?.focus();
					}}
					anchor={popoverAnchor}
					focusOnMount={isEditingURL ? 'firstElement' : false}
					__unstableSlotName={'__unstable-block-tools-after'}
					shift
				>
					<LinkControl
						className="wp-block-navigation-link__inline-link-input"
						value={{ url, opensInNewTab }}
						onChange={({
							url: newURL = '',
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
		</>
	);
}
