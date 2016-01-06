/**
 * Created by edgilmore on 1/5/2016.
 * Instructions: One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ * 'N', *  'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do
 * pass them on.
 */
'use strict';
function rot13(str) { // LBH QVQ VG!
    var newString = '';
    for(var i = 0; i < str.length; i++){
        if(str.charCodeAt(i) < 65)
        {
            newString += String.fromCharCode(str.charCodeAt(i));
        }
        else
        {
            var charCode = 0;
            charCode = str.charCodeAt(i);
            if((charCode - 13) < 65){
                charCode += 13;
            } else {
                charCode -= 13;
            }
            newString += String.fromCharCode(charCode);
        }
    }
    return newString;
}

// Change the inputs below to test
// "SERR PBQR PNZC" = "FREE CODE CAMP"
rot13("SERR PBQR PNZC");