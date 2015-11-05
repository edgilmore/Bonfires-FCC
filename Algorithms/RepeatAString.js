/**
 * Created by edgilmore on 11/5/2015.
 */
'use strict';
function repeat(str, num) {
    // repeat after me
    var word = "";
    for(var i = 1; i <= num; i++)
    {
        word += str;
    }
    return word;
}

repeat("*", 3);