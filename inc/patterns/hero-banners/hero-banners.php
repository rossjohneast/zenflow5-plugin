<?php

$zenLandingHeroBannerOne = '
<!-- wp:zenflow5/section -->
<section class="wp-block-zenflow5-section zenflow5-section section" style="background-size:cover;background-repeat:no-repeat"><!-- wp:zenflow5/responsive-spacer {"paddingB":4,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-4 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer -->

<!-- wp:zenflow5/container -->
<div class="wp-block-zenflow5-container zenflow5-container container"><!-- wp:zenflow5/row {"alignItems":"center"} -->
<div class="wp-block-zenflow5-row zenflow5-row row align-items-center"><!-- wp:zenflow5/col {"orderMd":2,"colWidth":"-12","colWidthMd":"-md-5","colWidthLg":"-lg-6","animation":"fade-up","animationDelay":250} -->
<div class="wp-block-zenflow5-col zenflow5-col col-12 col-md-5 col-lg-6 order-md-2" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400" data-aos-delay="250"><!-- wp:image {"id":2599,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="/wp-content/plugins/zenflow5-plugin/assets/img/free-pik/illustration-01.png" alt="" class="wp-image-2599"/></figure>
<!-- /wp:image --></div>
<!-- /wp:zenflow5/col -->

<!-- wp:zenflow5/col {"orderMd":1,"colWidth":"-12","colWidthMd":"-md-7","colWidthLg":"-lg-6","textAlign":"center","textAlignMD":"start","animation":"fade-up"} -->
<div class="wp-block-zenflow5-col zenflow5-col col-12 col-md-7 col-lg-6 text-center text-md-start order-md-1" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400"><!-- wp:zenflow5/div {"textAlign":"","textAlignMD":"","marginB":2,"className":"text- text-md-"} -->
<div class="wp-block-zenflow5-div zenflow5-div mb-2 text- text-md-"><!-- wp:heading {"level":1,"className":"is-style-display-4"} -->
<h1 class="wp-block-heading is-style-display-4"><strong>Welcome to [Company Name] Empowering Your Success</strong></h1>
<!-- /wp:heading --></div>
<!-- /wp:zenflow5/div -->

<!-- wp:zenflow5/div {"marginB":4} -->
<div class="wp-block-zenflow5-div zenflow5-div mb-4"><!-- wp:paragraph -->
<p>Elevate Your Business with Our Expert Services</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/div -->

<!-- wp:zenflow5/div -->
<div class="wp-block-zenflow5-div zenflow5-div"><!-- wp:zenflow5/button {"icon":"arrowRight","btnSize":"btn-lg","marginB":3,"marginR":1,"marginSMB":0} -->
<a class="zenflow5-btn btn btn-primary btn-lg mb-3 me-1 mb-sm-0" aria-hidden="true">Learn more <span class="btn-icon-wrapper ms-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></span></a>
<!-- /wp:zenflow5/button -->

<!-- wp:zenflow5/button {"btnStyle":"btn-outline-secondary","btnSize":"btn-lg","marginB":3,"marginSMB":0} -->
<a class="zenflow5-btn btn btn-outline-secondary btn-lg mb-3 mb-sm-0" aria-hidden="true">Get in touch</a>
<!-- /wp:zenflow5/button --></div>
<!-- /wp:zenflow5/div --></div>
<!-- /wp:zenflow5/col --></div>
<!-- /wp:zenflow5/row --></div>
<!-- /wp:zenflow5/container -->

<!-- wp:zenflow5/responsive-spacer {"paddingB":4,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-4 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer --></section>
<!-- /wp:zenflow5/section -->
	';


	register_block_pattern(
		'zen-b-p/zen-landing-hero-banner-one',
		array(
			'title'         => __( 'Hero banner', 'zen-b-p' ),
			'description'   => _x( 'Hero banner landing', 'Used at the top of a home page', 'zen-b-p' ),
			'content'       => $zenLandingHeroBannerOne,
			'categories'    => array( 'hero-banner' ),
			'keywords'      => array( 'hero', 'banner', 'carousel' ),
			'viewportWidth' => 800,
		)
	);

?>