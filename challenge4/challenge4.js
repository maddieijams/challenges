// ***********************
// Challenge Assessment 4
// ***********************

// Make separate HTML, CSS, and JS files, and link files. In HTML, create a sign up form that takes in three values, username, password, and confirm password.  

// This should alert the user if they hit submit without all of the fields filled in, saying, "Please fill in all your fields".  It should also check the password and, if they do not match, the user should be alerted with "Your passwords MUST match". If all of the fields are filled in, and the passwords match, when the submit button is clicked, the button should become disabled.
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', validateForm);

let uName = document.querySelector("#userName");
let psw = document.querySelector("#passWord");
let pswConfirm = document.querySelector("#pswdConfirm");

function validateForm() {
    if (uName.value == "" || psw.value == "" || pswConfirm.value == "") {
      alert("Please fill in all your fields");
    } else if (psw.value !== pswConfirm.value) {
        alert("Your passwords must match asshole!");
    } else {
        submitBtn.disabled = true;
        alert("Success");
    }
}

  
  