document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode is enabled in local storage
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Update stylesheet based on dark mode state
    const stylesheetLink = document.getElementById('stylesheet');
    if (isDarkModeEnabled) {
        stylesheetLink.href = '/data/css/about/dark/styles.css';
    } else {
        stylesheetLink.href = '/data/css/about/light/styles.css';
    }

    // Event listener for dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.checked = isDarkModeEnabled; // Set the initial state of the toggle
    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            // Store dark mode state in local storage
            localStorage.setItem('darkModeEnabled', 'true');
            // Update stylesheet link
            stylesheetLink.href = '/data/css/about/dark/styles.css';
        } else {
            document.body.classList.remove('dark-mode');
            // Store dark mode state in local storage
            localStorage.setItem('darkModeEnabled', 'false');
            // Update stylesheet link
            stylesheetLink.href = '/data/css/about/light/styles.css';
        }
    });

    // JavaScript for handling modal popup
    const settingsBtn = document.getElementById('settings-btn');
    const closePopupBtns = document.querySelectorAll('.popup-content .close');
    const modals = document.querySelectorAll('.popup');

    settingsBtn.addEventListener('click', function () {
        document.getElementById('settings-modal').style.display = 'block';
    });

    closePopupBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
