/**
 * Created by edgilmore on 10/26/2015.
 * Instructions: Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 */
'use strict';
function reverseString(str) {
    var myArray;
    myArray = str.split('');
    myArray = myArray.reverse();
    str = myArray.join('');
    return str;
}

reverseString("hello");
