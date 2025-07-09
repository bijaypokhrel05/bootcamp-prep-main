// YOUR CODE BELOW
function doYouPlayTheTheremin(name) {
    if (name.startsWith('s') || name.startsWith('S')) {
        return true;
    } else {
        return false;
    }
}

console.log(doYouPlayTheTheremin('Griffin'));
console.log(doYouPlayTheTheremin('Scott'));
