/**
 * Created by edgilmore on 11/3/2015.
 * Instructions: Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
 */
'use strict';
function largestOfFour(arr) {
    // You can do this!
    var largestOfFourArray = [];
    for(var i = 0; i < arr.length; i++){
        var currentArray = arr[i];
        var largestCurrentNumber = 0;
        for(var j = 0; j < currentArray.length; j++){
            var currentNumber = arr[i][j];
            if(currentNumber > largestCurrentNumber){
                largestCurrentNumber = currentNumber;
            }
        }
        largestOfFourArray.push(largestCurrentNumber);
    }
    return largestOfFourArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);