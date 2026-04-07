//Ques.1 Using a for loop, reverse an array
// Example: [1, 2, 3, 4] → [4, 3, 2, 1]

let arr1 = [1, 2, 3, 4]
let reversed = []

for(let i = arr1.length - 1; i >= 0; i--){
    reversed.push(arr1[i])
}
console.log(reversed)
console.log(arr1.length)


//Ques.2 Use a for loop to find the largest number in an array.
let arr2 =  [20, 23, 89, 78, 47];
let largest = arr2[0]
for(let i = 1; i < arr2.length; i++){
    if(arr2[i] > largest){
        largest = arr2[i]
    }
}
console.log("Larget value will be:", largest);

//Ques.3 Write a for loop to calculate the factorial of a number.
let n = 5;
let fact = 1;
for(let i = 1; i <= n; i++){
    fact = fact * i
    console.log(i)
}
console.log(fact)


//Ques.4 Using a for loop, check whether a given number is prime or not.
let numb = 8;
let isPrime = true;

if(numb <= 1){
    isPrime = false;
}else{
    for(let i = 2; i < numb; i++){
        if(numb % i === 0){
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    console.log(numb,": is prime number");
}else{
    console.log(numb,": is not a prime number")
}

//Ques.5 Using a for loop, print this pattern:
let n1 = 5;
for(let i = 0; i <= n1; i++){
    let line = ""
    for(let t = 1; t <= i; t++){
        line += " *";
    }
    console.log(line)
}

//Ques.5 Single Line Stars
let n2 = 5;
let row1 = ""
for(let i = 1; i <= n2; i++){
    row1 += " *"
}
console.log(row1)


//Ques.6 Square Pattern

let n3 = 5;
for(let i = 1; i <= n3; i++){
    let row3 = ""
    for(let j = 1; j <= n3; j++ ){
        row3 += " *"
    }
    console.log(row3)
}