const sharedOrderClassnames = (props) => {
    return (
                [

                    [`${props.attributes.order !== undefined ? `order-${props.attributes.order}` : ''}`],
                    [`${props.attributes.orderSm !== undefined ? `order-sm-${props.attributes.orderSm}` : ''}`],
                    [`${props.attributes.orderMd !== undefined ? `order-md-${props.attributes.orderMd}` : ''}`],
                    [`${props.attributes.orderLg !== undefined ? `order-lg-${props.attributes.orderLg}` : ''}`],
                    [`${props.attributes.orderXl !== undefined ? `order-xl-${props.attributes.orderXl}` : ''}`],
                    [`${props.attributes.orderXxl !== undefined ? `order-xxl-${props.attributes.orderXxl}` : ''}`],

                ]
            )
}

export default sharedOrderClassnames;