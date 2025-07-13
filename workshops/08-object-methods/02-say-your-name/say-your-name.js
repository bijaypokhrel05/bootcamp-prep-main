/*
Create a new object, `me2`. Expand the `myGreeting` method from me so it accepts
another object with a name property. The returned greeting should now greet the
other object by name.

```javascript
console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
```
*/

// YOUR CODE BELOW
const you = {
    name: 'Alyssa'
};

const me2 = {
    name: 'Tarana',
    other: you.name,
    getGreeting(you) {
        return `Hi ${you.name}, my name is ${this.name}.`;
    }
};

console.log(me2.name);
console.log(you.name);
console.log(me2.getGreeting(you));