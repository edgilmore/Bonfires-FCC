/**
 * Created by edgilmore on 10/26/2015.
 */
'use strict';
function reverse(str){
    return str.split('').reverse().join('');
}
function palindrome(str) {
    // Good luck!
    var regexPattern = new RegExp('[^a-zA-Z0-9]+', 'g');
    console.log(regexPattern);
    str = str.replace(regexPattern, '').toLowerCase();
    console.log(str);
    if(str === reverse(str)){
        console.log('true');
        return true;
    }
    console.log('false');
    return false;
}
palindrome("eye");