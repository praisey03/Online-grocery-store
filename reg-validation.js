document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Basic validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{5,30}$/;
    const contactNumberRegex = /^\d{10}$/;

    if (!nameRegex.test(customerName)) {
        alert("Customer Name must have alphabets only");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Email id not valid");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Password is not matching the criteria");
        return;
    }
    if (address.trim() === "") {
        alert("Address must not be blank or null");
        return;
    }
    if (!contactNumberRegex.test(contactNumber)) {
        alert("Contact number must not have any alphabets and must be 10 digits");
        return;
    }

    // Display the success message
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p>Customer Registration successful.</p>
                            <p>Customer ID: ${Math.floor(Math.random() * 100000)}</p>
                            <p>Customer Name: ${customerName}</p>
                            <p>Email: ${email}</p>
                            <p><a href="login.html">Click here to login</a></p>`;
    messageDiv.style.color = 'green';
    messageDiv.style.border = '1px solid green';
    messageDiv.style.padding = '10px';
    messageDiv.style.marginTop = '20px';
    
    // Optionally, clear the form
    document.getElementById('registrationForm').reset();
});
