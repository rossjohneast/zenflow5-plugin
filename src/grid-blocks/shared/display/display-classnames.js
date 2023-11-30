const sharedDisplayClassnames = (props) => {
    return (
       [

        [`${props.attributes.display !== undefined ? `${props.attributes.display}` : "" }`, ],
        [`${props.attributes.displaySm !== undefined ? `${props.attributes.displaySm}` : "" }`, ],
        [`${props.attributes.displayMd !== undefined ? `${props.attributes.displayMd}` : "" }`, ],
        [`${props.attributes.displayLg !== undefined ? `${props.attributes.displayLg}` : "" }`, ],
        [`${props.attributes.displayXl !== undefined ? `${props.attributes.displayXl}` : "" }`, ],
        [`${props.attributes.displayXxl !== undefined ? `${props.attributes.displayXxl}` : "" }`, ],


        [`${props.attributes.alignItems !== undefined && props.attributes.alignItems !== '' ? `align-items-${props.attributes.alignItems}` : ''}`],
        [`${props.attributes.alignItemsSM !== undefined && props.attributes.alignItemsSM !== '' ? `align-items-sm-${props.attributes.alignItemsSM}` : ''}`],
        [`${props.attributes.alignItemsMD !== undefined && props.attributes.alignItemsMD !== '' ? `align-items-md-${props.attributes.alignItemsMD}` : ''}`],
        [`${props.attributes.alignItemsLG !== undefined && props.attributes.alignItemsLG !== '' ? `align-items-lg-${props.attributes.alignItemsLG}` : ''}`],
        [`${props.attributes.alignItemsXL !== undefined && props.attributes.alignItemsXL !== '' ? `align-items-xl-${props.attributes.alignItemsXL}` : ''}`],
        [`${props.attributes.alignItemsXXL !== undefined && props.attributes.alignItemsXXL !== '' ? `align-items-xxl-${props.attributes.alignItemsXXL}` : ''}`],
        [`${props.attributes.justifyContent !== undefined && props.attributes.justifyContent !== '' ? `justify-content-${props.attributes.justifyContent}` : ''}`],
        [`${props.attributes.justifyContentSM !== undefined && props.attributes.justifyContentSM !== '' ? `justify-content-sm-${props.attributes.justifyContentSM}` : ''}`],
        [`${props.attributes.justifyContentMD !== undefined && props.attributes.justifyContentMD !== '' ? `justify-content-md-${props.attributes.justifyContentMD}` : ''}`],
        [`${props.attributes.justifyContentLG !== undefined && props.attributes.justifyContentLG !== '' ? `justify-content-lg-${props.attributes.justifyContentLG}` : ''}`],
        [`${props.attributes.justifyContentXL !== undefined && props.attributes.justifyContentXL !== '' ? `justify-content-xl-${props.attributes.justifyContentXL}` : ''}`],
        [`${props.attributes.justifyContentXXL !== undefined && props.attributes.justifyContentXXL !== '' ? `justify-content-xxl-${props.attributes.justifyContentXXL}` : ''}`],

       ]
    )

}

export default sharedDisplayClassnames;