/*
Write a function `makeGrid` that accepts two arguments:
1. numColumns (number)
2. numRows (number)

`makeGrid` should return a two-dimensional array that represents a grid of the
given dimensions.

```javascript
makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/

// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
    let matrix = [];
    for (let i = 0; i < numRows; i++) {
        let newArr = [];
        for (let j = 0; j < numColumns; j++) {
            newArr.push(j+1);
        }
        matrix.push(newArr);
    }
    return matrix;
}