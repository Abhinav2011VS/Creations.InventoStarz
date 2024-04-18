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

// Check if the page is being viewed with view-source protocol
if (window.location.protocol === 'view-source:') {
    window.location.href = '/';
}

// Disable right-clicking and show popup with message "Right Click Disabled"
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    document.getElementById('rightClickPopup').textContent = "Right Click Disabled";
    document.getElementById('rightClickPopup').style.display = 'block';
});

// Disable Ctrl + U and show popup with message "View Source Disabled"
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        document.getElementById('rightClickPopup').textContent = "View Source Disabled";
        document.getElementById('rightClickPopup').style.display = 'block';
    }
});

// Disable Fn + F12 and show popup with message "Inspect Element Disabled"
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' && event.code === 'F12') {
        event.preventDefault();
        document.getElementById('rightClickPopup').textContent = "Inspect Element Disabled";
        document.getElementById('rightClickPopup').style.display = 'block';
    }
});

// Disable F12 and show popup with message "Inspect Element Disabled"
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' && event.code === 'F12') {
        event.preventDefault();
        document.getElementById('rightClickPopup').textContent = "Inspect Element Disabled";
        document.getElementById('rightClickPopup').style.display = 'block';
    }
});