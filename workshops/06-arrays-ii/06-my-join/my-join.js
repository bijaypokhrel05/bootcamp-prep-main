/*
Define a function, `myJoin`, that accepts up to two arguments:
  1. array
  2. separator (string, optional)

`myJoin` should return a string with all of the elements from the array joined
togther. The separator should separate the joined elements:

```javascript
myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
```

If separator is undefined, use ',' as the default separator.

```javascript
myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
```

If any elements in the array are undefined or null, they should be replaced with
an empty string in the returned string.

```javascript
myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
```

*/

// YOUR CODE BELOW

function myJoin(arr, separator = ',') {
    let newStr = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === undefined) {
            newStr += '';
        } else {
            newStr += arr[i];
        }
        if (i !== arr.length - 1) {
            newStr += separator;
        }
    }
return newStr;
}


console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' '));