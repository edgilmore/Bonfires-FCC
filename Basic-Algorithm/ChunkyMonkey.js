/**
 * Created by edgilmore on 11/16/2015.
 * Instructions: Write a function that splits an array (first argument) into groups the length of size (second
 * argument) and returns them as a multidimensional array.
 */
'use strict';
function chunk(arr, size) {
    // Break it up.
    var newArray = [];
    if (size !== 0){
        while(arr.length > size){
            newArray.push(arr.splice(0, size));
        }
        newArray.push(arr);
    }
    return newArray;
}

chunk(["a", "b", "c", "d"], 2);