<?php

/**
 * Plugin Name:       ZenFlow
 * Description:       ZenFlow blocks.
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
define('ZEN_BS_GRID_BLOCKS_PLUGIN_URL', __FILE__);

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
	// register_block_type(__DIR__ . '/build/grid-blocks/section-cover');
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
	wp_enqueue_style('admin-styles-grid-blocks', plugins_url('/assets/css/editor-grid-blocks.css', ZEN_BS_GRID_BLOCKS_PLUGIN_URL));

	//Column offsets are not working
	//https://github.com/twbs/bootstrap/tree/v5.2.3/dist/css
	wp_enqueue_style(
		'admin-styles-bs-grid',
		plugins_url('/assets/css/bootstrap-5-2/bootstrap-grid.css', ZEN_BS_GRID_BLOCKS_PLUGIN_URL)
	);
}
add_action('admin_enqueue_scripts', 'admin_style');


//Add the Main Bootstrap stylsheet for styling elements in the dashboard/Gutenberg
function add__editor_styles()
{
	add_theme_support('editor-styles');
}
add_action('after_setup_theme', 'add__editor_styles');


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
