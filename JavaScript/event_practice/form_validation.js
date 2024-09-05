let uname = document.getElementById("username");
let pwd1 = document.getElementById("password1");
let pwd2 = document.getElementById("password2");
let email = document.getElementById("email");
let errorMessage = document.getElementById("error-msg");
const error = {};


function required() {
    let regex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]/i;
    if (uname.value.trim() == "") {
        error.uname = "Enter username";
    }
    if (pwd1.value.trim() == "") {
        error.pwd1 = "Enter password";
    }
    if (pwd2.value.trim() == "") {
        error.pwd2 = "Enter confirm password";
    }
    if (email.value.trim() == "") {
        error.email = "Enter email";

    }else if(!regex.test(email.value.trim())){
        error.emailCheck="please enter valid eamil format";
    }
    return error;
}

function checkPassword(){
    if(pwd1.value.trim() !== pwd2.value.trim()){
        error.pwd="please enter same password";
    }
}

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    required();
    checkPassword();
    if (Object.keys(error).length !== 0) {
        // console.log(error);
        let msg=document.getElementById("error-msg");
        msg.style.display="block";
        Object.values(error).forEach((e) => {
            msg.innerHTML += e+ "<br>";
        });
    }else{
        let value={}
        value.uname=uname.value.trim();
        value.pwd=pwd1.value.trim();
        value.email=email.value.trim();
        console.log(value);
        localStorage.setItem("user",JSON.stringify(value));
        location.href="./login.html";
    }

});

