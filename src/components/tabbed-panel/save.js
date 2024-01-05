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
		<div { ...useBlockProps.save() }>
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				{/* <li className="nav-item" role="presentation">
					<button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
				</li> */}

				{attributes.tabLabelsArray.map((label, i) => {
					// const tabId = `#id-${i}-${label}`;
					const tabId = `#id-${i}`;
					return ( 
						<li className={i == 0 ? "nav-item" : "nav-item"} role="presentation">
							<button className={i == 0 ? "nav-link active" : "nav-link"} id={`${label}-tab`} data-bs-toggle="tab" data-bs-target={tabId} type="button" role="tab" aria-controls={label} aria-selected={i == 0 ? "true" : ""}>{label}</button>
						</li>
					);   
				})}

			</ul>
			<div className="tab-content" id="myTabContent">
				{/* <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">1</div>
				<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">2</div>
				<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">3</div> */}
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
