document.addEventListener("DOMContentLoaded", function () {
    // Login functionality
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission for demo
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Logic to validate login could go here (e.g., check credentials)

            alert(`Login successful for ${username}!`);
            window.location.href = 'index.html'; // Redirect to the main website
        });
    }

    // Sign Up functionality
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission for demo
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Logic to validate sign up could go here (e.g., check if passwords match)
            if (newPassword === confirmPassword) {
                alert(`Sign Up successful for ${newUsername}!`);
                window.location.href = 'login.html'; // Redirect to the login page
            } else {
                alert("Passwords do not match!");
            }
        });
    }
});