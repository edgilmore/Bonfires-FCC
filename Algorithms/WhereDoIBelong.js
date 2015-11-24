/**
 * Created by edgilmore on 11/24/2015.
 * Instructions: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
 * For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 * Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */
'use strict';
function where(arr, num) {
    // Find my place in this sorted array.
    //sort from lowest to highest
    arr.sort(function(a,b){
        return a - b;
    });
    for(var i = 0; i < arr.length; i++){
        //check to see if the value is equal to or higher than the number
        if(arr[i] >= num ){
            //return array position where value should be inserted
            return i;
        }
    }
    //otherwise return length of array to indicate the value should be appended to the end because the number is the higest.
    return arr.length;
}

where([40, 60], 50);