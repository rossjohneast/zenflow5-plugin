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
            title={__("Width", "zenflow5")}
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


<div className="zen-gut-responsive-select-wrapper">
  <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bpdesktopxxl}
  </div>
  <div className="zen-gut-responsive-select-wrapper__right">
      <SelectControl
        value={ props.attributes.colWidthXxl }
        default=''
        options={ [
          {
            label: 'Inherit from smaller size',
            value: '',
          },
          { label: '1 Columns - 1/12', value: '-xxl-1' },
          { label: '2 - 1/6', value: '-xxl-2' },
          { label: '3 Columns - 1/4', value: '-xxl-3' },
          { label: '4 Columns - 1/3', value: '-xxl-4' },
          { label: '5 - 5/12', value: '-xxl-5' },
          { label: '6 Columns - 1/2', value: '-xxl-6' },
          { label: '7 - 7/12', value: '-xxl-7' },
          { label: '8 Columns - 2/3', value: '-xxl-8' },
          { label: '9 Columns - 3/4', value: '-xxl-9' },
          { label: '10 - 10/12', value: '-xxl-10' },
          { label: '11 - 11/12', value: '-xxl-11' },
          { label: '12 Columns - 1/1', value: '-xxl-12' },
          { label: 'Equal width Column', value: '-xxl' },
          { label: 'Variable width Column', value: '-xxl-auto' },
        ] }
        onChange={(new_val_w) => {
          props.setAttributes({ colWidthXxl: new_val_w });
        }}
      />
  </div>
</div>

<div className="zen-gut-responsive-select-wrapper">
  <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bpdesktop}
    { props.attributes.colWidthXl }
  </div>
  <div className="zen-gut-responsive-select-wrapper__right">
      <SelectControl
        value={ props.attributes.colWidthXl }
        default=''
        options={ [
          {
            label: 'Inherit from smaller size',
            value: '',
          },
          { label: '1 Columns - 1/12', value: '-xl-1' },
          { label: '2 - 1/6', value: '-xl-2' },
          { label: '3 Columns - 1/4', value: '-xl-3' },
          { label: '4 Columns - 1/3', value: '-xl-4' },
          { label: '5 - 5/12', value: '-xl-5' },
          { label: '6 Columns - 1/2', value: '-xl-6' },
          { label: '7 - 7/12', value: '-xl-7' },
          { label: '8 Columns - 2/3', value: '-xl-8' },
          { label: '9 Columns - 3/4', value: '-xl-9' },
          { label: '10 - 10/12', value: '-xl-10' },
          { label: '11 - 11/12', value: '-xl-11' },
          { label: '12 Columns - 1/1', value: '-xl-12' },
          { label: 'Equal width Column', value: '-xl' },
          { label: 'Variable width Column', value: 'xl-auto' },
        ] }
        onChange={(new_val_w) => {
          props.setAttributes({ colWidthXl: new_val_w });
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
      <SelectControl
        // label="Column width"
        value={ props.attributes.colWidthLg }
        default=''
        options={ [
          {
            label: 'Inherit from smaller size',
            value: '',
          },
          { label: '1 Columns - 1/12', value: '-lg-1' },
          { label: '2 - 1/6', value: '-lg-2' },
          { label: '3 Columns - 1/4', value: '-lg-3' },
          { label: '4 Columns - 1/3', value: '-lg-4' },
          { label: '5 - 5/12', value: '-lg-5' },
          { label: '6 Columns - 1/2', value: '-lg-6' },
          { label: '7 - 7/12', value: '-lg-7' },
          { label: '8 Columns - 2/3', value: '-lg-8' },
          { label: '9 Columns - 3/4', value: '-lg-9' },
          { label: '10 - 10/12', value: '-lg-10' },
          { label: '11 - 11/12', value: '-lg-11' },
          { label: '12 Columns - 1/1', value: '-lg-12' },
          { label: 'Equal width Column', value: '-lg' },
          { label: 'Variable width Column', value: '-lg-auto' },
        ] }
        onChange={(new_val_w) => {
          props.setAttributes({ colWidthLg: new_val_w });
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
      <SelectControl
        // label="Column width"
        value={ props.attributes.colWidthMd }
        default=''
        options={ [
          {
            label: 'Inherit from smaller size',
            value: '',
          },
          { label: '1 Columns - 1/12', value: '-md-1' },
          { label: '2 - 1/6', value: '-md-2' },
          { label: '3 Columns - 1/4', value: '-md-3' },
          { label: '4 Columns - 1/3', value: '-md-4' },
          { label: '5 - 5/12', value: '-md-5' },
          { label: '6 Columns - 1/2', value: '-md-6' },
          { label: '7 - 7/12', value: '-md-7' },
          { label: '8 Columns - 2/3', value: '-md-8' },
          { label: '9 Columns - 3/4', value: '-md-9' },
          { label: '10 - 10/12', value: '-md-10' },
          { label: '11 - 11/12', value: '-md-11' },
          { label: '12 Columns - 1/1', value: '-md-12' },
          { label: 'Equal width Column', value: '-md' },
          { label: 'Variable width Column', value: '-md-auto' },
        ] }
        onChange={(new_val_w) => {
          props.setAttributes({ colWidthMd: new_val_w });
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
      <SelectControl
        // label="Column width"
        value={ props.attributes.colWidthSm }
        default=''
        options={ [
          {
            label: 'Inherit from smaller size',
            value: '',
          },
          { label: '1 Columns - 1/12', value: '-sm-1' },
          { label: '2 - 1/6', value: '-sm-2' },
          { label: '3 Columns - 1/4', value: '-sm-3' },
          { label: '4 Columns - 1/3', value: '-sm-4' },
          { label: '5 - 5/12', value: '-sm-5' },
          { label: '6 Columns - 1/2', value: '-sm-6' },
          { label: '7 - 7/12', value: '-sm-7' },
          { label: '8 Columns - 2/3', value: '-sm-8' },
          { label: '9 Columns - 3/4', value: '-sm-9' },
          { label: '10 - 10/12', value: '-sm-10' },
          { label: '11 - 11/12', value: '-sm-11' },
          { label: '12 Columns - 1/1', value: '-sm-12' },
          { label: 'Equal width Column', value: '-sm' },
          { label: 'Variable width Column', value: '-sm-auto' },
        ] }
        onChange={(new_val_w) => {
          props.setAttributes({ colWidthSm: new_val_w });
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
        // label="Column width"
        value={ props.attributes.colWidth }
        default='col'
        options={ [
          {
            label: 'Equal width Column (Default)',
            value: '',
          },
          { label: '1 Columns - 1/12', value: '-1' },
          { label: '2 - 1/6', value: '-2' },
          { label: '3 Columns - 1/4', value: '-3' },
          { label: '4 Columns - 1/3', value: '-4' },
          { label: '5 - 5/12', value: '-5' },
          { label: '6 Columns - 1/2', value: '-6' },
          { label: '7 - 7/12', value: '-7' },
          { label: '8 Columns - 2/3', value: '-8' },
          { label: '9 Columns - 3/4', value: '-9' },
          { label: '10 - 10/12', value: '-10' },
          { label: '11 - 11/12', value: '-11' },
          { label: '12 Columns - 1/1', value: '-12' },
          { label: 'Variable width Column', value: '-auto' },
        ] }
        onChange={(new_val_w) => {
          props.setAttributes({ colWidth: new_val_w });
        }}
      />
  </div>
</div>

          </PanelBody>


          <PanelBody title={__("Height", "zenflow5")} className="rangeWithMarks" initialOpen={false}>

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
            title={__("Color", "zenflow5")}
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

<div className="zen-gut-responsive-select-wrapper">
  <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bplaptop}
    {/* { props.attributes.colWidthLg } */}
  </div>
  <div className="zen-gut-responsive-select-wrapper__right">
  <RangeControl
                      // label={__("Desktop", "zenflow5")}
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
                      // label={__("Tablet", "zenflow5")}
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
                      // label={__("Mobile Landscape", "zenflow5")}
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
                    />
  </div>
</div>


<div className="zen-gut-responsive-select-wrapper">
  <div className="zen-gut-responsive-select-wrapper__left">
    {block_icons.bpmobile}
  </div>
  <div className="zen-gut-responsive-select-wrapper__right">
  <RangeControl
                      // label={__("Mobile", "zenflow5")}
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
                    />
  </div>
</div>

          </PanelBody>

          {sharedPaddingInspCnt(props)}

          {sharedMarginInspCnt(props)}
         
          {sharedTextAlignInspCnt(props)}

          <PanelBody
            title={__("Display", "zenflow5")}
            initialOpen={false}
          >
            {/* <PanelRow className="w-100">
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
            </PanelRow> */}

                {/* only show more options if Flex is the value */}
            {/* {props.attributes.display === 'd-flex' ? sharedDisplayInspCnt(props) : null} */}

            {sharedDisplayInspCnt(props)}

         </PanelBody>


          {sharedAnimationsInspCnt(props)}

        </InspectorControls>
        <div
          className={classnames(
            sharedColWidthClassnames(props),
            sharedColOffsetsClassnames(props),
            [`${props.attributes.order !== undefined ? `order-${props.attributes.order}` : ''}`],
            [`${props.attributes.orderSm !== undefined ? `order-sm-${props.attributes.orderSm}` : ''}`],
            [`${props.attributes.orderMd !== undefined ? `order-md-${props.attributes.orderMd}` : ''}`],
            [`${props.attributes.orderLg !== undefined ? `order-lg-${props.attributes.orderLg}` : ''}`],
            [`${props.attributes.orderXl !== undefined ? `order-xl-${props.attributes.orderXl}` : ''}`],
            [`${props.attributes.orderXxl !== undefined ? `order-xxl-${props.attributes.orderXxl}` : ''}`],
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
