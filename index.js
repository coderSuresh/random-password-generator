import showAlert from 'https://unpkg.com/alert-for-web@0.1.2/dist/main.js';

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const digitCharacters = "0123456789";
const specialCharacters = "~`!@#$%^&*()_-+={}[],|:;<>.?/";

const pass1 = document.querySelector(".pass1");
const pass2 = document.querySelector(".pass2");

const upperCaseCheckbox = document.querySelector("#uppercase");
const lowerCaseCheckbox = document.querySelector("#lowercase");
const digitsCheckbox = document.querySelector("#numbers");
const specialCheckbox = document.querySelector("#symbols");

const generatePassword = () => {
    const length = parseInt(document.getElementById('length').value);
    const characters = [];

    if (upperCaseCheckbox.checked) characters.push(...uppercaseCharacters);
    if (lowerCaseCheckbox.checked) characters.push(...lowercaseCharacters);
    if (digitsCheckbox.checked) characters.push(...digitCharacters);
    if (specialCheckbox.checked) characters.push(...specialCharacters);

    let password = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {

    const passOne = generatePassword();
    const passTwo = generatePassword();

    if (passOne.includes('undefined') || passTwo.includes('undefined')) {
        showAlert({
            title: 'Error',
            message: 'Please select at least one option.',
            level: 'error',
        });
    } else {
        pass1.textContent = passOne;
        pass2.textContent = passTwo;
    }
});

// Allow copying password on click
const copyPassword = (pass) => {
    pass.addEventListener("click", () => {
        navigator.clipboard.writeText(pass.textContent)
            .then(() => {
                showAlert({
                    title: 'Success',
                    message: 'Successfully copied to clipboard.',
                    level: 'success'
                });
            })
            .catch(err => {
                showAlert({
                    title: 'Error',
                    message: 'Can not copy to clipboard! Please try again.',
                    level: 'error',
                });
            });
    });
}

copyPassword(pass1);
copyPassword(pass2);