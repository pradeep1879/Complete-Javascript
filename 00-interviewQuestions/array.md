# JavaScript Interview Practice

## Arrays, Strings, Objects & Recursion

---

# 1. Sort an Array in Ascending Order

### Problem

Sort an array of numbers in ascending order.

```js
const sortAscending = (arr) => {
  return [...arr].sort((a, b) => a - b);
};

console.log(sortAscending([3, 4, 9, 1, 10]));
// [1, 3, 4, 9, 10]
```

### Interview Concept

JavaScript's default `sort()` converts elements to strings.

```js
[10, 2, 5].sort();
// [10, 2, 5] ❌
```

For numbers:

```js
arr.sort((a, b) => a - b);
```

### Important

`sort()` **mutates the original array**.

Therefore:

```js
return [...arr].sort((a, b) => a - b);
```

creates a copy before sorting.

---

# 2. Calculate Average of an Array

### Problem

Find the average of all numbers in an array.

```js
const calculateAverage = (arr) => {
  const total = arr.reduce(
    (acc, currentElement) => acc + currentElement,
    0
  );

  return total / arr.length;
};

console.log(calculateAverage([5, 10, 2, 8]));
// 6.25
```

### How `reduce()` works

```js
[5, 10, 2, 8].reduce(
  (acc, current) => acc + current,
  0
);
```

Step-by-step:

```text
0 + 5  = 5
5 + 10 = 15
15 + 2 = 17
17 + 8 = 25
```

Then:

```text
25 / 4 = 6.25
```

### Interview Point

`reduce()` is commonly used when you need to transform an array into **one final value**.

---

# 3. Check if Two Arrays Are Equal

### Problem

Check whether two arrays contain the same elements in the same order.

```js
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(
    (currentValue, index) => currentValue === arr2[index]
  );
};

console.log(arraysAreEqual([1, 3, 5], [1, 3, 5]));
// true

console.log(arraysAreEqual([7, 4, 9], [7, 5, 10]));
// false
```

### Why not?

```js
[1, 2, 3] === [1, 2, 3]
```

Output:

```text
false
```

Because arrays are objects and are compared by **reference**, not contents.

```js
const a = [1, 2, 3];
const b = a;

console.log(a === b);
// true
```

But:

```js
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b);
// false
```

---

# 4. Remove Duplicates from an Array

### Problem

Remove duplicate values.

```js
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(
  removeDuplicates([1, 2, 3, 2, 1, 4])
);

// [1, 2, 3, 4]
```

### How it works

```js
new Set([1, 2, 3, 2, 1, 4]);
```

A `Set` stores only unique values.

Then:

```js
[...new Set(arr)]
```

converts it back to an array.

### Interview Point

This is one of the simplest ways to remove duplicates from an array.

---

# 5. Count Vowels in a String

### Problem

Count the number of vowels in a string.

```js
const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (const char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("Hello world"));
// 3
```

### Vowels

```text
a
e
i
o
u
```

### Interview Improvement

You don't need:

```js
str.split("");
```

because strings are iterable:

```js
for (const char of str)
```

can directly iterate over characters.

---

# 6. Convert String to Camel Case

### Problem

Convert:

```text
hello world
```

into:

```text
helloWorld
```

```js
const toCamelCase = (str) => {
  const words = str.trim().split(/\s+/);

  return words
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
};

console.log(toCamelCase("hello world"));
// helloWorld

console.log(toCamelCase("hello javascript world"));
// helloJavascriptWorld
```

### Why `/\s+/`?

It handles multiple spaces.

```js
"hello   world".split(" ");
```

can produce empty strings.

Using:

```js
split(/\s+/)
```

handles whitespace more reliably.

---

# 7. Check if a Character is Uppercase

```js
const isUpperCase = (char) => {
  return char === char.toUpperCase();
};

console.log(isUpperCase("A"));
// true

console.log(isUpperCase("a"));
// false
```

### Important Edge Case

This implementation returns `true` for numbers and some symbols:

```js
isUpperCase("1");
// true
```

because:

```js
"1".toUpperCase() === "1"
```

If the question specifically asks for an **uppercase alphabetic character**, use:

```js
const isUpperCase = (char) => {
  return /^[A-Z]$/.test(char);
};
```

---

# 8. Find the Median of an Array

### Problem

Find the median of an array.

For an odd number of elements:

```text
[1, 3, 5]

Median = 3
```

For an even number:

```text
[1, 3, 5, 7]

Median = (3 + 5) / 2
       = 4
```

### Solution

```js
const findMedian = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);

  const length = sorted.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sorted[mid] + sorted[mid - 1]) / 2;
  }

  return sorted[mid];
};

console.log(findMedian([5, 3, 9, 1, 7]));
// 5

console.log(findMedian([5, 3, 8, 1, 7, 4]));
// 4.5
```

### Important Improvement

Your original code:

```js
arr.sort((a, b) => a - b);
```

mutates the original array.

Better:

```js
const sorted = [...arr].sort((a, b) => a - b);
```

---

# 9. Count Frequency of Elements

### Problem

Count how many times each number appears.

```js
const numbers = [1, 2, 2, 3, 1, 4, 2];

const counts = {};

for (const num of numbers) {
  counts[num] = (counts[num] || 0) + 1;
}

console.log(counts);
```

Output:

```js
{
  1: 2,
  2: 3,
  3: 1,
  4: 1
}
```

### How this works

Initially:

```js
counts[2]
```

is:

```text
undefined
```

Therefore:

```js
counts[2] || 0
```

becomes:

```text
0
```

Then:

```js
0 + 1
```

becomes:

```text
1
```

Next time:

```js
1 + 1
```

becomes:

```text
2
```

---

# 10. Find the Mode

### Problem

The mode is the value that appears most frequently.

```js
function findMode(arr) {
  const counts = {};

  let maxCount = 0;
  let mode;

  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;

    if (counts[element] > maxCount) {
      maxCount = counts[element];
      mode = element;
    }
  }

  return mode;
}

console.log(findMode([1, 2, 2, 3, 1, 4, 2]));
// 2
```

### Logic

```text
1 → 1 occurrence
2 → 1 occurrence
2 → 2 occurrences
3 → 1 occurrence
1 → 2 occurrences
4 → 1 occurrence
2 → 3 occurrences

Mode = 2
```

### Interview Point

This pattern is extremely useful:

```js
counts[element] = (counts[element] || 0) + 1;
```

You should be comfortable writing it from memory.

---

# 11. Factorial — Recursion

### Problem

Calculate:

```text
5! = 5 × 4 × 3 × 2 × 1
   = 120
```

### Recursive Solution

```js
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));
// 120
```

### How recursion works

```js
factorial(5)
```

becomes:

```text
5 × factorial(4)

5 × 4 × factorial(3)

5 × 4 × 3 × factorial(2)

5 × 4 × 3 × 2 × factorial(1)

5 × 4 × 3 × 2 × 1

= 120
```

### Important

Your original base condition was:

```js
if (num === 1)
```

That works for positive numbers, but it's better to also handle:

```js
factorial(0)
```

because:

```text
0! = 1
```

---

# 12. Fibonacci — Recursion

### Fibonacci Sequence

```text
0, 1, 1, 2, 3, 5, 8, 13, ...
```

Each number is the sum of the previous two.

```text
F(n) = F(n - 1) + F(n - 2)
```

### Recursive Solution

```js
function fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(0));
// 0

console.log(fibonacci(1));
// 1

console.log(fibonacci(2));
// 1

console.log(fibonacci(3));
// 2

console.log(fibonacci(4));
// 3

console.log(fibonacci(5));
// 5
```

---

# 13. Recursion — Interview Concept

Every recursive function should generally have:

### 1. Base Case

The condition that stops recursion.

```js
if (num <= 1) {
  return num;
}
```

### 2. Recursive Case

The function calls itself with a smaller/simpler input.

```js
return fibonacci(num - 1) + fibonacci(num - 2);
```

Without a proper base case, recursion can continue indefinitely and eventually cause:

```text
Maximum call stack size exceeded
```

---

# 14. Important Array Methods Used Here

You should know these very well for JavaScript interviews:

| Method       | Purpose                                        |
| ------------ | ---------------------------------------------- |
| `sort()`     | Sort array                                     |
| `reduce()`   | Reduce array to one value                      |
| `every()`    | Check whether all elements satisfy a condition |
| `includes()` | Check whether value exists                     |
| `map()`      | Transform every element                        |
| `filter()`   | Select elements                                |
| `push()`     | Add to end                                     |
| `pop()`      | Remove from end                                |
| `shift()`    | Remove from beginning                          |
| `unshift()`  | Add to beginning                               |
| `slice()`    | Create a portion/copy                          |
| `splice()`   | Add/remove elements and mutate array           |
| `join()`     | Convert array to string                        |
| `split()`    | Convert string to array                        |
| `Set`        | Store unique values                            |

---

# 15. Mutation vs Non-Mutation

This is **very important for interviews**.

### Mutating methods

These modify the original array:

```js
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

Example:

```js
const arr = [3, 1, 2];

arr.sort((a, b) => a - b);

console.log(arr);
// [1, 2, 3]
```

The original changed.

---

### Non-mutating methods

Common examples:

```js
map()
filter()
reduce()
slice()
concat()
every()
some()
find()
includes()
```

Example:

```js
const arr = [1, 2, 3];

const newArr = arr.map(num => num * 2);

console.log(arr);
// [1, 2, 3]

console.log(newArr);
// [2, 4, 6]
```

---

# 16. `map()` vs `forEach()`

### `map()`

Returns a **new array**.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
// [2, 4, 6]
```

### `forEach()`

Does not return a new transformed array.

```js
numbers.forEach(num => {
  console.log(num);
});
```

Interview answer:

> Use `map()` when you want to transform an array and get a new array. Use `forEach()` when you simply want to perform an operation for each element.

---

# 17. `filter()`

Returns a new array containing elements that satisfy a condition.

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4]
```

---

# 18. `find()` vs `filter()`

### `find()`

Returns the **first matching element**.

```js
const numbers = [1, 3, 4, 6];

const result = numbers.find(num => num % 2 === 0);

console.log(result);
// 4
```

### `filter()`

Returns **all matching elements**.

```js
const result = numbers.filter(num => num % 2 === 0);

console.log(result);
// [4, 6]
```

---

# 19. `some()` vs `every()`

### `some()`

Returns `true` if **at least one** element satisfies the condition.

```js
const numbers = [1, 3, 4];

console.log(
  numbers.some(num => num % 2 === 0)
);
// true
```

### `every()`

Returns `true` only if **all** elements satisfy the condition.

```js
const numbers = [2, 4, 6];

console.log(
  numbers.every(num => num % 2 === 0)
);
// true
```

---

# 20. Interview Cheat Sheet

```text
sort()
→ sorts an array
→ mutates original

reduce()
→ converts array into one value

map()
→ transforms every element
→ returns new array

filter()
→ selects elements
→ returns new array

find()
→ returns first matching element

some()
→ at least one matches

every()
→ all must match

Set
→ unique values

spread (...)
→ expands / copies shallowly

rest (...)
→ collects remaining values

recursion
→ function calling itself

base case
→ stops recursion
```

---

# Practice Questions

Try solving these without looking at the solutions:

### Beginner

1. Find the largest number in an array.
2. Find the smallest number in an array.
3. Calculate the sum of an array.
4. Reverse an array without using `reverse()`.
5. Count even and odd numbers.
6. Check whether an array contains a specific value.
7. Find the length of a string without using `.length`.
8. Reverse a string.
9. Check whether a string is a palindrome.
10. Count the frequency of each character in a string.

### Intermediate

11. Find the second-largest number.
12. Remove duplicates without using `Set`.
13. Find the intersection of two arrays.
14. Find the union of two arrays.
15. Move all zeros to the end of an array.
16. Find the missing number from `1...n`.
17. Find duplicate numbers.
18. Find the first non-repeating character.
19. Check whether two strings are anagrams.
20. Implement your own `map()`.

### Advanced

21. Implement your own `filter()`.
22. Implement your own `reduce()`.
23. Flatten a nested array.
24. Find the maximum subarray sum.
25. Implement deep clone.
26. Implement array chunking.
27. Find the longest substring without repeating characters.
28. Implement memoization.
29. Solve Fibonacci using memoization.
30. Solve Fibonacci iteratively and compare its complexity with the recursive solution.

---

# Key Interview Rule

When solving JavaScript array problems, always ask yourself:

```text
1. Does my solution mutate the original array?
2. Can I solve this using map/filter/reduce?
3. What is the time complexity?
4. What is the space complexity?
5. What happens for an empty array?
6. What happens for duplicate values?
7. What happens for negative numbers?
8. What happens for a single-element array?
```

These questions are often more important in an interview than simply getting the correct output.
