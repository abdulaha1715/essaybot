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
            jQuery(".login-login").toggleClass("d-none");
            jQuery(".login-login-mf").toggleClass("d-none");
            jQuery(".login-login-fp").toggleClass("d-block");
        });

        // scroll to top and menu fixed
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if ( scroll >= 95 ) {
                $(".navbar").addClass("fixed");
            } else {
                $(".navbar").removeClass("fixed");
            }
        });

    });

}(jQuery));

