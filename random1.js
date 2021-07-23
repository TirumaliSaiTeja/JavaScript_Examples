//1.  Create a duplicate array of existing array

function duplicate(arr){
    return arr.concat(arr);
}

duplicate([2,3,4,5,6,7,8]);


// 2. Reverse each word in a string

var string = "Welcome to javascript learnings tutorial";

var reverse_entire_string = reverseBySeparator(string, '');

var reverse_each_word = reverseBySeparator(reverse_entire_string, '');

function reverseBySeparator(string, separator){
    return string.split(separator).reverse().join(separator);
}

