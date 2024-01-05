import { __ } from '@wordpress/i18n';
import {
	TextControl
} from '@wordpress/components';
import { 
	InnerBlocks, 
	useBlockProps 
} 
from '@wordpress/block-editor';
import './editor.scss';

import { subscribe } from '@wordpress/data';

import { useEffect } from '@wordpress/element';

export default function Edit({ attributes: { blockIndex, tabLabel, blockId},  setAttributes, clientId }) {

	// Used to update the blockIndex order value
	//const parentBlockID = wp.data.select( 'core/block-editor' ).getBlockParentsByBlockName(clientId, ["zenflow5/tabbed-panel"]);
	// The getBlockHierarchyRootClientId function is used to find the top-level parent (root) block ID for a given block
	const parentBlockID = wp.data.select('core/block-editor').getBlockHierarchyRootClientId(clientId);

	let	savedBlockIndex = blockIndex;
	const getBlockIndex = wp.data.select( 'core/block-editor' ).getBlockOrder( parentBlockID ).indexOf( clientId );

	// Check for re-ordering of the blocks and update the tab title array value blockIndex
	const unsubscribe = subscribe( () => {
		
		let newBlockIndex = wp.data.select( 'core/block-editor' ).getBlockOrder( parentBlockID ).indexOf( clientId );
		let blockIndexChange = newBlockIndex !== savedBlockIndex;
	
		// Update attributes when blocks move up or down
		if(blockIndexChange){
			unsubscribe()
			setAttributes({ blockIndex: newBlockIndex});
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( parentBlockID, { updateChild: true } );	
		}
		
	} );
	
	// Update label attributes when the tab label is updated
	const onChangeTabLabel = newTabLabel => {
		setAttributes({ tabLabel: newTabLabel});
		setAttributes({ blockIndex: getBlockIndex});
		wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( parentBlockID, { updateChild: true } );
	};



	 // set the blockId attribute to the clientId when the block is updated
	 useEffect(() => {
		setAttributes({ blockId: clientId });
	  }, [clientId]);

	return (
		<div {...useBlockProps()}>
			<TextControl
				className={"tab-label__input"}
				value={tabLabel}
				onChange={onChangeTabLabel}
				placeholder="Optional short navigation title"
				type="text"
			/>

			{/* {tabLabel} */}
			{/* <p>blockIndex: {blockIndex}</p> */}
			{/* <p>blockId: {blockId}</p> */}
			{/* <p>clientId: {clientId}</p> */}
			{/* <p>tabLabel: {tabLabel}</p> */}
			{/* <p>getBlockIndex: {getBlockIndex}</p> */}
	
			<InnerBlocks/>
		</div>
	);
}
