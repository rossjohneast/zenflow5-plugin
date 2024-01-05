import { __ } from '@wordpress/i18n';
import { 
	InnerBlocks, 
	useBlockProps
} from '@wordpress/block-editor';
import './editor.scss';
import { useSelect } from '@wordpress/data';
import { useEffect } from 'react';

const MY_TEMPLATE_CELLS = [
	['zenflow5/tabbed-panel-child'],
	['zenflow5/tabbed-panel-child'],
	['zenflow5/tabbed-panel-child']
];

import './editor.scss';

export default function Edit(props) {

	const { setAttributes, clientId } = props;

	const { tabLabelsArray, updateChild } = props.attributes;

	const { innerBlockCount } = useSelect(select => ({
		innerBlockCount: select('core/block-editor').getBlockCount(clientId)
	}))

	// Update the innerBlockCount attribute
	setAttributes({ innerBlockCount });

	//This is a placeholder if we want to add styles in the editor screen
	const blockPropsClass = useBlockProps({
		className: ''
	});

	// Get parent block ID
	const parentBlockID = props.clientId;

	// Create an array of tab labels by accessing the child block’s “tabLabel” attribute.
	const buildTabLabelsArray = (parentBlockID) => {
		
		// Get child block attributes and save as an array to parent attributes
		const blocks = wp.data.select('core/block-editor').getBlocks(parentBlockID);
		return blocks.map((block) => block.attributes.tabLabel);
	
	};
	
	// Get the current and new arrays of tab labels
	const currentLabelsArray = tabLabelsArray || [];
	let newLabelsArray = buildTabLabelsArray(parentBlockID);

	// Check for changes in the child block (both length and content)
	let blocksChanged = newLabelsArray.length !== currentLabelsArray.length ||
	newLabelsArray.some((newBlock, index) => newBlock !== currentLabelsArray[index]);

	// To prevent unnecessary re-renders, you can use the useEffect 
	// The useEffect hook runs only when blocksChanged or updateChild changes. This can help prevent the continuous loop
	useEffect(() => {
		// If there are changes, update the parent block attribute
		if (blocksChanged || updateChild) {
		  setAttributes({
			tabLabelsArray: newLabelsArray,
			updateChild: false,
		  });

		// This was outputting 100's times without useEffect
		// console.log(updateChild);
		}
	  }, [blocksChanged, updateChild]);


	return (
		<div { ...blockPropsClass }>
			{/* {tabLabelsArray} */}
			<InnerBlocks
				allowedBlocks={['zenflow5/tabbed-panel-child']}
				template={ MY_TEMPLATE_CELLS }
			/>
		</div>
	);
}
