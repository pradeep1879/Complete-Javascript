// setTimeout();

function myCallback() {
    console.log(" It schedule the callback function after a delay of 2000 milliseconds (2sec)");
}
// Function calling
// Time in milliseconds
setTimeout(myCallback, 10000);


// setInterval();
function repeatFunction(){
    console.log("This function will be repeated every 1000 millisecond(1 second)");
}
setInterval(repeatFunction, 1000)