const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass1 = document.querySelector(".pass1")
const pass2 = document.querySelector(".pass2")

function generatePassword() {
    let password = ""
    for(let i = 0; i < 15; i++) {
        const random = Math.floor(Math.random() * characters.length)
        password += characters[random]
    }
    return password;
}

const btn = document.querySelector("button") 
btn.addEventListener("click", () => {
    pass1.textContent = generatePassword()
    pass2.textContent = generatePassword()
})

// allow copy password on click
function copyPassword(pass) {
    pass.addEventListener("click", () => {
    navigator.clipboard.writeText(pass.textContent)
        .then(()=>{
            alert("Password copied successfully")
        })
        .catch(err => {
            alert("Can't copy to clipboard" + err)
        })
    })
}

copyPassword(pass1)
copyPassword(pass2)