const fs = require("fs");



fs.readFile("a.txt", "utf-8", (err, content) => {
    if(err){
      console.log("Error while the reading the file", err);
    }else{
      console.log(content);
    }
});

function setTimeoutPromisified(ms){
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function callback(){
  console.log("hi there from callback")
}

setTimeoutPromisified(3000).then(callback)

// Promisified version of fsReadFile.

function fsReadFilePromisified(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
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

fsReadFilePromisified("ab.txt", "utf-8").then(callback).catch(callbackError);


/**
 * Q: Write code that**

1. logs `hi` after 1 second
2. logs `hello` 3 seconds after `step 1`
3. logs `hello there` 5 seconds after `step 2`

 */


function setTimeoutPromisified(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

setTimeoutPromisified(1000).then(function (){
  console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
});

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
  Q: Write a function that

  1. Reads the contents of a file
  2. Trims the extra space from the left and right
  3. Writes it back to the file

 */

  function readFileAndTrim(filePath, encoding, callback){
    fs.readFile(filePath, encoding, (err, data) => {
      if(err){
        console.log("Error while reading the file", err);
        return;
      }else{
        newData = data.trim();
      }
    fs.writeFile(filePath, newData, () => {
        callback();
      });
    });
  }


  function onDone(){
    console.log("File cleaned successfully!!");
  }

  readFileAndTrim("a.txt", "utf-8", onDone)


  function readFileAndTrim2(filePath, encoding){
    return new Promise((resolve) => {
      fs.readFile(filePath, encoding, (err, data) =>{
        newData = data.trim();
        fs.writeFile(filePath, newData, () =>{
          resolve()
        })
      })
    })
  }

  async function main(){
    await readFileAndTrim2("a.txt", "utf-8").then(() => console.log("cleaned"))
  }

  main();