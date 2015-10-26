/**
 * Created by edgilmore on 10/26/2015.
 */
function factorialize(num) {
    if(typeof(num) === 'number')
    {
        if(num === 0){
            return 1;
        }
        else{
            return num * factorialize(num - 1);
        }
    }
}

factorialize(5);