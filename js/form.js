let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let validUsername = document.querySelector('.validUser');
let invalidUsername = document.querySelector('.invalidUser')
let validPassword = document.querySelector('.validPass');
let invalidPassword = document.querySelector('.invalidPass')
validUsername.style.display = 'none';
validPassword.style.display = 'none';
invalidUsername.style.display = 'none';
invalidPassword.style.display = 'none';
function checkUsername() {
    let usernameValue = usernameInput.value;
    if (usernameValue.length < 12) {
        validUsername.style.display = 'none';
        invalidUsername.style.display = 'block'
    }
    else {
        invalidUsername.style.display = 'none';
        validUsername.style.display = 'block';
    }
}
function checkPassword() {
    let passwordValue = passwordInput.value;
    if (passwordValue.length < 8) {
        validPassword.style.display = 'none';
        invalidPassword.style.display = 'block';
    }
    else {
        invalidPassword.style.display = 'none';
        validPassword.style.display = 'blcok';
    }
}