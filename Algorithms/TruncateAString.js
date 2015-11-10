/**
 * Created by edgilmore on 11/5/2015.
 */
'use strict';
function truncate(str, num) {
    // Clear out that junk in your trunk
    var elipse = '...';
    var oStringLen = str.length;
    if(str.length > num){
        if(num > 3){
            str = str.slice(str, num -3);
            str += elipse;
        }
        else{
            str = str.slice(str, num);
            str += elipse;
        }
    }
    console.log(str, oStringLen, num);
    return str;
}

truncate("Absolutely Longer", 2);