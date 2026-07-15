const fs = require("fs");

/*
=========================================================
                NODE.JS FILE SYSTEM (fs)
=========================================================

The fs module is a built-in Node.js module used for
working with files.

Common operations:
- readFile()   -> Read a file
- writeFile()  -> Write data into a file
- appendFile() -> Append data
- unlink()     -> Delete a file
- mkdir()      -> Create directory

readFile() is asynchronous.
It does NOT block the execution of the remaining code.
*/

fs.readFile("a.txt", "utf-8", (err, content) => {
    // err contains error information if reading fails
    // content contains the file data if reading succeeds

    if(err){
      console.log("Error while the reading the file", err);
    }else{
      console.log(content);
    }
});

/*
=========================================================
            PROMISIFIED setTimeout()
=========================================================

Normally setTimeout() accepts a callback.

Example:
setTimeout(callback, 3000)

Here we convert it into a Promise so that it can be
used with .then() or await.
*/

function setTimeoutPromisified(ms){
  // Promise resolves after 'ms' milliseconds
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function callback(){
  console.log("hi there from callback")
}

// Waits for 3 seconds
setTimeoutPromisified(3000).then(callback)



/*
=========================================================
        PROMISIFIED VERSION OF fs.readFile()
=========================================================

Instead of using callback-based readFile(),
we wrap it inside a Promise.

Benefits:
✔ Cleaner code
✔ Can use .then()
✔ Can use async/await
*/

function fsReadFilePromisified(filePath, encoding) {
  return new Promise((resolve, reject) => {

    fs.readFile(filePath, encoding, (err, content) => {

      if (err) {
        // Reject promise if error occurs
        reject(err);
      } else {
        // Resolve promise with file contents
        resolve(content);
      }

    });

  });
}

function callback(data) {
  console.log(data);
}

function callbackError(err) {
  console.log("Error while reading the file", err);
}

/*
Reads ab.txt

If successful:
    callback()

If failed:
    callbackError()
*/

fsReadFilePromisified("ab.txt", "utf-8")
.then(callback)
.catch(callbackError);



/**
 * =========================================================
 * Question
 * =========================================================
 *
 * 1. logs `hi` after 1 second
 * 2. logs `hello` 3 seconds after step 1
 * 3. logs `hello there` 5 seconds after step 2
 *
 */



function setTimeoutPromisified(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

/*
=========================================================
        Promise Chaining (Nested Version)
=========================================================

Execution Flow:

1 second
   ↓
"hi"

3 more seconds
   ↓
"hello"

5 more seconds
   ↓
"hello there"

This works but creates nested Promises
(similar to callback nesting).
*/

setTimeoutPromisified(1000).then(function (){

  console.log("hi");

    setTimeoutPromisified(3000).then(function () {

      console.log("hello");

      setTimeoutPromisified(5000).then(function () {

        console.log("hello there");

      });

    });

});



/*
=========================================================
        Proper Promise Chaining
=========================================================

Every .then() returns another Promise.

Returning the next Promise makes the code
flat and much easier to read.

Execution:

1 second
↓

hi

3 more seconds
↓

hello

5 more seconds
↓

hello there
*/

setTimeoutPromisified(1000)

  .then(function () {

    console.log("hi");

    return setTimeoutPromisified(3000)

  })

  .then(function () {

    console.log("hello");

    return setTimeoutPromisified(5000)

  })

  .then(function () {

    console.log("hello there");

  })



/**
 *
 ===========================================================
 Question
 ===========================================================

  Write a function that

  1. Reads the contents of a file
  2. Trims extra spaces from left and right
  3. Writes it back into the same file

 */



/*
=========================================================
        Callback Version
=========================================================

Steps:

1. Read file
2. Trim spaces using trim()
3. Write updated content back
4. Execute callback after writing
*/

function readFileAndTrim(filePath, encoding, callback){

    fs.readFile(filePath, encoding, (err, data) => {

      if(err){

        console.log("Error while reading the file", err);
        return;

      }else{

        // Removes spaces from beginning and end
        newData = data.trim();

      }

    fs.writeFile(filePath, newData, () => {

        // Notify caller that work is completed
        callback();

      });

    });

}


function onDone(){

    console.log("File cleaned successfully!!");

}

readFileAndTrim("a.txt", "utf-8", onDone)



/*
=========================================================
        Promise Version
=========================================================

Instead of callback(),
resolve() is called after writing.

The caller can use

.then()

or

await
*/

function readFileAndTrim2(filePath, encoding){

    return new Promise((resolve) => {

      fs.readFile(filePath, encoding, (err, data) =>{

        // Remove leading and trailing spaces
        newData = data.trim();

        fs.writeFile(filePath, newData, () =>{

          // Promise completed
          resolve()

        })

      })

    })

}



/*
=========================================================
            Async / Await
=========================================================

async function:
Returns a Promise automatically.

await:
Waits until Promise resolves.

Flow:

main()

↓

await readFileAndTrim2()

↓

Promise resolves

↓

Print "cleaned"
*/

async function main(){

    await readFileAndTrim2("a.txt", "utf-8")
    .then(() => console.log("cleaned"))

}

main();



/*
=========================================================
                IMPORTANT NOTES
=========================================================

1. Callback
-----------
A function passed as an argument to another function
and executed later.

Example:
setTimeout(callback, 1000)



2. Promise
----------
Represents the eventual completion or failure
of an asynchronous operation.

States:
- Pending
- Fulfilled
- Rejected



3. resolve()
------------
Marks Promise as successful.



4. reject()
-----------
Marks Promise as failed.



5. .then()
----------
Runs when Promise is fulfilled.



6. .catch()
-----------
Runs when Promise is rejected.



7. async
--------
Makes a function return a Promise automatically.



8. await
--------
Pauses execution until Promise is resolved.

Can only be used inside async functions.



9. trim()
---------
Removes whitespace from both ends of a string.

Example:

"   Hello   ".trim()

Result:

"Hello"



10. Asynchronous Programming
----------------------------
Node.js does not wait for long-running operations
like reading files or timers.

Instead, it registers a callback and continues
executing the remaining code.

Once the operation completes,
the callback (or Promise) is executed.
=========================================================
*/