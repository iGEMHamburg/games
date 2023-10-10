document.addEventListener('DOMContentLoaded', function() {
    // Höhe des Header-Bereichs berechnen
    var headerHeight = document.getElementById('background-video-wrapper').offsetHeight;
    
    // Den main-Bereich auswählen und den margin-top-Wert festlegen
    var mainElement = document.getElementById('main');
    mainElement.style.marginTop = headerHeight + 'px';
});