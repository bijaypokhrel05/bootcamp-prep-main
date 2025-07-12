// YOUR CODE BELOW
function stringify(func) {
    return function () {
        return String(func());
    }
}