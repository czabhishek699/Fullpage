 // Get references to the username, password, and login button elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Get a reference to the popup and popup message elements
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupCloseButton = document.getElementById("popup-close-button");

// Define the correct username and password
const correctUsername = "czabhishek";
const correctPassword = "82025840";

// Add a click event listener to the login button
loginButton.addEventListener("click", function () {
    // Get the values entered by the user
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered username and password match the correct values
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // If they match, redirect to the main webpage
        window.location.href = "main.html"; // Change "main.html" to the URL of your main webpage
    } else {
        // If they don't match, display an error message
        popupMessage.textContent = "Invalid Username or Password. Please try again.";
        // Display the popup
        popup.classList.remove("hidden");
    }
});

// Add a click event listener to the popup close button
popupCloseButton.addEventListener("click", function () {
    // Hide the popup
    popup.classList.add("hidden");

    // Clear the input fields
    usernameInput.value = "";
    passwordInput.value = "";
});
