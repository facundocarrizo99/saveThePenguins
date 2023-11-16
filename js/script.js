// https://media.tenor.com/wiMyvo8ZFN0AAAAi/pinguim-penguin.gif

document.addEventListener('DOMContentLoaded', function () {
    // Get the switch and its state
    const switchInput = document.getElementById('toggleSwitch');
    const penguinImage = document.getElementById('penguinImage');
    const sirenaImage = document.getElementById('sirenaImage');
    const danceImage = document.getElementById('danceImage');
    const starImage1 = document.getElementById('starImage1');
    const starImage2 = document.getElementById('starImage2');

    // Set the default background color
    document.body.style.backgroundColor = '#feffff';

    // Add an event listener to the switch
    switchInput.addEventListener('change', function () {
        // Check if the switch is checked or not
        if (switchInput.checked) {
            // If checked, set the background image and show the images
            document.body.style.backgroundImage = 'url("donacionesSwitch/bg-agua.gif")';
            penguinImage.style.display = 'block';
            sirenaImage.style.display = 'block';
            danceImage.style.display = 'block';
            starImage1.style.display = 'block';
            starImage2.style.display = 'block';
        } else {
            // If not checked, remove the background image and hide the images
            document.body.style.backgroundImage = 'none';
            penguinImage.style.display = 'none';
            sirenaImage.style.display = 'none';
            danceImage.style.display = 'none';
            starImage1.style.display = 'none';
            starImage2.style.display = 'none';
        }
    });

    // Add an initial check to handle the default state of the switch
    if (switchInput.checked) {
        // If checked, set the background image and show the images
        document.body.style.backgroundImage = 'url("donacionesSwitch/bg-agua.gif")';
        penguinImage.style.display = 'block';
        sirenaImage.style.display = 'block';
        danceImage.style.display = 'block';
        starImage1.style.display = 'block';
        starImage2.style.display = 'block';
    } else {
        // If not checked, remove the background image and hide the images
        document.body.style.backgroundImage = 'none';
        penguinImage.style.display = 'none';
        sirenaImage.style.display = 'none';
        danceImage.style.display = 'none';
        starImage1.style.display = 'none';
        starImage2.style.display = 'none';
    }
});