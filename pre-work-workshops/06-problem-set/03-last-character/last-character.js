// YOUR CODE BELOW
function lastCharacter(str1, str2) {
    if (str1[str1.length - 1] == str2[str2.length - 1]) {
        return true;
    } else {
        return false;
    }
}

console.log(lastCharacter('apples', 'pumpkins'));
console.log(lastCharacter('marker', 'pen'));
