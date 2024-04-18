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

// Function to display popup
function displayPopup(message) {
    alert(message);
}

// Event listener for context menu (right-click)
document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Prevent default right-click behavior
    displayPopup('Right Click is Disabled');
});

// Event listener for keydown (keyboard shortcuts)
document.addEventListener('keydown', function (event) {
    // Disable Ctrl+U
    if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
        event.preventDefault();
        displayPopup('Viewing Source is Disabled');
    }

    // Disable F12 and Fn+F12
    if (event.key === 'F12' || (event.key === 'F12' && event.ctrlKey) || (event.key === 'F12' && event.altKey)) {
        event.preventDefault();
        displayPopup('Inspection is Not Allowed');
    }
});

// Event listener for beforeunload (preventing navigation)
window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = ''; // For older browsers
});

// Redirect if view-source: protocol is used
if (window.location.href.startsWith('view-source:')) {
    window.location.href = 'https://creations-inventostarz.pages.dev';
}
