function showDescription(planet) {
    // Get the description elements for all planets
    var descriptionProxima = document.getElementById('description-proxima');
    var descriptionKepler = document.getElementById('description-kepler');
    var descriptionTrappist = document.getElementById('description-trappist');
    var descriptionOsiris = document.getElementById('description-osiris');

    // Toggle descriptions based on the selected planet
    if (planet === 'proxima') {
        toggleDescription(descriptionProxima);
    } else if (planet === 'kepler') {
        toggleDescription(descriptionKepler);
    } else if (planet === 'trappist') {
        toggleDescription(descriptionTrappist);
    } else if (planet === 'osiris') {
        toggleDescription(descriptionOsiris);
    }
}

function toggleDescription(description) {
    // Toggle the display and fade effect for the description
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block'; // Show the description
        setTimeout(() => {
            description.classList.add('visible'); // Fade in
        }, 10); // Short delay to allow display to take effect
    } else {
        description.classList.remove('visible'); // Fade out
        // Hide the description after the fade-out animation
        setTimeout(() => {
            description.style.display = 'none';
        }, 500); // Match this to the CSS transition duration (0.5s)
    }
}
