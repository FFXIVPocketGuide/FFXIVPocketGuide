// =============================================================================

    // APP JS

    // Authored by:
        // - Josh Beveridge

// =============================================================================

(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

        // Disabled Button Clicks ==============================================
        $('.disabled').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // Input Focus =========================================================
        if($(".guide-index").length) {
            $("#guideFilter").focus();
        }

        // FFXIV Guide Filters =================================================
        $("#guideFilter").keyup(function(e) {

            var input = this.value.toLowerCase()

            $(".guide-index .flex-grid").each(function(e) {

                $(this).find(".guide-index__guide").each(function(e) {

                    var headingText  = $(this).find(".guide-index__guide-title").text().toLowerCase();

                    if (headingText.indexOf(input) >= 0) {
                        $(this).show();
                        $(this).addClass("show");
                    }
                    else {
                        $(this).hide();
                        $(this).removeClass("show");
                    }

                });

                if($(this).find(".guide-index__guide.show").length) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }

            });

            if($(".guide-index__guide.show").length) {
                $(".guide-index__null-state").hide();
            }
            else {
                $(".guide-index__null-state").show();
            }

            // Prevents the user from submitting the form with the enter key.
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
        $(".accordion-trigger").on("click", function(e) {
            $(this).toggleClass("active");
            $(this).next(".accordion-content").toggleClass("active");
        });

        // Guide Image Zoom ====================================================
        $(".guide__attack-image-item").on("click", function(e) {
            if($(this).hasClass("active")) {
                $(this).removeClass("active")
            }
            else {
                $(this).addClass("active")
            }
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
    $(".mtqLinkGuide").on("click", function(e) {

        var clickedLink = $(this);

        event.preventDefault();

        setTimeout(submitClick, 1000);

        function submitClick() {
          var thisLink = clickedLink.attr("href");
          location.href = thisLink;
        }

        ga('send', 'event', 'mtqLinkGuide', 'click', {
          hitCallback: submitClick
        });

    });

    // Google Analytics Conversion Tracker (Twitter) ===========================
    $(".twitterLink").on("click", function(e) {

        var clickedLink = $(this);

        event.preventDefault();

        setTimeout(submitClick, 1000);

        function submitClick() {
          var thisLink = clickedLink.attr("href");
          location.href = thisLink;
        }

        ga('send', 'event', 'twitterLink', 'click', {
          hitCallback: submitClick
        });

    });

    $('#gform').on('submit', function(e) {
        $('#gform').addClass("submitted");
    });

})(jQuery);
