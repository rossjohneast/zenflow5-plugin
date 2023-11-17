const { __ } = wp.i18n;
const { RangeControl,
    PanelBody,
    PanelRow,
    SelectControl,
    FormToggle } = wp.components;

const sharedAnimationsInspCnt = (props) => {

    const toggle_animation_mirror = () => {
        props.setAttributes({
            href_target: !props.attributes.animationMirror,
            href_rel: !props.attributes.animationMirror
        })
    }

    const toggle_animation_once = () => {
        props.setAttributes({
            href_target: !props.attributes.animationOnce,
            href_rel: !props.attributes.animationOnce
        })
    }

    return (

        <PanelBody title={__('Animations', 'zenflow5')} initialOpen={false} >

            <PanelRow className={"components-panel-children-w-100"}>
                <SelectControl
                    label={__('Animation', 'zenflow5')}
                    value={props.attributes.animation}
                    options={[
                        { value: '', label: 'Default (None)' },
                        { value: 'fade', label: 'Fade' },
                        { value: 'fade-up', label: 'Fade-up' },
                        { value: 'fade-down', label: 'Fade-down' },
                        { value: 'fade-left', label: 'Fade-left' },
                        { value: 'fade-right', label: 'Fade-right' },
                        { value: 'fade-up-right', label: 'Fade-up-right' },
                        { value: 'fade-up-left', label: 'Fade-up-left' },
                        { value: 'fade-down-right', label: 'Fade-down-right' },
                        { value: 'fade-down-left', label: 'Fade-down-left' },
                        { value: 'flip-up', label: 'Flip-up' },
                        { value: 'flip-down', label: 'Flip-down' },
                        { value: 'flip-left', label: 'Flip-left' },
                        { value: 'flip-right', label: 'Flip-right' },
                        { value: 'slide-up', label: 'Slide-up' },
                        { value: 'slide-down', label: 'Slide-down' },
                        { value: 'slide-left', label: 'Slide-left' },
                        { value: 'slide-right', label: 'Slide-right' },
                        { value: 'zoom-in', label: 'Zoom-in' },
                        { value: 'zoom-in-up', label: 'Zoom-in-up' },
                        { value: 'zoom-in-down', label: 'Zoom-in-down' },
                        { value: 'zoom-in-left', label: 'Zoom-in-left' },
                        { value: 'zoom-in-right', label: 'Zoom-in-right' },
                        { value: 'zoom-out', label: 'Zoom-out' },
                        { value: 'zoom-out-up', label: 'Zoom-out-up' },
                        { value: 'zoom-out-down', label: 'Zoom-out-down' },
                        { value: 'zoom-out-left', label: 'Zoom-out-left' },
                        { value: 'zoom-out-right', label: 'Zoom-out-right' },
                    ]}
                    onChange={(new_val) => {
                        props.setAttributes({ animation: new_val })
                    }} />
            </PanelRow>

            <PanelRow className={"components-panel-children-w-100"}>
                <SelectControl
                    label={__('Easing', 'zenflow5')}
                    value={props.attributes.animationEasing}
                    options={[
                        { value: '', label: 'Default' },
                        { value: 'linear', label: 'Linear' },
                        { value: 'ease', label: 'Ease' },
                        { value: 'ease-in', label: 'Ease-in' },
                        { value: 'ease-out', label: 'Ease-out' },
                        { value: 'ease-in-out', label: 'Ease-in-out' },
                        { value: 'ease-in-back', label: 'Ease-in-back' },
                        { value: 'ease-out-back', label: 'Ease-out-back' },
                        { value: 'ease-in-out-back', label: 'Ease-in-out-back' },
                        { value: 'ease-in-sine', label: 'Ease-in-sine' },
                        { value: 'ease-out-sine', label: 'Ease-out-sine' },
                        { value: 'ease-in-out-sine', label: 'Ease-in-out-sine' },
                        { value: 'ease-in-quad', label: 'Ease-in-quad' },
                        { value: 'ease-out-quad', label: 'Ease-out-quad' },
                        { value: 'ease-in-out-quad', label: 'Ease-in-out-quad' },
                        { value: 'ease-in-cubic', label: 'Ease-in-cubic' },
                        { value: 'ease-out-cubic', label: 'Ease-out-cubic' },
                        { value: 'ease-in-out-cubic', label: 'Ease-in-out-cubic' },
                        { value: 'ease-in-quart', label: 'Ease-in-quart' },
                        { value: 'ease-out-quart', label: 'Ease-out-quart' },
                        { value: 'ease-in-out-quart', label: 'Ease-in-out-quart' },
                    ]}
                    onChange={(new_val) => {
                        props.setAttributes({ animationEasing: new_val })
                    }} />
            </PanelRow>

            <PanelRow className={"components-panel-children-w-100"}>
                <SelectControl
                    label={__('Anchor placement', 'zenflow5')}
                    value={props.attributes.animationPlacement}
                    options={[
                        { value: '', label: 'Default' },
                        { value: 'top-bottom', label: 'Top-bottom' },
                        { value: 'top-center', label: 'Top-center' },
                        { value: 'top-top', label: 'Top-top' },
                        { value: 'center-bottom', label: 'Center-bottom' },
                        { value: 'center-center', label: 'Center-center' },
                        { value: 'center-top', label: 'Center-top' },
                        { value: 'bottom-bottom', label: 'Bottom-bottom' },
                        { value: 'bottom-center', label: 'Bottom-center' },
                        { value: 'bottom-top', label: 'Bottom-top' },
                    ]}
                    onChange={(new_val) => {
                        props.setAttributes({ animationPlacement: new_val })
                    }} />
            </PanelRow>

            <RangeControl
                label={__('Offset', 'zenflow5')}
                help={__('Offset (in px) from the original trigger point', 'zenflow5')}
                min={0}
                max={3000}
                step={1}
                allowReset={true}
                initialPosition={120}
                resetFallbackValue={120}
                value={props.attributes.animationOffset}
                onChange={(new_val) => {
                    props.setAttributes({ animationOffset: new_val })
                }} />

            <RangeControl
                label={__('Duration', 'zenflow5')}
                min={400}
                max={3000}
                step={50}
                initialPosition={400}
                allowReset={true}
                resetFallbackValue={400}
                value={props.attributes.animationDuration}
                onChange={(new_val) => {
                    props.setAttributes({ animationDuration: new_val })
                }} />

            <RangeControl
                label={__('Delay', 'zenflow5')}
                min={0}
                max={3000}
                step={50}
                allowReset={true}
                value={props.attributes.animationDelay}
                onChange={(new_val) => {
                    props.setAttributes({ animationDelay: new_val })
                }} />

            <PanelRow>
                <div className="w-100">
                    <FormToggle id='zenflow5-card-target-toggle'
                        checked={props.attributes.animationOnce}
                        onChange={toggle_animation_once} />&nbsp;
                    <label htmlFor="zenflow5-card-target-toggle">
                        {__('Once', 'zenflow5')}
                    </label>

                </div>
            </PanelRow>

            <PanelRow>
                <div className="w-100">
                    <FormToggle id='zenflow5-card-target-toggle'
                        checked={props.attributes.animationMirror}
                        onChange={toggle_animation_mirror} /> &nbsp;
                    <label htmlFor="zenflow5-card-target-toggle">
                        {__('Mirror', 'zenflow5')}
                    </label>

                </div>
            </PanelRow>

        </PanelBody>

    )


}

export default sharedAnimationsInspCnt;