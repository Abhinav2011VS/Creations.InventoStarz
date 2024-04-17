document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode is enabled in local storage
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Update stylesheet based on dark mode state
    const stylesheetLink = document.getElementById('stylesheet');
    if (isDarkModeEnabled) {
        stylesheetLink.href = '/data/css/main/dark/styles.css';
    } else {
        stylesheetLink.href = '/data/css/main/light/styles.css';
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
            stylesheetLink.href = '/data/css/main/dark/styles.css';
        } else {
            document.body.classList.remove('dark-mode');
            // Store dark mode state in local storage
            localStorage.setItem('darkModeEnabled', 'false');
            // Update stylesheet link
            stylesheetLink.href = '/data/css/main/light/styles.css';
        }
    });

    // JavaScript for Language Selection with auto-translation
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function () {
        const language = this.value;
        // Implement auto-translation logic based on selected language
        // For demo purposes, let's just change the placeholder text of the navigation links
        const navLinks = document.querySelectorAll('.nav-list li a');
        navLinks.forEach(link => {
            if (language === 'fr') {
                link.textContent = 'Accueil';
            } else if (language === 'es') {
                link.textContent = 'Inicio';
            } else {
                link.textContent = 'Home';
            }
        });
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
