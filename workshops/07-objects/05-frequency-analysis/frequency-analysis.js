/*
Define a function `frequencyAnalysis` that accepts a string of lower-case
letters.

`frequencyAnalysis` should return an object containing the count for each letter
in the string.

```javascript
frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
```
*/

// YOUR CODE BELOW
function frequencyAnalysis(str) {
    const letterCount = {};

    for (let letter of str) {
        letterCount[letter] = 0;
    }

    for (let letter of str) {
        for (let key in letterCount) {
            if (key === letter) {
                letterCount[key]++;
            }
        }
    }

    return letterCount;
}