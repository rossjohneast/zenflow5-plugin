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
                label={__("Align Items", "zenflow5")}
                value={props.attributes.alignItems}
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
              />,

              <SelectControl
                label={__("Justify Content", "zenflow5")}
                value={props.attributes.justifyContent}
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
                           label={__("Align Items", "zenflow5")}
                           value={props.attributes.alignItemsSM}
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
                label={__("Align Items", "zenflow5")}
                value={props.attributes.alignItemsMD}
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
                label={__("Align Items", "zenflow5")}
                value={props.attributes.alignItemsLG}
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
                label={__("Align Items", "zenflow5")}
                value={props.attributes.alignItemsXL}
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
              label={__("Align Items", "zenflow5")}
              value={props.attributes.alignItemsXXL}
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
