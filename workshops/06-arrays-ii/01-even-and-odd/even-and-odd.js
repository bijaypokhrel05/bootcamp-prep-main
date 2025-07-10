// YOUR CODE BELOW
function evenAndOdd(arr) {
    let newArr = [[], []];
    
    for (let el of arr) {
        if (el % 2 === 0) {
            newArr[0].push(el);
        } else {
            newArr[1].push(el);
        }
    }
    return newArr;
}