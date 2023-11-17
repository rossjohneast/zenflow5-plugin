const sharedtextAlignClassnames = (props) => {
    return (
       [

        [`${props.attributes.textAlign !== undefined ? `text-${props.attributes.textAlign}` : ''}`],
        [`${props.attributes.textAlignSM !== undefined ? `text-sm-${props.attributes.textAlignSM}` : ''}`],
        [`${props.attributes.textAlignMD !== undefined ? `text-md-${props.attributes.textAlignMD}` : ''}`],
        [`${props.attributes.textAlignLG !== undefined ? `text-lg-${props.attributes.textAlignLG}` : ''}`],
        [`${props.attributes.textAlignXL !== undefined ? `text-xl-${props.attributes.textAlignXL}` : ''}`],
        [`${props.attributes.textAlignXXL !== undefined ? `text-xxl-${props.attributes.textAlignXXL}` : ''}`],

       ]
    )

}

export default sharedtextAlignClassnames;