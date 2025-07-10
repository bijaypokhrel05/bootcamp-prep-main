/*
Define a function, `myLastIndexOf`, that accepts up to three arguments:
  1. array
  2. searchValue
  3. startIdx (optional)

`myLastIndexOf` should return the last index at which the searchValue appears in
the array.

```javascript
myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
```

If the searchValue isn't in the array, `myLastIndexOf` should return -1.

```javascript
myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
```

If startIdx is defined, `myLastIndexOf` should start looking for the seachValue
at that index, and then move toward the front of the array as it looks for the
value.

```javascript
myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
```
*/


// YOUR CODE BELOW
// function myLastIndexOf(arr, searchValue, startIdx = 0) {
//     let newArr = arr.slice(startIdx);
//     let expectedIdx = 0;
//     for (let i in newArr) {
//         let idx = parseInt(i);
//         if (newArr[idx] === searchValue) {
//             expectedIdx = idx;
//         }
//     }
//     if (expectedIdx === 0) {
//         return -1;
//     }
//     return expectedIdx;
// }


// another apporach

// function myLastIndexOf(arr, searchValue, startIdx = 0) {
//     let newArr = arr.slice(startIdx);
//     if (searchValue === undefined) {
//         return -1;
//     }

//     for (let i = newArr.length; i >= 0; i--) {
//         if (newArr[i] === searchValue) {
//             return i;
//         }
//     }
//     return -1;
// }

// another approach
function myLastIndexOf(arr, searchValue, startIdx = arr.length -1) {
    let c = -1;

    for (let i = startIdx; i >= 0; i--) {
        if (arr[i] === searchValue) {
            c = i;
            break;
        }
    }
    return c;
}