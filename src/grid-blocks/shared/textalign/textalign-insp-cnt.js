import block_icons from "../../block-icons";

const { __ } = wp.i18n;
const { RangeControl, TabPanel, PanelBody, PanelRow, SelectControl } = wp.components;

const sharedTextAlignInspCnt = (props) => {
  return (
    <PanelBody title={__("Text align", "zenflow5")} initialOpen={false}>
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

                <PanelRow className="w-100">
                <SelectControl
                  label={__("Align Text", "zenflow5")}
                  value={props.attributes.textAlign}
                  options={[
                   { value: "", label: "None" },  
                   { value: "start", label: "Left" },
                    { value: "center", label: "Center" },
                    { value: "end", label: "Right" },
                  ]}
                  onChange={(new_val) => {
                    props.setAttributes({ textAlign: new_val });
                  }}
                />
                </PanelRow>
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
                           <PanelRow className="w-100">
                           <SelectControl
                             label={__("Align Text", "zenflow5")}
                             value={props.attributes.textAlignSM}
                             options={[
                              { value: "", label: "None" },
                               { value: "start", label: "Left" },
                               { value: "center", label: "Center" },
                               { value: "end", label: "Right" },
                             ]}
                             onChange={(new_val) => {
                               props.setAttributes({ textAlignSM: new_val });
                             }}
                           />
                           </PanelRow>
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
                 <PanelRow className="w-100">
                 <SelectControl
                   label={__("Align Text", "zenflow5")}
                   value={props.attributes.textAlignMD}
                   options={[
                    { value: "", label: "None" },
                     { value: "start", label: "Left" },
                     { value: "center", label: "Center" },
                     { value: "end", label: "Right" },
                   ]}
                   onChange={(new_val) => {
                     props.setAttributes({ textAlignMD: new_val });
                   }}
                 />
                 </PanelRow>
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
                 <PanelRow className="w-100">
                 <SelectControl
                   label={__("Align Text", "zenflow5")}
                   value={props.attributes.textAlignLG}
                   options={[
                    { value: "", label: "None" },
                     { value: "start", label: "Left" },
                     { value: "center", label: "Center" },
                     { value: "end", label: "Right" },
                   ]}
                   onChange={(new_val) => {
                     props.setAttributes({ textAlignLG: new_val });
                   }}
                 />
                 </PanelRow>
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
                            <PanelRow className="w-100">
                            <SelectControl
                              label={__("Align Text", "zenflow5")}
                              value={props.attributes.textAlignXL}
                              options={[
                                { value: "", label: "None" },
                                { value: "start", label: "Left" },
                                { value: "center", label: "Center" },
                                { value: "end", label: "Right" },
                              ]}
                              onChange={(new_val) => {
                                props.setAttributes({ textAlignXL: new_val });
                              }}
                            />
                            </PanelRow>
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

<PanelRow className="w-100">
<SelectControl
  label={__("Align Text", "zenflow5")}
  value={props.attributes.textAlignXXL}
  options={[
    { value: "", label: "None" },
    { value: "start", label: "Left" },
    { value: "center", label: "Center" },
    { value: "end", label: "Right" },
  ]}
  onChange={(new_val) => {
    props.setAttributes({ textAlignXXL: new_val });
  }}
/>
</PanelRow>
            ],
          },
        ]}
      >
        {(tab) => <p>{tab.content}</p>}
      </TabPanel>
    </PanelBody>
  );
};

export default sharedTextAlignInspCnt;
