const sharedtextAlignClassnames = (props) => {
    return (
       [

        [`${props.attributes.textAlign !== undefined && props.attributes.textAlign !== '' ? `text-${props.attributes.textAlign}` : ''}`],
        [`${props.attributes.textAlignSM !== undefined && props.attributes.textAlignSM !== '' ? `text-sm-${props.attributes.textAlignSM}` : ''}`],
        [`${props.attributes.textAlignMD !== undefined && props.attributes.textAlignMD !== '' ? `text-md-${props.attributes.textAlignMD}` : ''}`],
        [`${props.attributes.textAlignLG !== undefined && props.attributes.textAlignLG !== '' ? `text-lg-${props.attributes.textAlignLG}` : ''}`],
        [`${props.attributes.textAlignXL !== undefined && props.attributes.textAlignXL !== '' ? `text-xl-${props.attributes.textAlignXL}` : ''}`],
        [`${props.attributes.textAlignXXL !== undefined && props.attributes.textAlignXXL !== '' ? `text-xxl-${props.attributes.textAlignXXL}` : ''}`],

       ]
    )

}

export default sharedtextAlignClassnames;