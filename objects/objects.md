# JavaScript Interview Practice

## Objects

---

# 1. Create an Object

An object stores data in **key-value pairs**.

```js
const student = {
  name: "Shyam",
  age: 19,
  grade: "9th"
};
```

Here:

```text
name  → key
"Shyam" → value

age   → key
19    → value
```

### Interview Point

Objects are used to represent entities with properties and behaviors.

```js
const user = {
  name: "Pradeep",
  age: 21
};
```

---

# 2. Access Object Properties

There are two common ways to access properties.

## Dot Notation

```js
const car = {
  brand: "BMW",
  model: "X5"
};

console.log(car.brand);
// BMW

console.log(car.model);
// X5
```

---

## Bracket Notation

```js
console.log(car["brand"]);
// BMW

console.log(car["model"]);
// X5
```

### When should you use bracket notation?

Bracket notation is useful when the property name is stored in a variable.

```js
const property = "brand";

console.log(car[property]);
// BMW
```

This would NOT work the same way:

```js
console.log(car.property);
// undefined
```

Because JavaScript looks for a property literally named `"property"`.

---

# 3. Add a New Property

You can add a property using dot notation:

```js
const shape = {
  shape: "disk",
  radius: "10cm"
};

shape.color = "black";

console.log(shape);
```

Output:

```js
{
  shape: "disk",
  radius: "10cm",
  color: "black"
}
```

Or bracket notation:

```js
shape["color"] = "black";
```

---

# 4. Update a Property

If the property already exists, assigning a new value updates it.

```js
const student = {
  name: "Rohan",
  age: 20,
  grade: "10th"
};

student.age = 21;

console.log(student);
```

Output:

```js
{
  name: "Rohan",
  age: 21,
  grade: "10th"
}
```

### Important

The same syntax is used for both:

```js
object.newProperty = value; // Add

object.existingProperty = value; // Update
```

---

# 5. Delete a Property

Use the `delete` operator.

```js
const user = {
  username: "pradeep",
  email: "pradeep123@gmail.com",
  password: "pradeep123"
};

delete user.password;

console.log(user);
```

Output:

```js
{
  username: "pradeep",
  email: "pradeep123@gmail.com"
}
```

### Important Difference

This:

```js
user.password = undefined;
```

does **NOT** remove the property.

The property still exists.

```js
console.log("password" in user);
// true
```

But:

```js
delete user.password;

console.log("password" in user);
// false
```

---

# 6. Check if a Property Exists

There are several ways.

## `in` Operator

```js
const person = {
  name: "Alice",
  age: 25
};

console.log("name" in person);
// true

console.log("city" in person);
// false
```

`in` checks properties on the object **and its prototype chain**.

---

## `hasOwnProperty()`

```js
console.log(person.hasOwnProperty("name"));
// true

console.log(person.hasOwnProperty("city"));
// false
```

This checks whether the property belongs directly to the object.

### Modern safer approach

```js
Object.hasOwn(person, "name");
```

Example:

```js
console.log(Object.hasOwn(person, "name"));
// true
```

### Interview Difference

```text
in
↓
Own properties + inherited properties

hasOwnProperty / Object.hasOwn()
↓
Own properties only
```

---

# 7. Checking with `!== undefined`

You can technically do:

```js
console.log(person.city !== undefined);
// false
```

But this is **not the best way** to check whether a property exists.

Why?

Because the property could exist and explicitly contain `undefined`.

```js
const user = {
  name: "Pradeep",
  city: undefined
};

console.log(user.city !== undefined);
// false

console.log("city" in user);
// true
```

Therefore, prefer:

```js
Object.hasOwn(user, "city");
```

when you need to know whether the property actually exists on the object.

---

# 8. Clone / Copy an Object

There are several approaches.

## Spread Syntax

```js
const originalObject = {
  name: "Happy",
  age: 25,
  city: "Jaipur"
};

const clonedObject = {
  ...originalObject
};
```

This creates a **shallow copy**.

```js
console.log(originalObject === clonedObject);
// false
```

---

## `Object.assign()`

```js
const clonedObjectAssign = Object.assign(
  {},
  originalObject
);
```

Also creates a **shallow copy**.

---

# 9. Shallow Copy

Consider:

```js
const person = {
  name: "Happy",
  age: 25,
  address: {
    city: "Delhi",
    country: "India"
  }
};
```

Create a shallow copy:

```js
const shallowCopy = {
  ...person
};
```

The outer objects are different:

```js
console.log(person === shallowCopy);
// false
```

But the nested object is shared:

```js
console.log(person.address === shallowCopy.address);
// true
```

Therefore:

```js
shallowCopy.address.city = "Mumbai";

console.log(person.address.city);
// Mumbai
```

### Why?

Both objects point to the same nested `address` object.

```text
person
  │
  ├── name
  ├── age
  │
  └── address ───────┐
                     ↓
                  Object
                  city: Delhi
                     ↑
  ┌──────────────────┘
  │
shallowCopy
```

---

# 10. Deep Copy

A deep copy creates independent copies of nested objects as well.

Modern approach:

```js
const person = {
  name: "Happy",
  age: 25,
  address: {
    city: "Delhi",
    country: "India"
  }
};

const deepCopy = structuredClone(person);

deepCopy.address.city = "Jaipur";

console.log(person.address.city);
// Delhi

console.log(deepCopy.address.city);
// Jaipur
```

Now:

```js
console.log(person.address === deepCopy.address);
// false
```

---

# 11. JSON Deep Copy

You may also see:

```js
const deepCopy = JSON.parse(
  JSON.stringify(person)
);
```

This works for simple JSON-compatible objects.

However, it has limitations with values such as:

* `undefined`
* functions
* `Symbol`
* `BigInt`
* certain object types
* special numeric values

Therefore, for modern JavaScript:

```js
structuredClone()
```

is generally preferable when its supported data types meet your needs.

---

# 12. Shallow vs Deep Copy — Interview Question

### Shallow Copy

```js
const copy = {
  ...original
};
```

Creates a new outer object, but nested objects can still share references.

### Deep Copy

```js
const copy = structuredClone(original);
```

Creates independent nested objects as well.

### Interview Answer

> A shallow copy copies only the first level of an object, so nested objects still share references. A deep copy creates independent copies of nested objects too.

---

# 13. Iterate Over an Object

## `for...in`

```js
const person = {
  name: "Sohan",
  age: 20,
  height: "165cm",
  weight: "60kg"
};

for (const key in person) {
  if (Object.hasOwn(person, key)) {
    console.log(key, person[key]);
  }
}
```

Output:

```text
name Sohan
age 20
height 165cm
weight 60kg
```

### Why `person[key]`?

Because `key` contains the property name.

```js
key = "name";
```

Therefore:

```js
person[key]
```

means:

```js
person["name"]
```

---

# 14. `Object.keys()`

Returns an array containing the object's own enumerable property names.

```js
const person = {
  name: "Sohan",
  age: 20
};

console.log(Object.keys(person));
```

Output:

```js
["name", "age"]
```

You can iterate:

```js
for (const key of Object.keys(person)) {
  console.log(key, person[key]);
}
```

---

# 15. `Object.values()`

Returns an array containing the object's values.

```js
const person = {
  name: "Sohan",
  age: 20
};

console.log(Object.values(person));
```

Output:

```js
["Sohan", 20]
```

---

# 16. `Object.entries()`

Returns an array of `[key, value]` pairs.

```js
const person = {
  name: "Sohan",
  age: 20
};

console.log(Object.entries(person));
```

Output:

```js
[
  ["name", "Sohan"],
  ["age", 20]
]
```

Very useful for iteration:

```js
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

---

# 17. `Object.keys()` vs `Object.values()` vs `Object.entries()`

| Method                | Returns              |
| --------------------- | -------------------- |
| `Object.keys(obj)`    | Keys                 |
| `Object.values(obj)`  | Values               |
| `Object.entries(obj)` | `[key, value]` pairs |

Example:

```js
const user = {
  name: "Pradeep",
  age: 21
};
```

```js
Object.keys(user);
// ["name", "age"]

Object.values(user);
// ["Pradeep", 21]

Object.entries(user);
// [["name", "Pradeep"], ["age", 21]]
```

---

# 18. Add a Subject to a Student

### Problem

Given a student object, add a new subject with its grade.

Also check whether the `grades` property exists.

```js
const student = {
  name: "Pradeep",
  age: 21,
  grades: {
    math: "A",
    science: "B"
  }
};

function addSubject(student, subject, grade) {

  if (!Object.hasOwn(student, "grades")) {
    student.grades = {};
  }

  student.grades[subject] = grade;

  return student;
}

addSubject(student, "english", "A");

console.log(student);
```

Output:

```js
{
  name: "Pradeep",
  age: 21,
  grades: {
    math: "A",
    science: "B",
    english: "A"
  }
}
```

### Important Concept

Dynamic property names require bracket notation:

```js
student.grades[subject] = grade;
```

If:

```js
subject = "english";
```

then JavaScript effectively does:

```js
student.grades["english"] = "A";
```

---

# 19. Nested Object Access

Objects can contain other objects.

```js
const user = {
  name: "Pradeep",
  address: {
    city: "Jaipur",
    country: "India"
  }
};
```

Access:

```js
console.log(user.address.city);
// Jaipur
```

Or:

```js
console.log(user["address"]["city"]);
// Jaipur
```

---

# 20. Optional Chaining

If you're not sure whether a nested property exists, use `?.`.

```js
const user = {};

console.log(user.address?.city);
// undefined
```

Without optional chaining:

```js
console.log(user.address.city);
// TypeError
```

Optional chaining prevents the error.

---

# 21. Object Destructuring

Instead of:

```js
const user = {
  name: "Pradeep",
  age: 21
};

console.log(user.name);
console.log(user.age);
```

You can destructure:

```js
const {
  name,
  age
} = user;

console.log(name);
console.log(age);
```

---

# 22. Rename During Destructuring

```js
const user = {
  name: "Pradeep",
  age: 21
};

const {
  name: userName,
  age: userAge
} = user;

console.log(userName);
// Pradeep

console.log(userAge);
// 21
```

---

# 23. Object Spread

Spread can copy and combine objects.

```js
const user = {
  name: "Pradeep",
  age: 21
};

const updatedUser = {
  ...user,
  age: 22
};

console.log(updatedUser);
```

Output:

```js
{
  name: "Pradeep",
  age: 22
}
```

This is commonly used in **React** because it allows you to create a new object instead of mutating the existing one.

---

# 24. Merge Objects

```js
const user = {
  name: "Pradeep"
};

const details = {
  age: 21,
  city: "Jaipur"
};

const mergedUser = {
  ...user,
  ...details
};

console.log(mergedUser);
```

Output:

```js
{
  name: "Pradeep",
  age: 21,
  city: "Jaipur"
}
```

### Duplicate Properties

The later value wins:

```js
const obj = {
  name: "Pradeep",
  age: 21
};

const updated = {
  ...obj,
  age: 22
};

console.log(updated.age);
// 22
```

---

# 25. Object Methods

Objects can contain functions.

```js
const user = {
  name: "Pradeep",

  greet() {
    console.log("Hello " + this.name);
  }
};

user.greet();
// Hello Pradeep
```

Here:

```js
this.name
```

refers to the `name` property of the object when the method is called as:

```js
user.greet();
```

---

# 26. `Object.freeze()`

`Object.freeze()` prevents changes to an object's properties at the first level.

```js
const user = {
  name: "Pradeep",
  age: 21
};

Object.freeze(user);

user.age = 22;

console.log(user.age);
// 21
```

### Important

`Object.freeze()` is **shallow**.

```js
const user = {
  name: "Pradeep",
  address: {
    city: "Jaipur"
  }
};

Object.freeze(user);

user.address.city = "Delhi";

console.log(user.address.city);
// Delhi
```

The nested object wasn't frozen.

---

# 27. `Object.seal()`

`Object.seal()` prevents:

* Adding properties
* Deleting properties

But existing properties can still be modified.

```js
const user = {
  name: "Pradeep",
  age: 21
};

Object.seal(user);

user.age = 22; // ✅ Allowed

user.city = "Jaipur"; // ❌ Not added

delete user.name; // ❌ Not deleted
```

### Difference

```text
Object.freeze()
→ Cannot add
→ Cannot delete
→ Cannot modify existing properties

Object.seal()
→ Cannot add
→ Cannot delete
→ Can modify existing properties
```

Both are shallow.

---

# 28. Object Reference Behavior

This is extremely important.

```js
const user1 = {
  name: "Pradeep"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
// Rahul
```

Why?

Both variables reference the same object.

```text
user1 ──────┐
            ↓
         Object
         name: Rahul
            ↑
user2 ──────┘
```

---

# 29. Object Comparison

Two separate objects with the same properties are not equal.

```js
const obj1 = {
  name: "Pradeep"
};

const obj2 = {
  name: "Pradeep"
};

console.log(obj1 === obj2);
// false
```

Because they are different objects in memory.

But:

```js
const obj1 = {
  name: "Pradeep"
};

const obj2 = obj1;

console.log(obj1 === obj2);
// true
```

Both references point to the same object.

---

# 30. Important Interview Cheat Sheet

```text
Object
→ collection of key-value pairs

obj.name
→ dot notation

obj["name"]
→ bracket notation

obj[key]
→ dynamic property access

obj.newProperty = value
→ add/update property

delete obj.property
→ remove property

property in obj
→ checks own + inherited properties

Object.hasOwn(obj, property)
→ checks own property

Object.keys(obj)
→ keys

Object.values(obj)
→ values

Object.entries(obj)
→ key-value pairs

{ ...obj }
→ shallow copy

Object.assign({}, obj)
→ shallow copy

structuredClone(obj)
→ deep copy for supported data

obj?.property
→ optional chaining

{ name, age } = user
→ destructuring

Object.freeze()
→ prevents first-level changes

Object.seal()
→ prevents adding/deleting
```

---

# Most Important Object Interview Questions

Before moving to advanced JavaScript, make sure you can answer these:

### Basic

1. What is an object in JavaScript?
2. How do you create an object?
3. What is the difference between dot and bracket notation?
4. How do you add a property?
5. How do you update a property?
6. How do you delete a property?
7. How do you check whether a property exists?

### Intermediate

8. Difference between `in` and `hasOwnProperty()`?
9. Difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?
10. What is object destructuring?
11. What is object spread?
12. How do you merge two objects?
13. What happens when two objects have the same property while merging?
14. What is a shallow copy?
15. What is a deep copy?
16. Why does `{ ...obj }` not perform a deep copy?
17. What is the difference between `Object.freeze()` and `Object.seal()`?
18. How does object reference assignment work?

### Advanced

19. What is the prototype chain?
20. What is `Object.create()`?
21. What is the difference between own and inherited properties?
22. What is `this` inside an object method?
23. How does `this` behave in arrow functions?
24. What are getters and setters?
25. What are property descriptors?
26. What is the difference between enumerable, writable, and configurable properties?
27. What is `Object.defineProperty()`?
28. How does JavaScript handle object memory/reference comparison?
29. How would you implement a deep clone?
30. What is the difference between an object and a `Map`?

---

# Key Mental Model

Remember this diagram:

```text
Primitive
   ↓
Copied by value

let a = 10;
let b = a;

a and b
↓
Independent values


Object / Array
   ↓
Reference-based

const a = { value: 10 };
const b = a;

a ──────┐
        ↓
      Object
        ↑
b ──────┘
```

And for copying:

```text
{ ...obj }
     ↓
Shallow Copy
     ↓
New outer object
     ↓
Nested references may be shared


structuredClone(obj)
     ↓
Deep Copy
     ↓
Nested objects copied independently
```
