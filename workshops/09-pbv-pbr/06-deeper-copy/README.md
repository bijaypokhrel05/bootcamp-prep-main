### Deeper Copy

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
