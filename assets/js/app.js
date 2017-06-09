// =============================================================================

    // APP JS
    // Authored by Josh Beveridge

// =============================================================================

(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Disabled Button Clicks ==============================================
        $('.disabled').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // Smooth Scrolling ====================================================
        $('a[href*="#"]:not([href="#"])').on('click',function() {

            $root.animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500); // change the duration of your animation in ms

            return false;

         });

        // FFXIV Guide Filters =================================================
        $("#guideFilter").keyup(function(e) {

            var input = this.value.toLowerCase()

            $(".guide-index__list .guide-index__list-item").each(function () {

                var headingText  = $(this).find(".guide-index__list-item-title").text().toLowerCase();

                if (headingText.indexOf(input) >= 0) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });

            if($(".guide-index__list-item:visible").length) {
                $(".guide-index__no-result").hide();
            }
            else {
                $(".guide-index__no-result").show();
            }

            $('.guide-index__search-form').on('keyup keypress', function(e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13) {
                    e.preventDefault();
                    return false;
                }
            });

            e.preventDefault();
        });

        // FFXIV Guide Accordions ==============================================
        $(".guide__mechanic-accordion-trigger").on("click", function(e) {
            $(this).siblings(".guide__mechanic-content-wrapper").toggleClass("active");
        });

    });

    // Google Analytics Conversion Tracker (MTQ Conversion Home) ===============

    // Adds a listener for the "submit" event.
    $(".mtqLinkHome").on("click", function(e) {

        var clickedLink = $(this);

        // Prevents the browser from submitting the form
        // and thus unloading the current page.
        event.preventDefault();

        // Creates a timeout to call `submitForm` after one second.
        setTimeout(submitClick, 1000);

        function submitClick() {
          var thisLink = clickedLink.attr("href");
          location.href = thisLink;
        }

        // Sends the event to Google Analytics and
        // resubmits the form once the hit is done.
        ga('send', 'event', 'mtqLinkHome', 'click', {
          hitCallback: submitClick
        });

    });

    // Google Analytics Conversion Tracker (MTQ Conversion Guide) ==============

    // Adds a listener for the "submit" event.
    $(".mtqLinkGuide").on("click", function(e) {

        var clickedLink = $(this);

        // Prevents the browser from submitting the form
        // and thus unloading the current page.
        event.preventDefault();

        // Creates a timeout to call `submitForm` after one second.
        setTimeout(submitClick, 1000);

        function submitClick() {
          var thisLink = clickedLink.attr("href");
          location.href = thisLink;
        }

        // Sends the event to Google Analytics and
        // resubmits the form once the hit is done.
        ga('send', 'event', 'mtqLinkGuide', 'click', {
          hitCallback: submitClick
        });

    });

})(jQuery);
