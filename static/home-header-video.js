// Prüfe, ob das Video-Element vorhanden ist
var video = document.getElementById('background-video');
if (video) {
// Wenn das Video-Element vorhanden ist, setze die Videodatei als Quelle und zeige das video-wrapper-Element an
var videoUrl = 'static/transFERRITIN animated.mp4'; // Ersetze 'dein-video.mp4' durch den tatsächlichen Pfad zum Video
video.src = videoUrl;
document.getElementById('background-video-wrapper').style.display = 'block';
document.getElementById('no-title-background').style.display = 'none';
// Spiele das Video automatisch ab, wenn es geladen ist
video.addEventListener('loadedmetadata', function () {
    video.play();
});
}