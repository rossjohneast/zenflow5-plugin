
import { 
	useBlockProps,
	InnerBlocks 
} from '@wordpress/block-editor';

export default function save({ attributes: { blockId, blockIndex, tabLabel}, isSelected, setAttributes, clientId }) {

	// console.log(blockId); // Log clientId to the console

	const blockProps = useBlockProps.save();

	const blockClientId = blockId;

	/** * Add class to block if img set. * * @link https://stackoverflow.com/a/72408500 */
	const blockPropsClass = useBlockProps.save({
		className: `${blockIndex === 0 ? "tab-pane fade show active" : "tab-pane fade show"}`,
		// id: 'id-' + blockIndex + '-' + tabLabel
		//id: 'id-' + blockIndex
		id: 'id-' + blockClientId
	  });

	return (
		<div {...blockProps} {...blockPropsClass} role='tabpanel' aria-labelledby={`${tabLabel}-tab`}>
			{/* {tabLabel} */}
			{/* {blockIndex} */}

			<InnerBlocks.Content />
		</div>
	);
}
