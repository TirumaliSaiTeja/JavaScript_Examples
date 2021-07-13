// Conversion of kilometers to miles

let km = parseInt(prompt("Enter a value in kilometers: "));

// 1km is equal to 0.621371 miles
const factor = 0.621371;

// Formula to convert kilometers to miles
const mile = km * factor;

// Formula to convert miles to kilometers is km = miles/factor

console.log(`The total ${km} kilometers is equal to ${mile} miles`);

// Conversion of celsius to fahrenheit

const celsius = prompt("Enter the value in celsius: ");

// Formula to convert celsius to fahrenheit

const fahrenheit = (celsius * 1.8) + 32;

// formula to convert fahrenheit to celsius is celsius = (fahrenheit-32)/1.8

console.log(`Converted fahrenheit is ${fahrenheit}`);