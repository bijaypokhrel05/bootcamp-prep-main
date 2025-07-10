/*
Define a function `myReverse` that accepts an array.

`myReverse` should return a new array with the elements in reverse order.

```javascript
myReverse([1, 2, 3]);    // => [3, 2, 1]
*/
// YOUR CODE BELOW
function myReverse(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }

    return newArr;
}