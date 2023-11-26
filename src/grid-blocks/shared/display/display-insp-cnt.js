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
                  { value: "align-items-start", label: "Start" },
                  { value: "align-items-end", label: "End" },
                  { value: "align-items-center", label: "Center" },
                  { value: "align-items-baseline", label: "Baseline" },
                  { value: "align-items-stretch", label: "Stretch" },
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
                  { value: "justify-content-start", label: "Start" },
                  { value: "justify-content-end", label: "End" },
                  { value: "justify-content-center", label: "Center" },
                  { value: "justify-content-between", label: "Space-between" },
                  { value: "justify-content-around", label: "Space-around" },
                  { value: "justify-content-evenly", label: "Space-evenly" },
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
                           value={props.attributes.alignItemsSm}
                           options={[
                            { value: "", label: "None" },
                             { value: "align-items-sm-start", label: "Start" },
                             { value: "align-items-sm-end", label: "End" },
                             { value: "align-items-sm-center", label: "Center" },
                             { value: "align-items-sm-baseline", label: "Baseline" },
                             { value: "align-items-sm-stretch", label: "Stretch" },
                           ]}
                           onChange={(new_val) => {
                             props.setAttributes({ alignItemsSm: new_val });
                           }}
                         />,

                         <SelectControl
                           label={__("Justify Content", "zenflow5")}
                           value={props.attributes.justifyContentSm}
                           options={[
                            { value: "", label: "None" },
                             { value: "justify-content-sm-start", label: "Start" },
                             { value: "justify-content-sm-end", label: "End" },
                             { value: "justify-content-sm-center", label: "Center" },
                             { value: "justify-content-sm-between", label: "Space-between" },
                             { value: "justify-content-sm-around", label: "Space-around" },
                             { value: "justify-content-sm-evenly", label: "Space-evenly" },
                           ]}
                           onChange={(new_val) => {
                             props.setAttributes({ justifyContentSm: new_val });
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
                value={props.attributes.alignItemsMd}
                options={[
                  { value: "", label: "None" },
                  { value: "align-items-md-start", label: "Start" },
                  { value: "align-items-md-end", label: "End" },
                  { value: "align-items-md-center", label: "Center" },
                  { value: "align-items-md-baseline", label: "Baseline" },
                  { value: "align-items-md-stretch", label: "Stretch" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ alignItemsMd: new_val });
                }}
              />,

              <SelectControl
                label={__("Justify Content", "zenflow5")}
                value={props.attributes.justifyContentMd}
                options={[
                  { value: "", label: "None" },
                  { value: "justify-content-md-start", label: "Start" },
                  { value: "justify-content-md-end", label: "End" },
                  { value: "justify-content-md-center", label: "Center" },
                  { value: "justify-content-md-between", label: "Space-between" },
                  { value: "justify-content-md-around", label: "Space-around" },
                  { value: "justify-content-md-evenly", label: "Space-evenly" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ justifyContentMd: new_val });
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
                value={props.attributes.alignItemsLg}
                options={[
                  { value: "", label: "None" },
                  { value: "align-items-lg-start", label: "Start" },
                  { value: "align-items-lg-end", label: "End" },
                  { value: "align-items-lg-center", label: "Center" },
                  { value: "align-items-lg-baseline", label: "Baseline" },
                  { value: "align-items-lg-stretch", label: "Stretch" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ alignItemsLg: new_val });
                }}
              />,
              <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentLg}
              options={[
                { value: "", label: "None" },
                { value: "justify-content-lg-start", label: "Start" },
                { value: "justify-content-lg-end", label: "End" },
                { value: "justify-content-lg-center", label: "Center" },
                { value: "justify-content-lg-between", label: "Space-between" },
                { value: "justify-content-lg-around", label: "Space-around" },
                { value: "justify-content-lg-evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentLg: new_val });
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
                value={props.attributes.alignItemsXl}
                options={[
                  { value: "", label: "None" },
                  { value: "align-items-xl-start", label: "Start" },
                  { value: "align-items-xl-end", label: "End" },
                  { value: "align-items-xl-center", label: "Center" },
                  { value: "align-items-xl-baseline", label: "Baseline" },
                  { value: "align-items-xl-stretch", label: "Stretch" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ alignItemsXl: new_val });
                }}
              />,
              <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentXl}
              options={[
                { value: "", label: "None" },
                { value: "justify-content-xl-start", label: "Start" },
                { value: "justify-content-xl-end", label: "End" },
                { value: "justify-content-xl-center", label: "Center" },
                { value: "justify-content-xl-between", label: "Space-between" },
                { value: "justify-content-xl-around", label: "Space-around" },
                { value: "justify-content-xl-evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentXl: new_val });
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
              value={props.attributes.alignItemsXxl}
              options={[
                { value: "", label: "None" },
                { value: "align-items-xxl-start", label: "Start" },
                { value: "align-items-xxl-end", label: "End" },
                { value: "align-items-xxl-center", label: "Center" },
                { value: "align-items-xxl-baseline", label: "Baseline" },
                { value: "align-items-xxl-stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItemsXxl: new_val });
              }}
              />,
              <SelectControl
              label={__("Justify Content", "zenflow5")}
              value={props.attributes.justifyContentXxl}
              options={[
                { value: "", label: "None" },
                { value: "justify-content-xxl-start", label: "Start" },
                { value: "justify-content-xxl-end", label: "End" },
                { value: "justify-content-xxl-center", label: "Center" },
                { value: "justify-content-xxl-between", label: "Space-between" },
                { value: "justify-content-xxl-around", label: "Space-around" },
                { value: "justify-content-xxl-evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContentXxl: new_val });
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
