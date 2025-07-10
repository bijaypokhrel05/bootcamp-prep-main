/*
Define a function, `zooInventory`, that accepts a multi-dimensional array of
animal facts.

`zooInventory` should return a new, flat array. Each element in the new array
should be a sentence about each of the animals in the zoo.

```javascript
let myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
];

zooInventory(myZoo);
 => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
 */

// YOUR CODE BELOW
function zooInventory(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            if (Array.isArray(arr[i][j])) {
                let x = arr[i][j - 1] + ' the ' + arr[i][j][0] + ' is ' + arr[i][j][1] + '.';
                newArr.push(x);
            }
        }

    }
    return newArr;
}

let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));