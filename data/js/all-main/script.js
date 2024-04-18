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
    alert("Right-click is disabled.");
});

// Disable Ctrl+U, F12, and Fn+F12
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "u") || e.key === "F12" || (e.key === "F12" && e.key === "Control")) {
        e.preventDefault();
        alert("Viewing source or inspection is not allowed.");
    }
});
