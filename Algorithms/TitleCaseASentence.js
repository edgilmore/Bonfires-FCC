/**
 * Created by edgilmore on 11/3/2015.
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