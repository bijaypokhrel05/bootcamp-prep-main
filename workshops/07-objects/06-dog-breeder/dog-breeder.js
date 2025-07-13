/*
Define a function, `dogBreeder`, that accepts up to two optional arguments:
  1. name (string)
  2. age (number)

`dogBreeder` should return an object that represents a new dog! If the user
doesn't define a name, assume the dog's name is Steve. If the user doesn't
define the dog's age, assume the dog's age is 0.

```javascript
dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

dogBreeder(15)    // => {name:'Steve', age: 15}
```
*/

// YOUR CODE BELOW
function dogBreeder(name, age = 0) {
    if (typeof name === 'number') {   
        age = name;     
        name = 'Steve';    
    }

    if (name === undefined || name === null || name === '') {
        name = 'Steve';
        age = age;
    }
    if (age === undefined || age === null) {
        age = 0;
    }

    return {name, age};
}

// console.log(dogBreeder())