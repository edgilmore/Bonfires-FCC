/**
 * Created by edgilmore on 11/16/2015.
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