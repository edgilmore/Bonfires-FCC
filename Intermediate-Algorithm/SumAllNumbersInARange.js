/**
 * Created by edgilmore on 12/17/2015.
 * Instructions: We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.
 */
'use strict';
function sumAll(arr) {
    var min = Math.min.apply(null,arr);
    var max = Math.max.apply(null,arr);
    for (var i =  (min+1); i < max; i++) {
        arr.push(i);
    }
    return arr.reduce(function(prevValue, curValue){
        return prevValue + curValue;
    });
}

sumAll([1, 4]);