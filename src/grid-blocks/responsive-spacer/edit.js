import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, RangeControl, TabPanel } from '@wordpress/components';

import './editor.scss';
import block_icons from "../block-icons";
import classnames from "classnames";

export default function Edit(props, isSelected) {
	const style = {
		minHeight: props.attributes.minHeightCol,
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					<PanelBody
						title={__("Spacer Height", "zenflow5")}
						initialOpen={true}
					>
						<div className="zen-gut-panel-help">
							<p>
								You only need to use the setting for the smallest device width
								you want to support.
							</p>
						</div>

						<TabPanel
							className="zen-gut-tab-panel"
							activeClass="zen-gut-tab-panel-tab-active-tab"
							tabs={[
								{
									name: "tab0",
									title: block_icons.bpmobile,
									className: "zen-gut-tab-panel-tab",
									content: [
										<div>
											<div>
												<strong>Mobile portrait</strong>
											</div>
											<div>Smallest device width and greater</div>
											<hr></hr>
										</div>,

										<RangeControl
											label={__("Height", "zenflow5")}
											min={0}
											max={20}
											allowReset={true}
											resetFallbackValue={undefined}
											value={props.attributes.paddingB}
											onChange={(new_val) => {
												props.setAttributes({ paddingB: new_val });
											}}
										/>,
									],
								},
								{
									name: "tab1",
									title: block_icons.bpmobileland,
									className: "zen-gut-tab-panel-tab",
									content: [
										<div>
											<div>
												<strong>Mobile landscape</strong>
											</div>
											<div>Width equal or greater than 576px</div>
											<hr></hr>
										</div>,

										<RangeControl
											label={__("Height", "zenflow5")}
											min={0}
											max={20}
											allowReset={true}
											resetFallbackValue={undefined}
											value={props.attributes.paddingSMB}
											onChange={(new_val) => {
												props.setAttributes({ paddingSMB: new_val });
											}}
										/>,
									],
								},
								{
									name: "tab2",
									title: block_icons.bptablet,
									className: "zen-gut-tab-panel-tab",
									content: [
										<div>
											<div>
												<strong>Tablet portrait</strong>
											</div>
											<div>Width equal or greater than 768px</div>
											<hr></hr>
										</div>,

										<RangeControl
											label={__("Height", "zenflow5")}
											min={0}
											max={20}
											allowReset={true}
											resetFallbackValue={undefined}
											value={props.attributes.paddingMDB}
											onChange={(new_val) => {
												props.setAttributes({ paddingMDB: new_val });
											}}
										/>,
									],
								},
								{
									name: "tab3",
									title: block_icons.bplaptop,
									className: "zen-gut-tab-panel-tab",
									content: [
										<div>
											<div>
												<strong>Desktops</strong>
											</div>
											<div>Width equal or greater than 992px</div>
											<hr></hr>
										</div>,

										<RangeControl
											label={__("Height", "zenflow5")}
											min={0}
											max={20}
											allowReset={true}
											resetFallbackValue={undefined}
											value={props.attributes.paddingLGB}
											onChange={(new_val) => {
												props.setAttributes({ paddingLGB: new_val });
											}}
										/>,
									],
								},
								{
									name: "tab4",
									title: block_icons.bpdesktop,
									className: "zen-gut-tab-panel-tab",
									content: [
										<div>
											<div>
												<strong>Large desktop</strong>
											</div>
											<div>Width equal or greater than 1200px</div>
											<hr></hr>
										</div>,

										<RangeControl
											label={__("Height", "zenflow5")}
											min={0}
											max={20}
											allowReset={true}
											resetFallbackValue={undefined}
											value={props.attributes.paddingXLB}
											onChange={(new_val) => {
												props.setAttributes({ paddingXLB: new_val });
											}}
										/>,
									],
								},
								{
									name: "tab5",
									title: block_icons.bpdesktopxxl,
									className: "zen-gut-tab-panel-tab",
									content: [
										<div>
											<div>
												<strong>Larger desktop</strong>
											</div>
											<div>Width equal or greater than 1400px</div>
											<hr></hr>
										</div>,

										<RangeControl
											label={__("Height", "zenflow5")}
											min={0}
											max={20}
											allowReset={true}
											resetFallbackValue={undefined}
											value={props.attributes.paddingXXLB}
											onChange={(new_val) => {
												props.setAttributes({ paddingXXLB: new_val });
											}}
										/>,
									],
								},
							]}
						>
							{(tab) => <p>{tab.content}</p>}
						</TabPanel>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div
				className={classnames(
					"zenflow5-responsive-spacer",
					[
						`${props.attributes.paddingB !== undefined
							? `pb-${props.attributes.paddingB}`
							: ""
						}`,
					],
					[
						`${props.attributes.paddingSMB !== undefined
							? `pb-sm-${props.attributes.paddingSMB}`
							: ""
						}`,
					],
					[
						`${props.attributes.paddingMDB !== undefined
							? `pb-md-${props.attributes.paddingMDB}`
							: ""
						}`,
					],
					[
						`${props.attributes.paddingLGB !== undefined
							? `pb-lg-${props.attributes.paddingLGB}`
							: ""
						}`,
					],
					[
						`${props.attributes.paddingXLB !== undefined
							? `pb-xl-${props.attributes.paddingXLB}`
							: ""
						}`,
					],
					[
						`${props.attributes.paddingXXLB !== undefined
							? `pb-xxl-${props.attributes.paddingXXLB}`
							: ""
						}`,
					]
				)}
			></div>
		</div>
	);
}
