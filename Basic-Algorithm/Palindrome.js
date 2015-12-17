/**
 * Created by edgilmore on 10/26/2015.
 * Instructions: Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation,
 * case, and spacing.
 * You'll need to remove punctuation and turn everything lower case in order to check for palindromes.
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
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