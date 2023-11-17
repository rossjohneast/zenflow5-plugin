<?php

$zenLandingTextCenterOne = '
<!-- wp:zenflow5/section {"backgroundColorTheme":"bg-light"} -->
<section class="wp-block-zenflow5-section zenflow5-section section bg-light" style="background-size:cover;background-repeat:no-repeat"><!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer -->

<!-- wp:zenflow5/container -->
<div class="wp-block-zenflow5-container zenflow5-container container"><!-- wp:zenflow5/row {"justifyContent":"justify-content-center"} -->
<div class="wp-block-zenflow5-row zenflow5-row row justify-content-center"><!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":10,"colWidthLg":7,"textAlign":"center"} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-10 col-lg-7 text-center"><!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Exceptional Service Excellence</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At [Your Company Name], our unwavering commitment is to deliver unparalleled service excellence.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col --></div>
<!-- /wp:zenflow5/row --></div>
<!-- /wp:zenflow5/container -->

<!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer --></section>
<!-- /wp:zenflow5/section -->
	';


	register_block_pattern(
		'zen-b-p/zen-landing-text-center-one',
		array(
			'title'         => __( 'Text section', 'zen-b-p' ),
			'description'   => _x( 'Text section', 'Used as page content', 'zen-b-p' ),
			'content'       => $zenLandingTextCenterOne,
			'categories'    => array( 'text' ),
			'keywords'      => array( 'content', 'text' ),
			'viewportWidth' => 800,
		)
	);

$zenLandingTextColsOne = '
<!-- wp:zenflow5/section -->
<section class="wp-block-zenflow5-section zenflow5-section section" style="background-size:cover;background-repeat:no-repeat"><!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer -->

<!-- wp:zenflow5/container -->
<div class="wp-block-zenflow5-container zenflow5-container container"><!-- wp:zenflow5/row {"marginLGB":5,"justifyContent":"justify-content-center"} -->
<div class="wp-block-zenflow5-row zenflow5-row row mb-lg-5 justify-content-center"><!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":10,"colWidthLg":7,"textAlign":"center"} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-10 col-lg-7 text-center"><!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Exceptional Service Excellence</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At [Your Company Name], our unwavering commitment is to deliver unparalleled service excellence.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col --></div>
<!-- /wp:zenflow5/row -->

<!-- wp:zenflow5/row {"marginLGB":5} -->
<div class="wp-block-zenflow5-row zenflow5-row row mb-lg-5"><!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":4,"textAlign":"center","animation":"fade-up"} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-4 text-center" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400"><!-- wp:heading {"className":"is-style-h3"} -->
<h2 class="wp-block-heading is-style-h3"><strong>Service Excellence</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At [Your Company Name], our unwavering commitment is to deliver unparalleled service excellence. We understand that every customer is unique, and that is why we tailor our services to meet your specific needs. Our dedicated team of professionals is committed to going above and beyond to ensure your satisfaction. Trust us to provide you with quality services that not only meet but exceed your expectations.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col -->

<!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":4,"textAlign":"center","animation":"fade-up","animationDelay":50} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-4 text-center" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400" data-aos-delay="50"><!-- wp:heading {"className":"is-style-h3"} -->
<h2 class="wp-block-heading is-style-h3"><strong>Reliability You Can Count On</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When it comes to quality services, reliability is key. At [Your Company Name], we take pride in our reputation for being a dependable partner for all your needs. Whether it is [mention your services like web design, marketing, consulting], you can rely on us to deliver consistently high-quality results, on time and within budget. Your success is our success, and we are here to provide you with the dependable service you deserve.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col -->

<!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":4,"textAlign":"center","animation":"fade-up","animationDelay":100} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-4 text-center" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400" data-aos-delay="100"><!-- wp:heading {"className":"is-style-h3"} -->
<h2 class="wp-block-heading is-style-h3"><strong>Customer-Centric Approach</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Our approach to quality services is rooted in putting the customer first. We listen to your needs, understand your goals, and work collaboratively to achieve the best outcomes. Your satisfaction is our top priority, and we take great care in ensuring that every interaction with us is a positive one. Experience the difference of a customer-centric service provider with [Your Company Name].</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col --></div>
<!-- /wp:zenflow5/row -->

<!-- wp:zenflow5/row -->
<div class="wp-block-zenflow5-row zenflow5-row row"><!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":4,"textAlign":"center","animation":"fade-up"} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-4 text-center" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400"><!-- wp:heading {"className":"is-style-h3"} -->
<h2 class="wp-block-heading is-style-h3"><strong>Service Excellence</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At [Your Company Name], our unwavering commitment is to deliver unparalleled service excellence. We understand that every customer is unique, and that is why we tailor our services to meet your specific needs. Our dedicated team of professionals is committed to going above and beyond to ensure your satisfaction. Trust us to provide you with quality services that not only meet but exceed your expectations.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col -->

<!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":4,"textAlign":"center","animation":"fade-up","animationDelay":50} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-4 text-center" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400" data-aos-delay="50"><!-- wp:heading {"className":"is-style-h3"} -->
<h2 class="wp-block-heading is-style-h3"><strong>Reliability You Can Count On</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When it comes to quality services, reliability is key. At [Your Company Name], we take pride in our reputation for being a dependable partner for all your needs. Whether it is [mention your services like web design, marketing, consulting], you can rely on us to deliver consistently high-quality results, on time and within budget. Your success is our success, and we are here to provide you with the dependable service you deserve.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col -->

<!-- wp:zenflow5/col {"colWidth":12,"colWidthMd":4,"textAlign":"center","animation":"fade-up","animationDelay":100} -->
<div class="wp-block-zenflow5-col zenflow5-col col col-12 col-md-4 text-center" data-aos="fade-up" data-aos-offset="120" data-aos-duration="400" data-aos-delay="100"><!-- wp:heading {"className":"is-style-h3"} -->
<h2 class="wp-block-heading is-style-h3"><strong>Customer-Centric Approach</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Our approach to quality services is rooted in putting the customer first. We listen to your needs, understand your goals, and work collaboratively to achieve the best outcomes. Your satisfaction is our top priority, and we take great care in ensuring that every interaction with us is a positive one. Experience the difference of a customer-centric service provider with [Your Company Name].</p>
<!-- /wp:paragraph --></div>
<!-- /wp:zenflow5/col --></div>
<!-- /wp:zenflow5/row --></div>
<!-- /wp:zenflow5/container -->

<!-- wp:zenflow5/responsive-spacer {"paddingB":8,"paddingMDB":11} -->
<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>
<!-- /wp:zenflow5/responsive-spacer --></section>
<!-- /wp:zenflow5/section -->
	';


	register_block_pattern(
		'zen-b-p/zen-landing-text-cols-one',
		array(
			'title'         => __( 'Text section', 'zen-b-p' ),
			'description'   => _x( 'Text section', 'Used as page content', 'zen-b-p' ),
			'content'       => $zenLandingTextColsOne,
			'categories'    => array( 'text' ),
			'keywords'      => array( 'content', 'text' ),
			'viewportWidth' => 800,
		)
	);

?>