// YOUR CODE BELOW
function compareObjects(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }

    for (let [key, value] of (Object.entries(obj1))) {
        if (!(key in obj2)){
            return false;
        }
        if (obj2[key]!== value) {
            return false;
        }
    }
    return true;
}
