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

  if (!uname.value.trim()) error.uname = "* Please enter username";
  if (!pwd1.value.trim()) error.pwd1 = "* Please enter password";
  if (!pwd2.value.trim()) error.pwd2 = "* Please enter confirm password";
  if (!email.value.trim()) {
    error.email = "* Enter email";
  } else if (!emailRegex.test(email.value.trim())) {
    error.emailCheck = "* Please enter a valid email format";
  }
};

// Function to check password match
const checkPasswordMatch = () => {
  if (pwd1.value.trim() !== pwd2.value.trim()) {
    error.pwd = "* Please enter the same password";
  }
};

// Function to ensure unique username
const checkUniqueUsername = () => {
  if (usernames.includes(uname.value.trim())) {
    error.uniqueUsername = "* Username already exists";
  }
};

// Submit event listener
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  validateRequiredFields();
  checkUniqueUsername();
  checkPasswordMatch();

  // Check if error 
  if (error && Object.keys(error).length !== 0) {
   
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
      document.querySelectorAll(".error").forEach((e) => e.style.display = "none");
      // Add new user
      const newUser = {
        uname: uname.value.trim(),
        pwd: pwd1.value.trim(),
        email: email.value.trim(),
      };


      storedUsers.push(newUser);
      localStorage.setItem("user", JSON.stringify(storedUsers));
       // Show success message
       const successMessage = document.getElementById("successMessage");
       successMessage.style.display = "block";

       //hide the message after 3 seconds
       setTimeout(() => {
           successMessage.style.display = "none";
       }, 3000);
       document.querySelector("form").reset();
       
    } else {
      document.querySelectorAll(".error").forEach((e) => e.style.display = "none");
    }
  }

});

function togglePassword(eyeIcon, eyeSlash, passwordField) {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.style.display = "none";
    eyeSlash.style.display = "block";
  } else {
    passwordField.type = "password";
    eyeIcon.style.display = "block";
    eyeSlash.style.display = "none";
  }
}

//password elements
let eyeIcon = document.getElementById("icon-eye");
let eyeSlash = document.getElementById("icon-eye-slash");
let password = document.getElementById("password1");

let eyeIcon2 = document.getElementById("icon-eye2");
let eyeSlash2 = document.getElementById("icon-eye-slash2");
let confirmPass = document.getElementById("password2");

// Event listeners 
eyeIcon.addEventListener("click", () => {
  togglePassword(eyeIcon, eyeSlash, password);
});
eyeSlash.addEventListener("click", () => {
  togglePassword(eyeIcon, eyeSlash, password);
});

// Event listeners
eyeIcon2.addEventListener("click", () => {
  togglePassword(eyeIcon2, eyeSlash2, confirmPass);
});
eyeSlash2.addEventListener("click", () => {
  togglePassword(eyeIcon2, eyeSlash2, confirmPass);
});


