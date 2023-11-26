import block_icons from "../../block-icons";

const { __ } = wp.i18n;
const { RangeControl, TabPanel, PanelBody } = wp.components;

const sharedPaddingInspCnt = (props) => {
  return (
    <PanelBody title={__("Margin", "zenflow5")} initialOpen={false}>
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
                label={__("Margin", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.margin}
                onChange={(new_val) => {
                  props.setAttributes({ margin: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Top", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginT}
                onChange={(new_val) => {
                  props.setAttributes({ marginT: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Bottom", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginB}
                onChange={(new_val) => {
                  props.setAttributes({ marginB: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Left", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginL}
                onChange={(new_val) => {
                  props.setAttributes({ marginL: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Right", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginR}
                onChange={(new_val) => {
                  props.setAttributes({ marginR: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin X", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginX}
                onChange={(new_val) => {
                  props.setAttributes({ marginX: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Y", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginY}
                onChange={(new_val) => {
                  props.setAttributes({ marginY: new_val });
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
                label={__("margin", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginSM}
                onChange={(new_val) => {
                  props.setAttributes({ marginSM: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Top", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginSMT}
                onChange={(new_val) => {
                  props.setAttributes({ marginSMT: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Bottom", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginSMB}
                onChange={(new_val) => {
                  props.setAttributes({ marginSMB: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Left", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginSML}
                onChange={(new_val) => {
                  props.setAttributes({ marginSML: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Right", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginSMR}
                onChange={(new_val) => {
                  props.setAttributes({ marginSMR: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin X", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginSMX}
                onChange={(new_val) => {
                  props.setAttributes({ marginSMX: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Y", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginSMY}
                onChange={(new_val) => {
                  props.setAttributes({ marginSMY: new_val });
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
                label={__("Margin", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginMD}
                onChange={(new_val) => {
                  props.setAttributes({ marginMD: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Top", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginMDT}
                onChange={(new_val) => {
                  props.setAttributes({ marginMDT: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Bottom", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginMDB}
                onChange={(new_val) => {
                  props.setAttributes({ marginMDB: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Left", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginMDL}
                onChange={(new_val) => {
                  props.setAttributes({ marginMDL: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Right", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginMDR}
                onChange={(new_val) => {
                  props.setAttributes({ marginMDR: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin X", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginMDX}
                onChange={(new_val) => {
                  props.setAttributes({ marginMDX: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Y", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginMDY}
                onChange={(new_val) => {
                  props.setAttributes({ marginMDY: new_val });
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
                label={__("Margin", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginLG}
                onChange={(new_val) => {
                  props.setAttributes({ marginLG: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Top", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginLGT}
                onChange={(new_val) => {
                  props.setAttributes({ marginLGT: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Bottom", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginLGB}
                onChange={(new_val) => {
                  props.setAttributes({ marginLGB: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Left", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginLGL}
                onChange={(new_val) => {
                  props.setAttributes({ marginLGL: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Right", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginLGR}
                onChange={(new_val) => {
                  props.setAttributes({ marginLGR: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin X", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginLGX}
                onChange={(new_val) => {
                  props.setAttributes({ marginLGX: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Y", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginLGY}
                onChange={(new_val) => {
                  props.setAttributes({ marginLGY: new_val });
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
                label={__("Margin", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXL}
                onChange={(new_val) => {
                  props.setAttributes({ marginXL: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Top", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXLT}
                onChange={(new_val) => {
                  props.setAttributes({ marginXLT: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Bottom", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXLB}
                onChange={(new_val) => {
                  props.setAttributes({ marginXLB: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Left", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXLL}
                onChange={(new_val) => {
                  props.setAttributes({ marginXLL: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Right", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXLR}
                onChange={(new_val) => {
                  props.setAttributes({ marginXLR: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin X", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXLX}
                onChange={(new_val) => {
                  props.setAttributes({ marginXLX: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Y", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXLY}
                onChange={(new_val) => {
                  props.setAttributes({ marginXLY: new_val });
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
                label={__("Margin", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXXL}
                onChange={(new_val) => {
                  props.setAttributes({ marginXXL: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Top", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXXLT}
                onChange={(new_val) => {
                  props.setAttributes({ marginXXLT: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Bottom", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXXLB}
                onChange={(new_val) => {
                  props.setAttributes({ marginXXLB: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Left", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXXLL}
                onChange={(new_val) => {
                  props.setAttributes({ marginXXLL: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Right", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXXLR}
                onChange={(new_val) => {
                  props.setAttributes({ marginXXLR: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin X", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXXLX}
                onChange={(new_val) => {
                  props.setAttributes({ marginXXLX: new_val });
                }}
              />,

              <RangeControl
                label={__("Margin Y", "zenflow5")}
                min={0}
                max={20}
                allowReset={true}
                resetFallbackValue={undefined}
                value={props.attributes.marginXXLY}
                onChange={(new_val) => {
                  props.setAttributes({ marginXXLY: new_val });
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
