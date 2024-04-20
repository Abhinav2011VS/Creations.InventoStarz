// JavaScript for making dropdown functional on hover and click
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseover', function () {
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function () {
        dropdownContent.style.display = 'none';
    });

    dropdown.querySelector('button').addEventListener('click', function () {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    showPopup("Right Click is disabled");
});

// Disable Ctrl+U, F12, and Fn+F12
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "u") || e.key === "F12" || (e.key === "F12" && e.key === "Control")) {
        e.preventDefault();
        showPopup("Inspection or viewing source is disabled.");
    }
});

// Function to show the pop-up
function showPopup(message) {
    var popupContainer = document.getElementById("popup-container");
    var popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popupContainer.style.display = "block";
    // Fade out after 1 second
    setTimeout(function () {
        popupContainer.style.opacity = 0;
        setTimeout(function () {
            popupContainer.style.display = "none";
            popupContainer.style.opacity = 1;
        }, 1000);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode is enabled in local storage
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Update stylesheet based on dark mode state
    const stylesheetLink = document.getElementById('stylesheet');
    if (isDarkModeEnabled) {
        stylesheetLink.href = '/data/css/all-main/dark/styles.css';
    } else {
        stylesheetLink.href = '/data/css/all-main/light/styles.css';
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
            stylesheetLink.href = '/data/css/all-main/dark/styles.css';
        } else {
            document.body.classList.remove('dark-mode');
            // Store dark mode state in local storage
            localStorage.setItem('darkModeEnabled', 'false');
            // Update stylesheet link
            stylesheetLink.href = '/data/css/all-main/light/styles.css';
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
