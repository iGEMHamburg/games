$(document).ready(function() {
    // Initialisiere das Navigationsmenü
    $("#navigation-menu").empty();

    var currentH2 = null;

    // Suche nach Überschriften nur innerhalb des Bereichs mit der ID "content-area"
    $("#content-area h2, #content-area h4, #content-area h6").each(function(index, element) {
        // Erstelle ein Navigationspunkt-Element
        var menuItem = $("<li class='navigation-item'></li>").text($(element).text());

        // Bestimme die Ebene der Überschrift
        var level = element.tagName.toLowerCase();
        
        // Füge eine Klasse basierend auf der Ebene hinzu
        if (level === "h2") {
            menuItem.addClass("level-h2");
            currentH2 = menuItem;
            $("#navigation-menu").append(currentH2);
            currentH2.append("<div class='arrow'></div>");
            currentH2.append("<ul class='sub-menu'></ul>");
        } else if (level === "h4") {
            menuItem.addClass("level-h4");
            currentH2.children(".sub-menu").append(menuItem);
            menuItem.append("<div class='arrow'></div>");
            menuItem.append("<ul class='sub-menu'></ul>");
        } else if (level === "h6") {
            menuItem.addClass("level-h6");
            currentH2.find(".level-h4:last .sub-menu").append(menuItem);
        }

        // Füge ein Klick-Event für die Pfeile hinzu
        menuItem.children(".arrow").click(function(event) {
            event.stopPropagation();
            $(this).toggleClass("down");
            // Entferne die "down" Klasse von allen anderen Pfeilen
            $(".level-h4 .arrow").not(this).removeClass("down");
            // Prüfe, ob die Ebene "level-h2" ist
            if ($(this).parent().hasClass("level-h2")) {
                // Entferne die "down" Klasse von allen Pfeilen in h2-Ebenen, außer dem angeklickten Pfeil
                $(".level-h2 .arrow").not(this).removeClass("down");
            }
            // Überprüfe, ob die Unterabschnitte sichtbar sind
            var isSubMenuVisible = $(this).siblings("ul").is(":visible");
            // Schließe alle Unterabschnitte auf der gleichen Ebene
            $(this).closest("ul").find(".sub-menu").slideUp();
            // Wenn die Unterabschnitte nicht sichtbar sind, öffne sie und ändere den Status des Pfeils
            if (!isSubMenuVisible) {
                $(this).siblings("ul").slideDown();
            }
        });

        // Füge einen Klick-Event hinzu, um zur Überschrift zu scrollen
        menuItem.click(function() {
            // Verwende die ID der Zielüberschrift für das Scrollen
            var targetHeadingId = $(element).attr("id");
            var targetHeading = $("#" + targetHeadingId);
            var targetOffset = targetHeading.offset().top - ($(window).height() * 0.2);
            $('html, body').animate({
                scrollTop: targetOffset
            }, 500);
        });

        menuItem.hover(
            function() {
                // Maus ist über dem Element
                $(this).addClass("hovered");
            },
            function() {
                // Maus hat das Element verlassen
                $(this).removeClass("hovered");
            }
        );
    });
});