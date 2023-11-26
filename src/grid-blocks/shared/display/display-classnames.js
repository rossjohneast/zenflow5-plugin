const sharedDisplayClassnames = (props) => {
    return (
       [

        [`${props.attributes.alignItems !== undefined ? `align-items-${props.attributes.alignItems}` : ''}`],
        [`${props.attributes.alignItemsSM !== undefined ? `align-items-sm-${props.attributes.alignItemsSM}` : ''}`],
        [`${props.attributes.alignItemsMD !== undefined ? `align-items-md-${props.attributes.alignItemsMD}` : ''}`],
        [`${props.attributes.alignItemsLG !== undefined ? `align-items-lg-${props.attributes.alignItemsLG}` : ''}`],
        [`${props.attributes.alignItemsXL !== undefined ? `align-items-xl-${props.attributes.alignItemsXL}` : ''}`],
        [`${props.attributes.alignItemsXXL !== undefined ? `align-items-xxl-${props.attributes.alignItemsXXL}` : ''}`],
        [`${props.attributes.justifyContent !== undefined ? `justify-content-${props.attributes.justifyContent}` : ''}`],
        [`${props.attributes.justifyContentSM !== undefined ? `justify-content-sm-${props.attributes.justifyContentSM}` : ''}`],
        [`${props.attributes.justifyContentMD !== undefined ? `justify-content-md-${props.attributes.justifyContentMD}` : ''}`],
        [`${props.attributes.justifyContentLG !== undefined ? `justify-content-lg-${props.attributes.justifyContentLG}` : ''}`],
        [`${props.attributes.justifyContentXL !== undefined ? `justify-content-xl-${props.attributes.justifyContentXL}` : ''}`],
        [`${props.attributes.justifyContentXXL !== undefined ? `justify-content-xxl-${props.attributes.justifyContentXXL}` : ''}`],

       ]
    )

}

export default sharedDisplayClassnames;