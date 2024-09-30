let submit = document.getElementById("btn-submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();

    //required fields validation
    let requiredFields = ["username", "email", "password", "confirm-password"];
    for (let field of requiredFields) {
        if (!document.getElementById(field).value) {
            alert(`Please fill out the ${field} field.`);
        }
    }

    // Email validation
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(document.getElementById("email").value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return;
    }

    // Successful validation
    alert("Registration successful!");
    document.querySelector("form").reset();
})
