/**
 *Ques1.Create a promise that:
  Resolves with "Success" after 2 seconds.
  Logs the result using .then().
 */



let p1 = new Promise((resolve, reject) =>{ 
  setTimeout(() => {
    resolve("Success")
  }, 2000);
});

p1.then((result) =>{
  console.log(result)
})

/**
 *Ques2. Create a promise that:
  Rejects with "Something went wrong" after 1 second.
  Handle the error using .catch().
 */


let p2 = new Promise((resolve, reject) => {
  setTimeout(() =>{
    reject("Something went wrong")
  },1000);
});

p2.
  then((res) =>{
    console.log(res)
  })
  .catch((result) =>{
    console.log(result)
  })


/**
 *Ques3. Conditional Promise
Write a function: (checkNumber(num))
Resolve if number is even → "Even Number"
Reject if number is odd → "Odd Number"
 */

function checkNumber(num){
  return new Promise((resolve, reject) =>{
    if(num % 2 == 0){
      resolve("Even Number")
    }else{
      reject("Odd Number")
    }
  });
}

checkNumber(1).then((res) =>{
  console.log(res)
}).catch((err) =>{
  console.log(err)
})


/**
 *Ques4. Promise Chaining

Create a promise that:
Resolves with 5
Then multiply by 2
Then add 10
Then log the final result
 */


p3 = new Promise((resolve, reject) =>{
  resolve(5);
})

p3.then((n) =>{
  console.log(n)
  return n * 2;
}).then((s) =>{
  console.log(s)
  return s + 10;
}).then((final) =>{
  console.log(final)
})


/**
 *Ques5. Delayed Calculator
Create a function:
add(a, b)

Returns a promise
Resolves after 1 second
Returns sum
Then chain multiple .then() calls.
 */


function sum(a, b){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(a + b);
    }, 1000)
  })
}

sum(3, 3).then((sum) =>{
  console.log(sum)
})

/**

 *Ques6. Transform Data
Promise resolves with:
{ name: "Pradeep", age: 22 }

Chain it to:
Add a new property isAdult
Convert name to uppercase
Return final object
 */


function oject(){
  let obj = {name: "Pradeep", age: 22}
  return new Promise((resolve, reject) =>{
    resolve(obj)
  })
}

oject()
  .then((obj) =>{
    obj.isAdult = obj.age >= 18;
    return obj;
  })
  .then((obj) =>{
    obj.name = obj.name.toUpperCase();
    return obj;
  })
  .then((final) =>{ 
    console.log(final)
  }) 


/**
 * Promise.all Practice

 *Ques7. Create 3 promises:
  One resolves in 1 second
  One resolves in 2 seconds
  One resolves in 3 seconds
  Use Promise.all() and log results.
 */


  