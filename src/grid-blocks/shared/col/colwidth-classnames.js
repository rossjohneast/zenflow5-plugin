const sharedColWidthClassnames = (props) => {
    return (
       [

        // [`${props.attributes.colWidth !== undefined ? `col-${props.attributes.colWidth}` : ''}`],
        // [`${props.attributes.colWidthSm !== undefined ? `col-sm-${props.attributes.colWidthSm}` : ''}`],
        // [`${props.attributes.colWidthMd !== undefined ? `col-md-${props.attributes.colWidthMd}` : ''}`],
        // [`${props.attributes.colWidthLg !== undefined ? `col-lg-${props.attributes.colWidthLg}` : ''}`],
        // [`${props.attributes.colWidthXl !== undefined ? `col-xl-${props.attributes.colWidthXl}` : ''}`],
        // [`${props.attributes.colWidthXxl !== undefined ? `col-xxl-${props.attributes.colWidthXxl}` : ''}`],

        [props.attributes.colWidth !== undefined && props.attributes.colWidth !== '' ? `col-${props.attributes.colWidth}` : ''],
        [props.attributes.colWidthSm !== undefined && props.attributes.colWidthSm !== '' ? `col-sm-${props.attributes.colWidthSm}` : ''],
        [props.attributes.colWidthMd !== undefined && props.attributes.colWidthMd !== '' ? `col-md-${props.attributes.colWidthMd}` : ''],
        [props.attributes.colWidthLg !== undefined && props.attributes.colWidthLg !== '' ? `col-lg-${props.attributes.colWidthLg}` : ''],
        [props.attributes.colWidthXl !== undefined && props.attributes.colWidthXl !== '' ? `col-xl-${props.attributes.colWidthXl}` : ''],
        [props.attributes.colWidthXxl !== undefined && props.attributes.colWidthXxl !== '' ? `col-xxl-${props.attributes.colWidthXxl}` : ''],

        [`${props.attributes.colWidthFlexible == true ? `col` : ''}`],
        [`${props.attributes.colWidthSmFlexible == true ? `col-sm` : ''}`],
        [`${props.attributes.colWidthMdFlexible == true ? `col-md` : ''}`],
        [`${props.attributes.colWidthLgFlexible == true ? `col-lg` : ''}`],
        [`${props.attributes.colWidthXlFlexible == true ? `col-xl` : ''}`],
        [`${props.attributes.colWidthXxlFlexible == true ? `col-xxl` : ''}`],

       ]
    )

}

export default sharedColWidthClassnames;