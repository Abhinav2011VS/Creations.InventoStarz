document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.querySelector('.login-button');
    var tryAnotherButton = document.querySelector('.try-another-button');
    var loginMessage = document.getElementById('login-message');

    loginButton.addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Simulated authentication
        if (username === 'user' && password === 'password') {
            // Successful login
            loginMessage.innerText = 'Login successful!';
            loginMessage.style.color = 'green';
        } else if (username === 'user') {
            // Incorrect password
            loginMessage.innerText = 'Username or Password is incorrect.';
            loginMessage.style.color = 'red';
        } else {
            // User not found
            loginMessage.innerText = 'Invalid Username or User. Please register.';
            loginMessage.style.color = 'red';
        }
    });

    tryAnotherButton.addEventListener('click', function() {
        // Redirect to another login option
        window.location.href = 'another-login-option.html';
    });
});
