import {
	InnerBlocks,
	useBlockProps
  } from '@wordpress/block-editor';
  
  export default function save({ attributes }) {
	let bannerClassName = '';
  
	if (attributes.innerBlockCount == 1) {
	  bannerClassName = 'test-class';
	} else {
	  bannerClassName = 'test-class-two';
	}
  
	return (
	  <div {...useBlockProps.save()}>
		<ul className="nav nav-tabs" id="myTab" role="tablist">
		  {attributes.tabLabelsArray.map((label, i) => {
			const tabId = `#${'id-' + label.clientId}`;
			return (
			  <li className={i === 0 ? "nav-item" : "nav-item"} role="presentation" key={label.clientId}>
				<button className={i === 0 ? "nav-link active" : "nav-link"} id={`${label.tabLabel}-tab`} data-bs-toggle="tab" data-bs-target={tabId} type="button" role="tab" aria-controls={label.tabLabel} aria-selected={i === 0 ? "true" : ""}>
				  {label.tabLabel}
				</button>
			  </li>
			);
		  })}
		</ul>
		<div className="tab-content" id="myTabContent">
		  <InnerBlocks.Content />
		</div>
	  </div>
	);
  }
  