const saltchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const saltcharsnm = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const saltcharsnms = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

const passlen = 12;

var password = "";

const passwordField = document.querySelector("#password");
const symbolCheckbox = document.querySelector("#symbol");
const numberCheckbox = document.querySelector("#number");

function generate() {
    while (password.length < passlen) {
        if(symbolCheckbox.checked) {  
            password += saltcharsnms[Math.floor(Math.random() * saltchars.length)];
        }else if(numberCheckbox.checked) {
            password += saltcharsnm[Math.floor(Math.random() * saltchars.length)];
        }else{
            password += saltchars[Math.floor(Math.random() * saltchars.length)];
        }
        passwordField.textContent = password;
    }
}