/*
Define a function, `crazyCaps`, that accepts a string as an argument.
`crazyCaps` should return a string in which every other character is
capitalized. The first letter should be lower-cased.

```javascript
crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
```
 */
// YOUR CODE BELOW
function crazyCaps(sent) {
    let modifiedSent = '';
    for (idx in sent) {
        if (idx % 2 !== 0) {
            modifiedSent += sent[idx].toUpperCase();
        } else {
            modifiedSent += sent[idx];
        }
    }
    return modifiedSent;
}


console.log(crazyCaps('fullstack is amazing!'));
console.log(crazyCaps('this is crazy'));