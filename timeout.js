// Passing a parameter using setTimeout()

// The setTimeout method executes a block of code after the specified time. It only executes once

function greet(sayHello){
console.log(sayHello);
}

setTimeout(greet, 3000, "Hello Sai! Welcome");

console.log("this will execute first");