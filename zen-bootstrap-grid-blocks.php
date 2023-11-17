<?php

/**
 * Plugin Name:       ZenFlow 5
 * Description:       The essential plugin you install for ZenFlow 5. Featuring a collection of premium quality blocks to build a professional website including the powerful Bootstrap 5 grid, buttons, cards, carousels and animations.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
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
		plugins_url('/assets/css/bootstrap-5-2/bootstrap-grid.css', ZENFLOW_PLUGIN_URL)
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
		'render_callback' =>'zbsc_blocks_page_render'
	));
	register_block_type(__DIR__ . '/build/components/button');
	register_block_type(__DIR__ . '/build/components/carousel');
	register_block_type(__DIR__ . '/build/components/carousel-item');
	register_block_type(__DIR__ . '/build/components/card');
	register_block_type(__DIR__ . '/build/components/icon');
	register_block_type(__DIR__ . '/build/components/custom-nav',
		array( 
			'render_callback' =>'zbsc_blocks_custom_nav_content_render'
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
		plugins_url('/assets/css/bootstrap-5-2/components.css', ZENFLOW_PLUGIN_URL)
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


function zbsc_blocks_page_render( $atts, $content ) {

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



function zbsc_blocks_custom_nav_content_render($atts, $content)
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
 * Register Custom Navigation Walker
 */
function register_navwalker(){
	require_once __DIR__ . '/inc/classes/class-wp-bootstrap-navwalker.php';
}
add_action( 'after_setup_theme', 'register_navwalker' );

/**
 * The walker also adds a data attribute for dropdown toggles via the start_el() method. 
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

//END: COMPONENT BLOCKS







// CAUSING AN ERROR??
// use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

// function zenflow5_update_check_with_license() {

// 	// We need to check the plugin is active and that the website has an approved license
// 	if ( is_plugin_active('zen-license-activator/zen-license-activator.php') && live_valid_themezen_license_check() ) { 

// 		//3rd party check for updates
// 		//https://github.com/YahnisElsts/plugin-update-checker
// 		//In order to make a new release update the below .json file on the server
// 		require plugin_dir_path( __FILE__ ).'assets/plugin-update-checker/plugin-update-checker.php';

// 		//The below was causing an error
// 		// $myUpdateCheckerThemeCheck = Puc_v4_Factory::buildUpdateChecker(
// 			$myUpdateCheckerThemeCheck = PucFactory::buildUpdateChecker(
// 			'https://www.geminternet.com/gemrepository-two/plugin-zen-bootstrap-grid-blocks.json',
// 			__FILE__, //Full path to the main plugin file or functions.php.
// 			'zenflow5'
// 		);

// 	}

// }
// add_action( 'admin_init', 'zenflow5_update_check_with_license' );
