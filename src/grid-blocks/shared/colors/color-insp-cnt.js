const { __ } = wp.i18n;
import { 
  PanelBody,
  PanelRow,
  SelectControl
} from '@wordpress/components';
import {
    PanelColorSettings,
} from '@wordpress/block-editor';

const sharedColorsInspCnt = (props) => {

    const { setAttributes } = props;

    return (
        <>
            <PanelBody
            title={__("Theme colors shared", "zenflow5")}
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
                { value: "bg-gray-100", label: "Gray 100" },
                { value: "bg-gray-200", label: "Gray 200" },
                { value: "bg-gray-300", label: "Gray 300" },
                { value: "bg-gray-400", label: "Gray 400" },
                { value: "bg-gray-500", label: "Gray 500" },
                { value: "bg-gray-600", label: "Gray 600" },
                { value: "bg-gray-700", label: "Gray 700" },
                { value: "bg-gray-800", label: "Gray 800" },
                { value: "bg-gray-900", label: "Gray 900" },
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
                { value: "gray-100", label: "Gray 100" },
                { value: "gray-200", label: "Gray 200" },
                { value: "gray-300", label: "Gray 300" },
                { value: "gray-400", label: "Gray 400" },
                { value: "gray-500", label: "Gray 500" },
                { value: "gray-600", label: "Gray 600" },
                { value: "gray-700", label: "Gray 700" },
                { value: "gray-800", label: "Gray 800" },
                { value: "gray-900", label: "Gray 900" },
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
                    value:  props.backgroundColor,
                    onChange: (colorValue) =>
                    props.setAttributes({ backgroundColor: colorValue }),
                    label: __("Background Color"),
                },
                {
                    value:  props.textColor,
                    onChange: (colorValue) =>
                    props.setAttributes({ textColor: colorValue }),
                    label: __("Text Color"),
                },
                ]}
            >
                
            </PanelColorSettings>
        </>
    )

};

export default sharedColorsInspCnt;