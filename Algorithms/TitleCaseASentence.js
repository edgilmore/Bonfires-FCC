/**
 * Created by edgilmore on 11/3/2015.
 * Instructions: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */
'use strict';
function titleCase(str) {
    str = str.toLowerCase();
    var words = str.split(' ');
    console.log(words);
    for(var i = 0; i < words.length; i++)
    {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        console.log(words[i]);
    }
    str = words.join(' ');
    console.log(str);
    return str;
}

titleCase("I'm a little tea pot");