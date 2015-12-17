/**
 * Created by edgilmore on 11/5/2015.
 * Instructions: Check if a string (first argument) ends with the given target string (second argument).
 * */
'use strict';
function end(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return target === str.substr(str.length - target.length);
}

end("He has to give me a new name", "name");