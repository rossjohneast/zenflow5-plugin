const sharedColWidthClassnames = (props) => {
    return (
       [

        // [`${props.attributes.colWidth !== undefined ? `col-${props.attributes.colWidth}` : ''}`],
        // [`${props.attributes.colWidthSm !== undefined ? `col-sm-${props.attributes.colWidthSm}` : ''}`],
        // [`${props.attributes.colWidthMd !== undefined ? `col-md-${props.attributes.colWidthMd}` : ''}`],
        // [`${props.attributes.colWidthLg !== undefined ? `col-lg-${props.attributes.colWidthLg}` : ''}`],
        // [`${props.attributes.colWidthXl !== undefined ? `col-xl-${props.attributes.colWidthXl}` : ''}`],
        // [`${props.attributes.colWidthXxl !== undefined ? `col-xxl-${props.attributes.colWidthXxl}` : ''}`],

        // If no auto or variable width is set, or nor specific smallest width percentage is set, make this CSS class value to col initially
        [props.attributes.colWidth == undefined || props.attributes.colWidth == '' &&
        props.attributes.colWidthFlexible == false && props.attributes.colWidthAuto == false
        ? 'col' : ''],
       
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

        [`${props.attributes.colWidthAuto == true ? `col-auto` : ''}`],
        [`${props.attributes.colWidthSmAuto == true ? `col-sm-auto` : ''}`],
        [`${props.attributes.colWidthMdAuto == true ? `col-md-auto` : ''}`],
        [`${props.attributes.colWidthLgAuto == true ? `col-lg-auto` : ''}`],
        [`${props.attributes.colWidthXlAuto == true ? `col-xl-auto` : ''}`],
        [`${props.attributes.colWidthXxlAuto == true ? `col-xxl-auto` : ''}`],

       ]
    )

}

export default sharedColWidthClassnames;