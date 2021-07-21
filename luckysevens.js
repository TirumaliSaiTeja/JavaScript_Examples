// Lucky Sevens

// Problem
// Write a function called lucky_sevens which takes an array of integers
// and returns true if any three consecutive elements sum to 7

function lucky_sevens(arr){

if(arr.length<3){
    return "not possible";
}

// There need to atleast 3 elements we can start the loop at the 3rd element in the
// array(i=2) and check it along with the two previous elements (i-1)

for(var i=2; i< arr.length; i++){
    if(arr[i]+arr[i-1]+arr[i-2] === 7){
        return true;
    }
}

return false;


}

lucky_sevens([2,3,4,6,8]);