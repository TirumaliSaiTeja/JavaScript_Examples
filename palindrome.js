// Finding the string is palindrome or not 

// Palindrome example is dad, mom, madam

function checkPalin(str){

const len = string.length;

for(let i=0; i<len/2;i++){
      // check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
        return 'It is not a palindrome';
    }
}
return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);





