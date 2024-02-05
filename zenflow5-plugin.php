<?php

/**
 * Plugin Name:       ZenFlow 5 Pro
 * Description:       The essential plugin you install for ZenFlow 5. Featuring a collection of premium quality blocks to build a professional website including the powerful Bootstrap 5 grid, buttons, cards, carousels and animations.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.11
 * Author:            ThemeZen
 * Author URI:        https://www.theme-zen.com/
 * Text Domain:       zenflow5
 *
 * @package           create-block
 */

// Exit if accessed directly.
if (!function_exists('add_action')) {
	echo "Plugin disabled, WordPress not loaded.";
	exit;
}

//Create a constant for referencing the plugin when enqueued
define('ZENFLOW_PLUGIN_URL', __FILE__);

// $zenflow5_plugin_version = '1.0.2';

include_once('inc/license-activator/zen-license-activator.php');

//START: GRID BLOCKS
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_zen_bootstrap_grid_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/grid-blocks/col');
	register_block_type(__DIR__ . '/build/grid-blocks/container');
	register_block_type(__DIR__ . '/build/grid-blocks/div');
	register_block_type(__DIR__ . '/build/grid-blocks/row');
	register_block_type(__DIR__ . '/build/grid-blocks/section');
	register_block_type(__DIR__ . '/build/grid-blocks/responsive-spacer');
	register_block_type(__DIR__ . '/build/grid-blocks/header');
}
add_action('init', 'create_block_zen_bootstrap_grid_blocks_block_init');

add_filter('block_categories_all', function ($categories) {
	// Adding a new category.
	$categories[] = array(
		'slug'  => 'zenflow5',
		'title' => 'ZenFlow Blocks'
	);

	return $categories;
});

// Editor styles
function admin_style()
{

	//Custom styles for grid blocks
	wp_enqueue_style('admin-styles-grid-blocks', plugins_url('/assets/css/editor-grid-blocks.css', ZENFLOW_PLUGIN_URL));

	//Column offsets are not working
	//https://github.com/twbs/bootstrap/tree/v5.2.3/dist/css
	wp_enqueue_style(
		'admin-styles-bs-grid',
		plugins_url('/assets/css/bootstrap-5-2/bootstrap-grid.css', ZENFLOW_PLUGIN_URL),
		array(),
		'1.0.2',
		'all'
	);
}
add_action('admin_enqueue_scripts', 'admin_style');


//Add the Main Bootstrap stylsheet for styling elements in the dashboard/Gutenberg
function add__editor_styles()
{
	add_theme_support('editor-styles');
}
add_action('after_setup_theme', 'add__editor_styles');
//END: GRID BLOCKS




//START: COMPONENT BLOCKS


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_zen_bootstrap_components_block_init() {
	register_block_type(__DIR__ . '/build/components/page',
	array( 
		'render_callback' =>'zenflow5_blocks_page_render'
	));
	register_block_type(__DIR__ . '/build/components/button');
	register_block_type(__DIR__ . '/build/components/carousel');
	register_block_type(__DIR__ . '/build/components/carousel-item');
	register_block_type(__DIR__ . '/build/components/carousel-swiper');
	register_block_type(__DIR__ . '/build/components/carousel-swiper-item');
	register_block_type(__DIR__ . '/build/components/card');
	register_block_type(__DIR__ . '/build/components/icon');
	register_block_type(__DIR__ . '/build/components/tabbed-panel');
	register_block_type(__DIR__ . '/build/components/tabbed-panel-child');
	register_block_type(__DIR__ . '/build/components/footer-info',
		array( 
			'render_callback' =>'zenflow5_footer_info_render'
		));
	register_block_type(__DIR__ . '/build/components/custom-nav',
		array( 
			'render_callback' =>'zenflow5_custom_nav_render'
		));
	register_block_type(__DIR__ . '/build/components/breadcrumbs',
		array( 
			'render_callback' =>'zenflow5_breadcrumb_render'
		));
}
add_action( 'init', 'create_block_zen_bootstrap_components_block_init' );


// Editor styles
function admin_style_components()
{

	//Custom styles
	wp_enqueue_style('admin-styles-components', plugins_url('/assets/css/editor-components.css', ZENFLOW_PLUGIN_URL));

	//Bootstrap styles
	//https://github.com/twbs/bootstrap/tree/v5.2.3/dist/css
	wp_enqueue_style(
		'admin-styles-bs-components',
		plugins_url('/assets/css/bootstrap-5-2/components.css', ZENFLOW_PLUGIN_URL),
		array(),
		'1.0.2',
		'all'
	);
}

add_action('admin_enqueue_scripts', 'admin_style_components');

//Loaded in the block currently, view.js
function zenflow5_fe_enqueue_scripts() {
    wp_enqueue_script('zenflow5-front-end-script', plugins_url('assets/js/components.js', __FILE__), array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'zenflow5_fe_enqueue_scripts');



// function zen_components_features() {
// 	add_image_size('pageBanner', 1600); // X pixels wide (and unlimited height)
// 	add_image_size('cardFull', 1120); // X pixels wide (and unlimited height)
// 	add_image_size('cardHalf', 550); // X pixels wide (and unlimited height)
// }

// add_action( 'after_setup_theme', 'zen_components_features' );


function zenflow5_blocks_page_render( $atts, $content ) {

	$post_id = '';
	$single_post_ft_img = '';
	$single_post_title = '';
	$single_post_excerpt = '';
	$single_post_content = '';
	$single_post_cat_list = '';

	$single_post_output = "<main>";

	$single_post_output .= "<h1>Custom page code single page layout</h1>";

	while ( have_posts() ) {
		the_post();
		$post_id = get_the_ID();
		$single_post_ft_img = get_the_post_thumbnail($post_id, 'large', array( 'class' => 'w-100' ));
		$single_post_title = get_the_title();
		$single_post_excerpt = get_the_excerpt();
		$single_post_content = get_the_content();
		$single_post_cat_list = get_the_category_list(', ');
	}

	$single_post_output .= "<div class='col-12'>$single_post_ft_img</h1>";
	
	$single_post_output .= "<h1>$single_post_title</h1>";

	$single_post_output .= "<em>$single_post_excerpt</em>";

	$single_post_output .= "<p>$single_post_content</p>";

	$single_post_output .= "<p>$single_post_cat_list</p>";

	$single_post_output .= "</main>";

	return $single_post_output;

}



function zenflow5_custom_nav_render($atts, $content)
{

	//Theme button
	$nav_output = "<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
		<span class='navbar-toggler-default'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-list' viewBox='0 0 16 16'>
				<path fill-rule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'/>
			</svg>
		</span>
		<span class='navbar-toggler-toggled'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x' viewBox='0 0 16 16'>
				<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
			</svg>
		</span>
	</button>";

	$nav_output .= "<div class='collapse navbar-collapse' id='navbarNavDropdown'>";

	$nav_output .= "<div class='ms-auto'>";

	//https://developer.wordpress.org/reference/functions/wp_nav_menu/
	//Echo return false to return the menu, not echo it
	$nav_output .=	wp_nav_menu(
		array(
			'theme_location'  => 'primary',
			'depth'           => 999, // 1 = no dropdowns, 2 = with dropdowns.
			'container'       => false,
			'menu_id'		  => 'primary-menu',
			'menu_class'      => 'navbar-nav mr-auto',
			'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
			'walker'          => new WP_Bootstrap_Navwalker(),
			'echo'			  => false
		)
	);

	$nav_output .= "</div>";

	$nav_output .= "</div>";

	return $nav_output;
}


register_nav_menus( array(
    'primary' => __( 'Primary Menu', 'zen-bootstrap-components' ),
) );


/**
 * Register Custom Bootstrap Navigation Walker
 */
function register_navwalker(){
	require_once __DIR__ . '/inc/classes/class-wp-bootstrap-navwalker.php';
}
add_action( 'after_setup_theme', 'register_navwalker' );

/**
 * This walker also adds a data attribute for dropdown toggles via the start_el() method. 
 * Make the walker use the infixed data attibute
 */
add_filter( 'nav_menu_link_attributes', 'prefix_bs5_dropdown_data_attribute', 20, 3 );
/**
 * Use namespaced data attribute for Bootstrap's dropdown toggles.
 *
 * @param array    $atts HTML attributes applied to the item's `<a>` element.
 * @param WP_Post  $item The current menu item.
 * @param stdClass $args An object of wp_nav_menu() arguments.
 * @return array
 */
function prefix_bs5_dropdown_data_attribute( $atts, $item, $args ) {
    if ( is_a( $args->walker, 'WP_Bootstrap_Navwalker' ) ) {
        if ( array_key_exists( 'data-toggle', $atts ) ) {
            unset( $atts['data-toggle'] );
            $atts['data-bs-toggle'] = 'dropdown';
        }
    }
    return $atts;
}

/**
 * Render the footer information, such as current year etc
 */
function zenflow5_footer_info_render($atts, $content)
{
    $output = '';

    // Check and include &copy; if showCopyrightSymbol is true
    if (isset($atts['showCopyrightSymbol']) && $atts['showCopyrightSymbol']) {
        $output .= esc_html__('&copy;', 'your-text-domain') . ' ';
    }

    // Include the year if showYear is true
    if (isset($atts['showYearFrom']) && $atts['showYearFrom']) {
        $output .= $atts['yearFrom'] . '-' . date('Y') . ' ';
    }

	// Include the year if showYear is true
    if (isset($atts['showYear']) && $atts['showYear'] ) {
        $output .= date('Y') . ' ';
    }

    // Include the site name if showSiteName is true
    if (isset($atts['showSiteName']) && $atts['showSiteName']) {
        $output .= get_bloginfo('name') . '. ';
    }

    // Include "All rights reserved" if showRightReserved is true
    if (isset($atts['showRightReserved']) && $atts['showRightReserved']) {
        $output .= esc_html__('All rights reserved.', 'your-text-domain');
    }

    // Include custom text if showCustomText is true
    if (isset($atts['showCustomText']) && $atts['showCustomText']) {
        $output .= esc_html($atts['customText']);
    }

	// Access the customText attribute
	$customText = isset($atts['customText']) ? $atts['customText'] : '';

	// Use $customText as needed in your PHP function
	// For example, you might want to decode HTML entities
	// This way we can keep the links etc
	$decodedCustomText = '&nbsp;' . html_entity_decode($customText);

	$output .= $decodedCustomText;

    return $output;
}



function zenflow5_breadcrumb_render($atts, $content)
{

	//Theme button
	$breadc_output = "";

	//	$breadc_on_pages = get_theme_mod( 'breadc_on_pages', '' );
		   
		// Settings
		$separator          = '&nbsp;' . '/' . '&nbsp;';
		$breadcrums_id      = 'breadcrumbs';
		$breadcrums_class   = ' breadcrumb';
		$home_title         = 'Home';
		$blog_page_url		= get_permalink( get_option( 'page_for_posts' ) );
		$blog_page_title	= get_the_title( get_option('page_for_posts', true) );
			  
		// If you have any custom post types with custom taxonomies, put the taxonomy name below (e.g. product_cat)
		$custom_taxonomy    = 'product_cat';
		   
		// Get the query & post information
		global $post,$wp_query;
		 
	//if (! empty($breadc_on_pages) &&  $breadc_on_pages == "1") {
	
		// Do not display on the homepage
		if (!is_front_page()) {
			$breadc_output .= '
				<section class="wp-zenflow-breadcrumbs zenflow-breadcrumb-section">
				<div class="container breadcrumb-container ">
				<div class="row">
				<nav aria-label="breadcrumb" class="breadcrumb-nav col-sm-12"> 
				<ol id="' . $breadcrums_id . '" class="' . $breadcrums_class . '">';
	
			// Home page
			$breadc_output .= '<li class="item-home breadcrumb-item"><a class="bread-link bread-home" href="' . get_home_url() . '" title="' . $home_title . '">' . $home_title . '</a></li>';
			$breadc_output .= '<li class="separator separator-home"> ' . $separator . ' </li>';
	
			// Additional blog page
	
			$posttype = get_post_type($post);
	
			// Home - the blog page
			if (is_home() || $posttype == 'post') {
				$breadc_output .= '<li class="item-home breadcrumb-item"><a class="bread-link bread-home" href="' . $blog_page_url . '" title="' . $blog_page_title . '">' . $blog_page_title . '</a></li>';
				$breadc_output .= '<li class="separator separator-home"> ' . $separator . ' </li>';
			}
		}
	
			if (is_archive() && !is_tax() && !is_category() && !is_tag()) {
				$breadc_output .= '<li class="item-current item-archive breadcrumb-item"><span class="bread-current bread-archive">' . post_type_archive_title($prefix, false) . '</span></li>';
			} elseif (is_archive() && is_tax() && !is_category() && !is_tag()) {
	
				// If post is a custom post type
				$post_type = get_post_type();
	
				// If it is a custom post type display name and link
				if ($post_type != 'post') {
					$post_type_object = get_post_type_object($post_type);
					$post_type_archive = get_post_type_archive_link($post_type);
	
					$breadc_output .= '<li class="item-cat breadcrumb-item item-custom-post-type-' . $post_type . '"><a class="bread-cat bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $post_type_object->labels->name . '">' . $post_type_object->labels->name . '</a></li>';
					$breadc_output .= '<li class="separator"> ' . $separator . ' </li>';
				}
	
				$custom_tax_name = get_queried_object()->name;
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-archive"><span class="bread-current bread-archive">' . $custom_tax_name . '</span></li>';
			} elseif (is_single()) {
	
				// If post is a custom post type
				$post_type = get_post_type();
	
				// If it is a custom post type display name and link
				if ($post_type != 'post') {
					$post_type_object = get_post_type_object($post_type);
					$post_type_archive = get_post_type_archive_link($post_type);
	
					$breadc_output .= '<li class="item-cat breadcrumb-item item-custom-post-type-' . $post_type . '"><a class="bread-cat bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $post_type_object->labels->name . '">' . $post_type_object->labels->name . '</a></li>';
					$breadc_output .= '<li class="separator"> ' . $separator . ' </li>';
				}
	
				// Get post category info
				$category = get_the_category();
	
				if (!empty($category)) {
	
					// Get last category post is in
					$last_category = end(array_values($category));
	
					// Get parent any categories and create array
					$get_cat_parents = rtrim(get_category_parents($last_category->term_id, true, ','), ',');
					$cat_parents = explode(',', $get_cat_parents);
	
					// Loop through parent categories and store in variable $cat_display
					$cat_display = '';
					foreach ($cat_parents as $parents) {
						$cat_display .= '<li class="item-cat breadcrumb-item">'.$parents.'</li>';
						$cat_display .= '<li class="separator"> ' . $separator . ' </li>';
					}
				}
	
				// If it's a custom post type within a custom taxonomy
				$taxonomy_exists = taxonomy_exists($custom_taxonomy);
				if (empty($last_category) && !empty($custom_taxonomy) && $taxonomy_exists) {
					$taxonomy_terms = get_the_terms($post->ID, $custom_taxonomy);
					$cat_id         = $taxonomy_terms[0]->term_id;
					$cat_nicename   = $taxonomy_terms[0]->slug;
					$cat_link       = get_term_link($taxonomy_terms[0]->term_id, $custom_taxonomy);
					$cat_name       = $taxonomy_terms[0]->name;
				}
	
				// Check if the post is in a category
				if (!empty($last_category)) {
					$breadc_output .= $cat_display;
					$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</span></li>';
	
				// Else if post is in a custom taxonomy
				} elseif (!empty($cat_id)) {
					$breadc_output .= '<li class="item-cat breadcrumb-item item-cat-' . $cat_id . ' item-cat-' . $cat_nicename . '"><a class="bread-cat bread-cat-' . $cat_id . ' bread-cat-' . $cat_nicename . '" href="' . $cat_link . '" title="' . $cat_name . '">' . $cat_name . '</a></li>';
					$breadc_output .= '<li class="separator"> ' . $separator . ' </li>';
					$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</span></li>';
				} else {
					$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</span></li>';
				}
			} elseif (is_category()) {
	
				// Category page
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-cat"><span class="bread-current bread-cat">' . single_cat_title('', false) . '</span></li>';
			} elseif (is_page()) {
	
				// Standard page
				if ($post->post_parent) {
	
					// If child page, get parents
					$anc = get_post_ancestors($post->ID);
	
					// Get parents in the right order
					$anc = array_reverse($anc);
	
					// Parent page loop
					if (!isset($parents)) {
						$parents = null;
					}
					foreach ($anc as $ancestor) {
						$parents .= '<li class="item-parent breadcrumb-item item-parent-' . $ancestor . '"><a class="bread-parent bread-parent-' . $ancestor . '" href="' . get_permalink($ancestor) . '" title="' . get_the_title($ancestor) . '">' . get_the_title($ancestor) . '</a></li>';
						$parents .= '<li class="separator separator-' . $ancestor . '"> ' . $separator . ' </li>';
					}
	
					// Display parent pages
					$breadc_output .= $parents;
	
					// Current page
					$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-' . $post->ID . '"><span title="' . get_the_title() . '"> ' . get_the_title() . '</span></li>';
				} else {
	
					// Just display current page if not parents
					$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-' . $post->ID . '"><span class="bread-current bread-' . $post->ID . '"> ' . get_the_title() . '</span></li>';
				}
			} elseif (is_tag()) {
	
				// Tag page
	
				// Get tag information
				$term_id        = get_query_var('tag_id');
				$taxonomy       = 'post_tag';
				$args           = 'include=' . $term_id;
				$terms          = get_terms($taxonomy, $args);
				$get_term_id    = $terms[0]->term_id;
				$get_term_slug  = $terms[0]->slug;
				$get_term_name  = $terms[0]->name;
	
				// Display the tag name
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-tag-' . $get_term_id . ' item-tag-' . $get_term_slug . '"><span class="bread-current bread-tag-' . $get_term_id . ' bread-tag-' . $get_term_slug . '">' . $get_term_name . '</span></li>';
			} elseif (is_day()) {
	
				// Day archive
	
				// Year link
				$breadc_output .= '<li class="item-year breadcrumb-item item-year-' . get_the_time('Y') . '"><a class="bread-year bread-year-' . get_the_time('Y') . '" href="' . get_year_link(get_the_time('Y')) . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' Archives</a></li>';
				$breadc_output .= '<li class="separator separator-' . get_the_time('Y') . '"> ' . $separator . ' </li>';
	
				// Month link
				$breadc_output .= '<li class="item-month breadcrumb-item item-month-' . get_the_time('m') . '"><a class="bread-month bread-month-' . get_the_time('m') . '" href="' . get_month_link(get_the_time('Y'), get_the_time('m')) . '" title="' . get_the_time('M') . '">' . get_the_time('M') . ' Archives</a></li>';
				$breadc_output .= '<li class="separator separator-' . get_the_time('m') . '"> ' . $separator . ' </li>';
	
				// Day display
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-' . get_the_time('j') . '"><span class="bread-current bread-' . get_the_time('j') . '"> ' . get_the_time('jS') . ' ' . get_the_time('M') . ' Archives</span></li>';
			} elseif (is_month()) {
	
				// Month Archive
	
				// Year link
				$breadc_output .= '<li class="item-year breadcrumb-item item-year-' . get_the_time('Y') . '"><a class="bread-year bread-year-' . get_the_time('Y') . '" href="' . get_year_link(get_the_time('Y')) . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' Archives</a></li>';
				$breadc_output .= '<li class="separator separator-' . get_the_time('Y') . '"> ' . $separator . ' </li>';
	
				// Month display
				$breadc_output .= '<li class="item-month breadcrumb-item item-month-' . get_the_time('m') . '"><span class="bread-month bread-month-' . get_the_time('m') . '" title="' . get_the_time('M') . '">' . get_the_time('M') . ' Archives</span></li>';
			} elseif (is_year()) {
	
				// Display year archive
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-current-' . get_the_time('Y') . '"><span class="bread-current bread-current-' . get_the_time('Y') . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' Archives</span></li>';
			} elseif (is_author()) {
	
				// Auhor archive
	
				// Get the author information
				global $author;
				$userdata = get_userdata($author);
	
				// Display author name
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-current-' . $userdata->user_nicename . '"><span class="bread-current bread-current-' . $userdata->user_nicename . '" title="' . $userdata->display_name . '">' . 'Author: ' . $userdata->display_name . '</span></li>';
			} elseif (get_query_var('paged')) {
	
				// Paginated archives
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-current-' . get_query_var('paged') . '"><span class="bread-current bread-current-' . get_query_var('paged') . '" title="Page ' . get_query_var('paged') . '">'.__('Page') . ' ' . get_query_var('paged') . '</span></li>';
			} elseif (is_search()) {
	
				// Search results page
				$breadc_output .= '<li aria-current="page" class="item-current breadcrumb-item active item-current-' . get_search_query() . '"><span class="bread-current bread-current-' . get_search_query() . '" title="Search results for: ' . get_search_query() . '">Search results for: ' . get_search_query() . '</span></li>';
			} elseif (is_404()) {
	
				// 404 page
				$breadc_output .= '<li>' . 'Error 404' . '</li>';
			}
	
			$breadc_output .= '</ul>
				 </nav>
				 </div>
				 </div>
				 </section>';
	//	}

		   



	return $breadc_output;
}


//END: COMPONENT BLOCKS




//START: BLOG BLOCKS
if ( ! class_exists('ZenBootstrapBlog') ) :

	class ZenBootstrapBlog {

		/**
		 * Adds register hooks.
		 */
		public function __construct() {

			// vars
			$this->settings = array(
				'plugin'			=> 'Zen Bootstrap Blog',
				'version'			=> '1.0.2',
				'url'				=> plugin_dir_url( __FILE__ ),
				'path'				=> plugin_dir_path( __FILE__ ),
			);

			// set text domain
			//load_plugin_textdomain( 'zen-bootstrap-blog', false, dirname( plugin_basename(__FILE__) ) . '/languages/' );

			// add_action( 'init', array( $this, 'create_block_zen_bootstrap_blog_block_init'), 20 );

			add_action( 'init', array( $this, 'zenflow5_bootstrap_blog_blocks_init'), 20 );

			add_action( 'wp_enqueue_scripts', array( $this, 'zen_bootstrap_blog_scripts_and_styles'), 20 );

		}


		function zen_bootstrap_blog_scripts_and_styles() {
    
			wp_enqueue_style( 
				'zenflow5-bs-blog-blocks-style', 
				plugins_url('assets/css/bootstrap-blog.css', __FILE__),
				array(),
				$this->settings['version'],
				'all'
			);
				
		}


		/**
		 * Registers the block using the metadata loaded from the `block.json` file.
		 * Behind the scenes, it registers also all assets so they can be enqueued
		 * through the block editor in the corresponding context.
		 *
		 * @see https://developer.wordpress.org/reference/functions/register_block_type/
		 */
		function zenflow5_bootstrap_blog_blocks_init() {
			register_block_type( __DIR__ . '/build/bootstrap-blog/blog-archive',
			array( 
				'render_callback' => array($this, 'zenflow5_bootstrap_news_blog_archive_render')
				)
			);
			register_block_type( __DIR__ . '/build/bootstrap-blog/blog-single-post',
			array( 
				'render_callback' => array($this, 'zenflow5_bootstrap_blog_single_post_render')
				)
			);
		}


		//https://wordpress.stackexchange.com/questions/126080/changing-pagination-list-class
		function custom_pagination() {

			global $wp_query;
			
			if ( $wp_query->max_num_pages <= 1 ) return; 

			$pagination_markup = '';
			$big = 999999999; // need an unlikely integer
			
			$pages = paginate_links( array(
					'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
					'format' => '?paged=%#%',
					'current' => max( 1, get_query_var('paged') ),
					'total' => $wp_query->max_num_pages,
					'type'  => 'array',
					// 'prev_text'	=> __( '<i class="bi-chevron-double-left small"></i>' ),
					// 'next_text'	=> __( '<i class="bi-chevron-double-right small"></i>' ),
					'prev_text'	=> __( '<' ),
					'next_text'	=> __( '>' ),
				) );
				
			if( is_array( $pages ) ) {
				$paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
				$pagination_markup .= '<nav aria-label="Page navigation"><ul class="pagination justify-content-end">';
				foreach ( $pages as $page ) {
					$pagination_markup .= "<li class='page-item'>$page</li>";
				}
				$pagination_markup .= '</ul></nav>';
			}

			return $pagination_markup;
		
		}


		function zenflow5_bootstrap_news_blog_archive_render( $atts, $content ) {

				//Get and display the categories
				$category_single_link = '';
				$all_category_links = '';
				$categories = get_categories();
				
				if( !single_term_title('', false)) {
					$page_title = 'Category: All';
					$category_single_link_all = 'active';
				} 
				else {
					$page_title = single_term_title( 'Category: ', false );
					$category_single_link_all = '';
				}
 
				$category_single_link_all = '<a class="btn btn-sm m-1 ' .  esc_html__( $category_single_link_all, 'zen-bootstrap-blog' )  . '" href="' . get_post_type_archive_link( 'post' ) . '">All</a>';

				//https://stackoverflow.com/questions/39704715/how-to-display-all-categories-in-wordpress
				foreach( $categories as $category ) {
					
					$category_single_link = '<a class="btn btn-sm m-1' . ( is_category( $category->slug ) ? ' active' : '' ) . '" href="' . get_category_link($category->term_id) . '">' . $category->name . '</a>';
					
					$all_category_links .= $category_single_link;

				}

				//Get and display the posts
				$news_single_post = '';
				$news_all_posts = '';

				//Page title
				$news_all_posts .= '<div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div>';
					
					$news_all_posts .= '<div class="container content-space-b-1 content-space-b-md-2">';
							
						$news_all_posts .= '<div class="w-md-75 w-lg-50 text-center mx-md-auto">';
								
							$news_all_posts .= '<h1 class="display-4">' . esc_html__( 'News', 'zen-bootstrap-blog' ) . '</h1>';
							
						$news_all_posts .= '<p class="lead">' . esc_html__( $page_title, 'zen-bootstrap-blog' ) . '</p>';
						
					$news_all_posts .= '</div>';
				
				$news_all_posts .= '</div>';

				//Add the top section here...
				$news_all_posts .= '<div class="wp-block-news-blog container content-space-b-2 content-space-b-lg-3">';

					//Top row
					$news_all_posts .= '<div class="row row-categories-blog justify-content-md-between align-items-md-center mb-7">';

							//Categories
							$news_all_posts .= '<div class="col-12 mb-5 mb-md-0">';

								$news_all_posts .= '<div class="d-md-flex align-items-md-center text-center text-md-start">';

									//$news_all_posts .= '<span class="d-block me-md-3 mb-2 mb-md-1">' . esc_html__('Categories:', 'zen-bootstrap-blog') . '</span>' . $category_single_link_all .$all_category_links;

									$news_all_posts .=  $category_single_link_all .$all_category_links;

								$news_all_posts .= '</div>';

							$news_all_posts .= '</div>';

						//Search form
						//TODO:
						$news_all_posts .=	'<div class="col-md-5 col-lg-4">';
							
							// $news_all_posts .= '<form>';
									
							// 	$news_all_posts .= '<div class="d-none input-group">';
												
							// 		$news_all_posts .= '<input type="text" class="form-control" placeholder="Search articles" aria-label="Search articles">';
												
							// 		$news_all_posts .= '<button type="button" class="btn btn-primary"><i class="bi-search"></i></button>';
										
							// 	$news_all_posts .= '</div>';
								
							// $news_all_posts .= '</form>';
						
						$news_all_posts .=	'</div>';

					//End:Top row
					$news_all_posts .= '</div>';
					
					if ( have_posts() ) {

						//https://stackoverflow.com/questions/18357231/if-first-post-style-differently-wordpress
						$postCount = 0;

						while ( have_posts() ) {
							the_post(); 
							//
							// Post Content here
							//

							$postCount++;

							$post_id = get_the_ID();
							$news_title = get_the_title();
							$news_excerpt = get_the_excerpt();
							$news_img = get_the_post_thumbnail( $post_id, 'large', array('class' => 'card-img') );
							$news_img_card_top = get_the_post_thumbnail( $post_id, 'medium', array('class' => 'card-img-top') );
							$news_link = get_permalink( $post_id );
							$news_date = get_the_date('M j, Y');

							$news_ft_meta_value = get_post_meta( $post_id, 'zen_ft_blog_post' );

							/**
							 * Has the post been checked as featured?
							 * This value is in an array.
							 */
							if ( !isset ( $news_ft_meta_value[0] ) ){
								$news_ft_meta_value[0] = 0;
							}

							//ZenFlow5 Cards
							$post_img = get_post_thumbnail_id( $post_id );
							$post_img_size = 'full';
							$post_img_src = wp_get_attachment_image_src( $post_img, $post_img_size );
							$post_img_srcset = wp_get_attachment_image_srcset( $post_img, $post_img_size );
							$post_img_srcset_sizes = wp_get_attachment_image_sizes( $post_img, $post_img_size );

							//Use focal point meta
							$focal_point = get_post_meta($post_id, 'ftr_img_focal', true);
							$focal_point_x = $focal_point ? $focal_point['x']*100 : '50';
							$focal_point_y = $focal_point ? $focal_point['y']*100 : '50';

							//If we dont have an excerpt use the content
							if ( has_excerpt() ) {
							
								$news_excerpt = get_the_excerpt();
							 
							} else {
								
								$news_excerpt = wp_trim_words( get_the_content(), 14 );
							
							}
							
							//https://wordpress.stackexchange.com/questions/31065/how-to-determine-if-im-on-the-first-page-of-pagination
							// Are we on page one of pagination?
							$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;

							//First page and first post
							if( $postCount == 1 && $paged == 1 ) {
							
								//First card
								$news_single_posts = '<div class="card card-stretched-vertical mb-10">';
									
									$news_single_posts .= '<div class="row gx-0">';

										if ( isset( $post_img_src[0] ) ) {

											$news_single_posts .= '<div class="col-lg-8">';
										
												$news_single_posts .= '<div class="shape-container overflow-hidden">';			
								
													$news_single_posts .= '<div class="zen-post-cards__card__card-img">';
					
														$news_single_posts .= '<div class="wp-block-cover has-custom-content-position is-position-bottom-left">';
															
															$news_single_posts .= '<img loading="lazy" class="wp-block-cover__image-background card-img" alt="" src="' . esc_url( $post_img_src[0] ) . '" style="object-position:' . esc_html( $focal_point_x ) . '% ' . esc_html( $focal_point_y ) . '%" data-object-fit="cover" data-object-position="' . esc_html( $focal_point_x ) . '% ' . esc_html( $focal_point_y ) . '%" srcset="' . esc_attr( $post_img_srcset ) . '" sizes="' . esc_attr( $post_img_srcset_sizes ) . '">';
								
														$news_single_posts .= '</div>';
					
													$news_single_posts .= '</div>';
												
												// <!-- Shape -->
												//$news_single_posts .= '<div class="shape shape-end d-none d-lg-block zi-1"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%"><path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path></svg></div>';
												// <!-- End Shape -->
					
												// <!-- Shape -->
												//$news_single_posts .= '<div class="shape shape-bottom d-lg-none zi-1" style="margin-bottom: -.25rem"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1"><path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path></svg></div>';
												// <!-- End Shape -->
											
												$news_single_posts .= '</div>';
											
											$news_single_posts .= '</div>';

											$news_single_posts .= '<div class="col-lg-4 d-flex flex-wrap">';
												
										} else {

											//No image full width card
											$news_single_posts .= '<div class="col-12">';

										}
												
											// <!-- Card Body -->
											$news_single_posts .= '<div class="card-body">';
											
												$news_single_posts .= '<h3 class="card-title"><a class="text-dark" href="' . esc_html( $news_link ) .'">' . esc_html__( $news_title, 'zen-bootstrap-blog' ) . '</a></h3>';
					
												$news_single_posts .= '<p class="card-text">' . esc_html__( $news_excerpt, 'zen-bootstrap-blog' ) . '</p>';
					
											// <!-- End Card Body -->
											$news_single_posts .= '</div>';

											// <!-- Card Footer -->
											$news_single_posts .= '<div class="card-footer">';

											$news_single_posts .= '<div class="d-flex align-items-center">';
											
												// $news_single_posts .= '<div class="d-none flex-shrink-0 avatar-group avatar-group-xs">';
												
												// 	$news_single_posts .= '<a class="avatar avatar-xs avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Aaron Larsson" data-bs-original-title="Aaron Larsson"><img class="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description"></a><a class="avatar avatar-xs avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="John Onolan" data-bs-original-title="John Onolan"><img class="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description"></a>';
													
												// $news_single_posts .= '</div>';
						
														$news_single_posts .= '<div class="flex-grow-1">';
														
															$news_single_posts .= '<div class="d-flex justify-content-end">';
																
																$news_single_posts .= '<p class="card-text">' . esc_html__( $news_date, 'zen-bootstrap-blog' ) . '</p>';
																
														$news_single_posts .= '</div>';
															
													$news_single_posts .= '</div>';
														
												$news_single_posts .= '</div>';
												
											$news_single_posts .= '</div>';
											// <!-- End Card Footer -->
										
										$news_single_posts .= '</div>';
										
											// <!-- End Col -->
										$news_single_posts .= '</div>';
										
									// <!-- End Row -->
									$news_single_posts .= '</div>';
				
							} 

							//If were on page 1 after the the first post add a row, else page one post one add a row
							if( $postCount == 2  && $paged == 1 || $postCount == 1 && $paged > 1 ) {
								
								$news_all_posts .= '<div class="row mb-7">';
							
							}
							
							//First page and posts after the first
							if( $postCount > 1 || $paged > 1) {
								
								//Normal cards
								$news_single_posts = '<div class="col-sm-6 col-lg-4 mb-4">';
								
								if ($news_ft_meta_value[0] == 1) {

										//Use focal point meta
										$focal_point = get_post_meta($post_id, 'ftr_img_focal', true);
										$focal_point_x = $focal_point ? $focal_point['x']*100 : '50';
										$focal_point_y = $focal_point ? $focal_point['y']*100 : '50';

									//Create markup for ft card
									$news_single_posts .= '<div class="card bg-dark h-100" style="background-image: url(' . get_the_post_thumbnail_url() . ');background-position: ' . esc_html( $focal_point_x ) . '% ' . esc_html( $focal_point_y ) . '% ' . ';background-size: cover;">';

								} else {

									//Create markup for normal card
									$news_single_posts .= '<div class="card h-100">';

									$news_single_posts .= '<div class="shape-container">';
									
										if ( isset( $post_img_src[0] ) ) {
										
											$news_single_posts .= '<div class="zen-post-cards__card__card-img zen-post-cards__card__card-img__top">';

												$news_single_posts .= '<div class="wp-block-cover has-custom-content-position is-position-bottom-left">';
												
													$news_single_posts .= '<img loading="lazy" class="wp-block-cover__image-background card-img-top" alt="" src="' . esc_url( $post_img_src[0] ) . '" style="object-position:' . esc_html( $focal_point_x ) . '% ' . esc_html( $focal_point_y ) . '%" data-object-fit="cover" data-object-position="' . esc_html( $focal_point_x ) . '% ' . esc_html( $focal_point_y ) . '%" srcset="' . esc_attr( $post_img_srcset ) . '" sizes="' . esc_attr( $post_img_srcset_sizes ) . '">';
					
												$news_single_posts .= '</div>';

											$news_single_posts .= '</div>';

										}

										//<!-- Shape -->
										$news_single_posts .= '<div class="shape shape-bottom zi-1" style="margin-bottom: -.25rem"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1"><path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path></svg></div>';
										//<!-- End Shape -->
									
									$news_single_posts .= '</div>';

								}

								// <!-- Card Body -->
								$news_single_posts .= '<div class="card-body">';

								if ($news_ft_meta_value[0] == 1) {

									$news_single_posts .= '<div class="mb-5"><span class="badge bg-primary">Featured</span></div>';

									$news_single_posts .= '<h3 class="card-title"><a class="text-white" href="' . esc_html( $news_link ) . '">' . esc_html__( $news_title, 'zen-bootstrap-blog' ) . '</a></h3>';

									$news_single_posts .= '<p class="text-white-70">' . esc_html__( $news_excerpt ) . '</p>';

								} else {

									$news_single_posts .= '<h3 class="card-title"><a class="text-dark" href="' . esc_html( $news_link ) . '">' . esc_html__( $news_title, 'zen-bootstrap-blog' ) . '</a></h3>';
									
									$news_single_posts .= '<p class="card-text">' . esc_html__( $news_excerpt, 'zen-bootstrap-blog' ) . '</p>';

								}
																																	
								$news_single_posts .= '</div>';
								// <!-- End Card Body -->
					
									// <!-- Card Footer -->
									$news_single_posts .= '<div class="card-footer">';
										
										$news_single_posts .= '<div class="d-flex align-items-center">';
										
											$news_single_posts .= '<div class="d-none flex-shrink-0 avatar-group avatar-group-xs">';
											
												// $news_single_posts .= '<a class="avatar avatar-xs avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Nataly Gaga" data-bs-original-title="Nataly Gaga">';
											
												// 	$news_single_posts .= '<img class="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description">';
												
												// $news_single_posts .= '</a>';
												
												// $news_single_posts .= '<a class="avatar avatar-xs avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Emily Milda" data-bs-original-title="Emily Milda">';
												
												// 	$news_single_posts .= '<img class="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description">';
												
												// $news_single_posts .= '</a>';
											
											$news_single_posts .= '</div>';
								
											$news_single_posts .= '<div class="flex-grow-1">';
												
												$news_single_posts .= '<div class="d-flex justify-content-end">';

													if ($news_ft_meta_value[0] == 1) {

														$news_single_posts .= '<p class="card-text text-white-70">' . esc_html__( $news_date, 'zen-bootstrap-blog' ) . '</p>';
					
													} else {
					
														$news_single_posts .= '<p class="card-text">' . esc_html__( $news_date, 'zen-bootstrap-blog' ) . '</p>';
					
													}
												
												$news_single_posts .= '</div>';
											
											$news_single_posts .= '</div>';
										
										$news_single_posts .= '</div>';
										
									$news_single_posts .= '</div>';
									// <!-- End Card Footer -->
									
									$news_single_posts .= '</div>';
								
								//End col
								$news_single_posts .= '</div>';

							}

							//https://stackoverflow.com/questions/13418644/how-to-echo-contents-of-wordpress-loop-as-one-variable-outside-loop
							$news_all_posts .= $news_single_posts; // Add each post to the variable

						} // end while
					} // end if

					//Add the bottom row here...
					$news_all_posts .= '</div>';

					//	$news_all_posts .= '<nav aria-label="Page navigation">' . paginate_links(  ) .'</nav>';

					// $news_all_posts .= '<nav aria-label="Page navigation">' . paginate_links( array(
					// 	'prev_text'          => __( '<i class="bi-chevron-double-left small"></i>' ),
					// 	'next_text'          => __( '<i class="bi-chevron-double-right small"></i>' ),
					// 	'type' => 'list', //format of the returned value
					// )) .'</nav>';
					
					$news_all_posts .= '<nav aria-label="Page navigation">' . $this->custom_pagination() .'</nav>';

				$news_all_posts .= '</div>';

				return $news_all_posts;

		}


		function zenflow5_bootstrap_blog_single_post_render( $atts, $content ) {

			$single_post_output = "<main><div class='container'><div class='row'>";

				$single_post_output .= "<div class='row'><div class='wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11' aria-hidden='true'></div></div>";

				$single_post_output .= "<div class='col-12 col-lg-8 offset-lg-2'>";
				
					$single_post_output .= '<h1>' . sanitize_text_field( get_the_title() ) . '</h1>';
					
					$single_post_output .= '<div class="d-block small mb-3">' . get_the_date('M j, Y') . '</div>';

					$single_post_output .= '<div class="col-12">' . get_the_post_thumbnail( get_the_ID(), 'large', array('class' => 'w-100 h-auto')) . '</h1>';								
				
					$single_post_output .= '<p>' . get_the_content() . '</p>';
				
					$single_post_output .= '<p>' . get_the_category_list(', ') . '</p>';
		
				$single_post_output .= '</div>';
			
				$single_post_output .= '<div class="row"><div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div></div>';

				$single_post_output .= '<div class="row">';
					
					$single_post_output .= '<div class="col-12 d-flex">';
					
						if ( !empty(get_previous_post_link() ) ) {
							$single_post_output .= '<span class="btn previous-button text-start">' . get_previous_post_link() . '</span>';
						}
						
						if ( !empty(get_next_post_link() ) ) {
							$single_post_output .= '<span class="btn next-button ms-auto text-end">' . get_next_post_link() . '</span>';
						}
					
					$single_post_output .= '</div>';
				
				$single_post_output .= '</div>';

				$single_post_output .= '<div class="row"><div class="wp-block-zenflow5-responsive-spacer zenflow5-responsive-spacer pb-8 pb-md-11" aria-hidden="true"></div></div>';

			$single_post_output .= '</div></div></main>';
		
			return $single_post_output;
		
		}

	}

	// initialize
	$zenBootstrapBlog = new ZenBootstrapBlog;

endif;
//END: BLOG BLOCKS



//START: PATTERNS

function zen_b_p_register_block_patterns() {

	require 'inc/patterns/hero-banners/hero-banners.php';

	require 'inc/patterns/carousels/carousels.php';

	require 'inc/patterns/icon-cols/icon-cols.php';

	require 'inc/patterns/text-and-imgs/text-and-imgs.php';

	require 'inc/patterns/text/text.php';

	require 'inc/patterns/cta/cta.php';

	require 'inc/patterns/imgs/imgs.php';
	
}
add_action( 'init', 'zen_b_p_register_block_patterns' );


/**
 * Registers the pattern category
 */
function custom_register_pattern_category() {
   
	register_block_pattern_category(
        'call-to-action',
        array(
            'label' => __('Call to action', 'zen-b-p'),
        )
    );
   
	register_block_pattern_category(
        'hero-banner',
        array(
            'label' => __('Hero banner', 'zen-b-p'),
        )
    );

	register_block_pattern_category(
        'text-and-icons',
        array(
            'label' => __('Text and icons', 'zen-b-p'),
        )
    );

	register_block_pattern_category(
        'text-and-images',
        array(
            'label' => __('Text and images', 'zen-b-p'),
        )
    );

	register_block_pattern_category(
        'images',
        array(
            'label' => __('Images', 'zen-b-p'),
        )
    );

}
add_action('init', 'custom_register_pattern_category');
//END: PATTERNS



use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

function zenflow5_plugin_update_check_with_license() {

	// We need to check the plugin is active and that the website has an approved license
	if ( live_valid_themezen_license_check() ) { 

		//3rd party check for updates
		//https://github.com/YahnisElsts/plugin-update-checker
		//In order to make a new release update the below .json file on the server
		require plugin_dir_path( __FILE__ ).'assets/plugin-update-checker/plugin-update-checker.php';

		//The below was causing an error
		// $myUpdateCheckerThemeCheck = Puc_v4_Factory::buildUpdateChecker(
			$myUpdateCheckerThemeCheck = PucFactory::buildUpdateChecker(
			'https://theme-zen.com/themezenrepository-three/plugin-zenflow5.json',
			__FILE__, //Full path to the main plugin file or functions.php.
			'zenflow5'
		);

	}

}
add_action( 'admin_init', 'zenflow5_plugin_update_check_with_license' );


/*
 * Blacklist specific Gutenberg blocks
 *
 * @author Misha Rudrastyh
 * @link https://rudrastyh.com/gutenberg/remove-default-blocks.html#blacklist-blocks
 */
add_filter( 'allowed_block_types_all', 'zenflow5_blacklist_blocks' );
 
function zenflow5_blacklist_blocks( $allowed_blocks ) {
	// get all the registered blocks
	$blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

	// then disable some of them
	unset( $blocks[ 'zenflow5/blog-single-post' ] );
	unset( $blocks[ 'zenflow5/blog-archive' ] );
	unset( $blocks[ 'zenflow5/page' ] );
	unset( $blocks[ 'zenflow5/custom-nav' ] );
	unset( $blocks[ 'zenflow5/footer-info' ] );

	// return the new list of allowed blocks
	return array_keys( $blocks );
	
}



// Add lazy loading to all images, this should be toggled under options controls and moved to core theme
// We use mb_convert_encoding() to convert the content to HTML entities, ensuring that the content is properly encoded for parsing.
// We pass additional flags (LIBXML_NOERROR and LIBXML_NOWARNING) to loadHTML() to suppress warnings and errors caused by invalid markup.
// By specifying LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD, we ensure that DOMDocument doesn't add implied html and body tags or a DOCTYPE declaration, which could interfere with the content structure.
function add_lazy_loading_to_images( $content ) {
    // Check if the content contains any <img> tags
    if ( false !== strpos( $content, '<img' ) ) {
        // Create a DOMDocument object to parse the HTML content
        $dom = new DOMDocument();
        // Specify that HTML5 parsing rules should be used
        $dom->loadHTML( mb_convert_encoding( $content, 'HTML-ENTITIES', 'UTF-8' ), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD | LIBXML_NOERROR | LIBXML_NOWARNING );

        // Get all <img> tags
        $images = $dom->getElementsByTagName( 'img' );

        // Loop through each <img> tag and add the loading="lazy" attribute
        foreach ( $images as $image ) {
            $image->setAttribute( 'loading', 'lazy' );
        }

        // Save the modified HTML content
        $content = $dom->saveHTML();
    }

    return $content;
}
add_filter( 'the_content', 'add_lazy_loading_to_images' );


?>