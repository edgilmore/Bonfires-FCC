/**
 * Created by edgilmore on 1/15/2016.
 * Instructions: Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.
 */
'use strict';
function convertToRoman(num) {
    var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var romanNumberals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    var convertedString ='';
    for(var i = 0; i <= numbers.length; i++ ){
        while(num >= numbers[i]){
            convertedString += romanNumberals[i];
            num -= numbers[i];
        }
    }
    return convertedString;
}

convertToRoman(16);