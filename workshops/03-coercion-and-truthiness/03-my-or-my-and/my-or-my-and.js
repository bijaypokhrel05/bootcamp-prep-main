/*
Define a function, `myOr`, that accepts three arguments of any type.

`myOr` should return the same result as the buit-in `||` operator:

```javascript
myOr(true, true, false) === (true || true || false); // => true
```

Then, define a function, `myAnd`, that accepts three arguments of any type.

`myAnd` should return the same result as the buit-in `&&` operator:

```javascript
myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
```

 */

// YOUR CODE BELOW
function myOr(arg1, arg2, arg3) {
    if (arg1) {
        return arg1;
    } else if (arg2) {
        return arg2;
    } else {
        return arg3;
    }
}

function myAnd(arg1, arg2, arg3) {
    if (arg1 && arg2 && arg3) {
        return arg3;
    } else if (!arg1) {
        return arg1;
    } else if (!arg2) {
        return arg2;
    } else if(!arg3) {
        return arg3;
    }
}

console.log(myOr(true, true, false));
console.log(myAnd(1, 'Apples', true));