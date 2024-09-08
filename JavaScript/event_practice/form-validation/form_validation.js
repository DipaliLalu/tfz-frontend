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

  if (!uname.value.trim()) error.uname = "Enter username";
  if (!pwd1.value.trim()) error.pwd1 = "Enter password";
  if (!pwd2.value.trim()) error.pwd2 = "Enter confirm password";
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

  if (Object.keys(error).length !== 0) {
    // Display errors
    // errorMessage.style.display = "block";
    errorMessage.innerHTML = Object.values(error).join("<br>");
    document.getElementById("exampleModal").style.display="block";
  } else {
    // Add new user
    const newUser = {
      uname: uname.value.trim(),
      pwd: pwd1.value.trim(),
      email: email.value.trim(),
    };

    storedUsers.push(newUser);
    localStorage.setItem("user", JSON.stringify(storedUsers));
    location.href = "./login.html";
  }
});

