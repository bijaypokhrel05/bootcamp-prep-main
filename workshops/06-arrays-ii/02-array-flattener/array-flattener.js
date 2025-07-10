/*
Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
argument.

`arrayFlattener` should return a new, one-dimensional array.

```javascript
arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
```
*/

// YOUR CODE BELOW
// function arrayFlattener(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let el of arr[i]) {
//                 newArr.push(el);
//             }
//         } else {
//             newArr.push(arr[i]);
//         }
        
//     }
//     return newArr;
// }

// alternative method
function arrayFlattener(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && (j !== arr[i].length)) {
            arr.splice(i, 0, arr[i][j]);
            j++;
        }

    }

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1);
        }
    }
    return arr;
}


console.log(arrayFlattener(['I', 'am', 'working', ['on', 'another', 'level']]));