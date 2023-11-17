const sharedPaddingClassnames = (props) => {
    return (
       [

        [`${props.attributes.padding !== undefined ? `p-${props.attributes.padding}` : ''}`],
        [`${props.attributes.paddingT !== undefined ? `pt-${props.attributes.paddingT}` : ''}`],
        [`${props.attributes.paddingB !== undefined ? `pb-${props.attributes.paddingB}` : ''}`],
        [`${props.attributes.paddingL !== undefined ? `ps-${props.attributes.paddingL}` : ''}`],
        [`${props.attributes.paddingR !== undefined ? `pe-${props.attributes.paddingR}` : ''}`],
        [`${props.attributes.paddingX !== undefined ? `px-${props.attributes.paddingX}` : ''}`],
        [`${props.attributes.paddingY !== undefined ? `py-${props.attributes.paddingY}` : ''}`],
        [`${props.attributes.paddingSM !== undefined ? `p-sm-${props.attributes.paddingSM}` : ''}`],
        [`${props.attributes.paddingSMT !== undefined ? `pt-sm-${props.attributes.paddingSMT}` : ''}`],
        [`${props.attributes.paddingSMB !== undefined ? `pb-sm-${props.attributes.paddingSMB}` : ''}`],
        [`${props.attributes.paddingSML !== undefined ? `ps-sm-${props.attributes.paddingSML}` : ''}`],
        [`${props.attributes.paddingSMR !== undefined ? `pe-sm-${props.attributes.paddingSMR}` : ''}`],
        [`${props.attributes.paddingSMX !== undefined ? `px-sm-${props.attributes.paddingSMX}` : ''}`],
        [`${props.attributes.paddingSMY !== undefined ? `py-sm-${props.attributes.paddingSMY}` : ''}`],
        [`${props.attributes.paddingMD !== undefined ? `p-md-${props.attributes.paddingMD}` : ''}`],
        [`${props.attributes.paddingMDT !== undefined ? `pt-md-${props.attributes.paddingMDT}` : ''}`],
        [`${props.attributes.paddingMDB !== undefined ? `pb-md-${props.attributes.paddingMDB}` : ''}`],
        [`${props.attributes.paddingMDL !== undefined ? `ps-md-${props.attributes.paddingMDL}` : ''}`],
        [`${props.attributes.paddingMDR !== undefined ? `pe-md-${props.attributes.paddingMDR}` : ''}`],
        [`${props.attributes.paddingMDX !== undefined ? `px-md-${props.attributes.paddingMDX}` : ''}`],
        [`${props.attributes.paddingMDY !== undefined ? `py-md-${props.attributes.paddingMDY}` : ''}`],
        [`${props.attributes.paddingLG !== undefined ? `p-lg-${props.attributes.paddingLG}` : ''}`],
        [`${props.attributes.paddingLGT !== undefined ? `pt-lg-${props.attributes.paddingLGT}` : ''}`],
        [`${props.attributes.paddingLGB !== undefined ? `pb-lg-${props.attributes.paddingLGB}` : ''}`],
        [`${props.attributes.paddingLGL !== undefined ? `ps-lg-${props.attributes.paddingLGL}` : ''}`],
        [`${props.attributes.paddingLGR !== undefined ? `pe-lg-${props.attributes.paddingLGR}` : ''}`],
        [`${props.attributes.paddingLGX !== undefined ? `px-lg-${props.attributes.paddingLGX}` : ''}`],
        [`${props.attributes.paddingLGY !== undefined ? `py-lg-${props.attributes.paddingLGY}` : ''}`],
        [`${props.attributes.paddingXL !== undefined ? `p-xl-${props.attributes.paddingXL}` : ''}`],
        [`${props.attributes.paddingXLT !== undefined ? `pt-xl-${props.attributes.paddingXLT}` : ''}`],
        [`${props.attributes.paddingXLB !== undefined ? `pb-xl-${props.attributes.paddingXLB}` : ''}`],
        [`${props.attributes.paddingXLL !== undefined ? `ps-xl-${props.attributes.paddingXLL}` : ''}`],
        [`${props.attributes.paddingXLR !== undefined ? `pe-xl-${props.attributes.paddingXLR}` : ''}`],
        [`${props.attributes.paddingXLX !== undefined ? `px-xl-${props.attributes.paddingXLX}` : ''}`],
        [`${props.attributes.paddingXLY !== undefined ? `py-xl-${props.attributes.paddingXLY}` : ''}`],
        [`${props.attributes.paddingXXL !== undefined ? `p-xxl-${props.attributes.paddingXXL}` : ''}`],
        [`${props.attributes.paddingXXLT !== undefined ? `pt-xxl-${props.attributes.paddingXXLT}` : ''}`],
        [`${props.attributes.paddingXXLB !== undefined ? `pb-xxl-${props.attributes.paddingXXLB}` : ''}`],
        [`${props.attributes.paddingXXLL !== undefined ? `ps-xxl-${props.attributes.paddingXXLL}` : ''}`],
        [`${props.attributes.paddingXXLR !== undefined ? `pe-xxl-${props.attributes.paddingXXLR}` : ''}`],
        [`${props.attributes.paddingXXLX !== undefined ? `px-xxl-${props.attributes.paddingXXLX}` : ''}`],
        [`${props.attributes.paddingXXLY !== undefined ? `py-xxl-${props.attributes.paddingXXLY}` : ''}`],

       ]
    )

}

export default sharedPaddingClassnames;