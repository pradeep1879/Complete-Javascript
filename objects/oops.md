# JavaScript OOP — Interview Notes

Object-Oriented Programming (OOP) is a programming approach where we organize code around **objects** that contain:

* Data → properties
* Behavior → methods

JavaScript supports OOP using:

```text
Constructor Functions
        ↓
Prototypes
        ↓
ES6 Classes
        ↓
Inheritance
        ↓
Encapsulation
        ↓
Polymorphism
        ↓
Abstraction
```

---

# 1. Constructor Functions

Before ES6 classes, JavaScript commonly used constructor functions to create multiple similar objects.

```js
function Student(name, age) {
  this.name = name;
  this.age = age;

  this.introduceMyself = function () {
    console.log(
      `My name is ${this.name} and my age is ${this.age}`
    );
  };
}
```

Create objects using `new`:

```js
const s1 = new Student("MKL", 20);
const s2 = new Student("Pradeep", 22);

s1.introduceMyself();
// My name is MKL and my age is 20

s2.introduceMyself();
// My name is Pradeep and my age is 22
```

---

# 2. What Does `new` Do?

This is a very common interview question.

When you write:

```js
const s1 = new Student("Pradeep", 22);
```

JavaScript roughly does the following:

```text
1. Creates a new empty object

2. Sets the object's prototype to Student.prototype

3. Calls Student with `this` referring to the new object

4. Returns the new object
```

Conceptually:

```js
const s1 = {};
s1.__proto__ = Student.prototype;

Student.call(s1, "Pradeep", 22);
```

The actual specification is more detailed, but this is a useful interview mental model.

---

# 3. `this` in Constructor Functions

Inside a constructor function:

```js
function Student(name, age) {
  this.name = name;
  this.age = age;
}
```

`this` refers to the **new object being created** when called with `new`.

```js
const student = new Student("Pradeep", 22);
```

So:

```js
this.name = name;
```

becomes conceptually:

```js
student.name = "Pradeep";
```

---

# 4. Problem with Methods Inside Constructor

Consider:

```js
function Student(name, age) {
  this.name = name;
  this.age = age;

  this.introduceMyself = function () {
    console.log(`My name is ${this.name}`);
  };
}
```

Every new student gets a **new function object**.

```js
const s1 = new Student("A", 20);
const s2 = new Student("B", 21);

console.log(
  s1.introduceMyself === s2.introduceMyself
);

// false
```

This can waste memory when many objects are created.

A better approach is to use the **prototype**.

---

# 5. Prototype

JavaScript objects can inherit properties and methods from another object called a **prototype**.

```js
function BankAccount(holderName, balance = 0) {
  this.holderName = holderName;
  this.balance = balance;
}
```

Instead of putting methods inside the constructor:

```js
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
```

Now:

```js
const b1 = new BankAccount("Pradeep", 100);

b1.deposit(500);
b1.withdraw(200);

console.log(b1.balance);
// 400
```

---

# 6. Why Use Prototype?

Suppose we create:

```js
const b1 = new BankAccount("A", 100);
const b2 = new BankAccount("B", 200);
```

Both objects can use:

```js
b1.deposit();
b2.deposit();
```

But there is only **one shared `deposit` function** on the prototype.

```text
BankAccount.prototype
        │
        ├── deposit()
        │
        └── withdraw()
          ↑       ↑
          │       │
         b1      b2
```

### Interview Answer

> Prototypes allow objects to share methods instead of creating a separate copy of every method for every object.

---

# 7. Prototype Chain

When JavaScript tries to access a property:

```js
b1.deposit
```

it first checks:

```text
b1
 ↓
Does b1 have deposit?
 ↓
No
 ↓
Check b1's prototype
 ↓
BankAccount.prototype
 ↓
Found deposit()
```

This lookup continues through the **prototype chain** until the property is found or the chain ends.

Example:

```js
console.log(b1.hasOwnProperty("deposit"));
// false
```

Because `deposit` belongs to the prototype, not directly to `b1`.

---

# 8. `prototype` vs `__proto__`

This is a common interview question.

### `prototype`

Functions used as constructors have a:

```js
Student.prototype
```

property.

It is the object that instances can inherit from.

### `__proto__`

An object has a prototype relationship accessible through:

```js
obj.__proto__
```

Although `__proto__` exists for compatibility, modern code generally prefers:

```js
Object.getPrototypeOf(obj);
```

Example:

```js
const b1 = new BankAccount("Pradeep", 100);

console.log(
  Object.getPrototypeOf(b1) === BankAccount.prototype
);

// true
```

---

# 9. ES6 Classes

Modern JavaScript provides `class` syntax.

```js
class Car {
  constructor(name, color, mileage) {
    this.name = name;
    this.color = color;
    this.mileage = mileage;
  }

  start() {
    console.log(`${this.name} is starting...`);
  }

  stop() {
    console.log(`${this.name} is stopping...`);
  }
}
```

Create objects:

```js
const BMWCar = new Car("BMW", "Dark Blue", 10);
const AudiCar = new Car("Audi", "Dark Black", 15);

BMWCar.start();
// BMW is starting...

AudiCar.stop();
// Audi is stopping...
```

---

# 10. Are Classes Different From Prototypes?

Important interview question.

Classes provide a cleaner syntax for working with JavaScript's **prototype-based inheritance**.

```js
class Car {
  start() {
    console.log("Starting...");
  }
}
```

The `start()` method is placed on:

```js
Car.prototype
```

So:

```js
const car = new Car();

console.log(
  car.start === Car.prototype.start
);

// true
```

### Interview Answer

> JavaScript classes are primarily syntactic sugar over JavaScript's prototype-based object model. Class methods are stored on the prototype rather than being recreated for every instance.

---

# 11. Encapsulation

Encapsulation means **bundling data and behavior together while controlling access to internal data**.

Example:

```js
class BankAccount {
  #balance;

  constructor(holderName, balance = 0) {
    this.holderName = holderName;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

Use it:

```js
const account = new BankAccount("Pradeep", 1000);

account.deposit(500);

console.log(account.getBalance());
// 1500
```

This will fail:

```js
console.log(account.#balance);
// SyntaxError
```

because `#balance` is a **private class field**.

---

# 12. Private Fields — `#`

Modern JavaScript supports private fields using `#`.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }
}
```

The field can only be accessed from inside the class.

```js
const account = new BankAccount();

account.deposit(500);
```

But:

```js
account.#balance;
// ❌ Cannot access private field
```

### Interview Point

`#balance` provides actual language-level private access.

---

# 13. Getters and Setters

Your original example uses:

```js
set Balance()
get Balance()
```

These are **setters and getters**.

A cleaner version:

```js
class BankAccount {
  #balance;

  constructor(holderName, balance = 0) {
    this.holderName = holderName;
    this.#balance = balance;
  }

  set balance(amount) {
    if (typeof amount !== "number" || Number.isNaN(amount)) {
      console.error("Invalid balance");
      return;
    }

    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}
```

Use them like properties:

```js
const account = new BankAccount("Pradeep", 1000);

account.balance = 999;

console.log(account.balance);
// 999
```

Notice:

```js
account.balance
```

not:

```js
account.balance()
```

because getters/setters behave like properties.

---

# 14. Abstraction

Abstraction means:

> Hide unnecessary implementation details and expose only what the user needs.

For example:

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance += amount;
  }

  #validateAmount(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
  }
}
```

The user only needs:

```js
account.deposit(500);
```

They don't need to know how validation or balance updates work internally.

### Interview Difference

```text
Encapsulation
→ Controls access to data/implementation

Abstraction
→ Hides unnecessary implementation details
```

They are related, but not identical.

---

# 15. Inheritance

Inheritance allows one class to reuse properties and methods from another class.

Example:

```js
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }

  stop() {
    console.log(`${this.brand} is stopping...`);
  }
}
```

Create child class:

```js
class ElectricCar extends Car {
  constructor(brand, color, battery) {
    super(brand, color);

    this.battery = battery;
  }

  charging() {
    console.log(`${this.brand} is charging...`);
  }
}
```

Create object:

```js
const tesla = new ElectricCar(
  "Tesla X",
  "Space Gray",
  "100kW"
);
```

Now:

```js
tesla.charging();
// Tesla X is charging...

tesla.start();
// Tesla X is starting...

tesla.stop();
// Tesla X is stopping...
```

---

# 16. `extends`

```js
class ElectricCar extends Car
```

means:

```text
ElectricCar
      ↓
inherits from
      ↓
Car
```

Therefore `ElectricCar` gets access to methods defined by `Car`.

---

# 17. `super()`

When a child class has its own constructor, it must call:

```js
super();
```

before using `this`.

```js
class ElectricCar extends Car {
  constructor(brand, color, battery) {
    super(brand, color);

    this.battery = battery;
  }
}
```

`super(brand, color)` calls the parent constructor.

Conceptually:

```text
ElectricCar constructor
        ↓
super()
        ↓
Car constructor
        ↓
brand + color initialized
        ↓
ElectricCar continues
        ↓
battery initialized
```

---

# 18. Method Overriding

A child class can provide its own implementation of a parent method.

```js
class Car {
  start() {
    console.log("Car is starting");
  }
}

class ElectricCar extends Car {
  start() {
    console.log("Electric car is starting silently");
  }
}
```

Now:

```js
const car = new Car();
const electricCar = new ElectricCar();

car.start();
// Car is starting

electricCar.start();
// Electric car is starting silently
```

This is called **method overriding**.

---

# 19. Polymorphism

Polymorphism means:

> The same method/interface can behave differently depending on the object.

Example:

```js
class MediaPlayer {
  play() {
    console.log("Play media");
  }
}

class Music extends MediaPlayer {
  play() {
    console.log("Play music");
  }
}

class Video extends MediaPlayer {
  play() {
    console.log("Play video");
  }
}
```

Now:

```js
const media = new MediaPlayer();
const music = new Music();
const video = new Video();

media.play();
// Play media

music.play();
// Play music

video.play();
// Play video
```

The method is the same:

```js
play()
```

but behavior changes depending on the object.

---

# 20. Your Original Polymorphism Example

You had:

```js
class Video extends Music
```

This technically works, but conceptually it is not a good inheritance relationship.

A video is not a type of music.

Better:

```js
class MediaPlayer {
  play() {
    console.log("Play media");
  }
}

class Music extends MediaPlayer {
  play() {
    console.log("Play music");
  }
}

class Video extends MediaPlayer {
  play() {
    console.log("Play video");
  }
}
```

Now the relationship is:

```text
          MediaPlayer
          /         \
         /           \
      Music         Video
```

This is a better example of polymorphism.

---

# 21. `this` in Classes

Inside a class method:

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}
```

When called as:

```js
const user = new User("Pradeep");

user.greet();
```

`this` refers to:

```text
user
```

So:

```js
this.name
```

means:

```js
user.name
```

---

# 22. Four Pillars of OOP

A common interview question:

### What are the four pillars of OOP?

```text
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism
```

### Encapsulation

Bundle data and methods together and control access.

```js
class BankAccount {
  #balance;
}
```

### Abstraction

Hide implementation complexity.

```js
account.deposit(500);
```

The caller doesn't need to know the internal implementation.

### Inheritance

Reuse behavior from another class.

```js
class ElectricCar extends Car {}
```

### Polymorphism

Same method, different behavior.

```js
music.play();
video.play();
```

---

# 23. Constructor Function vs Class

| Constructor Function                    | Class                                     |
| --------------------------------------- | ----------------------------------------- |
| Older/common pre-ES6 pattern            | Modern syntax                             |
| Uses `function`                         | Uses `class`                              |
| Uses `.prototype` manually              | Prototype methods handled by class syntax |
| Uses `new`                              | Uses `new`                                |
| Supports inheritance through prototypes | Uses `extends` / `super`                  |

Example:

### Constructor Function

```js
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(this.name);
};
```

### Class

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}
```

Both use JavaScript's prototype-based object model.

---

# 24. Static Methods

A static method belongs to the **class itself**, not its instances.

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
```

Call:

```js
console.log(MathUtils.add(10, 20));
// 30
```

But:

```js
const math = new MathUtils();

math.add(10, 20);
// ❌ TypeError
```

Because `add()` is static.

---

# 25. Instance vs Static

```js
class User {
  static createAdmin() {
    return new User("Admin");
  }

  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}
```

Usage:

```js
const user = new User("Pradeep");

user.greet();
// Pradeep
```

Static:

```js
const admin = User.createAdmin();
```

Think:

```text
Instance method
→ object.method()

Static method
→ Class.method()
```

---

# 26. `instanceof`

`instanceof` checks whether an object is an instance of a particular constructor/class through the prototype chain.

```js
class Car {}

class ElectricCar extends Car {}

const tesla = new ElectricCar();

console.log(tesla instanceof ElectricCar);
// true

console.log(tesla instanceof Car);
// true

console.log(tesla instanceof Object);
// true
```

This is useful for understanding inheritance and prototypes.

---

# 27. Important Interview Concepts

### Object

```js
const user = {
  name: "Pradeep"
};
```

### Constructor

```js
constructor(name) {
  this.name = name;
}
```

### Instance

```js
const user = new User("Pradeep");
```

### Prototype

```js
User.prototype
```

### Inheritance

```js
class Admin extends User {}
```

### Private field

```js
#balance
```

### Getter

```js
get balance() {}
```

### Setter

```js
set balance(value) {}
```

### Static method

```js
static create() {}
```

### Method overriding

```js
class Child extends Parent {
  method() {}
}
```

---

# 28. Common Interview Questions

## Beginner

1. What is OOP?
2. What is an object?
3. What is a constructor?
4. What is a constructor function?
5. What does the `new` keyword do?
6. What is `this`?
7. What is a class?
8. How do you create an instance of a class?

## Intermediate

9. What is a prototype?
10. What is the prototype chain?
11. Why do we use prototypes?
12. Difference between `prototype` and `__proto__`?
13. Are JavaScript classes actually classes internally?
14. What is inheritance?
15. What does `extends` do?
16. What does `super()` do?
17. What is method overriding?
18. What is polymorphism?
19. What is encapsulation?
20. What is abstraction?

## Advanced

21. What are private class fields?
22. What are getters and setters?
23. What are static methods?
24. Difference between instance and static methods?
25. What does `instanceof` do?
26. How does property lookup work through the prototype chain?
27. Why are prototype methods more memory-efficient?
28. What happens internally when `new` is used?
29. How does `this` behave in class methods?
30. Why is inheritance called an "is-a" relationship?

---

# 29. Most Important Mental Model

Remember this:

```text
                 JavaScript Object
                        │
                        ↓
                  Own Properties
                        │
                        ↓
                   [[Prototype]]
                        │
                        ↓
                Parent Prototype
                        │
                        ↓
                Object.prototype
                        │
                        ↓
                      null
```

When JavaScript can't find a property on the object, it looks up the **prototype chain**.

---

# 30. OOP Interview Summary

```text
Constructor Function
        ↓
Creates objects using `new`

new
        ↓
Creates object + connects prototype + calls constructor

Prototype
        ↓
Shared properties/methods

Class
        ↓
Cleaner syntax over prototype-based OOP

Encapsulation
        ↓
Bundle + control access

Abstraction
        ↓
Hide unnecessary complexity

Inheritance
        ↓
Reuse parent behavior

extends
        ↓
Create child class

super()
        ↓
Call parent constructor/method

Polymorphism
        ↓
Same method, different behavior

Private Field
        ↓
#balance

Getter
        ↓
get balance()

Setter
        ↓
set balance()

Static
        ↓
Belongs to class, not instance
```

## Interview Golden Rule

If the interviewer asks:

> **"Does JavaScript support OOP?"**

A good answer is:

> **Yes. JavaScript supports object-oriented programming through objects, prototypes, constructor functions, and classes. JavaScript is fundamentally prototype-based, while the `class` syntax provides a cleaner way to work with that prototype-based model. It supports concepts such as encapsulation, inheritance, polymorphism, and abstraction.**
