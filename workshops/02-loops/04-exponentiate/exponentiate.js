/*
Write a function `exponentiate` that accepts two arguments:
1. base (number)
2. power (number)

`exponentiate` should return the result of raising the base by the power.
Assume the power argument will always be an integer greater than or equal to zero.
Don't forget that any number raised to the 0th power is equal to 1!

Do not use the built-in [Math.pow() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow), but feel free to use it moving forward!

```javascript
exponentiate(2, 2)    // => 4
exponentiate(3, 4)    // => 81
```
 */

// YOUR CODE BELOW
function exponentiate(base, power) {
    let total = 1;
    if (power == 0) {
        return 1;
    } else {
        for (let i = 1; i <= power; i++) {
            total *= base;
        }
    }
    return total;
}

console.log(exponentiate(2, 2));
console.log(exponentiate(3, 4));