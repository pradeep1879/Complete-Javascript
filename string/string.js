let name = "Pradeep";
let city = 'Delhi';
let message = `Hello World`;

let str = "Hello Wrold";
str[0]
console.log(str[0])
console.log(str.charAt(0))
console.log(str[0] === str.charAt(0))

// trim method
let str1 = "   hello world   ";
console.log(str.trim()); // "hello world"


// slice Method
let str2  = "Javascript"
console.log(str2.slice(0,4)) // Java
console.log(str2.slice(4)) // script
console.log(str2.slice(-6)) // script

// replace && replaceAll Method
let str3 = "My name is Pradeep";
console.log(str3.replace("Pradeep", "Pradeep Kumar")); // My name is Pradeep Kumar
console.log(str3.replaceAll("a", "A")); // My nAme is PrAdeep


// include Method && startsWith() / endsWith()
let str4 = "JavaScript";
console.log(str4.includes("Script")); // true
console.log(str4.startsWith("J")); // true
console.log(str4.endsWith("script")); // false


//// split() Method
let str5 = "apple, banana, grape"
let arr = str5.split(",");
console.log(arr)

// join()
let str7 = ["How", "are", "you"]
console.log(str7.join(" ")); // How are you

/**
 * String Immutability (VERY IMPORTANT)
 */

let str8 = "hello";
const str9 = str8.toUpperCase();  // JS always creates a new string.
console.log(str9);



// Reverse a string.

// Count number of vowels in a string.
let string = "education";
let count = 0;
for(let i=0; i<string.length; i++){
    if( string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"){
        count++;
    }
}
console.log(count)

// Capitalize first letter of a string.
let nameStr = "pradeep";
console.log(nameStr.charAt(0).toUpperCase() + nameStr.slice(1));
// input: "pradeep"

// output: "Pradeep"

// Check if a string is a palindrome.
let string1 = "Level".toLowerCase();
let originalString = string1
let revString = "";

for(let i=string1.length-1; i>=0; i--){
     revString += string1[i];
}
if(originalString === revString){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}

// Replace all spaces with -.
let spacedString = "How are you";
console.log(spacedString.split(" ").join("-"));


// Find the most repeated character in a string.
let strr = "javascript";
let freq = {};
let maxChar = "";
let maxCount = 0;

for(const char of strr){
    freq[char] = (freq[char] || 0) + 1;

    if(freq[char] > maxCount){
        maxCount = freq[char]
        maxChar = char;
    }

    console.log(freq)
    console.log(freq[char])
    console.log(maxChar);   // a
    console.log(maxCount);  // 2
}
console.log(maxCount);  // 2
console.log(maxChar);   // a



// Check if two strings are anagrams.

// Remove duplicate characters from a string.

// Find longest word in a sentence.

// Convert "hello_world_js" → "helloWorldJs".