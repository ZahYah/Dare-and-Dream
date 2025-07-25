document.addEventListener('DOMContentLoaded', ()=>{
const buttonContainer = document.querySelector('.dashboard-button');
const buttons = Array.from(buttonsContainer.querySelectorAll('.button'));

  // Initialize the active button
            let currentActiveButton = buttonContainer.querySelector('button');
            if (currentActiveButton) {
                currentActiveButton.classList.add('active-button');
            }
   const currentPath = window.location.pathname.split('/').pop(); // Gets "index.html" or "profile.html" etc.

            // Loop through each button and determine if it's the active page
            buttons.forEach(button => {
                const link = button.closest('a'); // Find the parent <a> tag
                if (link) {
                    const linkPath = link.href.split('/').pop(); // Get the filename from the link's href

                    // Check if the link's filename matches the current page's filename
                    if (linkPath === currentPath) {
                        button.classList.add('active-button');
                        // Update page title based on the active button
                        pa
                    } else {
                        button.classList.remove('active-button'); // Ensure non-active buttons don't have the class
                    }
                }
            });
});   