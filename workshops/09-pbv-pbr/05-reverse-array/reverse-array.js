/*
Write a function that accepts an array and reverses that array in place. The
behavior should mimic the behavior of the native .reverse() array method.
However, your reverse function should accept the array to operate on as an
argument, rather than being invoked as a method on that array.

Do not use the native .reverse() method in your own implementation.

```javascript
let myArray = [1, 2, 3, 4];
reverse(myArray);
console.log(myArray) // [4, 3, 2, 1]
```
*/


// YOUR CODE BELOW
// function reverseArray(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = newArr[arr.length - i - 1];
//     }
//     return arr;
// }

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length -1 ; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    arr.length=0;

    for (let i = 0; i < newArr.length; i++) {
        arr.push(newArr[i]);
    }
    return arr;
}

