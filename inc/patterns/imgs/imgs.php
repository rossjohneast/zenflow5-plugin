<?php


	$zenImgOne = '
    <!-- wp:zenflow5/section -->
    <section class="wp-block-zenflow5-section zenflow5-section section" style="background-size:cover;background-repeat:no-repeat"><!-- wp:zenflow5/responsive-spacer {"paddingB":4,"paddingMDB":11} -->
    <div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-4 pb-md-11" aria-hidden="true"></div>
    <!-- /wp:zenflow5/responsive-spacer -->
    
    <!-- wp:zenflow5/container -->
    <div class="wp-block-zenflow5-container zenflow5-container container"><!-- wp:zenflow5/row -->
    <div class="wp-block-zenflow5-row zenflow5-row row"><!-- wp:zenflow5/col -->
    <div class="wp-block-zenflow5-col zenflow5-col col"><!-- wp:image {"align":"center","id":539,"sizeSlug":"large","linkDestination":"none"} -->
    <figure class="wp-block-image aligncenter size-large"><img src="/wp-content/plugins/zenflow5-plugin/assets/img/pexels/pexels-440731.jpg" alt="" class="wp-image-539"/></figure>
    <!-- /wp:image --></div>
    <!-- /wp:zenflow5/col --></div>
    <!-- /wp:zenflow5/row --></div>
    <!-- /wp:zenflow5/container -->
    
    <!-- wp:zenflow5/responsive-spacer {"paddingB":4,"paddingMDB":11} -->
    <div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-4 pb-md-11" aria-hidden="true"></div>
    <!-- /wp:zenflow5/responsive-spacer --></section>
    <!-- /wp:zenflow5/section -->
		';
	
	
		register_block_pattern(
			'zen-b-p/zen-img-one',
			array(
				'title'         => __( 'Image', 'zen-b-p' ),
				'description'   => _x( 'Image', 'Used as page content', 'zen-b-p' ),
				'content'       => $zenImgOne,
				'categories'    => array( 'images' ),
				'keywords'      => array( 'content', 'text', 'image' ),
				'viewportWidth' => 800,
			)
		);

?>