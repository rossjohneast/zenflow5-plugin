import block_icons from "../../block-icons";
const { __ } = wp.i18n;
const { RangeControl, PanelBody } = wp.components;

const sharedOrderInspCnt = (props) => {
  return (

    <PanelBody
    title={__("Order", "zenflow5")}
    initialOpen={false}
    >
    {/* <div className="zen-gut-panel-help">
    <p>
        The smaller grid settings also apply to larger screens unless
        overriden specifically for larger screens. Therefore, you only
        need to use the setting for the smallest device width you want to
        support.
    </p>
    </div> */}

    <div className="zen-gut-responsive-select-wrapper">
    <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bpdesktopxxl}
    {/* { props.attributes.colWidthLg } */}
    </div>
    <div className="zen-gut-responsive-select-wrapper__right">
    <RangeControl
            min={0}
            max={5}
            step={1}
            showTooltip={true}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.orderXxl}
            onChange={(new_val_w) => {
                props.setAttributes({ orderXxl: new_val_w });
            }}
            />
    </div>
    </div>
    <div className="zen-gut-responsive-select-wrapper">
    <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bpdesktop}
    {/* { props.attributes.colWidthLg } */}
    </div>
    <div className="zen-gut-responsive-select-wrapper__right">
    <RangeControl
            min={0}
            max={5}
            step={1}
            showTooltip={true}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.orderXl}
            onChange={(new_val_w) => {
                props.setAttributes({ orderXl: new_val_w });
            }}
            />
    </div>
    </div>
    <div className="zen-gut-responsive-select-wrapper">
    <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bplaptop}
    {/* { props.attributes.colWidthLg } */}
    </div>
    <div className="zen-gut-responsive-select-wrapper__right">
    <RangeControl
            min={0}
            max={5}
            step={1}
            showTooltip={true}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.orderLg}
            onChange={(new_val_w) => {
                props.setAttributes({ orderLg: new_val_w });
            }}
            />
    </div>
    </div>

    <div className="zen-gut-responsive-select-wrapper">
    <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bptablet}
    {/* { props.attributes.colWidthMd } */}
    </div>
    <div className="zen-gut-responsive-select-wrapper__right">
    <RangeControl
            min={0}
            max={5}
            step={1}
            showTooltip={true}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.orderMd}
            onChange={(new_val_w) => {
                props.setAttributes({ orderMd: new_val_w });
            }}
            />
    </div>
    </div>


    <div className="zen-gut-responsive-select-wrapper">
    <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bpmobileland}
    {/* { props.attributes.colWidthSm } */}
    </div>
    <div className="zen-gut-responsive-select-wrapper__right">
    <RangeControl
            min={0}
            max={5}
            step={1}
            showTooltip={true}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.orderSm}
            onChange={(new_val_w) => {
                props.setAttributes({ orderSm: new_val_w });
            }}
            />
    </div>
    </div>


    <div className="zen-gut-responsive-select-wrapper">
    <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bpmobile}
    </div>
    <div className="zen-gut-responsive-select-wrapper__right">
    <RangeControl
            min={0}
            max={5}
            step={1}
            showTooltip={true}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.order}
            onChange={(new_val_w) => {
                props.setAttributes({ order: new_val_w });
            }}
            />
    </div>
    </div>


    </PanelBody>
 
 );
};

export default sharedOrderInspCnt;
