/**
 * Created by edgilmore on 10/29/2015.
 * Instructions: Return the length of the longest word in the provided sentence.
 * Your response should be a number.
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