/**
 * My functions:
 * 
 */

;(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        // search toogle class
        jQuery(".load-more").click(function(){
            jQuery(".load-more-items").toggleClass("block");
        });

    });

}(jQuery));

