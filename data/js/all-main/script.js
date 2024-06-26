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

// Simulate 2 seconds loading time
setTimeout(function () {
    document.getElementById('loader-container').style.opacity = '0'; // Fade out loader container
    setTimeout(function () {
        document.getElementById('loader-container').style.display = 'none'; // Hide loader container
        document.getElementById('content').classList.add('fade-in'); // Add fade-in class to content
        document.getElementById('content').style.display = 'block'; // Show content
        document.getElementById('content').style.opacity = '1'; // Fade in content
    }, 500); // Wait for fade out animation to complete
}, 500); // Actual loading time
