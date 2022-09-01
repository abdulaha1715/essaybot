/**
 * My functions:
 * 
 */

;(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        // toogle class
        jQuery(".load-more").click(function(){
            jQuery(".load-more-items").toggleClass("block");
        });

        jQuery(".forget").click(function(){
            jQuery(".login-form").toggleClass("d-none");
            jQuery(".modal-footer").toggleClass("d-none");
            jQuery(".forget-pass").toggleClass("d-block");
        });

    });

}(jQuery));

