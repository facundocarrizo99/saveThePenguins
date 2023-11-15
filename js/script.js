// https://media.tenor.com/wiMyvo8ZFN0AAAAi/pinguim-penguin.gif

document.addEventListener('DOMContentLoaded', function () {
    // Get the switch and its state
    const switchInput = document.getElementById('toggleSwitch');
    const penguinImage = document.getElementById('penguinImage')
    // Add an event listener to the switch
    switchInput.addEventListener('change', function () {
        // Check if the switch is checked or not
        if (switchInput.checked) {
            // If checked, show the image
            document.body.style.backgroundColor = 'violet';
            penguinImage.style.display = 'block';
            console.log('Switch is checked. Image should appear.');
        } else {
            // If not checked, hide the image
            document.body.style.backgroundColor = ''; // Set to default background color
            penguinImage.style.display = 'none';
            console.log('Switch is unchecked. Image should disappear.');
        }
    });
});