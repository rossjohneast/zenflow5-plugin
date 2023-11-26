import block_icons from "../block-icons";
// import "./style.editor.scss";
// import "./parent.js";

import { useState } from '@wordpress/element';
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
	BlockControls,
	MediaReplaceFlow
} from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  Button,
  SelectControl,
  RangeControl,
  ToggleControl,
  TabPanel,
	FocalPointPicker,
  RadioControl
} from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';

import classnames from "classnames";
import sharedPaddingInspCnt from "../shared/padding/padding-insp-cnt.js";
import sharedPaddingClassnames from "../shared/padding/padding-classnames.js";
import sharedMarginInspCnt from "../shared/margin/margin-insp-cnt.js";

import sharedMarginClassnames from "../shared/margin/margin-classnames.js";
import sharedColWidthClassnames from "../shared/col/colwidth-classnames.js";
import sharedColOffsetsClassnames from "../shared/col/coloffsets-classnames.js";
import sharedAnimationsInspCnt from "../shared/animation/aos-insp-cnt.js";
import sharedAnimationsPropsAtts from "../shared/animation/aos-insp-cnt.js";

import sharedTextAlignInspCnt from "../shared/textalign/textalign-insp-cnt";
import sharedtextAlignClassnames from "../shared/textalign/textalign-classnames";

import sharedDisplayInspCnt from "../shared/display/display-insp-cnt.js";
import sharedDisplayClassnames from "../shared/display/display-classnames";

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

//HOC ELEMENT
//Add child column width classes to HOC parent wp-block, for editor only.
const withClientIdClassNameBlockSec = createHigherOrderComponent(
	(BlockListBlock) => {
	  return (props) => {
		return (
		  <BlockListBlock
			{...props}
			className={classnames(
        "zenflow5-col",
			  "col",
			  sharedColWidthClassnames(props),
			  sharedColOffsetsClassnames(props)
			)}
		  />
		);
	  };
	},
	"withClientIdClassNameBlockSec"
  );
  
  wp.hooks.addFilter(
	"editor.BlockListBlock",
	"zenflow5/section",
	withClientIdClassNameBlockSec
  );

const marksColumns = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 1,
    label: '',
  },
  {
    value: 2,
    label: '',
  },
  {
    value: 3,
    label: '25%',
  },
  {
    value: 4,
    label: '',
  },
  {
    value: 5,
    label: '',
  },
  {
    value: 6,
    label: '50%',
  },
  {
    value: 7,
    label: '',
  },
  {
    value: 8,
    label: '',
  },
  {
    value: 9,
    label: '75%',
  },
  {
    value: 10,
    label: '',
  },
  {
    value: 11,
    label: '',
  },
  {
    value: 12,
    label: '100%',
  },
];

const marksMinHeight = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 500,
    label: '500',
  },
  {
    value: 1000,
    label: '1000',
  },
  {
    value: 1500,
    label: '1500',
  },
  {
    value: 2000,
    label: '2000',
  }
];

const marksMargB = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  }
];

const marksPadding = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  }
];

export default function Edit(props) {
	
    const { attributes, setAttributes, textColor, backgroundColor, displayAdvSettings } = props;

    const colWidthFlexible = attributes.colWidthFlexible;
    const colWidthSmFlexible = attributes.colWidthSmFlexible;
    const colWidthMdFlexible = attributes.colWidthMdFlexible;
    const colWidthLgFlexible = attributes.colWidthLgFlexible;
    const colWidthXlFlexible = attributes.colWidthXlFlexible;
    const colWidthXxlFlexible = attributes.colWidthXxlFlexible;

    const colWidthAuto = attributes.colWidthAuto;
    const colWidthSmAuto = attributes.colWidthSmAuto;
    const colWidthMdAuto = attributes.colWidthMdAuto;
    const colWidthLgAuto = attributes.colWidthLgAuto;
    const colWidthXlAuto = attributes.colWidthXlAuto;
    const colWidthXxlAuto = attributes.colWidthXxlAuto;

    //Start: focal point management
    const [focalPoint, setFocalPoint] = useState({
      x: attributes.focalPointX,
      y: attributes.focalPointY,
    });

    // Grab this from atts when set in edit screen
    const focalUrl = attributes.urlImage;
    //End: focal point management

    //Start: image upload management
    //The URL is what we use, the media ID may be useful
    function selectImg(el) {
      setAttributes({ urlImage: el.url, imgID: el.id });
    };
    //End: image upload management

    const style = {
      color: props.attributes.textColor,
      minHeight: props.attributes.minHeightCol,
    };

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (props.attributes.backgroundImage !== null) {
      BackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.backgroundImage} )`,
      };
    }

    //Only use the inner background inline style if its not null
    let colInnerBackgroundIsActive = "";
    if (props.attributes.innerColBackgroundImage !== null) {
      colInnerBackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.innerColBackgroundImage} )`,
      };
    }

    const colStyleOuter = {
      backgroundColor: props.attributes.backgroundColor,
      color: props.attributes.textColor,
      backgroundSize: props.attributes.backgroundImageSize,
      backgroundRepeat: props.attributes.backgroundImageRepeat,
      backgroundPosition: props.attributes.backgroundImagePos,

      backgroundImage: `url(${focalUrl})`,
      backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
    };

    function onImageSelect(imageObject) {
      setAttributes({
        backgroundImage: imageObject.sizes.full.url,
      });
    }

    const onRemoveImage = () => {
      setAttributes({
        //Remove image
        backgroundImage: null,
      });
    };

    function onInnerColImageSelect(imageObject) {
      setAttributes({
        innerColBackgroundImage: imageObject.sizes.full.url,
      });
    }

    const onInnerColRemoveImage = () => {
      setAttributes({
        //Remove image
        innerColBackgroundImage: null,
      });
    };

    const displayAdvSettingsAtt = props.attributes.displayAdvSettings;

    return (
      <div { ...useBlockProps() }>

        <BlockControls group="other">
          <MediaReplaceFlow
            name={!attributes.urlImage ? __('Add Background Image') : __('Replace Background Image')}
            mediaId={attributes.imgID}
            mediaURL={attributes.urlImage}
            allowedTypes={['image']}
            accept="image/*"
            onSelect={selectImg}
            onError={error => console.error(error)}
          />
        </BlockControls>

        <InspectorControls>


        <PanelBody
            title={__("Width (%)", "zenflow5")}
            initialOpen={true}
          >
            {/* <div className="zen-gut-panel-help">
              <p>
                The smaller grid settings also apply to larger screens unless
                overriden specifically for larger screens. Therefore, you only
                need to use the setting for the smallest device width you want to
                support.
              </p>
            </div> */}

            <TabPanel
              className="zen-gut-tab-panel"
              activeClass="zen-gut-tab-panel-tab-active-tab"
              initialTabName="tab3"
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


<RadioControl
  label="Column widths"
  onChange={(value) => {
    let newAttributes = {
      colWidth: '', // Assuming you want to update colWidth to an empty string
    };

    if (value === '') {
      newAttributes.colWidthFlexible = false;
      newAttributes.colWidthAuto = false;
    } else if (value === 'flexible') {
      newAttributes.colWidthFlexible = true;
      newAttributes.colWidthAuto = false;
    } else if (value === 'auto') {
      newAttributes.colWidthFlexible = false;
      newAttributes.colWidthAuto = true;
    }

    props.setAttributes(newAttributes);
  }}

  options={[
    {
      label: 'Set width (12 = 100%)',
      value: ''
    },
    {
      label: 'Equal width',
      value: 'flexible'
    },
    {
      label: 'Variable width (Auto fit content)',
      value: 'auto'
    }
  ]}
  selected={props.attributes.colWidthFlexible ? 'flexible' : (props.attributes.colWidthAuto ? 'auto' : '')}
/>
,

                    <div>
                      {!colWidthFlexible && !colWidthAuto && (
                        <RangeControl
                          min={0}
                          max={12}
                          step={1}
                          showTooltip={true}
                          allowReset={true}
                          resetFallbackValue={undefined}
                          value={props.attributes.colWidth}
                          onChange={(new_val_w) => {
                            props.setAttributes({ colWidth: new_val_w });
                          }}
                        />
                      )}
                    </div>
                    ,
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

<div>
{!colWidthSmFlexible && !colWidthSmAuto && (
   <RangeControl
     min={0}
     max={12}
     step={1}
     showTooltip={true}
     allowReset={true}
     resetFallbackValue={undefined} // Set this to the value you want when resetting
     value={props.attributes.colWidthSm}
     onChange={(new_val_w) => {
       props.setAttributes({ colWidthSm: new_val_w });
     }}
   />
)}
</div>,


<RadioControl
  label="Column widths"
  onChange={(value) => {
    let newAttributes = {
      colWidthSm: '', // Assuming you want to update colWidth to an empty string
    };

    if (value === '') {
      newAttributes.colWidthSmFlexible = false;
      newAttributes.colWidthSmAuto = false;
    } else if (value === 'flexible') {
      newAttributes.colWidthSmFlexible = true;
      newAttributes.colWidthSmAuto = false;
    } else if (value === 'auto') {
      newAttributes.colWidthSmFlexible = false;
      newAttributes.colWidthSmAuto = true;
    }

    props.setAttributes(newAttributes);
  }}

  options={[
    {
      label: 'Set width (12 = 100%)',
      value: ''
    },
    {
      label: 'Equal width',
      value: 'flexible'
    },
    {
      label: 'Variable width (Auto fit content)',
      value: 'auto'
    }
  ]}
  selected={props.attributes.colWidthSmFlexible ? 'flexible' : (props.attributes.colWidthSmAuto ? 'auto' : '')}
/>

                    ,
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


<RadioControl
  label="Column widths"
  onChange={(value) => {
    let newAttributes = {
      colWidthMd: '', // Assuming you want to update colWidth to an empty string
    };

    if (value === '') {
      newAttributes.colWidthMdFlexible = false;
      newAttributes.colWidthMdAuto = false;
    } else if (value === 'flexible') {
      newAttributes.colWidthMdFlexible = true;
      newAttributes.colWidthMdAuto = false;
    } else if (value === 'auto') {
      newAttributes.colWidthMdFlexible = false;
      newAttributes.colWidthMdAuto = true;
    }

    props.setAttributes(newAttributes);
  }}

  options={[
    {
      label: 'Set width (12 = 100%)',
      value: ''
    },
    {
      label: 'Equal width',
      value: 'flexible'
    },
    {
      label: 'Variable width (Auto fit content)',
      value: 'auto'
    }
  ]}
  selected={props.attributes.colWidthMdFlexible ? 'flexible' : (props.attributes.colWidthMdAuto ? 'auto' : '')}
/>
,


                      <div>
                         {!colWidthMdFlexible && !colWidthMdAuto && (
                            <RangeControl
                              min={0}
                              max={12}
                              step={1}
                              showTooltip={true}
                              allowReset={true}
                              resetFallbackValue={undefined} // Set this to the value you want when resetting
                              value={props.attributes.colWidthMd}
                              onChange={(new_val_w) => {
                                props.setAttributes({ colWidthMd: new_val_w });
                              }}
                            />
                      )}
                      </div>
                    ,
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


<RadioControl
  label="Column widths"
  onChange={(value) => {
    let newAttributes = {
      colWidthLg: '', // Assuming you want to update colWidth to an empty string
    };

    if (value === '') {
      newAttributes.colWidthLgFlexible = false;
      newAttributes.colWidthLgAuto = false;
    } else if (value === 'flexible') {
      newAttributes.colWidthLgFlexible = true;
      newAttributes.colWidthLgAuto = false;
    } else if (value === 'auto') {
      newAttributes.colWidthLgFlexible = false;
      newAttributes.colWidthLgAuto = true;
    }

    props.setAttributes(newAttributes);
  }}

  options={[
    {
      label: 'Set width (12 = 100%)',
      value: ''
    },
    {
      label: 'Equal width',
      value: 'flexible'
    },
    {
      label: 'Variable width (Auto fit content)',
      value: 'auto'
    }
  ]}
  selected={props.attributes.colWidthLgFlexible ? 'flexible' : (props.attributes.colWidthLgAuto ? 'auto' : '')}
/>
,


                    <div>
                      {!colWidthLgFlexible && !colWidthLgAuto && (
                          <RangeControl
                            min={0}
                            max={12}
                            step={1}
                            showTooltip={true}
                            allowReset={true}
                            resetFallbackValue={undefined} // Set this to the value you want when resetting
                            value={props.attributes.colWidthLg}
                            onChange={(new_val_w) => {
                              props.setAttributes({ colWidthLg: new_val_w });
                            }}
                          />
                    )}
                    </div>
                    ,
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


<RadioControl
  label="Column widths"
  onChange={(value) => {
    let newAttributes = {
      colWidthXl: '', // Assuming you want to update colWidth to an empty string
    };

    if (value === '') {
      newAttributes.colWidthXlFlexible = false;
      newAttributes.colWidthXlAuto = false;
    } else if (value === 'flexible') {
      newAttributes.colWidthXlFlexible = true;
      newAttributes.colWidthXlAuto = false;
    } else if (value === 'auto') {
      newAttributes.colWidthXlFlexible = false;
      newAttributes.colWidthXlAuto = true;
    }

    props.setAttributes(newAttributes);
  }}

  options={[
    {
      label: 'Set width (12 = 100%)',
      value: ''
    },
    {
      label: 'Equal width',
      value: 'flexible'
    },
    {
      label: 'Variable width (Auto fit content)',
      value: 'auto'
    }
  ]}
  selected={props.attributes.colWidthXlFlexible ? 'flexible' : (props.attributes.colWidthXlAuto ? 'auto' : '')}
/>
,


                        <div>
                          {!colWidthXlFlexible && !colWidthXlAuto && (
                              <RangeControl
                                min={0}
                                max={12}
                                step={1}
                                showTooltip={true}
                                allowReset={true}
                                resetFallbackValue={undefined} // Set this to the value you want when resetting
                                value={props.attributes.colWidthXl}
                                onChange={(new_val_w) => {
                                  props.setAttributes({ colWidthXl: new_val_w });
                                }}
                              />
                        )}
                        </div>

                    ,
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


<RadioControl
  label="Column widths"
  onChange={(value) => {
    let newAttributes = {
      colWidthXxl: '', // Assuming you want to update colWidth to an empty string
    };

    if (value === '') {
      newAttributes.colWidthXxlFlexible = false;
      newAttributes.colWidthXxlAuto = false;
    } else if (value === 'flexible') {
      newAttributes.colWidthXxlFlexible = true;
      newAttributes.colWidthXxlAuto = false;
    } else if (value === 'auto') {
      newAttributes.colWidthXxlFlexible = false;
      newAttributes.colWidthXxlAuto = true;
    }

    props.setAttributes(newAttributes);
  }}

  options={[
    {
      label: 'Set width (12 = 100%)',
      value: ''
    },
    {
      label: 'Equal width',
      value: 'flexible'
    },
    {
      label: 'Variable width (Auto fit content)',
      value: 'auto'
    }
  ]}
  selected={props.attributes.colWidthXxlFlexible ? 'flexible' : (props.attributes.colWidthXxlAuto ? 'auto' : '')}
/>
,


                        <div>
                          {!colWidthXxlFlexible && !colWidthXxlAuto && (
                              <RangeControl
                                min={0}
                                max={12}
                                step={1}
                                showTooltip={true}
                                allowReset={true}
                                resetFallbackValue={undefined} // Set this to the value you want when resetting
                                value={props.attributes.colWidthXxl}
                                onChange={(new_val_w) => {
                                  props.setAttributes({ colWidthXxl: new_val_w });
                                }}
                              />
                        )}
                        </div>

                    ,
                  ],
                },
              ]}
            >
              {(tab) => <p>{tab.content}</p>}
            </TabPanel>




          </PanelBody>


          <PanelBody title={__("Height", "zenflow5")} className="rangeWithMarks" initialOpen={false}>
           
            {/* <div className="zen-gut-panel-help">
              <p>
                Basic column settings for desktop devices. 
              </p>
            </div> */}

            {/* <RangeControl
              
              label={__("Column Width", "zenflow5")}
              min={0}
              max={12}
              step={1}
              marks={ marksColumns }
              showTooltip={true}
              allowReset={true}
              resetFallbackValue={undefined}
              value={props.attributes.colWidthLg}
              onChange={(new_val_w) => {
                props.setAttributes({ colWidthLg: new_val_w });
              }}
            /> */}

          <RangeControl
              label={__("Minimum height", "zenflow5")}
              min={0}
              max={2000}
              step={5}
              marks={marksMinHeight}
              allowReset={true}
              resetFallbackValue={"0"}
              value={props.attributes.minHeightCol}
              onChange={(new_val) => {
                props.setAttributes({ minHeightCol: new_val });
              }}
            />
{/* 
            <RangeControl
              label={__("Margin Bottom", "zenflow5")}
              min={0}
              max={5}
              marks={marksMargB}
              allowReset={true}
              resetFallbackValue={undefined}
              value={props.attributes.marginLGB}
              onChange={(new_val) => {
                props.setAttributes({ marginLGB: new_val });
              }}
            />

            <RangeControl
              label={__("Padding", "zenflow5")}
              min={0}
              max={5}
              marks={marksPadding}
              allowReset={true}
              resetFallbackValue={undefined}
              value={props.attributes.padding}
              onChange={(new_val) => {
                props.setAttributes({ padding: new_val });
              }}
            />  */}
          </PanelBody>

          <PanelBody
            title={__("Theme colors", "zenflow5")}
            initialOpen={false}
          >
            <PanelRow className="w-100">
              <SelectControl
                label={__("Background Color", "zenflow5")}
                value={props.attributes.backgroundColorTheme}
                options={[
                  { value: "", label: "Default (None)" },
                  { value: "bg-primary", label: "Primary" },
                  { value: "bg-secondary", label: "Secondary" },
                  { value: "bg-success", label: "Success" },
                  { value: "bg-danger", label: "Danger" },
                  { value: "bg-warning", label: "Warning" },
                  { value: "bg-info", label: "Info" },
                  { value: "bg-light", label: "Light" },
                  { value: "bg-dark", label: "Dark" },
                  { value: "bg-white", label: "White" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ backgroundColorTheme: new_val });
                }}
              />
            </PanelRow>
            <PanelRow className="w-100">
              <SelectControl
                value={props.attributes.textColorTheme}
                label={__("Text Color", "zenflow5")}
                options={[
                  { value: "", label: "Default" },
                  { value: "text-primary", label: "Primary" },
                  { value: "text-secondary", label: "Secondary" },
                  { value: "text-success", label: "Success" },
                  { value: "text-danger", label: "Danger" },
                  { value: "text-warning", label: "Warning" },
                  { value: "text-info", label: "Info" },
                  { value: "text-light", label: "Light" },
                  { value: "text-dark", label: "Dark" },
                  { value: "text-white", label: "White" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ textColorTheme: new_val });
                }}
              />
            </PanelRow>
          </PanelBody>

          <PanelColorSettings
            title={__("Custom colors", "zenflow5")}
            initialOpen={false}
            colorSettings={[
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color"),
              },
              {
                value: textColor,
                onChange: (colorValue) =>
                  setAttributes({ textColor: colorValue }),
                label: __("Text Color"),
              },
            ]}
          ></PanelColorSettings>

{focalUrl && (
          <PanelBody title={__('Background image')} initialOpen={true}>

            
              <div>

                <PanelRow>
                  <div>
                    <fieldset>
                      {/* https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/ */}
                      <FocalPointPicker
                        label={__('Focal point picker')}
                        url={focalUrl}
                        value={focalPoint}
                        onDragStart={setFocalPoint}
                        onDrag={setFocalPoint}
                        onChange={() => setAttributes({ focalPointX: focalPoint.x, focalPointY: focalPoint.y })}
                      />
                    </fieldset>
                  </div>
                </PanelRow>
                <PanelRow>
                  <Button
                    variant="secondary"
                    isSmall
                    className="block-library-cover__reset-button"
                    onClick={() =>
                      setAttributes({
                        urlImage: undefined,
                        imgID: undefined,
                        focalPointY: 0.5,
                        focalPointX: 0.5,
                        //backgroundType: undefined
                      })
                    }
                  >
                    {__('Clear Media')}
                  </Button>
                </PanelRow>
                <PanelRow className="w-100">
                  <SelectControl
                    label={__('Background fixed', 'zenflow5')}
                    value={props.attributes.backgroundImageAttachment}
                    options={[
                      { value: 'initial', label: 'Initial' },
                      { value: 'fixed', label: 'Fixed' }
                    ]}
                    onChange={(new_val) => {
                      props.setAttributes({ backgroundImageAttachment: new_val })
                    }} />
                </PanelRow>

                <PanelRow className="w-100">
                  <SelectControl
                    label={__('Background Size', 'zenflow5')}
                    value={props.attributes.backgroundImageSize}
                    options={[
                      { value: 'cover', label: 'Cover' },
                      { value: 'contain', label: 'Contain' },
                      { value: 'auto', label: 'Auto' },
                      { value: '100%', label: '100%' }
                    ]}
                    onChange={(new_val) => {
                      props.setAttributes({ backgroundImageSize: new_val })
                    }} />
                </PanelRow>

                <PanelRow className="w-100">
                  <SelectControl
                    label={__('Background Repeat', 'zenflow5')}
                    value={props.attributes.backgroundImageRepeat}
                    options={[
                      { value: 'repeat', label: 'Repeat' },
                      { value: 'no-repeat', label: 'No-repeat' },
                      { value: 'repeat-x', label: 'Repeat-x' },
                      { value: 'repeat-y', label: 'Repeat-y' },
                      { value: 'space', label: 'Space' },
                      { value: 'round', label: 'Round' },
                      { value: 'initial', label: 'Initial' }
                    ]}
                    onChange={(new_val) => {
                      props.setAttributes({ backgroundImageRepeat: new_val })
                    }} />
                </PanelRow>

              </div>
            

            {/* <PanelRow className="w-100">
              <SelectControl
                label={__('Background Tint', 'zenflow5')}
                value={props.attributes.backgroundImageTint}
                options={[
                  { value: '', label: 'Tint None' },
                  { value: 'tint tint-01', label: '10%' },
                  { value: 'tint tint-02', label: '20%' },
                  { value: 'tint tint-03', label: '30%' },
                  { value: 'tint tint-04', label: '40%' },
                  { value: 'tint tint-05', label: '50%' },
                  { value: 'tint tint-06', label: '60%' },
                  { value: 'tint tint-07', label: '70%' },
                  { value: 'tint tint-08', label: '80%' },
                  { value: 'tint tint-09', label: '90%' },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ backgroundImageTint: new_val })
                }} />
            </PanelRow> */}

          </PanelBody>
)}
          {/* <PanelBody
            title={__("Column background image", "zenflow5")}
            initialOpen={false}
          >
            {!!attributes.backgroundImage == "" && (
              <PanelRow>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onImageSelect}
                    type="image"
                    value={attributes.backgroundImage}
                    render={({ open }) => (
                      <Button
                        className="components-button editor-post-featured-image__toggle"
                        onClick={open}
                      >
                        Select a background image
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
              </PanelRow>
            )}
            {!!attributes.backgroundImage && (
              <PanelRow>
                <MediaUploadCheck>
                  <div className="d-flex flex-wrap">
                    <img
                      src={attributes.backgroundImage}
                      alt={__("Background image", "image-selector-example")}
                    />
                    <Button
                      className="components-button block-library-cover__reset-button is-secondary is-small"
                      onClick={onRemoveImage}
                    >
                      {__("Clear Media", "zenflow5")}
                    </Button>
                  </div>
                </MediaUploadCheck>
              </PanelRow>
            )}

            <PanelRow className="w-100">
              <SelectControl
                label={__("Background Fixed", "zenflow5")}
                value={props.attributes.backgroundImageAttachment}
                options={[
                  { value: "initial", label: "Initial" },
                  { value: "fixed", label: "Fixed" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ backgroundImageAttachment: new_val });
                }}
              />
            </PanelRow>

            <PanelRow className="w-100">
              <SelectControl
                label={__("Background Tint", "zenflow5")}
                value={props.attributes.backgroundImageTint}
                options={[
                  { value: "", label: "Tint None" },
                  { value: "tint tint-01", label: "10%" },
                  { value: "tint tint-02", label: "20%" },
                  { value: "tint tint-03", label: "30%" },
                  { value: "tint tint-04", label: "40%" },
                  { value: "tint tint-05", label: "50%" },
                  { value: "tint tint-06", label: "60%" },
                  { value: "tint tint-07", label: "70%" },
                  { value: "tint tint-08", label: "80%" },
                  { value: "tint tint-09", label: "90%" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ backgroundImageTint: new_val });
                }}
              />
            </PanelRow>

            <PanelRow className="w-100">
              <SelectControl
                label={__("Background Size", "zenflow5")}
                value={props.attributes.backgroundImageSize}
                options={[
                  { value: "cover", label: "Cover" },
                  { value: "contain", label: "Contain" },
                  { value: "auto", label: "Auto" },
                  { value: "100%", label: "100%" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ backgroundImageSize: new_val });
                }}
              />
            </PanelRow>

            <PanelRow className="w-100">
              <SelectControl
                label={__("Background Repeat", "zenflow5")}
                value={props.attributes.backgroundImageRepeat}
                options={[
                  { value: "repeat", label: "Repeat" },
                  { value: "no-repeat", label: "No-repeat" },
                  { value: "repeat-x", label: "Repeat-x" },
                  { value: "repeat-y", label: "Repeat-y" },
                  { value: "space", label: "Space" },
                  { value: "round", label: "Round" },
                  { value: "initial", label: "Initial" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ backgroundImageRepeat: new_val });
                }}
              />
            </PanelRow>

            <PanelRow className="w-100">
              <SelectControl
                label={__("Background Image Position", "zenflow5")}
                value={props.attributes.backgroundImagePos}
                options={[
                  { value: "center center", label: "Center Center" },
                  { value: "center top", label: "Center Top" },
                  { value: "center bottom", label: "Center Bottom" },
                  { value: "left top", label: "Left Top" },
                  { value: "left center", label: "Left Center" },
                  { value: "left bottom", label: "Left Bottom" },
                  { value: "right center", label: "Right Center" },
                  { value: "right bottom", label: "Right Bottom" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ backgroundImagePos: new_val });
                }}
              />
            </PanelRow>
          </PanelBody>
 */}

          {/* <PanelBody title={__('Column advanced settings')}>
            <PanelRow>
              <ToggleControl
                label={__('Display responsive and advanced settings')}
                help={
                  props.attributes.displayAdvSettings
 
                }
                checked={props.attributes.displayAdvSettings}
                onChange={() => setAttributes({
                  displayAdvSettings: !displayAdvSettings
                }
                )}
              />
            </PanelRow>
          </PanelBody> */}


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

            <TabPanel
              className="zen-gut-tab-panel"
              activeClass="zen-gut-tab-panel-tab-active-tab"
              initialTabName="tab3"
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
                    />,
                  ],
                },
              ]}
            >
              {(tab) => <p>{tab.content}</p>}
            </TabPanel>




          </PanelBody>

          <PanelBody
            title={__("Offset", "zenflow5")}
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
                      label={__("Offset left", "zenflow5")}
                      min={0}
                      max={11}
                      step={1}
                      showTooltip={true}
                      allowReset={true}
                      resetFallbackValue={undefined}
                      value={props.attributes.colOffset}
                      onChange={(new_val_w) => {
                        props.setAttributes({ colOffset: new_val_w });
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
                      label={__("Offset left", "zenflow5")}
                      min={0}
                      max={11}
                      step={1}
                      showTooltip={true}
                      allowReset={true}
                      resetFallbackValue={undefined}
                      value={props.attributes.colOffsetSm}
                      onChange={(new_val_w) => {
                        props.setAttributes({ colOffsetSm: new_val_w });
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
                      label={__("Offset left", "zenflow5")}
                      min={0}
                      max={11}
                      step={1}
                      showTooltip={true}
                      allowReset={true}
                      resetFallbackValue={undefined}
                      value={props.attributes.colOffsetMd}
                      onChange={(new_val_w) => {
                        props.setAttributes({ colOffsetMd: new_val_w });
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
                      label={__("Offset left", "zenflow5")}
                      min={0}
                      max={11}
                      step={1}
                      showTooltip={true}
                      allowReset={true}
                      resetFallbackValue={undefined}
                      value={props.attributes.colOffsetLg}
                      onChange={(new_val_w) => {
                        props.setAttributes({ colOffsetLg: new_val_w });
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
                      label={__("Offset left", "zenflow5")}
                      min={0}
                      max={11}
                      step={1}
                      showTooltip={true}
                      allowReset={true}
                      resetFallbackValue={undefined}
                      value={props.attributes.colOffsetXl}
                      onChange={(new_val_w) => {
                        props.setAttributes({ colOffsetXl: new_val_w });
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
                      label={__(
                        "Offset left Xxl (>1400px, larger desktops)",
                        "zenflow5"
                      )}
                      min={0}
                      max={11}
                      step={1}
                      showTooltip={true}
                      allowReset={true}
                      resetFallbackValue={undefined}
                      value={props.attributes.colOffsetXxl}
                      onChange={(new_val_w) => {
                        props.setAttributes({ colOffsetXxl: new_val_w });
                      }}
                    />,
                  ],
                },
              ]}
            >
              {(tab) => <p>{tab.content}</p>}
            </TabPanel>
          </PanelBody>


          {sharedPaddingInspCnt(props)}

          {sharedMarginInspCnt(props)}
         
     

          {sharedTextAlignInspCnt(props)}

          <PanelBody
            title={__("Display", "zenflow5")}
            initialOpen={false}
          >
            <PanelRow className="w-100">
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
                  props.setAttributes({ display: new_val });
                }}
              />
            </PanelRow>



            {/* <PanelRow className="w-100">
              <SelectControl
                label={__("Align Text", "zenflow5")}
                value={props.attributes.textAlign}
                options={[
                  { value: "text-left", label: "Left" },
                  { value: "text-center", label: "Center" },
                  { value: "text-right", label: "Right" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ textAlign: new_val });
                }}
              />
            </PanelRow> */}

            {/* <PanelRow className="w-100">
              <SelectControl
                label={__("Align Content", "zenflow5")}
                value={props.attributes.alignItems}
                options={[
                  { value: "align-items-start", label: "Start" },
                  { value: "align-items-end", label: "End" },
                  { value: "align-items-center", label: "Center" },
                  { value: "align-items-baseline", label: "Baseline" },
                  { value: "align-items-stretch", label: "Stretch" },
                ]}
                onChange={(new_val) => {
                  props.setAttributes({ alignItems: new_val });
                }}
              />
            </PanelRow>

            <PanelRow className="w-100">
              <SelectControl
                label={__("Justify Content", "zenflow5")}
                value={props.attributes.justifyContent}
                options={[
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
            </PanelRow> */}

            {props.attributes.display === 'd-flex' ? sharedDisplayInspCnt(props) : null}

         </PanelBody>


          {sharedAnimationsInspCnt(props)}

        </InspectorControls>
        <div
          className={classnames(
            "col",
            sharedColWidthClassnames(props),
            sharedColOffsetsClassnames(props),
            [`${props.attributes.order !== undefined ? `order-${props.attributes.order}` : ''}`],
            [`${props.attributes.orderSm !== undefined ? `order-sm-${props.attributes.orderSm}` : ''}`],
            [`${props.attributes.orderMd !== undefined ? `order-md-${props.attributes.orderMd}` : ''}`],
            [`${props.attributes.orderLg !== undefined ? `order-lg-${props.attributes.orderLg}` : ''}`],
            [`${props.attributes.orderXl !== undefined ? `order-xl-${props.attributes.orderXl}` : ''}`],
            [`${props.attributes.orderXxl !== undefined ? `order-xxl-${props.attributes.orderXxl}` : ''}`],
            [
              `${
                props.attributes.display !== undefined
                  ? `${props.attributes.display}`
                  : ""
              }`,
            ],
            sharedMarginClassnames(props),
            sharedPaddingClassnames(props),
            sharedtextAlignClassnames(props),
            sharedDisplayClassnames(props),
            [
              `${
                props.attributes.textColorTheme !== undefined
                  ? `${props.attributes.textColorTheme}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.backgroundColorTheme !== undefined
                  ? `${props.attributes.backgroundColorTheme}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.backgroundImageTint !== undefined
                  ? `${props.attributes.backgroundImageTint}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.justifyContent !== undefined
                  ? `${props.attributes.justifyContent}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.alignItems !== undefined
                  ? `${props.attributes.alignItems}`
                  : ""
              }`,
            ]
          )}
          style={
            (style,
            {
              ...style,
              ...colStyleOuter,
              ...BackgroundIsActive,
            })
          }
        >
          <InnerBlocks />
        </div>
      </div>
    );
}
