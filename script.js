document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application after the DOM is fully loaded
    try {
        initializeApp();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});

function initializeApp() {
    // Add any interactive JavaScript code here
    console.log('Website Loaded');
}