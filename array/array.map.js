// Ques.Convert an array of numbers into their squares.([ 1, 4, 9, 16 ])

let arr1 = [1, 2, 3, 4]
const squaredArray = arr1.map((num) =>num*num);
console.log(squaredArray); 

// Ques2.Convert all strings in an array to uppercase.
let arr2 = ["js", "react", "node"]
const upperCaseArray = arr2.map((s) => s.toUpperCase());
console.log(upperCaseArray)

// Ques3. Add 10 to every element of an array.
const addNumToArray = arr1.map((num) => num + 10);
console.log(addNumToArray);

// Ques4. Extract only the length of each string from:

let arr3 = ["apple", "banana", "kiwi"]
const lenthOfEachString = arr3.map((s) => s.length);
console.log(lenthOfEachString)


// Ques5. Convert an array of numbers into strings.

const numberToString = arr1.map(n => n.toString());
const numberToString1 = arr1.map(String);
console.log(numberToString);



// Ques6. From an array of objects, extract only the names.

let arr4 = [{ id: 1, name: "Pradeep" }, { id: 2, name: "Aman" }]

const onlyNames = arr4.map((usr) => usr.name);
console.log(onlyNames)

// Ques7. Convert prices from USD to INR (assume 1 USD = 83 INR).
let arr5 = [1, 2, 3, 4, 5];
const usdToInr = arr5.map(num => num*83);
console.log(usdToInr);


// Ques8. Return a new array containing: "even" if the number is even ,"odd" if the number is odd
const arr6 = [1, 4, 21, 23, 32, 40];
const newArray = arr6.map((num) => num % 2 === 0 ? "even" : "odd");
console.log(newArray);

// Ques9. Add a new property isAdult (age >= 18) to each user object.
const users = [{ name: "Pradeep", age: 25 }, { name: "Aman", age: 16 }];

const addNewProperty = users.map((user) =>({
    ...user,
    isAdult: user.age >= 18
}));
console.log(addNewProperty);


// Ques10.Prefix each element with its index.
const fruits = ["Apple", "Orange", "Banana", "Grapes"]
const eleWithIndex = fruits.map((fruit, index) =>  `${index}: ${fruit}`);
console.log(eleWithIndex);

// Ques11. Capitalize only the first letter of each word.
const arr9 = ["rahul", "mohan", "sohan", "rohit"]
const capitalizeFirtLetter = arr9.map((user) =>user.charAt(0).toUpperCase() + user.slice(1))
console.log(capitalizeFirtLetter);

// Ques12.Flatten one level of nested arrays using map().
let arr7 = [[1,2], [3,4], [5,6]]
// console.log(arr7.flat());
const flattenOneLevel = arr7.map((num) =>num).flat();
console.log(flattenOneLevel)

// Ques13. Convert an array of numbers into an array of objects: ([{value: 1}, {value: 2}, {value: 3}])

let arr10 = [1, 2, 3]
const arrayOfObject = arr10.map((num) => ({value:num}))
console.log(arrayOfObject);


// Ques 14.Use map() to double values, but keep null values unchanged.
let arr8 = [1, null, 2, null, 3]
const doubleValue = arr8.map((val) => (val === null ? val : val*2))
console.log(doubleValue);

// Ques 15. Format user data into a readable string:("Pradeep (25 years)")


// Ques 16. What is the output?
// [1, 2, 3].map(parseInt) //map((value, index, array) => ...)
parseInt(1,0) //parseInt(string, radix)
parseInt(2,1) //string → value to convert , radix → base (0–36)
parseInt(3,1)
// output == [1, NaN, NaN]

// Ques 17. Fix the above code so it works correctly.
// [1, 2, 3].map(num => parseInt(num));


// Ques 18. Why does this return undefined?
  const arr11 = [1, 2, 3].map(num => {num * 2}); // curly braces need return 
  console.log(arr11);


// // Ques19. Replace each element with the sum of itself and its index.
const arr12 = [10, 20, 30, 40, 50]
const sumOfItselfAndIndexNumber = arr12.map((num, ind) => num + ind)
console.log(sumOfItselfAndIndexNumber);