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
        if($(".sidebar__form").length) {
            $("#guideFilter").focus();
        }

        // Menu Trigger ========================================================
        $(".sidebar__trigger").on("click", function(e) {
            $(this).toggleClass("active");
            $(".site-grid__sidebar-overlay").toggleClass("active");
            $(".site-grid__sidebar").toggleClass("active");
        });

        $(".site-grid__sidebar-overlay").on("click", function(e) {
            if ($(".site-grid__sidebar").hasClass("active")) {
                $(".sidebar__trigger").removeClass("active");
                $(this).removeClass("active");
                $(".site-grid__sidebar").removeClass("active");
            }
        });

        // FFXIV Guide Filters =================================================
        $("#guideFilter").keyup(function(e) {

            var input = this.value.toLowerCase().trim()
            var terms = input.split(" ");

            $(".site-index .index-grid").each(function(e) {

                $(this).find(".index-item").each(function(e) {

                    var headingText  = $(this).find(".index-item__title").text().toLowerCase();

                    /*
                    This is currently setup for "OR" or "ANY" searching.
                    If any phrase matches the item will be shown. You can switch
                    this to "AND" or "ALL" searching by doing the following:
                    1. change the declaration of show to true by default.
                    2. negate the conditional in the forEach example:
                        if ( !(headingText.indexOf(term.trim()) >= 0) ) {
                    3. change the assignment inside the conditional to false
                    */

                    var show = true;

                    terms.forEach(function(term){
                        if ( !(headingText.indexOf(term.trim()) >= 0) ) {
                            show = false;
                        }
                    });

                    if (show) {
                        $(this).show();
                        $(this).addClass("show");
                    }
                    else {
                        $(this).hide();
                        $(this).removeClass("show");
                    }

                });

                if($(this).find(".index-item.show").length) {
                    var expansion = $(this).attr("data-expansion");
                    $(this).show();
                    $(".index-divider").each(function(e) {
                        if ($(this).attr("data-expansion") == expansion) {
                            $(this).show();
                        }
                    });
                }
                else {
                    var expansion = $(this).attr("data-expansion");
                    $(this).hide();
                    $(".index-divider").each(function(e) {
                        if ($(this).attr("data-expansion") == expansion) {
                            $(this).hide();
                        }
                    });
                }

            });

            if($(".index-item.show").length) {
                $(".index-null-state").hide();
            }
            else {
                $(".index-null-state").show();
            }

            // Prevents the user from submitting the form with the enter key.
            $('.sidebar__form').on('keyup keypress', function(e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13) {
                    if ($(".site-grid__sidebar").hasClass("active")) {
                        $(".sidebar__trigger").removeClass("active");
                        $(".site-grid__sidebar-overlay").removeClass("active");
                        $(".site-grid__sidebar").removeClass("active");
                    }
                    e.preventDefault();
                    return false;
                }
            });

            e.preventDefault();

        });

        // FFXIV Guide Menu ====================================================
        $('.guide-metadata__menu-link').on("click", function(e) {

            e.preventDefault();

            var dataObject = $('#'+$(this).data('id'));

            $("[class*='guide__accordion-trigger']").removeClass("active");
            $("[class*='guide__accordion-content']").removeClass("active");

            $(dataObject).parents("[class*='guide__accordion-content']").prev("[class*='guide__accordion-trigger']").addClass("active");
            $(dataObject).parents("[class*='guide__accordion-content']").addClass("active");
            $(dataObject).addClass("active");
            $(dataObject).next("[class*='guide__accordion-content']").addClass("active");

            $('.site-grid__content-wrapper').animate({
                scrollTop: dataObject.position().top
            }, 'slow');

        });

        // FFXIV Guide Accordions ==============================================
        $("[class*='guide__accordion-trigger']").on("click", function(e) {
            $(this).toggleClass("active");
            $(this).next("[class*='guide__accordion-content']").toggleClass("active");
            e.preventDefault();
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
