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
    // Set the initial language selection based on stored value
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        languageSelect.value = storedLanguage;
        translateNavbar(storedLanguage); // Translate navbar on initial load
    }
    languageSelect.addEventListener('change', function () {
        const language = this.value;
        translateNavbar(language); // Translate navbar when language changes
        // Store selected language in local storage
        localStorage.setItem('selectedLanguage', language);
        console.log('Selected language:', language);
    });

    function translateNavbar(language) {
        console.log('Translating navbar to:', language);
        const navbarTranslations = {
            'Home': { 'en': 'Home', 'fr': 'Accueil', 'es': 'Inicio' },
            'About': { 'en': 'About', 'fr': 'À Propos', 'es': 'Acerca De' },
            'Mods': { 'en': 'Mods', 'fr': 'Mods', 'es': 'Modificaciones' },
            'Data Packs': { 'en': 'Data Packs', 'fr': 'Packs De Données', 'es': 'Paquetes De Datos' },
            'Texture/Resource Packs': { 'en': 'Texture/Resource Packs', 'fr': 'Packs De Textures', 'es': 'Paquetes De Texturas' },
            'Shaders': { 'en': 'Shaders', 'fr': 'Shaders', 'es': 'Sombreadores' },
            'Worlds': { 'en': 'Worlds', 'fr': 'Mondes', 'es': 'Mundos' },
            'Addons': { 'en': 'Addons', 'fr': 'Modules Complémentaires', 'es': 'Complementos' },
            'Bukkit Plugins': { 'en': 'Bukkit Plugins', 'fr': 'Plugins Bukkit', 'es': 'Complementos De Bukkit' },
            'Customizations': { 'en': 'Customizations', 'fr': 'Personnalisations', 'es': 'Personalizaciones' },
            'Mod Packs': { 'en': 'Mod Packs', 'fr': 'Packs De Modules', 'es': 'Paquetes De Modificaciones' }
        };

        Object.keys(navbarTranslations).forEach(item => {
            const translation = navbarTranslations[item][language];
            const navItem = document.querySelector('.nav-list li a[href="/' + item.toLowerCase().replace(/\s+/g, '-') + '/"]');
            if (navItem) {
                navItem.textContent = translation;
            }
        });
    }

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
