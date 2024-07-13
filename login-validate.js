document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const customerId = document.getElementById('customerId').value;
    const password = document.getElementById('password').value;

    // Perform basic validation
    if (!customerId || !password) {
        displayErrorMessage("ID and Password are required fields.");
        return;
    }

    // Replace with actual backend authentication logic
    const validCustomerId = 38777; 
    const validPassword = "Pr@isey03"; 
    
    if (parseInt(customerId) === validCustomerId && password === validPassword) {
        // Redirect to Home Page after successful login
        window.location.href = "main.html";
    } else {
        displayErrorMessage("ID or Password is not valid.");
    }
});

function displayErrorMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}
