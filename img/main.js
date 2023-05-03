// USER LOGIN / SIGNUP

let users 

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);


function signUpHandler() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmed-password").value;

    if (confirmPass === password){
         let userExists = 1;
    }
    else {
        userExists = -1;
    }

    if(userExists = 1){
        users.push({'name': username, 'password': password})
    }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}
