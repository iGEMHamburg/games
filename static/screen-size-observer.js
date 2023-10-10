// Funktion zum Überwachen der Fensterbreite und Anpassen des Stils
function adjustStyles() {
    var windowWidth = window.innerWidth;
    var videoWrapper = document.getElementById("background-video-wrapper");
    var bvideo = document.getElementById("background-video");
    var home1 = document.getElementById("home1");
    var home2 = document.getElementById("home2");
    var home3 = document.getElementById("home3");
    var home4 = document.getElementById("home4");
    var home5 = document.getElementById("home5");


    // Beispiel: Wenn die Fensterbreite weniger als 768 Pixel beträgt
    if (windowWidth > 1025) {
        // Füge eine Klasse zu einem Element hinzu
        bvideo.classList.add("l-screen");
    } else {
        // Entferne die Klasse, wenn die Bedingung nicht erfüllt ist
        bvideo.classList.remove("l-screen");
    }
    if (windowWidth < 1024) {
        // Füge eine Klasse zu einem Element hinzu
        document.body.classList.add('medium-screen');
        videoWrapper.classList.add("medium-screen");
        bvideo.classList.add("m-screen");
        home1.classList.add("m-screen");
        home2.classList.add("m-screen");
        home3.classList.add("m-screen");
        home4.classList.add("m-screen");
        home5.classList.add("m-screen");
    } else {
        // Entferne die Klasse, wenn die Bedingung nicht erfüllt ist
        document.body.classList.remove('medium-screen');
        videoWrapper.classList.remove("medium-screen");
        bvideo.classList.remove("m-screen");
        home1.classList.remove("m-screen");
        home2.classList.remove("m-screen");
        home3.classList.remove("m-screen");
        home4.classList.remove("m-screen");
        home5.classList.remove("m-screen");
    }
    // Beispiel: Wenn die Fensterbreite weniger als 768 Pixel beträgt
    if (windowWidth < 768) {
        // Füge eine Klasse zu einem Element hinzu
        document.body.classList.add('small-screen');
        videoWrapper.classList.add("small-screen");
        bvideo.classList.add("s-screen");
        document.body.classList.remove('medium-screen')
        videoWrapper.classList.remove("medium-screen");
        bvideo.classList.remove("m-screen");
    } else {
        // Entferne die Klasse, wenn die Bedingung nicht erfüllt ist
        document.body.classList.remove('small-screen');
        videoWrapper.classList.remove("small-screen");
        bvideo.classList.remove("s-screen");
    }

    // Hier kannst du weitere Bedingungen hinzufügen und entsprechende Klassen hinzufügen/entfernen
}

// Führe die Funktion beim Laden der Seite aus und bei Änderungen der Fensterbreite
window.addEventListener('load', adjustStyles);
window.addEventListener('resize', adjustStyles);