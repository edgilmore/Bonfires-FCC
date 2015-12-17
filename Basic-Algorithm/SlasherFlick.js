/**
 * Created by edgilmore on 11/16/2015.
 * Instructions: Return the remaining elements of an array after chopping off n elements from the head.
 */
'use strict';
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    var newArray = [];
    if(howMany !== 0){
        newArray = arr.splice(howMany);
        return newArray;
    }
    return arr;
}

slasher([1, 2, 3], 2);