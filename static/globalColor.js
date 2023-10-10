document.addEventListener('DOMContentLoaded', addClassToHeadings);
    
function addClassToHeadings() {
    var contentArea = document.getElementById('main'); // Das Element mit der ID "content-area"
    var headings = contentArea.querySelectorAll('h2'); // Alle h2-Überschriften innerhalb von "content-area"

    // Hier wird ein Mapping von Seiten-URLs zu CSS-Klassen erstellt
    var idClassMap = {
        'container-attributions': 'gc-attributions',         
        'container-contribution': 'gc-contribution',         
        'container-description': 'gc-description',           
        'container-education': 'gc-education',               
        'container-engineering': 'gc-engineering',           
        'container-entrepreneurship': 'gc-entrepreneurship', 
        'container-experiments': 'gc-experiments',           
        'container-hardware': 'gc-hardwareid',                 
        'container-home': 'gc-home',                             
        'container-human-practices': 'gc-human-practices',   
        'container-inclusivity': 'gc-inclusivity',           
        'container-measurement': 'gc-measurement',           
        'container-model': 'gc-model',                       
        'container-notebook': 'gc-notebook',                 
        'container-plant': 'gc-plant',                       
        'container-results': 'gc-results',                   
        'container-safety': 'gc-safety',                     
        'container-software': 'gc-software',                 
        'container-sponsors': 'gc-sponsors',                 
        'container-sustainable': 'gc-sustainable',           
        'container-team': 'gc-team',                         
        // Füge hier weitere Seiten-URLs und ihre entsprechenden CSS-Klassen hinzu
    };
    Object.keys(idClassMap).forEach(function(id) {
        var element = document.getElementById(id);
        // Überprüfen Sie, ob das Element mit der aktuellen ID existiert
        if (element) {
            // Fügen Sie der aktuellen ID die entsprechende Klasse hinzu
            headings.forEach(function(heading) {
            heading.classList.add('balken'); // Füge der aktuellen Überschrift die Klasse 'zusatzklasse' hinzu
            heading.classList.add('gc'); // Füge der aktuellen Überschrift die Klasse 'zusatzklasse' hinzu
        });
        if (id in idClassMap) {
            // Hier wird das entsprechende CSS-Klassenattribut jedem Element mit der class="gc" hinzugefügt
            headings.forEach(function(element) {
                element.classList.add(idClassMap[id]);
            });
        };
        // Hier wird überprüft, ob die aktuelle Seite in der Mapping-Liste vorhanden ist
        if (id in idClassMap) {
            // Ausschließen von 'gc-home' für background-image-container
            if (id !== 'container-home') {
                document.getElementById('background-image-container').classList.add(idClassMap[id]);
            }
        }        
        if (id in idClassMap) {
            // Hier wird das entsprechende CSS-Klassenattribut jedem Element mit der class="gc" hinzugefügt
            var gcElements = document.querySelectorAll('[class*=" gc "], [class^="gc "], [class$=" gc"]');

            gcElements.forEach(function(element) {
                element.classList.add(idClassMap[id]);
            });
        }
        }
    });
}