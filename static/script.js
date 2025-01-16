const saltchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const syms = "!@#$%^&*()_+";
const nums = "0123456789";

const passlen = 12;

var password = "";

const passwordField = document.querySelector("#password");
const symbolCheckbox = document.querySelector("#symbols");
const numberCheckbox = document.querySelector("#numbers");

function generate() {
    password = "";

    while (password.length < passlen) {
        if(symbolCheckbox.checked) {  
            password  += syms[Math.floor(Math.random() * syms.length)] += saltchars[Math.floor(Math.random() * saltchars.length)];
        }else if(numberCheckbox.checked) {
            password += nums[Math.floor(Math.random() * nums.length)] += saltchars[Math.floor(Math.random() * saltchars.length)];
        }else{
            password += saltchars[Math.floor(Math.random() * saltchars.length)];
        }
        
    }
    passwordField.textContent = password;
}