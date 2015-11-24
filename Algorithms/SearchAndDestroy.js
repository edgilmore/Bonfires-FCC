/**
 * Created by edgilmore on 11/23/2015.
 * Instructions: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 */
'use strict';
function destroyer(arr) {
    // Remove all the values
    var args = [];
    //to prevent javascript engine de-optimization as mentioned in the documentation for arguments.
    for(var i = 0; i < arguments.length; i++){
        args.push(arguments[i]);
    }
    //drop the first argument from the args array since it's declared as an argument for the function
    args.shift();
    return arr.filter(function(element){
        console.log(args.indexOf(element) > -1);
        return args.indexOf(element) === -1;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);