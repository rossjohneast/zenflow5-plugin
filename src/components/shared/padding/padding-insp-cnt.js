import block_icons from "../../block-icons";
const { __ } = wp.i18n;
const { RangeControl, TabPanel, PanelBody } = wp.components;

const sharedPaddingInspCnt = (props) => {
  return (
    <PanelBody title={__("Padding", "zenflow5")} initialOpen={false}>
      {/* <div className="zen-gut-panel-help">
        <p>
          The smaller grid settings also apply to larger screens unless
          overriden specifically for larger screens. Therefore, you only need to
          use the setting for the smallest device width you want to support.
        </p>
      </div> */}

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
                label={__("Padding", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.padding}
                onChange={(new_val) => {
                  props.setAttributes({ padding: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Top", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingT}
                onChange={(new_val) => {
                  props.setAttributes({ paddingT: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Bottom", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingB}
                onChange={(new_val) => {
                  props.setAttributes({ paddingB: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Left", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingL}
                onChange={(new_val) => {
                  props.setAttributes({ paddingL: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Right", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingR}
                onChange={(new_val) => {
                  props.setAttributes({ paddingR: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding X", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingX}
                onChange={(new_val) => {
                  props.setAttributes({ paddingX: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Y", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingY}
                onChange={(new_val) => {
                  props.setAttributes({ paddingY: new_val });
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
                label={__("Padding", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingSM}
                onChange={(new_val) => {
                  props.setAttributes({ paddingSM: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Top", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingSMT}
                onChange={(new_val) => {
                  props.setAttributes({ paddingSMT: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Bottom", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingSMB}
                onChange={(new_val) => {
                  props.setAttributes({ paddingSMB: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Left", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingSML}
                onChange={(new_val) => {
                  props.setAttributes({ paddingSML: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Right", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingSMR}
                onChange={(new_val) => {
                  props.setAttributes({ paddingSMR: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding X", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingSMX}
                onChange={(new_val) => {
                  props.setAttributes({ paddingSMX: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Y", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingSMY}
                onChange={(new_val) => {
                  props.setAttributes({ paddingSMY: new_val });
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
                label={__("Padding", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingMD}
                onChange={(new_val) => {
                  props.setAttributes({ paddingMD: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Top", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingMDT}
                onChange={(new_val) => {
                  props.setAttributes({ paddingMDT: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Bottom", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingMDB}
                onChange={(new_val) => {
                  props.setAttributes({ paddingMDB: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Left", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingMDL}
                onChange={(new_val) => {
                  props.setAttributes({ paddingMDL: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Right", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingMDR}
                onChange={(new_val) => {
                  props.setAttributes({ paddingMDR: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding X", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingMDX}
                onChange={(new_val) => {
                  props.setAttributes({ paddingMDX: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Y", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingMDY}
                onChange={(new_val) => {
                  props.setAttributes({ paddingMDY: new_val });
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
                label={__("Padding", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingLG}
                onChange={(new_val) => {
                  props.setAttributes({ paddingLG: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Top", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingLGT}
                onChange={(new_val) => {
                  props.setAttributes({ paddingLGT: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Bottom", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingLGB}
                onChange={(new_val) => {
                  props.setAttributes({ paddingLGB: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Left", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingLGL}
                onChange={(new_val) => {
                  props.setAttributes({ paddingLGL: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Right", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingLGR}
                onChange={(new_val) => {
                  props.setAttributes({ paddingLGR: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding X", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingLGX}
                onChange={(new_val) => {
                  props.setAttributes({ paddingLGX: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Y", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingLGY}
                onChange={(new_val) => {
                  props.setAttributes({ paddingLGY: new_val });
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
                label={__("Padding", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXL}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXL: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Top", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXLT}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXLT: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Bottom", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXLB}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXLB: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Left", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXLL}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXLL: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Right", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXLR}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXLR: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding X", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXLX}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXLX: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Y", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXLY}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXLY: new_val });
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
                label={__("Padding", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXXL}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXXL: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Top", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXXLT}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXXLT: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Bottom", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXXLB}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXXLB: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Left", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXXLL}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXXLL: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Right", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXXLR}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXXLR: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding X", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXXLX}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXXLX: new_val });
                }}
              />,

              <RangeControl
                label={__("Padding Y", "zenflow5")}
                min={0}
                max={5}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.paddingXXLY}
                onChange={(new_val) => {
                  props.setAttributes({ paddingXXLY: new_val });
                }}
              />,
            ],
          },
        ]}
      >
        {(tab) => <p>{tab.content}</p>}
      </TabPanel>
    </PanelBody>
  );
};

export default sharedPaddingInspCnt;
