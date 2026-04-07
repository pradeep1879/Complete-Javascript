// Ques. 1Write a do...while loop to print numbers from 1 to 10.

let num1 = 1;
do{
    console.log(num1);
    num1++
}while(num1<=10)



//Ques.2 Using do...while, print all odd numbers between 1 and 20.

let oddNumber = 1;
do{
    console.log(oddNumber);
    oddNumber += 2;
}while(oddNumber <=20 );


//Ques.3 Use a do...while loop to print numbers from 10 to 1.

let lastNumber = 20;

do{
    console.log(lastNumber);
    lastNumber--
}while(lastNumber >= 1)


//Ques.4 Given a number n, use a do...while loop to calculate the sum of numbers from 1 to n.

let sum = 0;
let s = 1;
let n = 100
do{
    sum += s;
    s++

}while(s <= n)
console.log(sum);


//Ques.5 Write a do...while loop to print the table of 5 (from 5 × 1 to 5 × 10).


//Ques.6 Given a number (e.g. 456), use do...while to print each digit separately.
let number = 456;
do{
    newNumber = number % 10;
    number = Math.floor(number/10);
    console.log(newNumber)
}while(number > 0)


//Ques.7 Use a do...while loop to reverse a number.
//Example: 123 → 321
let realNumber = 43542;
let original = realNumber;
let reverse = 0;
do{
    lastDigit = realNumber % 10;
    reverse = reverse * 10 + lastDigit;
    realNumber = Math.floor(realNumber/10)
}while(realNumber > 0)
    console.log(reverse)

//Ques.8 Using do...while, count how many digits are in a given number.

let realNumber2 = 43534345347;
let count = 0;
do{

    realNumber2 = Math.floor(realNumber2/10)
    count++
}while(realNumber2 > 0);
console.log(count)

//Ques.9 Write a do...while loop to calculate the factorial of a number n.
let n1 = 5;
let fact = 1;
let i = 1
do{
    fact = fact * i
    i++

}while(i <= n1)
    console.log("Factorial is:", fact)

//Ques.10 Prompt the user to enter a number greater than 10.
// Keep asking using a do...while loop until a valid number is entered.