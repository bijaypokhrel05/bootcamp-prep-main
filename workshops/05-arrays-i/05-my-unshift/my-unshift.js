/*
Write a function `unShift` that takes an array and a value of any type as arguments.

`unShift` should return a new array, with the given value as the first element
in the new array.

```javascript
unShift([1, 2, 3], 0); / => [0, 1, 2, 3];
```
*/

// YOUR CODE BELOW
function myUnshift(arr, newEl) {
    let newArr = [];
    if (newEl !== undefined) {
        newArr.push(newEl);
        newArr = newArr.concat(arr);
    } else {
        return arr;
    }
    return newArr;
}