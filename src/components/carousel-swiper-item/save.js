import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

export default function save({ attributes }) {
	
	const blockPropsClass = useBlockProps.save({
		className: `swiper-slide`
	});
	
	return (
		<div {...blockPropsClass} >
			<InnerBlocks.Content />
		</div>
	);

}