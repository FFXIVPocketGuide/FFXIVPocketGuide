
// Taxonomies

var roles = [
    "Everyone",
    "Tank",
    "Healer",
    "Melee DPS",
    "Ranged DPS"
];

var tags = [
    "Marker (Orange)",
    "Marker (Green)",
    "Marker (Blue)",
    "Marker (Red)",
    "Marker (Purple)",
    "Marker (Icon)",
    "AoE - Cone",
    "AoE - Circular",
    "AoE - Puddle",
    "AoE - Donut",
    "AoE - Column",
    "AoE - Area",
    "AoE - Point Blank",
    "Raid Wide Damage",
    "Proximity",
    "AoE - Cross",
    "AoE - Figure 8",
    "Knockback",
    "Cleave",
    "Buff",
    "Debuff",
    "Tankbuster",
    "Stack",
    "Spread",
    "Tether",
    "Stun",
    "Gaze",
    "Mechanic",
    "Animation",
    "Spawn",
    "Ultimate",
    "Active Time Maneuver"
];

tags.sort();

// Repeaters

    // Add Repeater Item
    function addRepeaterItem(button) {

        console.log("Click Registered");

        // Check for Guide Groups
        if ($(button).parent().parent().hasClass("guide-group") && $(button).parent().parent().children().length == 1) {

            console.log("This button has a group structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().parent().children(".repeater__wrapper");

            // Create Clone
            var $clone = $(button).parent().parent().parent().children(".repeater__wrapper").children(".repeater__template").clone();

        }
        else {

            console.log("This button has a regular structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().children(".repeater__wrapper");

            // Create Clone
            var $clone = $(button).parent().parent().children(".repeater__wrapper").children(".repeater__template").clone();
        
        }

        // Alter Clone Classes
        $clone.removeClass("repeater__template");
        $clone.addClass("repeater__item");

        // Append Clone to Wrapper
        $clone.appendTo($repeaterWrapper);

    }

    // Delete Repeater Item
    function deleteRepeaterItem(button) {
        
        // Get Repeater Item
        var $repeaterItem = $(button).closest(".repeater__item");

        // Delete Item
        $repeaterItem.remove();

    }

    // Scripts
    function addScriptItem(button) {

        console.log("Script Click Registered");

        // Create Clone
        var $clone = $(".template__script-attack").clone();
        $clone.removeClass("template__script-attack").addClass("boss__phase-script-attack");

        // Check for Guide Groups
        if ($(button).parent().parent().hasClass("guide-group")) {

            console.log("This button has a group structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().parent().children(".boss__phase-script-wrapper");

        }
        else {

            console.log("This button has a regular structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().children(".boss__phase-script-wrapper");
        
        }

        // Alter Clone Classes
        $clone.removeClass("repeater__template");
        $clone.addClass("repeater__item");

        // Append Clone to Wrapper
        $clone.appendTo($repeaterWrapper);

    }

    // Alerts
    function addAlertItem(button) {

        console.log("Alert Click Registered");

        // Create Clone
        var $clone = $(".template__alert").clone();
        $clone.removeClass("template__alert").addClass("boss__phase-alert");

        // Check for Guide Groups
        if ($(button).parent().parent().hasClass("guide-group")) {

            console.log("This button has a group structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().parent().children(".boss__phase-alert-wrapper");

        }
        else {

            console.log("This button has a regular structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().children(".boss__phase-alert-wrapper");
        
        }

        // Alter Clone Classes
        $clone.removeClass("repeater__template");
        $clone.addClass("repeater__item");

        // Append Clone to Wrapper
        $clone.appendTo($repeaterWrapper);

    }

    // Mechanics
    function addMechanicItem(button) {

        console.log("Mechanic Click Registered");

        // Create Clone
        var $clone = $(".template__mechanic").clone();
        $clone.removeClass("template__mechanic").addClass("boss__phase-mechanic");

        // Check for Guide Groups
        if ($(button).parent().parent().hasClass("guide-group")) {

            console.log("This button has a group structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().parent().children(".boss__phase-mechanic-wrapper");

        }
        else {

            console.log("This button has a regular structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().children(".boss__phase-mechanic-wrapper");
        
        }

        // Alter Clone Classes
        $clone.removeClass("repeater__template");
        $clone.addClass("repeater__item");

        // Append Clone to Wrapper
        $clone.appendTo($repeaterWrapper);

    }

    // Regular Attacks
    function addAttackItem(button) {

        if ($(button).attr("data-attack-type") == "regular") {

            console.log("Regular Attack Click Registered");

            // Create Clone
            var $clone = $(".template__regular-attack").clone();
            $clone.removeClass("template__regular-attack").addClass("boss__phase-attack--regular");

        }
        else if ($(button).attr("data-attack-type") == "combo") {

            console.log("Combo Attack Click Registered");

            // Create Clone
            var $clone = $(".template__combo-attack").clone();
            $clone.removeClass("template__combo-attack").addClass("boss__phase-attack--combo");

        }
        else if ($(button).attr("data-attack-type") == "variation") {

            console.log("Attack w/ Variations Click Registered");

            // Create Clone
            var $clone = $(".template__variation-attack").clone();
            $clone.removeClass("template__variation-attack").addClass("boss__phase-attack--variation");

        }

        // Check for Guide Groups
        if ($(button).parent().parent().hasClass("guide-group")) {

            console.log("This button has a group structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().parent().children(".boss__phase-attack-wrapper");

        }
        else {

            console.log("This button has a regular structure.");

            // Get Wrapper Element
            var $repeaterWrapper = $(button).parent().parent().children(".boss__phase-attack-wrapper");
        
        }

        // Alter Clone Classes
        $clone.removeClass("repeater__template");
        $clone.addClass("repeater__item");

        // Roles
        $roleWrapper = $clone.find(".boss-attack__role-wrapper");
        roles.forEach(function(item, index, array) {
            var attackRoleCheckboxLabel = document.createElement("label");
            attackRoleCheckboxLabel.innerHTML = item;
            var attackRoleCheckbox = document.createElement("input");
            attackRoleCheckbox.setAttribute("type", "checkbox");
            attackRoleCheckbox.setAttribute("class", "boss-attack__attack-role");
            attackRoleCheckbox.setAttribute("data-value", item);
            attackRoleCheckboxLabel.appendChild(attackRoleCheckbox);
            $roleWrapper.append(attackRoleCheckboxLabel);
        });

        // Tags
        $tagWrapper = $clone.find(".boss-attack__tag-wrapper");
        tags.forEach(function(item, index, array) {
            var attackTagCheckboxLabel = document.createElement("label");
            attackTagCheckboxLabel.innerHTML = item;
            var attackTagCheckbox = document.createElement("input");
            attackTagCheckbox.setAttribute("type", "checkbox");
            attackTagCheckbox.setAttribute("class", "boss-attacks__attack-tag");
            attackTagCheckbox.setAttribute("data-value", item);
            attackTagCheckboxLabel.appendChild(attackTagCheckbox);
            $tagWrapper.append(attackTagCheckboxLabel);
        });

        // Append Clone to Wrapper
        $clone.appendTo($repeaterWrapper);

    }

// JSON Generation
function generate(button) {

    var jsonWrapper = $(".json-wrapper");
    jsonWrapper.html("");
    var codeWrapper = document.createElement("pre");
    jsonWrapper.append(codeWrapper);

    // Guide Meta ==============================================================

    // Guide Layout
    var metaLayout = "guide_post";

    // Current Date
    var metaDate = new Date();
    var dd = metaDate.getDate();
    var mm = metaDate.getMonth()+1; //January is 0!
    var yyyy = metaDate.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
    var metaDate = yyyy+"-"+mm+"-"+dd;

    // Title
    var metaTitle = $(".guide-value__guide-title").val();

    // Category
    var metaCategory = $(".guide-value__category").val();
    if (metaCategory == "A Realm Reborn") {
        metaCategory = "arr";
    }
    else if (metaCategory == "Heavensward") {
        metaCategory = "hw";
    }
    else if (metaCategory == "Stormblood") {
        metaCategory = "sb";
    }

    // Slug
    var metaSlug = $(".guide-value__page-slug").val();

    // Description
    var metaDescriptionString = $(".guide-value__description").val();
    var metaDescription = encodeURIComponent(metaDescriptionString);

    // Instance Type (Necessary for Images)
    var metaInstanceType = $(".guide-value__instance-type").val().toLowerCase();

    // Images
    var metaImageArray = [];

        // Large Image
        var metaLargeImageValue = $(".guide-value__image--large").val();
        metaLargeImage = "/assets/img/" + metaInstanceType + "/" + metaLargeImageValue;

        // Small Image
        var metaSmallImageValue = $(".guide-value__image--small").val();
        metaSmallImage = "/assets/img/" + metaInstanceType + "/small/" + metaSmallImageValue;

        var metaLargeImageObject = {
            url: metaLargeImage 
        }

        var metaSmallImageObject = {
            urlSmall: metaSmallImage
        }

        metaImageArray.push(metaLargeImageObject);
        metaImageArray.push(metaSmallImageObject);

    // Search Terms
    var metaSearchTermsArray = [];

    $(".guide-meta__search-term:not(.repeater__template)").each(function(e) {

        var searchTermValue = $(this).find("input").val();

        if (searchTermValue != "") {
            
            metaSearchTermObject = {
                term: searchTermValue
            }

            metaSearchTermsArray.push(metaSearchTermObject);

        }

    });

    // Patch Number
    var metaPatchNumber = parseFloat($(".guide-value__patch-number").val());

    // Patch Name
    var metaPatchName = $(".guide-value__patch-name").val();

    // Difficulty
    var metaDifficulty = $(".guide-value__difficulty").val();

    // Player Level
    var metaPlayerLevel = parseInt($(".guide-value__plvl").val());

    // Item Level
    var metaItemLevel = parseInt($(".guide-value__ilvl").val());

    // Order
    var metaOrder = parseInt($(".guide-value__order").val());

    // Orchestrion Roll
    var metaOrchestrion = $(".guide-value__orchestrion").val();

    // MTQ Video
    var metaMTQString = $(".guide-value__video-guide").val();
    var metaMTQ = encodeURIComponent(metaMTQString);

    var metaObject = {
        layout: metaLayout,
        date: metaDate,
        title: metaTitle,
        categories: metaCategory,
        slug: metaSlug,
        description: metaDescription,
        image: metaImageArray,
        terms: metaSearchTermsArray,
        patchNumber: metaPatchNumber,
        patchName: metaPatchName,
        difficulty: metaDifficulty,
        plvl: metaPlayerLevel,
        ilvl: metaItemLevel,
        order: metaOrder,
        orchestrion: metaOrchestrion,
        instanceType: metaInstanceType,
        mtqvid: metaMTQ
    }

    var metaArray = [];
    metaArray.push(metaObject);

    var metajson = JSON.stringify(metaObject);

    console.log(metajson);

    codeWrapper.append(metajson);

    // Duty Mechanics ==========================================================

    var dutyMechanicValue = 0;

    var dutyMechanicArray = [];

    $(".duty-mechanics__mechanic:not(.repeater__template)").each(function(e) {

        dutyMechanicValue = dutyMechanicValue + 1;

        var dutyMechanicTitle = $(this).find(".guide-value__duty-mechanic-title").val();

        var stepValue = 0;

        var stepArray = [];

        $(this).find(".duty-mechanics__mechanic-step-wrapper:not(.repeater__template)").each(function(e){

            stepValue = stepValue + 1;

            if (stepValue < 10) {
                var stepTitle = "0" + stepValue;
            }
            else {
                var stepTitle = stepValue;
            }

            var noteArray = [];

            $(this).find(".duty-mechanics__mechanic-step-note-wrapper:not(.repeater__template)").each(function(e) {

                var noteValue = $(this).find("textarea").val();

                noteObject = {
                    note: noteValue
                }

                noteArray.push(noteObject);

            });

            stepObject = {
                step: stepTitle,
                notes: noteArray
            }

            stepArray.push(stepObject);

        });

        dutyMechanicObject = {
            title: dutyMechanicTitle, 
            steps: stepArray
        }

        dutyMechanicArray.push(dutyMechanicObject);

    });

    dutyMechanicsObject = {
        mechanics: dutyMechanicArray
    }

    var dutyMechanicsArray = [];

    dutyMechanicsArray.push(dutyMechanicsObject);

    var dutyjson = JSON.stringify(dutyMechanicsObject);

    console.log(dutyjson);

    codeWrapper.append(dutyjson);

    // Bosses ==================================================================

    var bossValue = 0;

    var bosses = [];

    $(".boss:not(.repeater__template)").each(function(e) {

        bossValue = bossValue + 1;

        bossName = $(".guide-value__boss-name").val();

        phaseValue = 0;

        var bossPhases = [];

        $(this).find(".boss__phase:not(.repeater__template)").each(function(e) {

            phaseValue = phaseValue + 1;

            if (phaseValue < 10) {
                phaseTitle = "0" + phaseValue;
            }
            else {
                phaseTitle = phaseValue;
            }

            var scriptAttacks = [];

            $(this).find(".boss__phase-script-attack").each

        });

    });

}