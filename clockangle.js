// Simple clock angle

// function clockangle(num){



//     // We got 6 beacuse 360/60=6
//     // 360 represents the full number of a degree in a circle and 
//     // 60 is the number of minutes on a clock, so dividing these two numbers
//     // gives us the number of the degrees for one minute
// return num*6;
// }

// clockangle(6);



function sum_array(arr){


    let sum = 0;

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            sum+= arr[i][j];
        }
    }

return sum;

}

sum_array([[1,2], [3,4], [5,6]]);
