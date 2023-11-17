const sharedPaddingClassnames = (props) => {
    return (
       [

        [`${props.attributes.margin !== undefined ? `m-${props.attributes.margin}` : ''}`],
        [`${props.attributes.marginT !== undefined ? `mt-${props.attributes.marginT}` : ''}`],
        [`${props.attributes.marginB !== undefined ? `mb-${props.attributes.marginB}` : ''}`],
        [`${props.attributes.marginL !== undefined ? `ms-${props.attributes.marginL}` : ''}`],
        [`${props.attributes.marginR !== undefined ? `me-${props.attributes.marginR}` : ''}`],
        [`${props.attributes.marginX !== undefined ? `mx-${props.attributes.marginX}` : ''}`],
        [`${props.attributes.marginY !== undefined ? `my-${props.attributes.marginY}` : ''}`],
        [`${props.attributes.marginSM !== undefined ? `m-sm-${props.attributes.marginSM}` : ''}`],
        [`${props.attributes.marginSMT !== undefined ? `mt-sm-${props.attributes.marginSMT}` : ''}`],
        [`${props.attributes.marginSMB !== undefined ? `mb-sm-${props.attributes.marginSMB}` : ''}`],
        [`${props.attributes.marginSML !== undefined ? `ms-sm-${props.attributes.marginSML}` : ''}`],
        [`${props.attributes.marginSMR !== undefined ? `me-sm-${props.attributes.marginSMR}` : ''}`],
        [`${props.attributes.marginSMX !== undefined ? `mx-sm-${props.attributes.marginSMX}` : ''}`],
        [`${props.attributes.marginSMY !== undefined ? `my-sm-${props.attributes.marginSMY}` : ''}`],
        [`${props.attributes.marginMD !== undefined ? `m-md-${props.attributes.marginMD}` : ''}`],
        [`${props.attributes.marginMDT !== undefined ? `mt-md-${props.attributes.marginMDT}` : ''}`],
        [`${props.attributes.marginMDB !== undefined ? `mb-md-${props.attributes.marginMDB}` : ''}`],
        [`${props.attributes.marginMDL !== undefined ? `ms-md-${props.attributes.marginMDL}` : ''}`],
        [`${props.attributes.marginMDR !== undefined ? `me-md-${props.attributes.marginMDR}` : ''}`],
        [`${props.attributes.marginMDX !== undefined ? `mx-md-${props.attributes.marginMDX}` : ''}`],
        [`${props.attributes.marginMDY !== undefined ? `my-md-${props.attributes.marginMDY}` : ''}`],
        [`${props.attributes.marginLG !== undefined ? `m-lg-${props.attributes.marginLG}` : ''}`],
        [`${props.attributes.marginLGT !== undefined ? `mt-lg-${props.attributes.marginLGT}` : ''}`],
        [`${props.attributes.marginLGB !== undefined ? `mb-lg-${props.attributes.marginLGB}` : ''}`],
        [`${props.attributes.marginLGL !== undefined ? `ms-lg-${props.attributes.marginLGL}` : ''}`],
        [`${props.attributes.marginLGR !== undefined ? `me-lg-${props.attributes.marginLGR}` : ''}`],
        [`${props.attributes.marginLGX !== undefined ? `mx-lg-${props.attributes.marginLGX}` : ''}`],
        [`${props.attributes.marginLGY !== undefined ? `my-lg-${props.attributes.marginLGY}` : ''}`],
        [`${props.attributes.marginXL !== undefined ? `m-xl-${props.attributes.marginXL}` : ''}`],
        [`${props.attributes.marginXLT !== undefined ? `mt-xl-${props.attributes.marginXLT}` : ''}`],
        [`${props.attributes.marginXLB !== undefined ? `mb-xl-${props.attributes.marginXLB}` : ''}`],
        [`${props.attributes.marginXLL !== undefined ? `ms-xl-${props.attributes.marginXLL}` : ''}`],
        [`${props.attributes.marginXLR !== undefined ? `me-xl-${props.attributes.marginXLR}` : ''}`],
        [`${props.attributes.marginXLX !== undefined ? `mx-xl-${props.attributes.marginXLX}` : ''}`],
        [`${props.attributes.marginXLY !== undefined ? `my-xl-${props.attributes.marginXLY}` : ''}`],
        [`${props.attributes.marginXXL !== undefined ? `m-xxl-${props.attributes.marginXXL}` : ''}`],
        [`${props.attributes.marginXXLT !== undefined ? `mt-xxl-${props.attributes.marginXXLT}` : ''}`],
        [`${props.attributes.marginXXLB !== undefined ? `mb-xxl-${props.attributes.marginXXLB}` : ''}`],
        [`${props.attributes.marginXXLL !== undefined ? `ms-xxl-${props.attributes.marginXXLL}` : ''}`],
        [`${props.attributes.marginXXLR !== undefined ? `me-xxl-${props.attributes.marginXXLR}` : ''}`],
        [`${props.attributes.marginXXLX !== undefined ? `mx-xxl-${props.attributes.marginXXLX}` : ''}`],
        [`${props.attributes.marginXXLY !== undefined ? `my-xxl-${props.attributes.marginXXLY}` : ''}`],

       ]
    )

}

export default sharedPaddingClassnames;