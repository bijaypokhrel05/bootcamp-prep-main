/*
### Most Vowels

Define a function, `mostVowels`, that accepts one argument, a string of words.

`mostVowels` should return the word that has the most vowels.

```javascript
mostVowels('I am a keeper with some real rhythms'); // => keeper
```

If none of the words have any vowels, return an empty string.

```javascript
mostVowels('try my gym'); // => ''
```
 */

// YOUR CODE BELOW
function mostVowels(source) {
    let sourceList = source.split(' ');
    let countList = [];
    let max = 0;
    if (source.includes('a') || source.includes('e') || source.includes('i') || source.includes('o') || source.includes('u')) {
        for (word of sourceList) {
            let count = 0;
            for (letter of word) {
                if ('aeiou'.includes(letter)) {
                    count++;
                }
            }
            countList.push(count);
            if (count > max) {
                max = count;
            }
        }
        
        let expectedValue = sourceList[countList.indexOf(max)];
        if (expectedValue.includes("\.")) {
            return expectedValue.slice(0, expectedValue.length-1);
        } else {
            return expectedValue;
        }
    } else {
        return '';
    }
}

console.log(mostVowels('I am a keeper with some real rhythms'));
console.log(mostVowels('try my gym'));