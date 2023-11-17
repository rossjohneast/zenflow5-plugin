const sharedAnimationsPropsAtts = (props) => {

    return (

        {...props.attributes.animation && {'data-aos' : props.attributes.animation}}
        {...props.attributes.animationOffset && props.attributes.animation && {'data-aos-offset' : props.attributes.animationOffset}}
        {...props.attributes.animationDuration && props.attributes.animation  && {'data-aos-duration' : props.attributes.animationDuration}}
        {...props.attributes.animationDelay && props.attributes.animation  && {'data-aos-delay' : props.attributes.animationDelay}}
        {...props.attributes.animationEasing && props.attributes.animation  && {'data-aos-easing' : props.attributes.animationEasing}}
        {...props.attributes.animationOnce && props.attributes.animation  && {'data-aos-once' : props.attributes.animationOnce}}
        {...props.attributes.animationMirror && props.attributes.animation  && {'data-aos-mirror' : props.attributes.animationMirror}}
        {...props.attributes.animationPlacement && props.attributes.animation  && {'data-aos-anchor-placement' : props.attributes.animationPlacement}}

    )

}

export sharedAnimationsPropsAtts;