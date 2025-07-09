/*
Write a function `isTruthy` that accepts a single argument of any type.

`isTruthy` should return true if that argument is 'truthy'.

If the value is 'falsey', log out one of the messages below, corresponding to
the type of the value tested.

```
'The boolean value false is falsey'
'The null value is falsey'
'undefined is falsey'
'The number 0 is falsey (the only falsey number)'
'The empty string is falsey (the only falsey string)'
```

```javascript
isTruthy('I yearn for truth'); // => true
isTruthy(null); // => The null value is falsey
``
*/

// YOUR CODE BELOW
function isTruthy(data) {
    if (data) {
        return true;
    } else if (data === undefined){
        return `${data} is falsey`;
    } else if (data === null) {
        return  `The ${data} value is falsey`;
    } else if (data === 0) {
        return `The number ${data} is falsey (the only falsey number)`
    } else if (data === false){
        return 'The boolean value false is falsey';
    } else if ( data === ''){
        return 'The empty string is falsey (the only falsey string)';
    }
}

console.log(isTruthy('I yearn for truth'));
console.log(isTruthy(null));