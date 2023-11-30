import block_icons from "../../block-icons";

const { __ } = wp.i18n;
const { RangeControl, TabPanel, PanelBody, PanelRow, SelectControl } = wp.components;

const sharedDisplayInspCnt = (props) => {
  return (

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

            <SelectControl
              label={__("Display", "zenflow5")}
              value={props.attributes.display}
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
                // props.setAttributes({ display: new_val });
                if (new_val !== 'd-flex') {
                  // If display is not 'd-flex', set alignItems to ''
                  props.setAttributes({ display: new_val, alignItems: '', justifyContent: '' });
                } else {
                  // If display is 'd-flex', set display and keep alignItems unchanged
                  props.setAttributes({ display: new_val });
                }
              }}
            />,
            <SelectControl
              label={__("Align Items", "zenflow5")}
              value={props.attributes.alignItems}
              className={`select-controls-container ${props.attributes.display === 'd-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "baseline", label: "Baseline" },
                { value: "stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItems: new_val });
              }}
            />
            ,
            <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContent}
              className={`select-controls-container ${props.attributes.display === 'd-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "between", label: "Space-between" },
                { value: "around", label: "Space-around" },
                { value: "evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContent: new_val });
              }}
            />
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
            <SelectControl
              label={__("Display", "zenflow5")}
              value={props.attributes.displaySm}
              options={[
                { value: "", label: "Default" },
                { value: "d-sm-block", label: "Block" },
                { value: "d-sm-none", label: "None" },
                { value: "d-sm-inline", label: "Inline" },
                { value: "d-sm-inline-block", label: "Inline-block" },
                { value: "d-sm-grid", label: "Grid" },
                { value: "d-sm-table", label: "Table" },
                { value: "d-sm-table-cell", label: "Table-cell" },
                { value: "d-sm-table-row", label: "Table-row" },
                { value: "d-sm-flex", label: "Flex" },
                { value: "d-sm-inline-flex", label: "Inline-flex" },
              ]}
              onChange={(new_val) => {
                // props.setAttributes({ display: new_val });
                if (new_val !== 'd-sm-flex') {
                  // If display is not 'd-flex', set alignItems to ''
                  props.setAttributes({ displaySm: new_val, alignItemsSM: '', justifyContentSM: '' });
                } else {
                  // If display is 'd-flex', set display and keep alignItems unchanged
                  props.setAttributes({ displaySm: new_val });
                }
              }}
            />,

            <SelectControl
              label={__("Align Items", "zenflow5")}
              value={props.attributes.alignItemsSM}
              className={`select-controls-container ${props.attributes.displaySm === 'd-sm-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "baseline", label: "Baseline" },
                { value: "stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItemsSM: new_val });
              }}
            />,

            <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentSM}
              className={`select-controls-container ${props.attributes.displaySm === 'd-sm-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "between", label: "Space-between" },
                { value: "around", label: "Space-around" },
                { value: "evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentSM: new_val });
              }}
            />
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

            <SelectControl
              label={__("Display", "zenflow5")}
              value={props.attributes.displayMd}
              options={[
                { value: "", label: "Default" },
                { value: "d-md-block", label: "Block" },
                { value: "d-md-none", label: "None" },
                { value: "d-md-inline", label: "Inline" },
                { value: "d-md-inline-block", label: "Inline-block" },
                { value: "d-md-grid", label: "Grid" },
                { value: "d-md-table", label: "Table" },
                { value: "d-md-table-cell", label: "Table-cell" },
                { value: "d-md-table-row", label: "Table-row" },
                { value: "d-md-flex", label: "Flex" },
                { value: "d-md-inline-flex", label: "Inline-flex" },
              ]}
              onChange={(new_val) => {
                // props.setAttributes({ display: new_val });
                if (new_val !== 'd-md-flex') {
                  // If display is not 'd-flex', set alignItems to ''
                  props.setAttributes({ displayMd: new_val, alignItemsMD: '', justifyContentMD: '' });
                } else {
                  // If display is 'd-flex', set display and keep alignItems unchanged
                  props.setAttributes({ displayMd: new_val });
                }
              }}
            />,

            <SelectControl
              label={__("Align Items", "zenflow5")}
              value={props.attributes.alignItemsMD}
              className={`select-controls-container ${props.attributes.displayMd === 'd-md-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "baseline", label: "Baseline" },
                { value: "stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItemsMD: new_val });
              }}
            />,

            <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentMD}
              className={`select-controls-container ${props.attributes.displayMd === 'd-md-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "between", label: "Space-between" },
                { value: "around", label: "Space-around" },
                { value: "evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentMD: new_val });
              }}
            />
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


            <SelectControl
              label={__("Display", "zenflow5")}
              value={props.attributes.displayLg}
              options={[
                { value: "", label: "Default" },
                { value: "d-lg-block", label: "Block" },
                { value: "d-lg-none", label: "None" },
                { value: "d-lg-inline", label: "Inline" },
                { value: "d-lg-inline-block", label: "Inline-block" },
                { value: "d-lg-grid", label: "Grid" },
                { value: "d-lg-table", label: "Table" },
                { value: "d-lg-table-cell", label: "Table-cell" },
                { value: "d-lg-table-row", label: "Table-row" },
                { value: "d-lg-flex", label: "Flex" },
                { value: "d-lg-inline-flex", label: "Inline-flex" },
              ]}
              onChange={(new_val) => {
                // props.setAttributes({ display: new_val });
                if (new_val !== 'd-lg-flex') {
                  // If display is not 'd-flex', set alignItems to ''
                  props.setAttributes({ displayLg: new_val, alignItemsLG: '', justifyContentLG: '' });
                } else {
                  // If display is 'd-flex', set display and keep alignItems unchanged
                  props.setAttributes({ displayLg: new_val });
                }
              }}
            />,

            <SelectControl
              label={__("Align Items", "zenflow5")}
              value={props.attributes.alignItemsLG}
              className={`select-controls-container ${props.attributes.displayLg === 'd-lg-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "baseline", label: "Baseline" },
                { value: "stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItemsLG: new_val });
              }}
            />,
            <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentLG}
              className={`select-controls-container ${props.attributes.displayLg === 'd-lg-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "between", label: "Space-between" },
                { value: "around", label: "Space-around" },
                { value: "evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentLG: new_val });
              }}
            />
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

            <SelectControl
              label={__("Display", "zenflow5")}
              value={props.attributes.displayXl}
              options={[
                { value: "", label: "Default" },
                { value: "d-xl-block", label: "Block" },
                { value: "d-xl-none", label: "None" },
                { value: "d-xl-inline", label: "Inline" },
                { value: "d-xl-inline-block", label: "Inline-block" },
                { value: "d-xl-grid", label: "Grid" },
                { value: "d-xl-table", label: "Table" },
                { value: "d-xl-table-cell", label: "Table-cell" },
                { value: "d-xl-table-row", label: "Table-row" },
                { value: "d-xl-flex", label: "Flex" },
                { value: "d-xl-inline-flex", label: "Inline-flex" },
              ]}
              onChange={(new_val) => {
                // props.setAttributes({ display: new_val });
                if (new_val !== 'd-xl-flex') {
                  // If display is not 'd-flex', set alignItems to ''
                  props.setAttributes({ displayXl: new_val, alignItemsXL: '', justifyContentXL: '' });
                } else {
                  // If display is 'd-flex', set display and keep alignItems unchanged
                  props.setAttributes({ displayXl: new_val });
                }
              }}
            />,

            <SelectControl
              label={__("Align Items", "zenflow5")}
              value={props.attributes.alignItemsXL}
              className={`select-controls-container ${props.attributes.displayXl === 'd-xl-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "baseline", label: "Baseline" },
                { value: "stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItemsXL: new_val });
              }}
            />,
            <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentXL}
              className={`select-controls-container ${props.attributes.displayXl === 'd-xl-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "between", label: "Space-between" },
                { value: "around", label: "Space-around" },
                { value: "evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentXL: new_val });
              }}
            />
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
            <SelectControl
              label={__("Display", "zenflow5")}
              value={props.attributes.displayXxl}
              options={[
                { value: "", label: "Default" },
                { value: "d-xxl-block", label: "Block" },
                { value: "d-xxl-none", label: "None" },
                { value: "d-xxl-inline", label: "Inline" },
                { value: "d-xxl-inline-block", label: "Inline-block" },
                { value: "d-xxl-grid", label: "Grid" },
                { value: "d-xxl-table", label: "Table" },
                { value: "d-xxl-table-cell", label: "Table-cell" },
                { value: "d-xxl-table-row", label: "Table-row" },
                { value: "d-xxl-flex", label: "Flex" },
                { value: "d-xxl-inline-flex", label: "Inline-flex" },
              ]}
              onChange={(new_val) => {
                // props.setAttributes({ display: new_val });
                if (new_val !== 'd-xxl-flex') {
                  // If display is not 'd-flex', set alignItems to ''
                  props.setAttributes({ displayXxl: new_val, alignItemsXXL: '', justifyContentXXL: '' });
                } else {
                  // If display is 'd-flex', set display and keep alignItems unchanged
                  props.setAttributes({ displayXxl: new_val });
                }
              }}
            />,
            <SelectControl
              label={__("Align Items", "zenflow5")}
              value={props.attributes.alignItemsXXL}
              className={`select-controls-container ${props.attributes.displayXxl === 'd-xxl-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "baseline", label: "Baseline" },
                { value: "stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItemsXXL: new_val });
              }}
            />,
            <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentXXL}
              className={`select-controls-container ${props.attributes.displayXxl === 'd-xxl-flex' ? 'visible' : 'hidden'}`}
              options={[
                { value: "", label: "None" },
                { value: "start", label: "Start" },
                { value: "end", label: "End" },
                { value: "center", label: "Center" },
                { value: "between", label: "Space-between" },
                { value: "around", label: "Space-around" },
                { value: "evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentXXL: new_val });
              }}
            />
          ],
        },
      ]}
    >
      {(tab) => <p>{tab.content}</p>}
    </TabPanel>

  );
};

export default sharedDisplayInspCnt;
