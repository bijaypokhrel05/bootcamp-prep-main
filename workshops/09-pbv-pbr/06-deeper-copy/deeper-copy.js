/*
Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-
dimensional array.

```javascript
let myArray = [1, [2, 3]];

//Deeper Copy Example(For 2 levels only)
let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]


//Shallow Copy Example
let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]
```

*/
// YOUR CODE BELOW
function deeperCopy(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let subArr = [];
            for (let j = 0; j < arr[i].length; j++) {
                subArr.push(arr[i][j])
            }
            newArr.push(subArr);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}