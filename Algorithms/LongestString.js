/**
 * Created by edgilmore on 10/29/2015.
 */
'use strict';
function findLongestWord(str) {
    var words = str.split(' ');
    var longestString = 0;
    for(var i = 0; i < words.length; i++)
    {
        var wordLength = words[i].length;
        if(wordLength > longestString){
            longestString = wordLength;
        }
    }
    return longestString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");