//Ques.1 Create an Object
let student = { name: "Shyam", age: 19, grade: "9th" }


//Ques.2 Access Object Properties

let car = { brand: "BMW", model: "X5" };
console.log(car.brand)
console.log(car.model)


//Ques.3 Add a New Property(Add a property color to an existing object.)

let shape = {shape:"disk", radius:"10cm"}

shape.color = "black"
console.log(shape)

// -----------OR---------- //

shape["color"] = "black"

// Ques.4 Update a Property (Change the age of a person object from 20 to 21.)

let student1 =  { name: "Rohan", age: 20, grade: "10th" }

student1.age = 21

console.log(student1.age)
console.log(student1)

// Ques.5 Delete a Property(Remove the password property from a user object.)

let user = { username:"pradeep", email:"pradeep123@gmai.com", password:"pradeep123" }
delete user.password;
console.log(user)

user.password = undefined; // property still exists

// Ques.6 Iterate Over Object (Use a loop to print all keys and values of an object.)

let object1 = {name:"Sohan", age: 20, height:"165cm", weight:"60kg"}
for(let key in object1){
    if(object1.hasOwnProperty(key)){
        console.log(key, object1[key])
    }
}
for (let key of Object.keys(object1)) {
    console.log(key, object1[key]);
}

// 1: Given an object representing a student, write a function to add a
// new subject with its corresponding grade to the student's record.
// Also check if the grades property is present or not?



















 