/**
 *  While loop
 */

// Ques1. Write a program that prints numbers from 1 to 50 using  while loop.

// let numb = 1
// while ( numb <= 50) {

//     console.log(numb)
//     numb++
// }

// Ques2.Write a program to print even numbers between 1 and 100  using while loop.

// let numb1 = 0;

// while (numb1 <= 100){
//     if(numb1 % 2 === 0){
//         console.log(numb1)
//     }
//     numb1++
// }

// let numbA = 2;
// while(numbA <= 100){
//     console.log(numbA)
//     numbA = numbA + 2;
// }


// Ques3.Write a program that prints numbers from 50 to 1 (reverse order) using a while loop.

// let numb3 = 50;
// while(numb3 >= 1){
//     console.log(numb3)
//     numb3 = numb3 - 1;
// }

// Ques4.Write a program to calculate the sum of all numbers from 1 to n using a while loop
//(n is a given number).

// let n = 10;
// let i = 1;
// let sum = 0
// while(i <= n){
//     sum = sum + i
//     i++

// }
// console.log(sum);

// Ques5.Write a program that prints the multiplication table of a given number using a while loop.

// let t = 1;
// let number = 5;
// while(t <= 10){
//     console.log(number + " x " + t + " = " + (number * t))
//     t++
// }

// Ques6.Write a program to count the number of digits in a given number using a while loop.

// let digit = 23425423423432;
// count = 0;
// while(digit > 0){
//     digit = Math.floor(digit / 10)
//     count++
// }
// console.log(count)

// Ques7.Write a program to reverse a number using a while loop.

// let digit1 = 123454321;
// let original = digit1;
// let reverse = 0;
// while(digit1 > 0){
//     let lastDigit  = digit1 % 10;
//     reverse = reverse * 10 + lastDigit;
//     digit1 = Math.floor(digit1 / 10)
// }
// console.log(reverse == original)


//Ques8.Write a program to check whether a given number is a palindrome using a while loop.

// let number = 121
// let original = number;
// let reverseNumber = "";
// while(number > 0){
//     reverseNumber = reverseNumber * 10 + (number % 10);
//     number = Math.floor(number/10)
// }

// console.log(reverseNumber == original)


// Ques9.Write a program to print the Fibonacci series up to n terms using a while loop.
// let n1 = 10;
// let a = 0;
// let b = 1; 
// let count = 0;

// while (count < n1) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//     count++;
// }


// Ques10.Write a program that keeps asking the user for a number until the user enters 0,
//     then prints the sum of all entered numbers.
import readline from "readline";
const rl = readline.createInterface9({
    input: process.stdin,
    output: process.stdout
})


let sumOfAll = 0

function ask(){
    rl.question("Enter a number (0 to stop): ", (input) =>{
        let enteredNumber = Number(input);
        if(enteredNumber === 0){
            console.log("Sum: ", sumOfAll)
            rl.close();
            return;
        }

        sumOfAll += enteredNumber;
        ask();
    }) 
}

ask()