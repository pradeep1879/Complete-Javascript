


function init() {
  console.log(age);
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    let age = 21;
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();