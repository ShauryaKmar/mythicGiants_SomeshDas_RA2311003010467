
document.addEventListener('DOMContentLoaded', () => {
    // Get the toggle button and the body element
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Ensure the button exists before proceeding
    if (!toggleButton) {
        console.error('Toggle button not found in the DOM.');
        return; // Exit if the button is not found
    }

    // Define the class names for dark and light modes
    const darkModeClass = 'dark-mode';
    const lightModeClass = 'light-mode';

    // Retrieve the saved theme preference from localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.add(savedMode);
    } else {
        body.classList.add(darkModeClass); // Default to dark mode if no preference is set
    }

    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', () => {
        console.log('Toggle button clicked'); // For debugging

        // Toggle between dark and light mode
        if (body.classList.contains(darkMode)) {
            body.classList.remove(darkMode);
            body.classList.add(lightMode);
            localStorage.setItem('theme', lightMode);
        } else {
            body.classList.remove(lightMode);
            body.classList.add(darkMode);
            localStorage.setItem('theme', darkMode);
        }
    });
});
