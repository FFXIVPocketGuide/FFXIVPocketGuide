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
            
            if ($(".site-grid__sidebar").hasClass("active")) {
                $("body").css("overflow-y", "visible");
            }
            else {
                $("body").css("overflow-y", "hidden");
            }

            $(this).toggleClass("active");
            $(".site-grid__sidebar-overlay").toggleClass("active");
            $(".site-grid__sidebar").toggleClass("active");

        });

        $(".site-grid__sidebar-overlay").on("click", function(e) {
            if ($(".site-grid__sidebar").hasClass("active")) {
                $(".sidebar__trigger").removeClass("active");
                $(this).removeClass("active");
                $(".site-grid__sidebar").removeClass("active");
                $("body").css("overflow-y", "visible");
            }
        });

        // FFXIV Issue Link ====================================================
        $("#issueSubmissionLink").on("click", function(e) {

            e.preventDefault();

            var dataObject = $('#'+$(this).data('id'));
            var container = $('html,body');
            var offSet = container.scrollTop() + dataObject.offset().top;

            container.animate({
                scrollTop : offSet
            }, 'slow');

        });

        // FFXIV Guide Filters =================================================
        $("#guideFilter").keyup(function(e) {

            var input = this.value.toLowerCase().trim()
            var terms = input.split(" ");

            $(".site-index .index-grid").each(function(e) {

                $(this).find(".index-item").each(function(e) {

                    var headingText  =  $(this).find(".index-item__title").data("terms").toLowerCase();

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

                    var top = $('body').position().top;
                    $('html,body').scrollTop(top);

                    e.preventDefault();

                    document.activeElement.blur();

                    return false;

                }
            });

            e.preventDefault();

        });

        // FFXIV Guide Menu ====================================================
        $('.guide-metadata__menu-link').on("click", function(e) {

            e.preventDefault();

            var dataObject = $('#'+$(this).data('id'));
            var container = $('html,body');

            $("[class*='guide__accordion-trigger']").removeClass("active");
            $("[class*='guide__accordion-content']").removeClass("active");

            $(dataObject).parents("[class*='guide__accordion-content']").prev("[class*='guide__accordion-trigger']").addClass("active");
            $(dataObject).parents("[class*='guide__accordion-content']").addClass("active");
            $(dataObject).addClass("active");
            $(dataObject).next("[class*='guide__accordion-content']").addClass("active");

            var offSet = dataObject.offset().top;

            container.animate({
                scrollTop : offSet
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

    $('#gform').on('submit', function(e) {
        $('#gform').addClass("submitted");
    });

})(jQuery);
