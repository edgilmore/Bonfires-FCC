/**
 * Created by edgilmore on 10/26/2015.
 */
function reverseString(str) {
    var myArray;
    myArray = str.split('');
    myArray = myArray.reverse();
    str = myArray.join('');
    return str;
}

reverseString("hello");
