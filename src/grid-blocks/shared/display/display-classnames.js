const sharedDisplayClassnames = (props) => {
    return (
       [

        [`${props.attributes.alignItems !== undefined ? `text-${props.attributes.alignItems}` : ''}`],
        [`${props.attributes.alignItemsSM !== undefined ? `text-sm-${props.attributes.alignItemsSM}` : ''}`],
        [`${props.attributes.alignItemsMD !== undefined ? `text-md-${props.attributes.alignItemsMD}` : ''}`],
        [`${props.attributes.alignItemsLG !== undefined ? `text-lg-${props.attributes.alignItemsLG}` : ''}`],
        [`${props.attributes.alignItemsXL !== undefined ? `text-xl-${props.attributes.alignItemsXL}` : ''}`],
        [`${props.attributes.alignItemsXXL !== undefined ? `text-xxl-${props.attributes.alignItemsXXL}` : ''}`],

       ]
    )

}

export default sharedDisplayClassnames;