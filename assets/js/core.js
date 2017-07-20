// =============================================================================

    // CORE JS

    // Authored by:
        // - Josh Beveridge

// =============================================================================

    // *** This file is not to be edited on a per project basis. ***

// =============================================================================

(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Smooth Scrolling ====================================================
        $('a[href*="#"]:not([href="#"])').on('click',function() {

            $root.animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500); // change the duration of your animation in ms

            return false;

         });

    });

})(jQuery);
