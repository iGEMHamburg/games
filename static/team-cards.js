const teamImage = document.getElementById('team-image');
const teamContainerClick = document.getElementById('team-card-click');
let isAlternateImage = false;

teamContainerClick.addEventListener('click', function() {
    if (isAlternateImage) {
        teamImage.src = teamImage.getAttribute('data-original-src'); // Originalbild
    } else {
        teamImage.src = teamImage.getAttribute('data-alternate-src'); // Alternatives Bild
    }
    
    isAlternateImage = !isAlternateImage; // Den Status umkehren
});
