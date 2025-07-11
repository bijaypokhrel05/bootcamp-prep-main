/*
Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
array method. However, mySplice should accept the array to operate on as an
argument, rather than being invoked as a method on that array.

mySplice only needs to take one element to add to the array (the .splice method
can actually take any number of values to add).

Do not use .splice in your function.


```javascript
let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples')) // => [2]

console.log(myArray)    // [1,'apples', 3]
```

*/
// YOUR CODE BELOW
function mySplice(arr, startIdx, delCount, ...rest) {
    debugger;
    let removedArr = [];
    let firstArr = [];
    let lastArr = [];

    for (let i = 0; i < startIdx; i++) {
        firstArr.push(arr[i]);
    }

    if (rest.length > 0) {
        for (let j = 0; j < rest.length; j++) {
            firstArr.push(rest[j]);
        }
    }
    if (delCount) {
        for (let i = startIdx; i < startIdx + delCount; i++) {
            removedArr.push(arr[i]);
        }
    }

    for (let k = startIdx + delCount; k < arr.length; k++) {
        firstArr.push(arr[k]);
    }

    arr.length = 0;
    for(let i=0; i<firstArr.length;i++){
        arr[i]=firstArr[i];
    }

    return removedArr;
}

// console.log(mySplice([1, 2, 3, 4, 5], 2, 0, 'aa'));
let ourStuff = ['food', 'trash', 'clothes'];

mySplice(ourStuff, 1, 1);