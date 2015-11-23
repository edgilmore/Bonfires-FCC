/**
 * Created by edgilmore on 11/23/2015.
 * Instructions: Remove all falsy values from an array. Falsy values in javascript are false, null, 0, "", undefined, and NaN.
 */
'use strict';
function isFalsy(value){
    return !(!Boolean(value) && !isNaN(value) || !Boolean(value));
}

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    console.log(arr.filter(isFalsy));
    arr = arr.filter(isFalsy);
    return arr;
}

bouncer([7, "ate", "", false, 9]);
