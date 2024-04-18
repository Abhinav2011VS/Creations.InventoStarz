document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode is enabled in local storage
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Update stylesheet based on dark mode state
    const stylesheetLink = document.getElementById('stylesheet');
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
        stylesheetLink.href = '/data/css/main/dark/styles.css';
    } else {
        document.body.classList.remove('dark-mode');
        stylesheetLink.href = '/data/css/main/light/styles.css';
    }

    // Event listener for dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.checked = isDarkModeEnabled; // Set the initial state of the toggle
    darkModeToggle.addEventListener('change', function () {
        const darkModeEnabled = this.checked;
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkModeEnabled', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkModeEnabled', 'false');
        }
    });

    // Check if language selection is saved in local storage
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        document.getElementById('language-select').value = savedLang;
    }

    // Event listener for language selection
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function () {
        const selectedLang = this.value;
        localStorage.setItem('lang', selectedLang);
        // Call function to update translations
        updateTranslations(selectedLang);
    });

    // Function to update translations
    function updateTranslations(language) {
        // Translation mappings
        const translations = {
            'en': {
                'Home': 'Home',
                'About': 'About',
                'Mods': 'Mods',
                'Data Packs': 'Data Packs',
                'Texture/Resource Packs': 'Texture/Resource Packs',
                // Add more translations here
            },
            'fr': {
                'Home': 'Accueil',
                'About': 'À Propos',
                'Mods': 'Mods',
                'Data Packs': 'Packs De Données',
                'Texture/Resource Packs': 'Packs De Textures',
                // Add more translations here
            },
            'es': {
                'Home': 'Inicio',
                'About': 'Acerca De',
                'Mods': 'Modificaciones',
                'Data Packs': 'Paquetes De Datos',
                'Texture/Resource Packs': 'Paquetes De Texturas',
                // Add more translations here
            }
        };

        // Update navigation links with translations
        const navLinks = document.querySelectorAll('.nav-list li a');
        navLinks.forEach(link => {
            const originalText = link.dataset.original || link.textContent;
            link.textContent = translations[language][originalText];
        });
    }

    // Call function to update translations based on saved language
    if (savedLang) {
        updateTranslations(savedLang);
    }
});
