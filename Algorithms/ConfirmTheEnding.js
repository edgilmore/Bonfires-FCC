/**
 * Created by edgilmore on 11/5/2015.
 */
'use strict';
function end(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return target === str.substr(str.length - target.length);
}

end("He has to give me a new name", "name");