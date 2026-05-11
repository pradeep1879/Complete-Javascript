const sortAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};
// console.log(sortAscending([3, 4, 9, 1, 10]))

const calculateAverage = (arr) => {
  const total = arr.reduce((accum, curreEle) => accum + curreEle, 0);
  // console.log(total/arr.length)
  return total;
};
calculateAverage([5, 10, 2, 8]);

const arrayAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((currValue, index) => currValue === arr2[index]);
};
// console.log(arrayAreEqual([1, 3, 5], [1, 3, 5]))
// console.log(arrayAreEqual([7, 4, 9], [7, 5, 10]))

const removeDuplicates = (arr) => {
  let newArr = [...new Set(arr)];
  // console.log(newArr)
};
removeDuplicates([1, 2, 3, 2, 1, 4]);

const countVowels = (str) => {
  let vowles = ["a", "e", "i", "o", "u"];

  const arr = str.split("");
  let count = 0;
  for (let char of arr) {
    if (vowles.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
};
// console.log(countVowels("Hello world"))

const toCamelCase = (str) => {
  let newStr = str.trim().split(" ");
  const ans = newStr
    .map((w, i) =>
      i > 0
        ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        : w.toLowerCase(),
    )
    .join("");
  // console.log(ans);
};
toCamelCase("hello world ");


const isUpperCase = (char) => {
  // if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
  //   return true;
  // }
  // return false;
  return char === char.toUpperCase();
}

// console.log(isUpperCase("s"));


const findMedian = (arr) => {
  arr.sort((a, b) => a - b) 
  let length = arr.length;
  let mid = Math.floor(length / 2);
  if(length % 2 === 0){
    return (arr[mid] + arr[mid - 1])/2
  }else{
    return arr[mid]
  }
  console.log(mid)
}
// console.log(findMedian([5, 3, 9, 1, 7]))
// console.log(findMedian([5, 3, 8, 1, 7, 4]))


const numbers = [1, 2, 2, 3, 1, 4, 2];

let counts = {}

for (let num of numbers){
  counts[num] = (counts[num] || 0) + 1;
}
// console.log(counts)



function findMode(arr){
  let counts = {}
  let maxNum = 0;
  let mode;
  for (let ele of arr){
    counts[ele] = (counts[ele] || 0) + 1;
    if(counts[ele] > maxNum){
      maxNum = counts[ele]
      mode = ele
    }
  }
  // console.log(mode);

}

findMode([1, 2, 2, 3, 1, 4, 2])



function factorial(num) {
  if(num === 1){
    return 1;
  }else{
    return num * factorial(num - 1);
  }
}

// console.log(factorial(5));

function fibonacci(num) {
  if(num <= 1){
    return num;
  }else{
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))


