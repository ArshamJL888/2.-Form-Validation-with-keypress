let usernameelem = document.querySelector('.username');
let passwordElem = document.querySelector('.password');
let invalidPass = document.querySelector('.invalidPass');
let validPass = document.querySelector('.validPass');
let invalidUser = document.querySelector('.invalidUser');
let validUser = document.querySelector('.validUser');
let button = document.querySelector('#button');

invalidPass.style.display = 'none';
validPass.style.display = 'none';
invalidUser.style.display = 'none';
validUser.style.display = 'none';

usernameelem.addEventListener('keyup', usernameValidation);
passwordElem.addEventListener('keyup', passwordValidation);

function usernameValidation() {
    if (usernameelem.value.length < 12) {
        validUser.style.display = 'none';
        invalidUser.style.display = 'block';
    }
    else {
        invalidUser.style.display = 'none';
        validUser.style.display = 'block';
    }
}

function passwordValidation() {
    if (passwordElem.value.length < 8) {
        validPass.style.display = 'none';
        invalidPass.style.display = 'block';
    }
    else {
        invalidPass.style.display = 'none';
        validPass.style.display = 'block';
    }
}