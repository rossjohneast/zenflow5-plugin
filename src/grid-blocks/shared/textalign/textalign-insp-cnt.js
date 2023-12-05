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


      <div className="zen-gut-responsive-select-wrapper">
        <div className="zen-gut-responsive-select-wrapper__left">
          {block_icons.bpdesktopxxl}
        </div>
        <div className="zen-gut-responsive-select-wrapper__right">
          <SelectControl
            // label="Text align"
            value={props.attributes.textAlignXXL}
            default=''
            options={[
              { value: '', label: "None" },
              { value: "start", label: "Left" },
              { value: "center", label: "Center" },
              { value: "end", label: "Right" },
            ]}
            onChange={(new_val_w) => {
              props.setAttributes({ textAlignXXL: new_val_w });
            }}
          />
        </div>
      </div>
      <div className="zen-gut-responsive-select-wrapper">
        <div className="zen-gut-responsive-select-wrapper__left">
          {block_icons.bpdesktopxxl}
        </div>
        <div className="zen-gut-responsive-select-wrapper__right">
          <SelectControl
            // label="Text align"
            value={props.attributes.textAlignXL}
            default=''
            options={[
              { value: '', label: "None" },
              { value: "start", label: "Left" },
              { value: "center", label: "Center" },
              { value: "end", label: "Right" },
            ]}
            onChange={(new_val_w) => {
              props.setAttributes({ textAlignXL: new_val_w });
            }}
          />
        </div>
      </div>
      <div className="zen-gut-responsive-select-wrapper">
        <div className="zen-gut-responsive-select-wrapper__left">
          {block_icons.bplaptop}
        </div>
        <div className="zen-gut-responsive-select-wrapper__right">
          <SelectControl
            // label="Text align"
            value={props.attributes.textAlignLG}
            default=''
            options={[
              { value: '', label: "None" },
              { value: "start", label: "Left" },
              { value: "center", label: "Center" },
              { value: "end", label: "Right" },
            ]}
            onChange={(new_val_w) => {
              props.setAttributes({ textAlignLG: new_val_w });
            }}
          />
        </div>
      </div>
      <div className="zen-gut-responsive-select-wrapper">
        <div className="zen-gut-responsive-select-wrapper__left">
          {block_icons.bptablet}
        </div>
        <div className="zen-gut-responsive-select-wrapper__right">
          <SelectControl
            // label="Text align"
            value={props.attributes.textAlignMD}
            default=''
            options={[
              { value: '', label: "None" },
              { value: "start", label: "Left" },
              { value: "center", label: "Center" },
              { value: "end", label: "Right" },
            ]}
            onChange={(new_val_w) => {
              props.setAttributes({ textAlignMD: new_val_w });
            }}
          />
        </div>
      </div>
      <div className="zen-gut-responsive-select-wrapper">
        <div className="zen-gut-responsive-select-wrapper__left">
          {block_icons.bpmobileland}
        </div>
        <div className="zen-gut-responsive-select-wrapper__right">
          <SelectControl
            // label="Text align"
            value={props.attributes.textAlignSM}
            default=''
            options={[
              { value: '', label: "None" },
              { value: "start", label: "Left" },
              { value: "center", label: "Center" },
              { value: "end", label: "Right" },
            ]}
            onChange={(new_val_w) => {
              props.setAttributes({ textAlignSM: new_val_w });
            }}
          />
        </div>
      </div>
      <div className="zen-gut-responsive-select-wrapper">
        <div className="zen-gut-responsive-select-wrapper__left">
          {block_icons.bpmobile}
        </div>
        <div className="zen-gut-responsive-select-wrapper__right">
          <SelectControl
            // label="Text align"
            value={props.attributes.textAlign}
            default=''
            options={[
              { value: '', label: "None" },
              { value: "start", label: "Left" },
              { value: "center", label: "Center" },
              { value: "end", label: "Right" },
            ]}
            onChange={(new_val_w) => {
              props.setAttributes({ textAlign: new_val_w });
            }}
          />
        </div>
      </div>

    </PanelBody>
  );
};

export default sharedTextAlignInspCnt;
