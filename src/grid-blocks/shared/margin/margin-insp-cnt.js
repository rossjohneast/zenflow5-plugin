import block_icons from "../../block-icons";

const { __ } = wp.i18n;
const { 
  RangeControl, 
  TabPanel, 
  PanelBody,
  ToggleControl,
} = wp.components;

const sharedPaddingInspCnt = (props) => {

  const { setAttributes } = props;
  
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
              <>
                <label className="label-custom">{__("Margin", "zenflow5")}</label>
                {!props.attributes.marginAuto && (
                  <RangeControl
                    // label={__("Margin", "zenflow5")}
                    min={-20}
                    max={20}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.margin}
                    onChange={(new_val) => {
                      props.setAttributes({ margin: new_val });
                    }}
                  />
                )}
                <ToggleControl
                  label="Auto"
                  checked={props.attributes.marginAuto}
                  onChange={(new_val) => setAttributes({
                    marginAuto: new_val,
                    margin: '',
                  })}
                />
              </>       
              ,
             
              <>
              <label className="label-custom">{__("Margin Top", "zenflow5")}</label>
              {!props.attributes.marginAutoT && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginT}
                  onChange={(new_val) => {
                    props.setAttributes({ marginT: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoT}
                onChange={(new_val) => setAttributes({
                  marginAutoT: new_val,
                  marginT: '',
                })}
              />
            </> 
              ,

              <>
              <label className="label-custom">{__("Margin Bottom", "zenflow5")}</label>
              {!props.attributes.marginAutoB && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginB}
                  onChange={(new_val) => {
                    props.setAttributes({ marginB: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoB}
                onChange={(new_val) => setAttributes({
                  marginAutoB: new_val,
                  marginB: '',
                })}
              />
            </> ,

              <>
              <label className="label-custom">{__("Margin Left", "zenflow5")}</label>
              {!props.attributes.marginAutoB && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginL}
                  onChange={(new_val) => {
                    props.setAttributes({ marginL: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoL}
                onChange={(new_val) => setAttributes({
                  marginAutoL: new_val,
                  marginL: '',
                })}
              />
              </> ,

                <>
                <label className="label-custom">{__("Margin Right", "zenflow5")}</label>
                {!props.attributes.marginAutoR && (
                  <RangeControl
                    // label={__("Margin", "zenflow5")}
                    min={-20}
                    max={20}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.marginR}
                    onChange={(new_val) => {
                      props.setAttributes({ marginR: new_val });
                    }}
                  />
                )}
                <ToggleControl
                  label="Auto"
                  checked={props.attributes.marginAutoR}
                  onChange={(new_val) => setAttributes({
                    marginAutoR: new_val,
                    marginR: '',
                  })}
                />
                </>,

                  <>
                  <label className="label-custom">{__("Margin X", "zenflow5")}</label>
                  {!props.attributes.marginAutoX && (
                    <RangeControl
                      // label={__("Margin", "zenflow5")}
                      min={-20}
                      max={20}
                      allowReset={true}
                      resetFallbackValue={undefined}
                      value={props.attributes.marginX}
                      onChange={(new_val) => {
                        props.setAttributes({ marginX: new_val });
                      }}
                    />
                  )}
                  <ToggleControl
                    label="Auto"
                    checked={props.attributes.marginAutoX}
                    onChange={(new_val) => setAttributes({
                      marginAutoX: new_val,
                      marginX: '',
                    })}
                  />
                  </>,

                    <>
                    <label className="label-custom">{__("Margin Y", "zenflow5")}</label>
                    {!props.attributes.marginAutoY && (
                      <RangeControl
                        // label={__("Margin", "zenflow5")}
                        min={-20}
                        max={20}
                        allowReset={true}
                        resetFallbackValue={undefined}
                        value={props.attributes.marginY}
                        onChange={(new_val) => {
                          props.setAttributes({ marginY: new_val });
                        }}
                      />
                    )}
                    <ToggleControl
                      label="Auto"
                      checked={props.attributes.marginAutoY}
                      onChange={(new_val) => setAttributes({
                        marginAutoY: new_val,
                        marginY: '',
                      })}
                    />
                    </>,
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
              <>
              <label className="label-custom">{__("Margin", "zenflow5")}</label>
              {!props.attributes.marginAutoSM && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginSM}
                  onChange={(new_val) => {
                    props.setAttributes({ marginSM: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoSM}
                onChange={(new_val) => setAttributes({
                  marginAutoSM: new_val,
                  marginSM: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Top", "zenflow5")}</label>
              {!props.attributes.marginAutoSMT && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginSMT}
                  onChange={(new_val) => {
                    props.setAttributes({ marginSMT: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoSMT}
                onChange={(new_val) => setAttributes({
                  marginAutoSMT: new_val,
                  marginSMT: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Bottom", "zenflow5")}</label>
              {!props.attributes.marginAutoSMB && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginSMB}
                  onChange={(new_val) => {
                    props.setAttributes({ marginSMB: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoSMB}
                onChange={(new_val) => setAttributes({
                  marginAutoSMB: new_val,
                  marginSMB: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Left", "zenflow5")}</label>
              {!props.attributes.marginAutoSML && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginSML}
                  onChange={(new_val) => {
                    props.setAttributes({ marginSML: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoSML}
                onChange={(new_val) => setAttributes({
                  marginAutoSML: new_val,
                  marginSML: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Right", "zenflow5")}</label>
              {!props.attributes.marginAutoSMR && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginSMR}
                  onChange={(new_val) => {
                    props.setAttributes({ marginSMR: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoSMR}
                onChange={(new_val) => setAttributes({
                  marginAutoSMR: new_val,
                  marginSMR: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin X", "zenflow5")}</label>
              {!props.attributes.marginAutoSMX && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginSMX}
                  onChange={(new_val) => {
                    props.setAttributes({ marginSMX: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoSMX}
                onChange={(new_val) => setAttributes({
                  marginAutoSMX: new_val,
                  marginSMX: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Y", "zenflow5")}</label>
              {!props.attributes.marginAutoSMY && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginSMY}
                  onChange={(new_val) => {
                    props.setAttributes({ marginSMY: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoSMY}
                onChange={(new_val) => setAttributes({
                  marginAutoSMY: new_val,
                  marginSMY: '',
                })}
              />
              </>,


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

              <>
              <label className="label-custom">{__("Margin", "zenflow5")}</label>
              {!props.attributes.marginAutoMD && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginMD}
                  onChange={(new_val) => {
                    props.setAttributes({ marginMD: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoMD}
                onChange={(new_val) => setAttributes({
                  marginAutoMD: new_val,
                  marginMD: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Top", "zenflow5")}</label>
              {!props.attributes.marginAutoMDT && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginMDT}
                  onChange={(new_val) => {
                    props.setAttributes({ marginMDT: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoMDT}
                onChange={(new_val) => setAttributes({
                  marginAutoMDT: new_val,
                  marginMDT: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Bottom", "zenflow5")}</label>
              {!props.attributes.marginAutoMDB && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginMDB}
                  onChange={(new_val) => {
                    props.setAttributes({ marginMDB: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoMDB}
                onChange={(new_val) => setAttributes({
                  marginAutoMDB: new_val,
                  marginMDB: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Left", "zenflow5")}</label>
              {!props.attributes.marginAutoMDL && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginMDL}
                  onChange={(new_val) => {
                    props.setAttributes({ marginMDL: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoMDL}
                onChange={(new_val) => setAttributes({
                  marginAutoMDL: new_val,
                  marginMDL: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Right", "zenflow5")}</label>
              {!props.attributes.marginAutoMDR && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginMDR}
                  onChange={(new_val) => {
                    props.setAttributes({ marginMDR: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoMDR}
                onChange={(new_val) => setAttributes({
                  marginAutoMDR: new_val,
                  marginMDR: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin X", "zenflow5")}</label>
              {!props.attributes.marginAutoX && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginMDX}
                  onChange={(new_val) => {
                    props.setAttributes({ marginMDX: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoX}
                onChange={(new_val) => setAttributes({
                  marginAutoX: new_val,
                  marginMDX: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Y", "zenflow5")}</label>
              {!props.attributes.marginAutoY && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginMDY}
                  onChange={(new_val) => {
                    props.setAttributes({ marginMDY: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoY}
                onChange={(new_val) => setAttributes({
                  marginAutoY: new_val,
                  marginMDY: '',
                })}
              />
              </>,

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

              <>
              <label className="label-custom">{__("Margin", "zenflow5")}</label>
              {!props.attributes.marginAutoLG && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginLG}
                  onChange={(new_val) => {
                    props.setAttributes({ marginLG: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoLG}
                onChange={(new_val) => setAttributes({
                  marginAutoLG: new_val,
                  marginLG: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Top", "zenflow5")}</label>
              {!props.attributes.marginAutoLGT && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginLGT}
                  onChange={(new_val) => {
                    props.setAttributes({ marginLGT: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoLGT}
                onChange={(new_val) => setAttributes({
                  marginAutoLGT: new_val,
                  marginLGT: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Bottom", "zenflow5")}</label>
              {!props.attributes.marginAutoLGB && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginLGB}
                  onChange={(new_val) => {
                    props.setAttributes({ marginLGB: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoLGB}
                onChange={(new_val) => setAttributes({
                  marginAutoLGB: new_val,
                  marginLGB: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Left", "zenflow5")}</label>
              {!props.attributes.marginAutoLGL && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginLGL}
                  onChange={(new_val) => {
                    props.setAttributes({ marginLGL: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoLGL}
                onChange={(new_val) => setAttributes({
                  marginAutoLGL: new_val,
                  marginLGL: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Right", "zenflow5")}</label>
              {!props.attributes.marginAutoLGR && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginLGR}
                  onChange={(new_val) => {
                    props.setAttributes({ marginLGR: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoLGR}
                onChange={(new_val) => setAttributes({
                  marginAutoLGR: new_val,
                  marginLGR: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin X", "zenflow5")}</label>
              {!props.attributes.marginAutoLGX && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginLGX}
                  onChange={(new_val) => {
                    props.setAttributes({ marginLGX: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoLGX}
                onChange={(new_val) => setAttributes({
                  marginAutoLGX: new_val,
                  marginLGX: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Y", "zenflow5")}</label>
              {!props.attributes.marginAutoLGY && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginLGY}
                  onChange={(new_val) => {
                    props.setAttributes({ marginLGY: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoLGY}
                onChange={(new_val) => setAttributes({
                  marginAutoLGY: new_val,
                  marginLGY: '',
                })}
              />
              </>,

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

              <>
              <label className="label-custom">{__("Margin", "zenflow5")}</label>
              {!props.attributes.marginAutoXL && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginXL}
                  onChange={(new_val) => {
                    props.setAttributes({ marginXL: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoXL}
                onChange={(new_val) => setAttributes({
                  marginAutoXL: new_val,
                  marginXL: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Top", "zenflow5")}</label>
              {!props.attributes.marginAutoXLT && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginXLT}
                  onChange={(new_val) => {
                    props.setAttributes({ marginXLT: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoXLT}
                onChange={(new_val) => setAttributes({
                  marginAutoXLT: new_val,
                  marginXLT: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Bottom", "zenflow5")}</label>
              {!props.attributes.marginAutoXLB && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginXLB}
                  onChange={(new_val) => {
                    props.setAttributes({ marginXLB: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoXLB}
                onChange={(new_val) => setAttributes({
                  marginAutoXLB: new_val,
                  marginXLB: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Left", "zenflow5")}</label>
              {!props.attributes.marginAutoXLL && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginXLL}
                  onChange={(new_val) => {
                    props.setAttributes({ marginXLL: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoXLL}
                onChange={(new_val) => setAttributes({
                  marginAutoXLL: new_val,
                  marginXLL: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Right", "zenflow5")}</label>
              {!props.attributes.marginAutoXLR && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginXLR}
                  onChange={(new_val) => {
                    props.setAttributes({ marginXLR: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoXLR}
                onChange={(new_val) => setAttributes({
                  marginAutoXLR: new_val,
                  marginXLR: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin X", "zenflow5")}</label>
              {!props.attributes.marginAutoXLX && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginXLX}
                  onChange={(new_val) => {
                    props.setAttributes({ marginXLX: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoXLX}
                onChange={(new_val) => setAttributes({
                  marginAutoXLX: new_val,
                  marginXLX: '',
                })}
              />
              </>,

              <>
              <label className="label-custom">{__("Margin Y", "zenflow5")}</label>
              {!props.attributes.marginAutoXLY && (
                <RangeControl
                  // label={__("Margin", "zenflow5")}
                  min={-20}
                  max={20}
                  allowReset={true}
                  resetFallbackValue={undefined}
                  value={props.attributes.marginXLY}
                  onChange={(new_val) => {
                    props.setAttributes({ marginXLY: new_val });
                  }}
                />
              )}
              <ToggleControl
                label="Auto"
                checked={props.attributes.marginAutoXLY}
                onChange={(new_val) => setAttributes({
                  marginAutoXLY: new_val,
                  marginXLY: '',
                })}
              />
              </>,

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

<>
<label className="label-custom">{__("Margin", "zenflow5")}</label>
{!props.attributes.marginAutoXXL && (
  <RangeControl
    // label={__("Margin", "zenflow5")}
    min={-20}
    max={20}
    allowReset={true}
    resetFallbackValue={undefined}
    value={props.attributes.marginXXL}
    onChange={(new_val) => {
      props.setAttributes({ marginXXL: new_val });
    }}
  />
)}
<ToggleControl
  label="Auto"
  checked={props.attributes.marginAutoXXL}
  onChange={(new_val) => setAttributes({
    marginAutoXXL: new_val,
    marginXXL: '',
  })}
/>
</>,

<>
<label className="label-custom">{__("Margin Top", "zenflow5")}</label>
{!props.attributes.marginAutoXXLT && (
  <RangeControl
    // label={__("Margin", "zenflow5")}
    min={-20}
    max={20}
    allowReset={true}
    resetFallbackValue={undefined}
    value={props.attributes.marginXXLT}
    onChange={(new_val) => {
      props.setAttributes({ marginXXLT: new_val });
    }}
  />
)}
<ToggleControl
  label="Auto"
  checked={props.attributes.marginAutoXXLT}
  onChange={(new_val) => setAttributes({
    marginAutoXXLT: new_val,
    marginXXLT: '',
  })}
/>
</>,

<>
<label className="label-custom">{__("Margin Bottom", "zenflow5")}</label>
{!props.attributes.marginAutoXXLB && (
  <RangeControl
    // label={__("Margin", "zenflow5")}
    min={-20}
    max={20}
    allowReset={true}
    resetFallbackValue={undefined}
    value={props.attributes.marginXXLB}
    onChange={(new_val) => {
      props.setAttributes({ marginXXLB: new_val });
    }}
  />
)}
<ToggleControl
  label="Auto"
  checked={props.attributes.marginAutoXXLB}
  onChange={(new_val) => setAttributes({
    marginAutoXXLB: new_val,
    marginXXLB: '',
  })}
/>
</>,

<>
<label className="label-custom">{__("Margin Left", "zenflow5")}</label>
{!props.attributes.marginAutoXXLL && (
  <RangeControl
    // label={__("Margin", "zenflow5")}
    min={-20}
    max={20}
    allowReset={true}
    resetFallbackValue={undefined}
    value={props.attributes.marginXXLL}
    onChange={(new_val) => {
      props.setAttributes({ marginXXLL: new_val });
    }}
  />
)}
<ToggleControl
  label="Auto"
  checked={props.attributes.marginAutoXXLL}
  onChange={(new_val) => setAttributes({
    marginAutoXXLL: new_val,
    marginXXLL: '',
  })}
/>
</>,

<>
<label className="label-custom">{__("Margin Right", "zenflow5")}</label>
{!props.attributes.marginAutoXXLR && (
  <RangeControl
    // label={__("Margin", "zenflow5")}
    min={-20}
    max={20}
    allowReset={true}
    resetFallbackValue={undefined}
    value={props.attributes.marginXXLR}
    onChange={(new_val) => {
      props.setAttributes({ marginXXLR: new_val });
    }}
  />
)}
<ToggleControl
  label="Auto"
  checked={props.attributes.marginAutoXXLR}
  onChange={(new_val) => setAttributes({
    marginAutoXXLR: new_val,
    marginXXLR: '',
  })}
/>
</>,

<>
<label className="label-custom">{__("Margin X", "zenflow5")}</label>
{!props.attributes.marginAutoXXLX && (
  <RangeControl
    // label={__("Margin", "zenflow5")}
    min={-20}
    max={20}
    allowReset={true}
    resetFallbackValue={undefined}
    value={props.attributes.marginXXLX}
    onChange={(new_val) => {
      props.setAttributes({ marginXXLX: new_val });
    }}
  />
)}
<ToggleControl
  label="Auto"
  checked={props.attributes.marginAutoXXLX}
  onChange={(new_val) => setAttributes({
    marginAutoXXLX: new_val,
    marginXXLX: '',
  })}
/>
</>,

<>
<label className="label-custom">{__("Margin Y", "zenflow5")}</label>
{!props.attributes.marginAutoXXLY && (
  <RangeControl
    // label={__("Margin", "zenflow5")}
    min={-20}
    max={20}
    allowReset={true}
    resetFallbackValue={undefined}
    value={props.attributes.marginXXLY}
    onChange={(new_val) => {
      props.setAttributes({ marginXXLY: new_val });
    }}
  />
)}
<ToggleControl
  label="Auto"
  checked={props.attributes.marginAutoXXLY}
  onChange={(new_val) => setAttributes({
    marginAutoXXLY: new_val,
    marginXXLY: '',
  })}
/>
</>,
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
