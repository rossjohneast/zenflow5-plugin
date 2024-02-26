<?php


// This is the secret key for API authentication. You configured it in the settings menu of the license manager plugin.
define('THEMEZEN_SECRET_KEY', '652990066e27e3.43525789'); //Rename this constant name so it is specific to your plugin or theme.

// This is the URL where API query request will be sent to. This should be the URL of the site where you have installed the main license manager plugin. Get this value from the integration help page.
define('THEMEZEN_LICENSE_SERVER_URL', 'https://theme-zen.com'); //Rename this constant name so it is specific to your plugin or theme.

// This is a value that will be recorded in the license manager data so you can identify licenses for this item/product.
define('THEMEZEN_ITEM_REFERENCE', 'ThemeZen themes and plugins'); //Rename this constant name so it is specific to your plugin or theme.

add_action('admin_menu', 'themezen_license_menu');

function themezen_license_menu() {

    // This has been moved to sit underneath the main ZenFlow Settings in the menu
    // add_options_page(
    //     'ThemeZen Licence Activation Menu', 
    //     'ZenFlow Licence', 
    //     'manage_options', 
    //     __FILE__, 
    //     'themezen_license_management_page'
    // );

    
}



function valid_themezen_license_check() {
    // Get the stored license key from the options table
    $validation_check = get_option('themezen_license_key');

    if ($validation_check) {
        // Do things if the license key is found and not empty
        // Replace this comment with your specific actions
        return true; // You can also return true or false depending on the result
    } else {
        // Do things if the license key is not found or empty
        // Replace this comment with your specific actions
        return false; // You can also return true or false depending on the result
    }
}



function live_valid_themezen_license_check() {

    // Check if there's internet connectivity (Also checks the ThemeZen website is able to accessed)
    if (!checkdnsrr('theme-zen.com')) { // Replace 'example.com' with a reliable domain
        return false; // No internet connection or cant access ThemeZen website
    }
    
    if (get_option('themezen_license_key')) {

        // Get the stored license key from the ThemeZen Server
        $license_key =  get_option('themezen_license_key');

        // API query parameters
        $api_params = array(
            'slm_action' => 'slm_check',
            'secret_key' => THEMEZEN_SECRET_KEY,
            'license_key' => $license_key,
            'registered_domain' => $_SERVER['SERVER_NAME'],
            'item_reference' => urlencode(THEMEZEN_ITEM_REFERENCE),
        );

        // Send query to the license manager server
        $query = esc_url_raw(add_query_arg($api_params, THEMEZEN_LICENSE_SERVER_URL));
        $response = wp_remote_get($query, array('timeout' => 20, 'sslverify' => false));

        // Check for error in the response
        if (is_wp_error($response)){
            echo "Unexpected Error! The query returned with an error.";
        }

        //var_dump($response);//uncomment it if you want to look at the full response

        // License data.
        $license_data = json_decode(wp_remote_retrieve_body($response));

        // TODO - Do something with it.
        //var_dump($license_data);//uncomment it to look at the data

        if($license_data->status != 'blocked' && $license_data->status != 'expired' && $license_data->status != 'pending'){//Success was returned for the license activation
            return true;
        }
        else{
            return false;
        }
    }

}



function live_valid_themezen_license_status() {
    if (get_option('themezen_license_key')) {
        // Get the stored license key from the ThemeZen Server
        $license_key = get_option('themezen_license_key');

        // API query parameters
        $api_params = array(
            'slm_action' => 'slm_check',
            'secret_key' => THEMEZEN_SECRET_KEY,
            'license_key' => $license_key,
            'registered_domain' => $_SERVER['SERVER_NAME'],
            'item_reference' => urlencode(THEMEZEN_ITEM_REFERENCE),
        );

        // Send query to the license manager server
        $query = esc_url_raw(add_query_arg($api_params, THEMEZEN_LICENSE_SERVER_URL));
        $response = wp_remote_get($query, array('timeout' => 20, 'sslverify' => false));

        // Check for error in the response
        if (is_wp_error($response)){
            return 'error';
        }

        // License data.
        $license_data = json_decode(wp_remote_retrieve_body($response));

        // Return the license status.
        return $license_data->status;
    }

    return 'no_license';
}



function themezen_license_management_page() {
    echo '<div class="wrap"  style="background:white;padding:3rem;">';
    echo '<h2>Licence Activation</h2>';

    /*** License activate button was clicked ***/
    if (isset($_REQUEST['activate_license'])) {
        $license_key = sanitize_text_field( $_REQUEST['themezen_license_key'] );

        // API query parameters
        $api_params = array(
            'slm_action' => 'slm_activate',
            'secret_key' => THEMEZEN_SECRET_KEY,
            'license_key' => $license_key,
            'registered_domain' => $_SERVER['SERVER_NAME'],
            'item_reference' => urlencode(THEMEZEN_ITEM_REFERENCE),
        );

        // Send query to the license manager server
        $query = esc_url_raw(add_query_arg($api_params, THEMEZEN_LICENSE_SERVER_URL));
        $response = wp_remote_get($query, array('timeout' => 20, 'sslverify' => false));

        // Check for error in the response
        if (is_wp_error($response)){
            echo "Unexpected Error! The query returned with an error.";
        }

        //var_dump($response);//uncomment it if you want to look at the full response

        // License data.
        $license_data = json_decode(wp_remote_retrieve_body($response));

        // TODO - Do something with it.
        //var_dump($license_data);//uncomment it to look at the data

        if($license_data->result == 'success'){//Success was returned for the license activation

            //Uncomment the followng line to see the message that returned from the license server
            echo '<br />The following message was returned from the server: '.$license_data->message;

            //Save the license key in the options table
            update_option('themezen_license_key', $license_key);
        }
        else{
            //Show error to the user. Probably entered incorrect license key.

            //Uncomment the followng line to see the message that returned from the license server
            echo '<br />The following message was returned from the server: '.$license_data->message;
        }

    }
    /*** End of license activation ***/

    /*** License activate button was clicked ***/
    if (isset($_REQUEST['deactivate_license'])) {
        $license_key = sanitize_text_field( $_REQUEST['themezen_license_key'] );

        // API query parameters
        $api_params = array(
            'slm_action' => 'slm_deactivate',
            'secret_key' => THEMEZEN_SECRET_KEY,
            'license_key' => $license_key,
            'registered_domain' => $_SERVER['SERVER_NAME'],
            'item_reference' => urlencode(THEMEZEN_ITEM_REFERENCE),
        );

        // Send query to the license manager server
        $query = esc_url_raw(add_query_arg($api_params, THEMEZEN_LICENSE_SERVER_URL));
        $response = wp_remote_get($query, array('timeout' => 20, 'sslverify' => false));

        // Check for error in the response
        if (is_wp_error($response)){
            echo "Unexpected Error! The query returned with an error.";
        }

        //var_dump($response);//uncomment it if you want to look at the full response

        // License data.
        $license_data = json_decode(wp_remote_retrieve_body($response));

        // TODO - Do something with it.
        //var_dump($license_data);//uncomment it to look at the data

        if($license_data->result == 'success'){//Success was returned for the license activation

            //Uncomment the followng line to see the message that returned from the license server
            echo '<br />The following message was returned from the server: '.$license_data->message;

            //Remove the licensse key from the options table. It will need to be activated again.
            update_option('themezen_license_key', '');
        }
        else{
            //Show error to the user. Probably entered incorrect license key.

            //Uncomment the followng line to see the message that returned from the license server
            echo '<br />The following message was returned from the server: '.$license_data->message;
        }

    }
    /*** End of sample license deactivation ***/

    ?>
    <p>Please enter the licence key for this product to activate it. You were given a licence key when you purchased this item.</p>
    <!-- <p>If you need a new license please contact <a href="mailto:info@theme-zen.com">info@theme-zen.com</a>.</p> -->
    <p>If you are moving to a new domain please de-active your licence on this website first.</p>
    <form action="" method="post">
        <table class="form-table">
            <tr>
                <th style="width:100px;"><label for="themezen_license_key">Licence Key</label></th>
                <td ><input class="regular-text" type="text" id="themezen_license_key" name="themezen_license_key"  value="<?php echo get_option('themezen_license_key'); ?>" ></td>
            </tr>
        </table>
        <p class="submit">
            <input type="submit" name="activate_license" value="Activate" class="button-primary" />
            <input type="submit" name="deactivate_license" value="Deactivate" class="button" />
        </p>
    </form>
    <?php


    // Get the stored license key from the options table
    if (valid_themezen_license_check()) {
       
    $status = live_valid_themezen_license_status();

        switch ($status) {
            case 'blocked':
                echo '<div id="setting-error-settings_updated" class="notice notice-error settings-error is-dismissible"> 
                        <p>
                            <strong>The licence is blocked. You wont be receiving critical updates to your theme &amp; plugins. If you need to renew your licence please contact <a href="mailto:info@theme-zen.com">info@theme-zen.com</a>.</strong>
                        </p>
                        <button type="button" class="notice-dismiss">
                            <span class="screen-reader-text">Dismiss this notice.</span>
                        </button>
                    </div>';
                break;
            case 'active':
                echo '<div id="setting-success-settings_updated" class="notice notice-success settings-success is-dismissible"> 
                        <p>
                            <strong>The licence is active.</strong>
                        </p>
                        <button type="button" class="notice-dismiss">
                            <span class="screen-reader-text">Dismiss this notice.</span>
                        </button>
                    </div>';
                break;
            case 'pending':
                echo '<div id="setting-error-settings_updated" class="notice notice-error settings-error is-dismissible"> 
                        <p>
                            <strong>The licence is pending. You wont be receiving critical updates to your theme &amp; plugins. If you need to renew your licence please contact <a href="mailto:info@theme-zen.com">info@theme-zen.com</a>.</strong>
                        </p>
                        <button type="button" class="notice-dismiss">
                            <span class="screen-reader-text">Dismiss this notice.</span>
                        </button>
                    </div>';
                break;
            case 'expired':
                echo '<div id="setting-error-settings_updated" class="notice notice-error settings-error is-dismissible"> 
                        <p>
                        <strong>The licence has expired. You wont be receiving critical updates to your theme &amp; plugins. If you need to renew your licence please contact <a href="mailto:info@theme-zen.com">info@theme-zen.com</a>.</strong>
                        </p>
                        <button type="button" class="notice-dismiss">
                            <span class="screen-reader-text">Dismiss this notice.</span>
                        </button>
                    </div>';
                break;
        }
    



    }

}

?>