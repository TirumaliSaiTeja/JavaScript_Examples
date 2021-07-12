let a = parseInt(prompt("Please enter a value for a"));
let b = parseInt(prompt("Please enter a value for b"));

// creating a temporary variable

// let temp;

// temp = a;
// a = b;
// b = temp;


// Using destructuring method 

[a,b] = [b,a]

console.log(`After swapping value of a is ${a}`);
console.log(`After swapping value of b is ${b}`);