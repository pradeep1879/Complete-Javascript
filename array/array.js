const persons = ["Ram", "Hari", "Sita", "Bishal","Gita"];

console.log(persons.indexOf("Sita", 2))


// slice method (a method used to extract a portion of an array and return it as a new array.)

const arr = [10, 20, 30, 40, 50];
//slice(start, end)
/**
 *  start	Index to start extraction (included)
    end	    Index to stop extraction (excluded)
 */
const slicedArray = arr.slice(2, 4)// [30, 40]
console.log(slicedArray);
console.log(arr.slice(-2));// [40, 50]
console.log(arr.slice(-4, -1));// -1 means 'last element (excluded)' // [20, 30, 40]
console.log(arr.slice(-3, -1));// -1 means 'last element (excluded)' // [30, 40]
console.log(arr.slice(-2, -1));// -1 means 'last element (excluded)' // [40]


// Copay an entire array

 const copy = arr.slice();
 console.log(copy) // new array. (Useful when we want a non-mutating copy)
 

// Splice Method  (is used to ADD, REMOVE, or REPLACE elements in an array)
// array.splice(start, deleteCount, item1, item2, ...)
/**
 *  Parameter	Meaning
    start	    Index where operation begins
    deleteCount	How many elements to remove
    item1...	Elements to insert (optional)
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7];

const splicedArray = arr1.splice(2,3);
console.log(splicedArray)// [3, 4, 5]
const splicedArrayWithNewElement = arr1.splice(2,3,8, 9, 10); // Removes [3, 4, 5,], inserts [8, 9, 10].
// console.log(splicedArrayWithNewElement);
console.log(arr1); // [1, 2, 8, 9, 10]

let arr2 = [1, 2, 3, 4];
arr.splice(-2, 1);

console.log(arr); // [1, 2, 4]
// -2 → second last element.


//Special cases (INTERVIEW GOLD)
// deleteCount omitted
let arr3 = [1, 2, 3, 4];
arr.splice(2);
console.log(arr); // [1, 2] (Removes everything from index 2 onward.)


//Start index beyond length
let arr4 = [1, 2, 3];
arr.splice(10, 0, 99);
console.log(arr); // [1, 2, 3, 99] (Insert at the end)


//Return value of splice()
let arr5 = [10, 20, 30];
let removed = arr.splice(1, 1);
console.log(removed); // [20]  (Always returns array, even if one element removed.)


let arr6 = [10, 3, 20, 30];

const index = arr.indexOf(3); // 1

if (index !== -1) {
  arr.splice(index, 1);
}
console.log(arr); // [10, 20, 30]



