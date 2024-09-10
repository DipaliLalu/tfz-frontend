// Getting elements
const uname = document.getElementById("username");
const pwd1 = document.getElementById("password1");
const pwd2 = document.getElementById("password2");
const email = document.getElementById("email");
const errorMessage = document.getElementById("modal-body");

let error = {};
const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
const usernames = storedUsers.map(user => user.uname);

// Function to validate required fields
const validateRequiredFields = () => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
  error = {}; // Clear previous errors

  if (!uname.value.trim()) error.uname = "Please enter username";
  if (!pwd1.value.trim()) error.pwd1 = "Please enter password";
  if (!pwd2.value.trim()) error.pwd2 = "Please enter confirm password";
  if (!email.value.trim()) {
    error.email = "Enter email";
  } else if (!emailRegex.test(email.value.trim())) {
    error.emailCheck = "Please enter a valid email format";
  }
};

// Function to check password match
const checkPasswordMatch = () => {
  if (pwd1.value.trim() !== pwd2.value.trim()) {
    error.pwd = "Please enter the same password";
  }
};

// Function to ensure unique username
const checkUniqueUsername = () => {
  if (usernames.includes(uname.value.trim())) {
    error.uniqueUsername = "Username already exists";
  }
};

// Submit event listener
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  validateRequiredFields();
  checkUniqueUsername();
  checkPasswordMatch();

  // Check if error is defined and is an object with properties
  if (error && Object.keys(error).length !== 0) {
    // Display errors by showing elements with the class 'error'
    document.querySelectorAll(".error").forEach((e) => e.style.display = "block");

    // Clear previous error messages
    document.getElementById("usernameError").innerHTML = '';
    document.getElementById("pwdError").innerHTML = '';
    document.getElementById("pwd2Error").innerHTML = '';
    document.getElementById("emailError").innerHTML = '';

    // Display new error messages
    document.getElementById("usernameError").innerHTML = error.uname || error.uniqueUsername || '';
    document.getElementById("pwdError").innerHTML = error.pwd1 || '';
    document.getElementById("pwd2Error").innerHTML = error.pwd2 || error.pwd || '';
    document.getElementById("emailError").innerHTML = error.email || error.emailCheck || '';
  } else {
    // Check if the error object is empty or undefined, then add new user
    if (!error || Object.keys(error).length === 0) {
      // Add new user
      const newUser = {
        uname: uname.value.trim(),
        pwd: pwd1.value.trim(),
        email: email.value.trim(),
      };

      // Assuming storedUsers is defined elsewhere in your code
      storedUsers.push(newUser);
      localStorage.setItem("user", JSON.stringify(storedUsers));
      document.getElementById("exampleModal").style.display = "block";

    } else {
      // Hide error elements if no errors are present or error is undefined
      document.querySelectorAll(".error").forEach((e) => e.style.display = "none");
    }
  }

});
document.getElementById("login").addEventListener("click", () => {
  // Redirect to login page
  location.href = "./login.html";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("exampleModal").style.display = "none";
  location.reload();
})

