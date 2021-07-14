// Finding the number is even or odd

// let number = prompt("Enter a value");

// if (number%2==0){
//     console.log("Entered number is a even number");
// }

// else {
//     console.log("Entered number is a odd number");
// }

// Finding the largest number 

let num1 = prompt("Enter the value for num1");
let num2 = prompt("Enter the value for num2");
let num3 = prompt("Enter the value for num3");

let largest

if(num1>=num2&&num1>=num3){
    largest = num1;
}

else if(num2>=num1&&num2>=num3){
    largest = num2;
}

else {
    largest = num3;
}

console.log(`largest number is ${largest}`);