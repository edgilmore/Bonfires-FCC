/**
 * Created by edgilmore on 12/17/2015.
 * Instructions: Compare two arrays and return a new array with any items only found in one of the original arrays.
 */
'use strict';
function filterByValue(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    }
}
function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for(var i = 0; i < arr1.length; i++){
        for (var j = 0; j <arr2.length; j++){
            if (arr1[i] === arr2[j]) {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);