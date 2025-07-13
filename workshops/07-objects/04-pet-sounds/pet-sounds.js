/*
Write a function `petSounds` that takes an animal name and a country name.

Using the globally-defined animalNoises array, `petSounds` should return a
sentence that explains which sound the animal makes in the given country.

```javascript
petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!

petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!
```
*/

let animalNoises = [
  {
    'dog': {
      'America': 'Woof! Woof!',
      'Germany': 'Wau Wau!',
      'England': 'Bow wow!',
      'Uruguay': 'Jua jua!',
      'Afrikaans': 'Blaf!',
      'Korea': 'Mong mong!',
      'Iceland': 'Voff voff!',
      'Albania': 'Ham!',
      'Algeria': 'Ouaf ouaf!'
    }
  },
  {
    'cat': {
      'America': 'Meow',
      'Germany': 'Miauw!',
      'England': 'mew mew',
      'Uruguay': 'Miau Miau!',
      'Afrikaans': 'Purr',
      'Korea': 'Nyaong!',
      'Iceland': 'Kurnau!',
      'Albania': 'Miau',
      'Algeria': 'Miaou!'
    }
  },
  {
    'chicken': {
      'America': 'Cluck cluck',
      'Germany': 'tock tock tock',
      'England': 'Cluck Cluck',
      'Uruguay': 'gut gut gdak',
      'Afrikaans': 'kukeleku',
      'Korea': 'ko-ko-ko',
      'Iceland': 'Chuck-chuck!',
      'Albania': 'Kotkot',
      'Algeria': 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW
function petSounds(animal, country) {
  for (let obj of animalNoises) {
    for (let key in obj) {
      if (key === animal) {
        for (let innerKey in obj[key]) {
          if (innerKey === country) {
            return `${key[0].toUpperCase() + key.slice(1) + 's'} in ${innerKey} say ${obj[key][innerKey]}`;
          }
        }
      }
    }
  }
}