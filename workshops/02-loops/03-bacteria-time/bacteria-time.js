/*
Define a function, `bacteriaTime`, that accepts two arguments:
  1. currentNum (num) - number of starting bacteria
  2. targetNum (num) - desired number of bacteria

Assuming that the number of bacteria double every 20 minutes, `bacteriaTime` should
return the number of minutes required for the number of bacteria to grow from
the currentNum to a number equal to or larger than the targetNum.

You can assume the currentNum will be a positive integer. If the targetNum is
smaller than the currentNum, return the string 'targetNum must be larger than currentNum'.

```javascript
bacteriaTime(1, 8); // => 60
```
*/

// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    let timeDuration = 0;
    if (currentNum < targetNum) {
        for (let i = currentNum; i < targetNum; i *= 2) {
            timeDuration += 20;
        }
        return timeDuration;
    } else {
        return 'targetNum must be larger than currentNum';
    }
}

console.log(bacteriaTime(1, 8));