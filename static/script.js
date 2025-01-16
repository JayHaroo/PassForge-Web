const saltchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const saltcharsnm = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const saltcharsnms = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

const passlen = 12;

var password = "";

const passwordField = document.querySelector("#password");
const symbolCheckbox = document.querySelector("#symbol");
const numberCheckbox = document.querySelector("#number");

function generate() {
    while (password.length < passlen) {
        password += saltchars[Math.floor(Math.random() * saltchars.length)];
    }
    passwordField.textContent = password;
}