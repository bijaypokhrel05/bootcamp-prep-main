/*
Define a function, `myIncludes`, that accepts an array and a searchValue.

`myIncludes` should return true if the searchValue is an element in the array.
Otherwise, `myIncludes` should return false.

Do not use the built-in [.includes array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) during this problem.
Feel free to use it on any future problem though! Note that strings have an
[.includes method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes), too.

```javascript
myIncludes([10, 20, 30], 20); // => true
myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false
```
*/


// YOUR CODE BELOW
function myIncludes(arr, searchValue) {
    for (let el of arr) {
        if (el === searchValue) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}