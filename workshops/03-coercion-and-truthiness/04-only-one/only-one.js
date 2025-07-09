// YOUR CODE BELOW
function onlyOne(arg1, arg2, arg3) {
    if (arg1 && !arg2 && !arg3) {
        return true;
    } else if (!arg1 && arg2 && !arg3) {
        return true;
    } else if (!arg1 && !arg2 && arg3) {
        return true;
    } else {
        return false;
    }

}

console.log(onlyOne(false, false, true));
console.log(onlyOne(0, 1, 2));