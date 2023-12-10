<?php

$zenLandingCtaOne = '
<!-- wp:zenflow5/section {"backgroundColorTheme":"bg-light"} -->
<section class="wp-block-zenflow5-section zenflow5-section section bg-light" style="background-size:cover;background-repeat:no-repeat"><!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer -->

<!-- wp:zenflow5/container -->
<div class="wp-block-zenflow5-container zenflow5-container container"><!-- wp:zenflow5/row {"justifyContent":"center"} -->
<div class="wp-block-zenflow5-row zenflow5-row row justify-content-center"><!-- wp:zenflow5/col {"colWidth":"-12","colWidthMd":"-md-10","colWidthLg":"-lg-8","textAlign":"center"} -->
<div class="wp-block-zenflow5-col zenflow5-col col-12 col-md-10 col-lg-8 text-center"><!-- wp:heading -->
<h2 class="wp-block-heading"><strong><strong>Ready to Elevate Your Experience? </strong></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"is-style-lead"} -->
<p class="is-style-lead"> Contact us now for a free consultation, and let us turn your vision into reality!</p>
<!-- /wp:paragraph -->

<!-- wp:zenflow5/responsive-spacer {"paddingB":4} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-4" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer -->

<!-- wp:zenflow5/button {"btnSize":"btn-lg"} -->
<a class="zenflow5-btn btn btn-primary btn-lg" aria-hidden="true">Get in touch</a>
<!-- /wp:zenflow5/button --></div>
<!-- /wp:zenflow5/col --></div>
<!-- /wp:zenflow5/row --></div>
<!-- /wp:zenflow5/container -->

<!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer --></section>
<!-- /wp:zenflow5/section -->
	';


	register_block_pattern(
		'zen-b-p/zen-landing-cta-one',
		array(
			'title'         => __( 'Call to action', 'zen-b-p' ),
			'description'   => _x( 'Call to action', 'Used as at the bottom of a page', 'zen-b-p' ),
			'content'       => $zenLandingCtaOne,
			'categories'    => array( 'call-to-action' ),
			'keywords'      => array( 'content', 'text', 'cta' ),
			'viewportWidth' => 800,
		)
	);

$zenCtaTwo = '
<!-- wp:zenflow5/section {"backgroundColorTheme":"bg-primary","textColorTheme":"text-light"} -->
<section class="wp-block-zenflow5-section zenflow5-section section text-light bg-primary" style="background-size:cover;background-repeat:no-repeat"><!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer -->

<!-- wp:zenflow5/container -->
<div class="wp-block-zenflow5-container zenflow5-container container"><!-- wp:zenflow5/row {"display":"d-block","justifyContent":"center"} -->
<div class="wp-block-zenflow5-row zenflow5-row row justify-content-center d-block"><!-- wp:zenflow5/col {"colWidth":"-12","colWidthMd":"","colWidthLg":"-lg-7","textAlign":"","paddingLGR":18} -->
<div class="wp-block-zenflow5-col zenflow5-col col-12 col-lg-7 pe-lg-18"><!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","className":"is-style-h1"} -->
<h2 class="wp-block-heading is-style-h1 has-base-color has-text-color has-link-color"><strong><strong>Get in touch for a free consultation</strong></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","className":"is-style-lead"} -->
<p class="is-style-lead has-base-color has-text-color has-link-color">If you are eager to make a positive impact, we are here to collaborate with you. We can explore the possibilities together and work towards fostering your growth and success.</p>
<!-- /wp:paragraph -->

<!-- wp:zenflow5/responsive-spacer {"paddingB":4} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-4" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer -->

<!-- wp:zenflow5/button {"btnStyle":"btn-secondary","btnSize":"btn-lg"} -->
<a class="zenflow5-btn btn btn-secondary btn-lg" aria-hidden="true">Get in touch</a>
<!-- /wp:zenflow5/button --></div>
<!-- /wp:zenflow5/col --></div>
<!-- /wp:zenflow5/row --></div>
<!-- /wp:zenflow5/container -->

<!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer --></section>
<!-- /wp:zenflow5/section -->
	';


	register_block_pattern(
		'zen-b-p/zen-cta-two',
		array(
			'title'         => __( 'Call to action', 'zen-b-p' ),
			'description'   => _x( 'Call to action', 'Used as at the bottom of a page', 'zen-b-p' ),
			'content'       => $zenCtaTwo,
			'categories'    => array( 'call-to-action' ),
			'keywords'      => array( 'content', 'text', 'cta' ),
			'viewportWidth' => 800,
		)
	);

?>