function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let address = document.getElementById('address').value;
    let passoutYear = document.getElementById('passoutYear').value;

    // First Name validation
    if (firstName.length < 3 || firstName.length > 7) {
        alert("First Name must be between 3 and 7 characters.");
        return false;
    }

    // Last Name validation
    if (lastName.length < 3 || lastName.length > 7) {
        alert("Last Name must be between 3 and 7 characters.");
        return false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Contact Number validation
    if (contactNumber.length !== 10 || isNaN(contactNumber)) {
        alert("Contact Number must be exactly 10 digits.");
        return false;
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Confirm Password validation
    if (confirmPassword !== password) {
        alert("Password and Confirm Password must match.");
        return false;
    }

    // Address validation
    if (address.length >= 100) {
        alert("Address must be less than 100 characters.");
        return false;
    }

    // Passout Year validation
    if (passoutYear === "") {
        alert("Passout Year is required.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}
