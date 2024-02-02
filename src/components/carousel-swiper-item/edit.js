import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={[
					'zenflow5/section', 
					'zenflow5/container', 
					'zenflow5/row', 
					'zenflow5/col', 
					'zenflow5/card', 
					'core/image',
					'core/cover'
				]}
				template={[
					['core/image']
				]}
			/>
		</div>
	);
}
