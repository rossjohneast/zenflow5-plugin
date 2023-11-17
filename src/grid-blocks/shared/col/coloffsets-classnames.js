const sharedColOffsetsClassnames = (props) => {
    return (
       [

        [`${props.attributes.colOffset !== undefined ? `offset-${props.attributes.colOffset}` : ''}`],
        [`${props.attributes.colOffsetSm !== undefined ? `offset-sm-${props.attributes.colOffsetSm}` : ''}`],
        [`${props.attributes.colOffsetMd !== undefined ? `offset-md-${props.attributes.colOffsetMd}` : ''}`],
        [`${props.attributes.colOffsetLg !== undefined ? `offset-lg-${props.attributes.colOffsetLg}` : ''}`],
        [`${props.attributes.colOffsetXl !== undefined ? `offset-xl-${props.attributes.colOffsetXl}` : ''}`],
        [`${props.attributes.colOffsetXxl !== undefined ? `offset-xxl-${props.attributes.colOffsetXxl}` : ''}`]

       ]
    )

}

export default sharedColOffsetsClassnames;