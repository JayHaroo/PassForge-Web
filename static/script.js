const saltchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const syms = "!@#$%^&*()_+";
const nums = "0123456789";

var passlen = 0;

var password = "";

const passwordField = document.querySelector("#password");
const symbolCheckbox = document.querySelector("#symbols");
const numberCheckbox = document.querySelector("#numbers");
const customCheckbox = document.querySelector("#custom");
const customField = document.querySelector("#customField");

const passlen8 = document.querySelector("#passlen12");
const passlen16 = document.querySelector("#passlen16");

function generate() {
    var customSaltChars = customField.value.replace(/\s/g, '');
    
    if(passlen12.checked) {
        passlen = 12;
    }else if(passlen16.checked) {
        passlen = 16;
    }
    
    password = "";

    while (password.length < passlen) {
        if(symbolCheckbox.checked) {  
            password  += syms[Math.floor(Math.random() * syms.length)] += saltchars[Math.floor(Math.random() * saltchars.length)];
        }else if(numberCheckbox.checked) {
            password += nums[Math.floor(Math.random() * nums.length)] += saltchars[Math.floor(Math.random() * saltchars.length)];
        }else if(customCheckbox.checked) {
            if(customSaltChars.length == 0) {
                alert("Please enter custom characters");
                return;
            }else{
                password += customSaltChars[Math.floor(Math.random() * customSaltChars.length)];
            }
        }else{
            password += saltchars[Math.floor(Math.random() * saltchars.length)];
        }
        
    }
    passwordField.textContent = password;
}
