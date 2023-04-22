const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// show sucess message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

// check email valid
function checkEmail(input) {
    const re = /\S+@\S+\.\S+/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid')
    }
};

// checked required field
function checkRequiredField(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getfieldName(input)}  is required`)
        }
    });
};

// checking error message
function getfieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// check length 
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getfieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getfieldName(input)} should not be greater than ${max} characters`)
    } else {
        showSuccess(input)
    }
};

// Match password
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match')
    } else if (input1.value === input2.value)
        showSuccess(input2)
};

// event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequiredField([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);

    // if (username.value === ''){
    //     showError(username, 'username is required');
    // } else {
    //     showSuccess(username)
    // }
    // if (email.value === ''){
    //     showError(email, 'email is required');
    // } else if(!validateEmail(email.value)) {
    //     showError(email, 'email is not valid');
    // } else {
    //     showSuccess(email)
    // }

    // if (password.value === ''){
    //     showError(password, 'password is required')
    // } else {
    //     showSuccess(password)
    // }

    // if (password2.value === ''){
    //     showError(password2, 'password is required')
    // } else {
    //     showSuccess(password2)
    // }
});