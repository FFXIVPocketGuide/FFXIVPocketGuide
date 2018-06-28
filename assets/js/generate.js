
// Taxonomies

var roles = [
    "Everyone",
    "Tank",
    "Healer",
    "Melee DPS",
    "Ranged DPS"
];

var tags = [
    "Active Time Maneuver",
    "AoE - Cone",
    "AoE - Circular",
    "AoE - Puddle",
    "AoE - Donut",
    "AoE - Column",
    "AoE - Area",
    "AoE - Point Blank",
    "Marker (Orange)",
    "Marker (Green)",
    "Marker (Blue)",
    "Marker (Red)",
    "Marker (Purple)",
    "Marker (Icon)",
    "Raid Wide Damage",
    "Proximity",
    "AoE - Cross",
    "AoE - Figure 8",
    "Knockback",
    "Cleave",
    "Buff",
    "Debuff",
    "Line of Sight",
    "Tankbuster",
    "Stack",
    "Spread",
    "Tether",
    "Stun",
    "Gaze",
    "Mechanic",
    "Animation",
    "Spawn",
    "Ultimate"
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


        // Focus The Closest Input
        if ($clone.find("input[type='text']").length) {
            $clone.find("input[type='text']").first().focus();
            // console.log($clone.find("input[type='text']").first());
            return false;
        }
        else if ($clone.find("textarea").length) {
            $clone.find("textarea").first().focus();
            // console.log($clone.find("textarea").first());
            return false;
        }
        else if ($clone.find("button:not(.repeater__delete-button)").length) {
            $clone.find("button:not(.repeater__delete-button)").first().focus();
            // console.log($clone.find("button:not(.repeater__delete-button)").first());
            return false;
        }

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

        // Focus The Closest Input
        if ($clone.find("input[type='text']").length) {
            $clone.find("input[type='text']").first().focus();
            // console.log($clone.find("input[type='text']").first());
            return false;
        }
        else if ($clone.find("textarea").length) {
            $clone.find("textarea").first().focus();
            // console.log($clone.find("textarea").first());
            return false;
        }
        else if ($clone.find("button:not(.repeater__delete-button)").length) {
            $clone.find("button:not(.repeater__delete-button)").first().focus();
            // console.log($clone.find("button:not(.repeater__delete-button)").first());
            return false;
        }

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

        // Focus The Closest Input
        if ($clone.find("input[type='text']").length) {
            $clone.find("input[type='text']").first().focus();
            // console.log($clone.find("input[type='text']").first());
            return false;
        }
        else if ($clone.find("textarea").length) {
            $clone.find("textarea").first().focus();
            // console.log($clone.find("textarea").first());
            return false;
        }
        else if ($clone.find("button:not(.repeater__delete-button)").length) {
            $clone.find("button:not(.repeater__delete-button)").first().focus();
            // console.log($clone.find("button:not(.repeater__delete-button)").first());
            return false;
        }

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

        // Focus The Closest Input
        if ($clone.find("input[type='text']").length) {
            $clone.find("input[type='text']").first().focus();
            // console.log($clone.find("input[type='text']").first());
            return false;
        }
        else if ($clone.find("textarea").length) {
            $clone.find("textarea").first().focus();
            // console.log($clone.find("textarea").first());
            return false;
        }
        else if ($clone.find("button:not(.repeater__delete-button)").length) {
            $clone.find("button:not(.repeater__delete-button)").first().focus();
            // console.log($clone.find("button:not(.repeater__delete-button)").first());
            return false;
        }

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

        // Focus The Closest Input
        if ($clone.find("input[type='text']").length) {
            $clone.find("input[type='text']").first().focus();
            // console.log($clone.find("input[type='text']").first());
            return false;
        }
        else if ($clone.find("textarea").length) {
            $clone.find("textarea").first().focus();
            // console.log($clone.find("textarea").first());
            return false;
        }
        else if ($clone.find("button:not(.repeater__delete-button)").length) {
            $clone.find("button:not(.repeater__delete-button)").first().focus();
            // console.log($clone.find("button:not(.repeater__delete-button)").first());
            return false;
        }

    }

// JSON Generation
function generate(button) {

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
    // var metaDescription = encodeURIComponent(metaDescriptionString);
    var metaDescription = metaDescriptionString;

    // Instance Type (Necessary for Images)
    var metaInstanceType = $(".guide-value__instance-type").val().toLowerCase();

    // Images
    var metaImageArray = [];

        // Large Image
        var metaLargeImageValue = $(".guide-value__image--large").val();
        metaLargeImage = "/assets/img/" + metaInstanceType + "s" + "/" + metaLargeImageValue;

        // Small Image
        var metaSmallImageValue = $(".guide-value__image--small").val();
        metaSmallImage = "/assets/img/" + metaInstanceType + "s" + "/small/" + metaSmallImageValue;

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
    // var metaMTQ = encodeURIComponent(metaMTQString);
    var metaMTQ = metaMTQString

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

            // if (stepValue < 10) {
            //     var stepTitle = "0" + stepValue;
            // }
            // else {
            //     var stepTitle = stepValue;
            // }

            var stepTitle = stepValue;

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

    // Bosses ==================================================================

    var bossValue = 0;

    var bossArray = [];

    $(".boss:not(.repeater__template)").each(function(e) {

        bossValue = bossValue + 1;

        if ($(".boss:not(.repeater__template)").length > 1) {
            var bossTitle = $(this).find(".guide-value__boss-name").val();
            if (bossValue < 10) {
                var bossID = "boss" + "0" + bossValue;
            }
            else {
                var bossID = "boss" + bossValue;
            }
        }
        else {
            var bossTitle = $(this).find(".guide-value__boss-name").val();
        }

        // Boss Phases

        var phaseValue = 0;

        var phaseArray = [];

        var sequenceArray = [];

        var attacksArray = [];

        $(this).find(".boss__phase:not(.repeater__template)").each(function(e) {

            phaseValue = phaseValue + 1;

            // if (phaseValue < 10) {
            //     phaseID = "0" + phaseValue;
            // }
            // else {
            //     phaseID = phaseValue;
            // }

            phaseID = phaseValue;

            // Attack Script

            var scriptArray = [];

            $(this).find(".boss__phase-script-attack:not(.repeater__template)").each(function(e) {

                var scriptAttackName = $(this).find(".guide-value__boss-phase-script-attack").val();

                if ($(this).find(".guide-value__boss-phase-script-attack-duty-action").is(":checked")) {

                    var scriptObject = {
                        attack: scriptAttackName,
                        dutyActions: true
                    }

                    scriptArray.push(scriptObject);

                }
                else {

                    var scriptObject = {
                        attack: scriptAttackName
                    }

                    scriptArray.push(scriptObject);
                
                }

            });

            // Alerts

            var alertArray = [];

            $(this).find(".boss__phase-alert").each(function(e) {

                var alertCopy = $(this).find("textarea").val();

                var alertObject = {
                    alert: alertCopy
                }

                alertArray.push(alertObject);

            });

            // Phase Mechanics

            var phaseMechanicArray = [];

            $(this).find(".boss__phase-mechanic:not(.repeater__template)").each(function(e) {

                // Mechanic Title

                var phaseMechanicTitle = $(this).find(".guide-value__phase-mechanic-title").val();

                // Mechanic Notes

                var phaseMechanicNoteArray = [];

                $(this).find(".boss__phase-mechanic-note-wrapper:not(.repeater__template)").each(function(e) {

                    var phaseMechanicNoteCopy = $(this).find("textarea").val();

                    var phaseMechanicNoteObject = {
                        note: phaseMechanicNoteCopy
                    }

                    phaseMechanicNoteArray.push(phaseMechanicNoteObject);

                });

                var phaseMechanicObect = {
                    title: phaseMechanicTitle,
                    notes: phaseMechanicNoteArray
                }

                phaseMechanicArray.push(phaseMechanicObect);

            });

            var sequenceObject = {
                phase: phaseID
            }

            if (scriptArray.length != 0) {
                sequenceObject.attacks = scriptArray;
            }

            if (alertArray.length != 0) {
                sequenceObject.alerts = alertArray;
            }

            if (phaseMechanicArray.length != 0) {
                sequenceObject.mechanics = phaseMechanicArray;
            }

            sequenceArray.push(sequenceObject);

            // Attacks

            $(this).find(".boss__attack:not(.repeater__template)").each(function(e) {

                // Title

                var attackTitle = $(this).find(".guide-value__boss-attack-name").val();

                // Phase

                var attackPhaseArray = [];

                var attackPhase = phaseID;

                var attackPhaseObject = {
                    phase: phaseID
                }

                attackPhaseArray.push(attackPhaseObject);

                if ($(this).hasClass("boss__phase-attack--regular")) {

                    // Roles

                    var attackRoleArray = [];

                    $(this).find(".boss-attack__attack-role").each(function(e) {

                        var attackRoleLabel = $(this).attr("data-value");

                        if ($(this).is(":checked")) {

                            var attackRoleObject = {
                                role: attackRoleLabel
                            }

                            attackRoleArray.push(attackRoleObject);

                        }

                    });

                    // Duty Action

                    if ($(this).find(".guide-value__boss-attack-duty-action").val() != "") {
                        
                        var attackDutyActionArray = [];

                        var attackDutyAction = $(this).find(".guide-value__boss-attack-duty-action").val();

                        var attackDutyActionObject = {
                            action: attackDutyAction
                        }

                        attackDutyActionArray.push(attackDutyActionObject);

                    }

                    // Tags

                    var attackTagArray = [];

                    $(this).find(".boss-attacks__attack-tag").each(function(e) {

                        var attackTagLabel = $(this).attr("data-value");

                        if ($(this).is(":checked")) {

                            var attackTagObject = {
                                tag: attackTagLabel
                            }

                            attackTagArray.push(attackTagObject);

                        }

                    });

                    // Notes

                    var attackNoteArray = [];

                    $(this).find(".boss-attack__note-wrapper").find(".repeater__item").each(function(e) {

                        var attackNoteCopy = $(this).find("textarea").val();

                        var attackNoteObject = {
                            note: attackNoteCopy
                        }

                        attackNoteArray.push(attackNoteObject);

                    });

                    // Images

                    var attackImageArray = [];

                    $(this).find(".boss-attack__image-wrapper").find(".repeater__item").each(function(e) {

                        var attackImagePathString = $(this).find(".guide-value__boss-attack-image-path").val();
                        var attackImagePath = "/assets/img/" + metaInstanceType + "/" + attackImagePathString;

                        var attackImageAlt = $(this).find(".guide-value__boss-attack-image-alt").val();

                        var attackImageObject = {
                            url: attackImagePath,
                            alt: attackImageAlt
                        }

                        attackImageArray.push(attackImageObject);

                    });

                    var attackObject = {
                        title: attackTitle,
                        phases: attackPhaseArray,
                        roles: attackRoleArray,
                        dutyActions: attackDutyActionArray,
                        tags: attackTagArray,
                        notes: attackNoteArray
                    }

                    if (attackImageArray.length != 0) {
                        attackObject.images = attackImageArray;
                    }

                    attacksArray.push(attackObject);

                }
                else {

                    // Attack Notes

                    var attackNoteArray = [];

                    $(this).find(".boss-attack__overview-note-wrapper").find(".repeater__item").each(function(e) {

                        var attackNoteCopy = $(this).find("textarea").val();

                        var attackNoteObject = {
                            note: attackNoteCopy
                        }

                        attackNoteArray.push(attackNoteObject);

                    });

                    // Subattacks

                    var subattackArray = [];

                    $(this).find(".boss-attack__subattack.repeater__item").each(function(e) {

                        // Title

                        var subattackTitle = $(this).find(".guide-value__boss-subattack-name").val();

                        // Roles

                        var attackRoleArray = [];

                        $(this).find(".boss-attack__attack-role").each(function(e) {

                            var attackRoleLabel = $(this).attr("data-value");

                            if ($(this).is(":checked")) {

                                var attackRoleObject = {
                                    role: attackRoleLabel
                                }

                                attackRoleArray.push(attackRoleObject);

                            }

                        });

                        // Duty Action

                        if ($(this).find(".guide-value__boss-attack-duty-action").val() != "") {
                            
                            var attackDutyActionArray = [];

                            var attackDutyAction = $(this).find(".guide-value__boss-attack-duty-action").val();

                            var attackDutyActionObject = {
                                action: attackDutyAction
                            }

                            attackDutyActionArray.push(attackDutyActionObject);

                        }

                        // Tags

                        var attackTagArray = [];

                        $(this).find(".boss-attacks__attack-tag").each(function(e) {

                            var attackTagLabel = $(this).attr("data-value");

                            if ($(this).is(":checked")) {

                                var attackTagObject = {
                                    tag: attackTagLabel
                                }

                                attackTagArray.push(attackTagObject);

                            }

                        });

                        // Notes

                        var subattackNoteArray = [];

                        $(this).find(".boss-attack__note-wrapper").find(".repeater__item").each(function(e) {

                            var subattackNoteCopy = $(this).find("textarea").val();

                            var subattackNoteObject = {
                                note: subattackNoteCopy
                            }

                            subattackNoteArray.push(subattackNoteObject);

                        });

                        // Images

                        var attackImageArray = [];

                        $(this).find(".boss-attack__image-wrapper").find(".repeater__item").each(function(e) {

                            var attackImagePathString = $(this).find(".guide-value__boss-attack-image-path").val();
                            var attackImagePath = "/assets/img/" + metaInstanceType + "/" + attackImagePathString;

                            var attackImageAlt = $(this).find(".guide-value__boss-attack-image-alt").val();

                            var attackImageObject = {
                                url: attackImagePath,
                                alt: attackImageAlt
                            }

                            attackImageArray.push(attackImageObject);

                        });

                        var subattackObject = {
                            title: subattackTitle,
                            roles: attackRoleArray,
                            dutyActions: attackDutyActionArray,
                            tags: attackTagArray,
                            notes: subattackNoteArray
                        }

                        if (attackImageArray.length != 0) {
                            subattackObject.images = attackImageArray;
                        }

                        subattackArray.push(subattackObject);

                    });

                    if ($(this).hasClass("boss__phase-attack--combo")) {

                        var comboObject = {
                            title: attackTitle,
                            phases: attackPhaseArray
                        }

                        if (attackNoteArray.length != 0) {
                            comboObject.notes = attackNoteArray;
                        }

                        comboObject.combo = subattackArray;

                        attacksArray.push(comboObject);

                    }
                    else if ($(this).hasClass("boss__phase-attack--variation")) {

                        var variationObject = {
                            title: attackTitle,
                            phases: attackPhaseArray
                        }

                        if (attackNoteArray.length != 0) {
                            variationObject.notes = attackNoteArray;
                        }

                        variationObject.variation = subattackArray;

                        attacksArray.push(variationObject);

                    }

                }

            });

        });

        // Build Boss Object

        if ($(".boss:not(.repeater__template)").length > 1) {

            var bossObject = {
                title: bossTitle,
                id: bossID,
                sequence: sequenceArray,
                attacks: attacksArray
            }

            bossArray.push(bossObject);

        }
        else {

            var bossObject = {
                bossName: bossTitle,
                sequence: sequenceArray,
                attacks: attacksArray
            }

            bossArray.push(bossObject);

        }

    });

    // Build the Guide =========================================================

    var guideObject = {
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

    if ($(".duty-mechanics__mechanic:not(.repeater__template)").length > 0) {
        guideObject.mechanics = dutyMechanicArray;
    }
    else {
        // Do Nothing
    }

    if ($(".boss:not(.repeater__template)").length > 1) {
        guideObject.bosses = bossArray;
    }
    else if ($(".boss:not(.repeater__template)").length == 0) {
        alert("You need at least 1 boss!");
        return false;
    }
    else {
        guideObject.bossName = bossArray[0].bossName;
        guideObject.sequence = bossArray[0].sequence;
        guideObject.attacks = bossArray[0].attacks;
    }

    var guidejson = JSON.stringify(guideObject);

    // console.log(guidejson);

    yamlString = YAML.stringify(guideObject, 10000000, 2);

    var replaced = yamlString.replace(/(\s+\-)\s*\n\s+/g, '$1 ');

    replaced = "---\n" + replaced + "---"

    replaced = replaced + "\n" + guidejson;

    var jsonWrapper = $(".json-wrapper");

    jsonWrapper.html("");

    var codeWrapper = document.createElement("pre");

    jsonWrapper.append(codeWrapper);

    codeWrapper.append(replaced);

}

// Copy Code Handler ===========================================================

function copyYAML(button) {

    var code = $(".json-wrapper").find("pre").text();

    const el = document.createElement('textarea');
    el.value = code;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}
