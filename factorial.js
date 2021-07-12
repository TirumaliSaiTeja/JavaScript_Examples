const number = parseInt(prompt("Please enter a number"));


if (number<0) {
    console.log("Factorial for negative numbers is not possible");
}

else if (number === 1) {
    console.log(`Factorial of given ${number} is: 1`);
}

else {
    let fact=1;
    for(i=1; i<=number; i++) {
        fact = fact*i;
    }

    console.log(`Factorial of given ${number} is ${fact}`);
}