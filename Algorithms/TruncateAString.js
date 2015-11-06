/**
 * Created by edgilmore on 11/5/2015.
 */
'use strict';
function checkStringLength(str, num){
    return str.length > num;
}

function addThreeDots(str){
    return checkStringLength(str, 3);
}

function truncate(str, num) {
    // Clear out that junk in your trunk
    if(checkStringLength(str, num))
    {
        str = str.slice(num);
    }

    return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);