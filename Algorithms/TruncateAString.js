/**
 * Created by edgilmore on 11/5/2015.
 */
'use strict';
function checkStringLength(str, num){
    return str.length > num;
}

function addThreeDots(str, num){
    return checkStringLength(str, num);
}

function truncate(str, num) {
    // Clear out that junk in your trunk
    if(checkStringLength(str, num))
    {
        str = str.slice(num - 3);
    }
    if(addThreeDots(str, num)){
        str += "...";
    }
    console.log(str, checkStringLength(str, num), addThreeDots(str));
    return str;
}

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
