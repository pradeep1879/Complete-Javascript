# JavaScript Fundamentals — Interview Notes

## 1. JavaScript Data Types

JavaScript has **8 data types**.

### Primitive Data Types

Primitive values represent a single value and are **immutable**.

1. `String`
2. `Number`
3. `BigInt`
4. `Boolean`
5. `Undefined`
6. `Null`
7. `Symbol`

```js
let name = "Pradeep";      // String
let age = 21;              // Number
let isStudent = true;      // Boolean
let value;                 // Undefined
let data = null;           // Null
let bigNumber = 123n;      // BigInt
let id = Symbol("id");     // Symbol
```

### Non-Primitive Data Type

The main non-primitive type is:

* `Object`

Arrays and functions are also objects in JavaScript.

```js
const person = {
  name: "Pradeep",
  age: 21
};

const numbers = [1, 2, 3];

function greet() {
  console.log("Hello");
}
```

### Important Interview Point

> Primitive values are copied by value, while objects/arrays are accessed through references.

---

# 2. `var`, `let`, and `const`

## `var`

* Function scoped
* Can be redeclared
* Can be reassigned
* Hoisted and initialized with `undefined`

```js
function example() {
  if (true) {
    var count = 10;
  }

  console.log(count); // 10
}
```

`var` is **not block scoped**.

---

## `let`

* Block scoped
* Cannot be redeclared in the same scope
* Can be reassigned
* Hoisted but remains in the Temporal Dead Zone (TDZ)

```js
if (true) {
  let count = 10;
}

console.log(count); // ReferenceError
```

---

## `const`

* Block scoped
* Cannot be redeclared
* Cannot be reassigned
* Hoisted but remains in TDZ

```js
const count = 10;

// count = 20; // TypeError
```

### Important: `const` does NOT make objects immutable

```js
const user = {
  name: "Pradeep"
};

user.name = "Rahul"; // Allowed

console.log(user);
// { name: "Rahul" }
```

But reassignment is not allowed:

```js
// user = {}; // TypeError
```

---

# 3. Scope

JavaScript has several important types of scope:

* Global Scope
* Function Scope
* Block Scope
* Module Scope

### Example

```js
var count = 10;

function example() {

  if (true) {
    var count = 20;
    let count1 = 30;
    const count2 = 40;

    console.log(count);  // 20
    console.log(count1); // 30
    console.log(count2); // 40
  }

  console.log(count); 
  // 20

  // count1 and count2 are not accessible here
}
```

### Interview Point

> `var` is function-scoped, whereas `let` and `const` are block-scoped.

---

# 4. `null` vs `undefined`

## `null`

`null` represents an **intentional absence of a value**.

```js
let user = null;

console.log(user); // null
```

Meaning:

> "There is currently no value here intentionally."

---

## `undefined`

`undefined` usually means a variable has been declared but no value has been assigned.

```js
let user;

console.log(user); // undefined
```

### Important Interview Trap

```js
typeof null
```

Output:

```js
"object"
```

This is a historical JavaScript behavior/bug.

```js
typeof undefined
```

Output:

```js
"undefined"
```

### Quick Difference

| `null`                     | `undefined`                        |
| -------------------------- | ---------------------------------- |
| Intentional absence        | Value not assigned                 |
| Assigned explicitly        | Usually occurs automatically       |
| `typeof null` → `"object"` | `typeof undefined` → `"undefined"` |

---

# 5. `==` vs `===`

## Loose Equality — `==`

Performs **type coercion** before comparison.

```js
console.log(1 == "1");
// true

console.log(true == 1);
// true
```

JavaScript converts values before comparing them.

---

## Strict Equality — `===`

Compares both:

1. Type
2. Value

No implicit type coercion.

```js
console.log(1 === "1");
// false

console.log(true === 1);
// false
```

### Interview Recommendation

Prefer:

```js
===
```

over:

```js
==
```

unless you specifically need loose equality behavior.

---

# 6. Truthy and Falsy Values

JavaScript converts values to boolean in certain contexts.

### Falsy Values

The main falsy values are:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is generally **truthy**, including:

```js
[]
{}
"0"
"false"
```

### Example

```js
if ("hello") {
  console.log("Runs");
}
```

Output:

```text
Runs
```

---

# 7. Short-Circuit Evaluation

JavaScript's logical operators can stop evaluating as soon as the result is known.

## `&&`

If the first value is falsy, JavaScript does not evaluate the second expression.

```js
let result = false && someFunction();

console.log(result);
// false
```

`someFunction()` is never called.

---

## `||`

If the first value is truthy, JavaScript does not evaluate the second expression.

```js
let result = true || someFunction();

console.log(result);
// true
```

`someFunction()` is never called.

---

## Practical Example

```js
const username = userName || "Guest";
```

If `userName` is falsy:

```js
username = "Guest";
```

---

# 8. Nullish Coalescing Operator `??`

`??` is similar to `||`, but it only checks:

```js
null
undefined
```

Example:

```js
const age = 0;

console.log(age || 18);
// 18

console.log(age ?? 18);
// 0
```

### Important Difference

```js
||  → checks all falsy values

??  → checks only null and undefined
```

This is an important modern JavaScript interview topic.

---

# 9. Spread Operator `...`

The spread operator expands an iterable/object into individual elements/properties.

## Array

```js
const array = [1, 2, 3, 4];

console.log(...array);
```

Output:

```text
1 2 3 4
```

---

# 10. Copying Arrays

## Reference Assignment

This does **not** create a new array.

```js
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);
// [1, 2, 3, 4]

console.log(arr2);
// [1, 2, 3, 4]
```

Both variables point to the same array.

```js
console.log(arr1 === arr2);
// true
```

---

## Shallow Copy

Using spread:

```js
const originalArray = [1, 2, 3];

const copiedArray = [...originalArray];

console.log(copiedArray);
// [1, 2, 3]

console.log(originalArray === copiedArray);
// false
```

Other ways:

```js
const copy1 = originalArray.slice();

const copy2 = Array.from(originalArray);

const copy3 = [].concat(originalArray);
```

### Important

These create a **shallow copy**, not a deep copy.

---

# 11. Shallow Copy vs Deep Copy

Consider:

```js
const original = [
  {
    name: "Pradeep"
  }
];

const copy = [...original];
```

The outer arrays are different:

```js
console.log(original === copy);
// false
```

But the nested object is still shared:

```js
console.log(original[0] === copy[0]);
// true
```

Therefore:

```js
copy[0].name = "Rahul";

console.log(original[0].name);
// Rahul
```

---

## Deep Copy

For many common JavaScript data structures:

```js
const copy = structuredClone(original);
```

Now nested objects are copied independently.

```js
copy[0].name = "Rahul";

console.log(original[0].name);
// Pradeep
```

### Interview Definition

> Shallow copy creates a new outer object while nested references may still be shared. Deep copy creates independent copies of nested objects as well.

---

# 12. Merging Arrays

The spread operator can merge arrays.

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);
// [1, 2, 3, 4, 5, 6, 7]
```

---

# 13. Passing Multiple Arguments to a Function

The spread operator can convert array elements into function arguments.

```js
const numbers = [1, 2, 3, 4, 5];

sum(...numbers);

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
```

Result:

```text
15
```

Conceptually:

```js
sum(...numbers);

// becomes

sum(1, 2, 3, 4, 5);
```

---

# 14. Rest Operator `...`

The same `...` syntax is called the **rest operator** when used in function parameters.

It collects remaining arguments into an array.

```js
function display(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

display(1, 2, 3, 4, 5);
```

Output:

```text
1
2
[3, 4, 5]
```

### Important Difference

```text
Spread → expands

Rest   → collects
```

Example:

```js
// Spread
const arr = [1, 2, 3];
console.log(...arr);

// Rest
function test(...args) {
  console.log(args);
}
```

---

# 15. Destructuring

Destructuring allows us to extract values from arrays and objects.

## Array Destructuring

```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

Skip values:

```js
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
```

---

## Object Destructuring

```js
const user = {
  name: "Pradeep",
  age: 21
};

const { name, age } = user;

console.log(name); // Pradeep
console.log(age);  // 21
```

---

# 16. Hoisting

JavaScript moves certain declarations to the top of their scope during the creation phase.

## `var`

```js
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

Conceptually:

```js
var x;

console.log(x);

x = 10;
```

---

## `let` and `const`

```js
console.log(x);

let x = 10;
```

This gives:

```text
ReferenceError
```

because of the **Temporal Dead Zone (TDZ)**.

---

## Function Declaration

Function declarations are hoisted.

```js
greet();

function greet() {
  console.log("Hello");
}
```

Works.

---

# 17. Temporal Dead Zone — TDZ

The TDZ is the period between entering a scope and the point where a `let` or `const` variable is initialized.

```js
console.log(name); // ReferenceError

let name = "Pradeep";
```

Interview answer:

> `let` and `const` are hoisted, but they cannot be accessed before initialization because they are in the Temporal Dead Zone.

---

# 18. Pass by Value vs Reference

JavaScript is technically **pass-by-value**.

For objects, the value being passed is a **reference to the object**.

### Primitive

```js
let a = 10;

function change(x) {
  x = 20;
}

change(a);

console.log(a);
// 10
```

---

### Object

```js
const user = {
  name: "Pradeep"
};

function change(obj) {
  obj.name = "Rahul";
}

change(user);

console.log(user.name);
// Rahul
```

The function receives a copy of the reference, which still points to the same object.

---

# 19. Immutability

Immutable means the original value cannot be changed.

Primitive values are immutable.

```js
let name = "Pradeep";

name[0] = "R";

console.log(name);
// Pradeep
```

For arrays and objects, mutation is possible:

```js
const numbers = [1, 2, 3];

numbers.push(4);
```

To avoid mutation, create a new array:

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

console.log(numbers);
// [1, 2, 3]

console.log(newNumbers);
// [1, 2, 3, 4]
```

This concept is particularly important in **React**.

---

# 20. `typeof` Operator

`typeof` tells you the type of a value.

```js
typeof "hello"
// "string"

typeof 10
// "number"

typeof true
// "boolean"

typeof undefined
// "undefined"

typeof {}
// "object"

typeof []
// "object"

typeof function() {}
// "function"
```

### Important Interview Trap

```js
typeof null
// "object"
```

Also:

```js
Array.isArray([])
// true
```

Because:

```js
typeof []
// "object"
```

So use:

```js
Array.isArray(value)
```

to check whether something is an array.

---

# 21. `NaN`

`NaN` means **Not-a-Number**.

```js
const result = "hello" / 2;

console.log(result);
// NaN
```

Interesting:

```js
typeof NaN
// "number"
```

To check:

```js
Number.isNaN(value)
```

Example:

```js
Number.isNaN(NaN);
// true
```

---

# 22. Important Equality Traps

```js
console.log([] == false);
// true

console.log([] === false);
// false
```

Why?

`==` performs type coercion.

Another classic:

```js
console.log(null == undefined);
// true

console.log(null === undefined);
// false
```

This is one reason `===` is generally preferred.

---

# 23. Optional Chaining `?.`

Optional chaining safely accesses nested properties.

Without it:

```js
const city = user.address.city;
```

If `address` doesn't exist, you'll get an error.

With optional chaining:

```js
const city = user?.address?.city;
```

If something doesn't exist:

```js
undefined
```

This is heavily used in modern JavaScript and React.

---

# 24. Default Parameters

You can provide default values for function parameters.

```js
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
// Hello Guest

greet("Pradeep");
// Hello Pradeep
```

---

# 25. Important Interview Summary

| Concept             | Key Point                                        |   |                          |
| ------------------- | ------------------------------------------------ | - | ------------------------ |
| Primitive           | Single immutable value                           |   |                          |
| Object              | Reference-based data structure                   |   |                          |
| `var`               | Function scoped                                  |   |                          |
| `let`               | Block scoped, reassignable                       |   |                          |
| `const`             | Block scoped, cannot reassign                    |   |                          |
| `null`              | Intentional absence of value                     |   |                          |
| `undefined`         | Value not assigned                               |   |                          |
| `==`                | Loose equality + coercion                        |   |                          |
| `===`               | Strict equality                                  |   |                          |
| `&&`                | Short-circuits on falsy                          |   |                          |
| `                   |                                                  | ` | Short-circuits on truthy |
| `??`                | Checks `null` / `undefined`                      |   |                          |
| Spread              | Expands values                                   |   |                          |
| Rest                | Collects values                                  |   |                          |
| `[...arr]`          | Shallow copy                                     |   |                          |
| `structuredClone()` | Deep copy for supported values                   |   |                          |
| Destructuring       | Extract values from arrays/objects               |   |                          |
| Hoisting            | Declarations processed before execution          |   |                          |
| TDZ                 | `let`/`const` inaccessible before initialization |   |                          |
| `typeof`            | Returns type information                         |   |                          |
| `Array.isArray()`   | Checks for arrays                                |   |                          |
| `?.`                | Optional chaining                                |   |                          |
| `NaN`               | Not-a-Number value                               |   |                          |

---

# Most Important Interview Questions From This Section

Before moving to advanced JavaScript, you should be able to answer these without looking at notes:

1. What is the difference between primitive and non-primitive data types?
2. Why are arrays considered objects in JavaScript?
3. Difference between `var`, `let`, and `const`?
4. What is function scope vs block scope?
5. What is hoisting?
6. What is the Temporal Dead Zone?
7. Difference between `null` and `undefined`?
8. Why does `typeof null` return `"object"`?
9. Difference between `==` and `===`?
10. What are truthy and falsy values?
11. What is short-circuit evaluation?
12. Difference between `||` and `??`?
13. What is the spread operator?
14. What is the rest operator?
15. Difference between spread and rest?
16. What is a shallow copy?
17. What is a deep copy?
18. Why does `[...arr]` not completely clone nested objects?
19. What is the difference between `const arr = arr1` and `const arr = [...arr1]`?
20. Is JavaScript pass-by-value or pass-by-reference?
21. What is immutability?
22. What is `NaN`?
23. How do you check whether a value is an array?
24. What is optional chaining?
25. What is destructuring?
