// Finding a random number

const a = Math.floor(Math.random() *(100-1)+1);

console.log(a);

// Sum of natural numbers using recursion.

// Recursion is a process of calling itself

function sum(num){
    if(num>0){
        return num + sum(num-1);
    }
    else{
        return num;
    }
}

// user to pass a number

const number = prompt("Please enter a positive value: ");

const result = sum(number);

console.log(`Sum of natural number is ${result}`);