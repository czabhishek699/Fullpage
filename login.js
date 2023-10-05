// Simulated valid username and password
const validUsername = "czabhishek";
const validPassword = "82025840";

// Function to handle login
function handleLogin() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if entered username and password match the valid ones
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Successful login, redirect to an external website
        window.location.href = "https://avishekojha.com.np";
    } else {
        // Invalid login, display an error message
        const popup = document.getElementById("popup");
        const popupMessage = document.getElementById("popup-message");
        popupMessage.textContent = "Invalid Username or Password. Please try again.";
        popup.classList.remove("hidden");
    }
}

// Add event listener to the login button
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", handleLogin);

// Add event listener to the popup close button
const popupCloseButton = document.getElementById("popup-close-button");
popupCloseButton.addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});
