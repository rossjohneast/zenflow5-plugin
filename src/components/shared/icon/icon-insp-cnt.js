import block_icons from "../../block-icons";

const { __ } = wp.i18n;
const { RadioControl, TabPanel, PanelBody, PanelRow, RangeControl, Button } = wp.components;

const sharedIconInspCnt = (props) => {

	const { icon, iconSize } =
		props.attributes;

  const selectedIcon = icon ?? 'clipboardHeart';

  return (
    <PanelBody title={__('Icon Selection', 'zenflow5')}>

    <TabPanel className="zen-gut-tab-panel"
        activeClass="zen-gut-tab-panel-tab-active-tab"
        tabs={[

            {
                name: 'tab0',
                title: 'Design Icons',
                className: 'zen-gut-tab-panel-tab',
                content:
                    [
                        <PanelRow>
                            <RadioControl
                                label={__('Select icon', 'zenflow5')}
                                selected={selectedIcon}
                                options={[
                                    { label: __('award'), value: 'award' },
                                    { label: __('at'), value: 'at' },
                                    { label: __('activity'), value: 'activity' },
                                    { label: __('bag'), value: 'bag' },
                                    { label: __('basket3'), value: 'basket3' },
                                    { label: __('box'), value: 'box' },
                                    { label: __('boxes'), value: 'boxes' },
                                    { label: __('braces'), value: 'braces' },
                                    { label: __('briefcase'), value: 'briefcase' },
                                    { label: __('brightnessHigh'), value: 'brightnessHigh' },
                                    { label: __('brush'), value: 'brush' },
                                    { label: __('building'), value: 'building' },
                                    { label: __('buildings'), value: 'buildings' },
                                    { label: __('calculator'), value: 'calculator' },
                                    { label: __('calendar'), value: 'calendar' },
                                    { label: __('camera'), value: 'camera' },
                                    { label: __('cardChecklist'), value: 'cardChecklist' },
                                    { label: __('cardText'), value: 'cardText' },
                                    { label: __('cart'), value: 'cart' },
                                    { label: __('cart2'), value: 'cart2' },
                                    { label: __('cart3'), value: 'cart3' },
                                    { label: __('cart4'), value: 'cart4' },
                                    { label: __('chat'), value: 'chat' },
                                    { label: __('check2'), value: 'check2' },
                                    { label: __('checkCircle'), value: 'checkCircle' },
                                    { label: __('checkSquare'), value: 'checkSquare' },
                                    { label: __('database'), value: 'database' },

                                    { label: __('hdd-rack'), value: 'hddDisplay' },
                                    { label: __('display'), value: 'display' },

                                    { label: __('phone'), value: 'phone' },
                                    { label: __('clipboardHeart'), value: 'clipboardHeart' },
                                    { label: __('cloudRainHeavy'), value: 'cloudRainHeavy' },
                                    { label: __('evFront'), value: 'evFront' },
                                    { label: __('shieldCheck'), value: 'shieldCheck' },
                                    { label: __('houseCheck'), value: 'houseCheck' },
                                    { label: __('buildingCheck'), value: 'buildingCheck' },
                                    { label: __('lightbulb'), value: 'lightbulb' },
                                    { label: __('lightningCharge'), value: 'lightningCharge' },
                                    { label: __('hddNetwork'), value: 'hddNetwork' },
                                    { label: __('houses'), value: 'houses' }
                                ]}
                                onChange={(val) => props.setAttributes({ 'icon': val })}
                                className="zen-accordion-icon-option zen-accordion-icon-option-inner-panel"
                            />
                        </PanelRow>,
                    ]
            },
            {
                name: 'tab1',
                title: 'Social Icons',
                className: 'zen-gut-tab-panel-tab',
                content:
                    [

                        <PanelRow>
                            <RadioControl
                                label={__('Select icon', 'zenflow5')}
                                selected={selectedIcon}
                                options={[
                                    { label: __('facebook'), value: 'facebook' },
                                    { label: __('tiktok'), value: 'tiktok' },
                                    { label: __('youtube'), value: 'youtube' },
                                    { label: __('instagram'), value: 'instagram' },
                                    { label: __('linkedin'), value: 'linkedin' },
                                    { label: __('pinterest'), value: 'pinterest' },
                                    { label: __('vimeo'), value: 'vimeo' },
                                    { label: __('twitter'), value: 'twitter' }
                                ]}
                                onChange={(val) => props.setAttributes({ 'icon': val })}
                                className="zen-accordion-icon-option zen-accordion-icon-option-inner-panel"
                            />
                        </PanelRow>,

                    ]
            },
            {
                name: 'tab2',
                title: 'Interface Icons',
                className: 'zen-gut-tab-panel-tab',
                content:
                    [

                        <PanelRow>
                            <RadioControl
                                label={__('Select icon', 'zenflow5')}
                                selected={selectedIcon}
                                options={[
                                    { label: __('Arrow up short'), value: 'arrowUpShort' },
                                    { label: __('Arrow right'), value: 'arrowRight' },
                                    { label: __('Arrow left'), value: 'arrowLeft' },
                                    { label: __('Arrow left circle'), value: 'arrowLeftCircle' },
                                    { label: __('Arrow right circle'), value: 'arrowRightCircle' },
                                    { label: __('Box arrow in up right'), value: 'boxArrowInUpRight' },
                                    { label: __('Cloud arrow down'), value: 'cloudArrowDown' },
                                    { label: __('File zip'), value: 'fileZip' },
                                    { label: __('Play circle'), value: 'playCircle' },
                                    { label: __('Telephone'), value: 'telephone' },
                                    { label: __('Envelope'), value: 'envelope' },

                                ]}
                                onChange={(val) => props.setAttributes({ 'icon': val })}
                                className="zen-accordion-icon-option zen-accordion-icon-option-inner-panel"
                            />
                        </PanelRow>,

                    ]
            }
        ]}>
        {
            (tab) => <p>{tab.content}</p>
        }
    </TabPanel>

    <PanelBody title={__('Icon style', 'zenflow5')}>

    <RangeControl
        label={__('Icon Size', 'zenbuilder')}
        min={0}
        max={500}
        default={20}
        allowReset={true}
        resetFallbackValue={undefined}
        value={iconSize}
        onChange={(new_val) => {
            props.setAttributes({ iconSize: new_val })
        }} />

{icon && (
            <PanelRow>
                  <Button
                    variant="secondary"
                    isSmall
                    className="block-library-cover__reset-button"
                    onClick={() =>
                      props.setAttributes({
                        icon: undefined,
                        iconSize: undefined
                      })
                    }
                  >
                    {__('Remove Icon')}
                  </Button>
                </PanelRow>
)}

    </PanelBody>


</PanelBody>
  );
};

export default sharedIconInspCnt;
