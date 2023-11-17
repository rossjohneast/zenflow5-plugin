import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { useEffect, useState, useRef } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	Icon, 
	Button
} from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';
import { prependHTTP } from '@wordpress/url';

const NEW_TAB_REL = 'noreferrer noopener';

import classnames from 'classnames';
import className from 'classnames';
import sharedMarginInspCnt from "../shared/margin/margin-insp-cnt.js";
import sharedMarginClassnames from "../shared/margin/margin-classnames.js";

import sharedIconInspCnt from "../shared/icon/icon-insp-cnt.js";
import BsIconsRegular from '../bs-icons/regular';

import './editor.scss';

export default function Edit(props) {

	const { isSelected, isActive, attributes, setAttributes } =
		props;

	/**
		 * Code based on WordPress gutenberg/packages/block-library/src/button/
		 * @link https://github.com/WordPress/gutenberg/tree/904f4ae6929fac8a915487ada6b5307eb9961577/packages/block-library/src/button
		*/
	const { linkTarget, rel, url, icon, iconSize } =
		attributes;

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

	return (
		<div {...useBlockProps()}>

			<InspectorControls>


			{sharedIconInspCnt(props)}


				<Panel>
					<PanelBody title={__('Button Settings', 'zenflow5')}>

						<PanelRow className="w-100">
							<SelectControl
								label={__('Button Style (Color)', 'zenflow5')}
								value={attributes.btnStyle}
								options={[
									{ value: 'btn-primary', label: 'Default' },
									{ value: 'btn-primary', label: 'Primary' },
									{ value: 'btn-secondary', label: 'Secondary' },
									{ value: 'btn-success', label: 'Success' },
									{ value: 'btn-danger', label: 'Danger' },
									{ value: 'btn-warning', label: 'Warning' },
									{ value: 'btn-info', label: 'Info' },
									{ value: 'btn-light', label: 'Light' },
									{ value: 'btn-dark', label: 'Dark' },
									{ value: 'btn-white', label: 'White' },
									{ value: 'btn-outline-primary', label: 'Outline Primary' },
									{ value: 'btn-outline-secondary', label: 'Outline Secondary' },
									{ value: 'btn-outline-success', label: 'Outline Success' },
									{ value: 'btn-outline-danger', label: 'Outline Danger' },
									{ value: 'btn-outline-warning', label: 'Outline Warning' },
									{ value: 'btn-outline-info', label: 'Outline Info' },
									{ value: 'btn-outline-light', label: 'Outline Light' },
									{ value: 'btn-outline-dark', label: 'Outline Dark' },
									{ value: 'btn-outline-white', label: 'Outline White' },
									{ value: 'btn-link', label: 'Link' },
								]}
								onChange={(new_val) => {
									setAttributes({ btnStyle: new_val })
								}} />
						</PanelRow>

						<PanelRow className="w-100">
							<SelectControl
								label={__('Button Width', 'zenflow5')}
								value={attributes.btnWidth}
								options={[
									{ value: '', label: 'Default' },
									{ value: 'w-100', label: '100%' },
								]}
								onChange={(new_val) => {
									setAttributes({ btnWidth: new_val })
								}} />
						</PanelRow>

						<PanelRow className="w-100">
							<SelectControl
								label={__('Button Size', 'zenflow5')}
								value={attributes.btnSize}
								options={[
									{ value: '', label: 'Default' },
									{ value: 'btn-lg', label: 'Large' },
									{ value: 'btn-sm', label: 'Small' },
								]}
								onChange={(new_val) => {
									setAttributes({ btnSize: new_val })
								}} />
						</PanelRow>

					</PanelBody>
				
					<PanelBody
						title={__("Button display settings", "zenflow5")}
						initialOpen={false}
					>
						<PanelRow className="w-100">
							<SelectControl
								label={__("Display", "zenflow5")}
								value={attributes.display}
								options={[
									{ value: "d-block", label: "Block" },
									{ value: "d-none", label: "None" },
									{ value: "d-inline", label: "Inline" },
									{ value: "d-inline-block", label: "Inline-block" },
									{ value: "d-grid", label: "Grid" },
									{ value: "d-table", label: "Table" },
									{ value: "d-table-cell", label: "Table-cell" },
									{ value: "d-table-row", label: "Table-row" },
									{ value: "d-flex", label: "Flex" },
									{ value: "d-inline-flex", label: "Inline-flex" },
								]}
								onChange={(new_val) => {
									setAttributes({ display: new_val });
								}}
							/>
						</PanelRow>



						<PanelRow className="w-100">
							<SelectControl
								label={__("Align Text", "zenflow5")}
								value={attributes.textAlign}
								options={[
									{ value: "text-left", label: "Left" },
									{ value: "text-center", label: "Center" },
									{ value: "text-right", label: "Right" },
								]}
								onChange={(new_val) => {
									setAttributes({ textAlign: new_val });
								}}
							/>
						</PanelRow>

						<PanelRow className="w-100">
							<SelectControl
								label={__("Align Content", "zenflow5")}
								value={attributes.alignItems}
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
								label={__("Justify Content", "zenflow5")}
								value={attributes.justifyContent}
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

					</PanelBody>
					<PanelBody
						title={__("Button ID", "zenflow5")}
						initialOpen={false}
					>
						<PanelRow className="w-100">
							<TextControl
								label={__("Set an ID", "zenflow5")}
								value={attributes.customId}
								onChange={(new_val) => {
									setAttributes({ customId: new_val });
								}}
							/>
						</PanelRow>

					</PanelBody>

					{sharedMarginInspCnt(props)}

				</Panel>
				{/* 
					 {sharedAnimationsInspCnt(props)} */}
		
			</InspectorControls>

			<span 		className={
						classnames(
							'zenflow5-btn',
							'btn',
							[`${attributes.btnStyle !== undefined ? `${attributes.btnStyle}` : ''}`],
							[`${attributes.btnSize !== undefined ? `${attributes.btnSize}` : ''}`],
							[`${attributes.btnWidth !== undefined ? `${attributes.btnWidth}` : ''}`],
							[
								`${attributes.textAlign !== undefined
									? `${attributes.textAlign}`
									: ""
								}`,
							],
							[
								`${attributes.display !== undefined
									? `${attributes.display}`
									: ""
								}`,
							],
							[
								`${attributes.justifyContent !== undefined
									? `${attributes.justifyContent}`
									: ""
								}`,
							],
							[
								`${attributes.alignItems !== undefined
									? `${attributes.alignItems}`
									: ""
								}`,
							],
							sharedMarginClassnames(props)
						)}>
				<RichText
					{...useBlockProps()}
			

					placeholder={__(
						'Add text...',
						'zenflow5'
					)}
					value={attributes.content}
					onChange={(new_val) =>
						setAttributes({ content: new_val })
					}
					allowedFormats={[]}
					keepPlaceholderOnFocus
					ref={setPopoverAnchor}
				/>

{icon && (
				<span className='btn-icon-wrapper ms-1'>
					<Icon icon={BsIconsRegular[icon]} size={iconSize} />
				</span>
)}

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

		</div>
	);
}
