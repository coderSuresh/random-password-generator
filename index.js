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
        alert('Please select at least one option.');
    } else {
        pass1.textContent = passOne;
        pass2.textContent = passTwo;
    }
});

// Allow copying password on click
function copyPassword(pass) {
    pass.addEventListener("click", () => {
        navigator.clipboard.writeText(pass.textContent)
            .then(() => {
                alert("Password copied successfully");
            })
            .catch(err => {
                alert("Can't copy to clipboard" + err);
            });
    });
}

copyPassword(pass1);
copyPassword(pass2);