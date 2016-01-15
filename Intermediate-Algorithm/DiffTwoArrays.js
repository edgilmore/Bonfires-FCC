/**
 * Created by edgilmore on 12/17/2015.
 * Instructions: Compare two arrays and return a new array with any items only found in one of the original arrays.
 */
'use strict';
function diff(arr1, arr2) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1) {
            if(newArr.indexOf(arr1[i]) === -1){
                newArr.push(arr1[i]);
            }
        }
    }
    for(var j = 0; j < arr2.length; j++){
        if(arr1.indexOf(arr2[j]) === -1){
            if(newArr.indexOf(arr2[j]) === -1){
                newArr.push(arr2[j]);
            }
        }
    }
    return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diff([], ["snuffleupagus", "cookie monster", "elmo"]);