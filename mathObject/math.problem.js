// OTP generator
let otp = Math.floor(Math.random() * 9000) + 1000;
console.log(otp);

// Clamp number between 10–50
function clamp(num, min, max){
    return Math.min(Math.max(num, min), max);
}
let value = 67;
let clampedValue = clamp(value, 10, 50);

console.log(clampedValue);

// Dice roll game
// Math.floor(Math.random() * max) + min; // General formula

console.log(Math.floor(Math.random() * 6) + 1) 

// Random color generator
function colorGenerator(){
    let hex = "0123456789ABCDEF";
    let color = "#"

    for(let i=0; i<6; i++){
        color = color + hex[Math.floor(Math.random() * 16)] //Generates number 0–15
    }
    return color
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

console.log(randomRGB());

console.log(colorGenerator());

// Random password generator
function passwordGenerator(){
    let code = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    for(let i=0; i<9; i++){
    password += code[Math.floor(Math.random() * code.length)]
    }
    return password
}
console.log(passwordGenerator());

// Lottery system

// Math quiz game

// Guess the number game

// Round negative numbers