// Remember the dog breeder question from an earlier workshop? It assumed that the
// default name for a dog should be 'Steve', and the default age should be 0.

// Define a function, getDogBreeder, that takes a default name and age, and returns
// a dogBreeder function. The returned dogBreeder function should use the default
// values defined when dogBreeder was called.

// You can copy over the solution code from dogBreeder if you'd like.

// ```javascript
// let puppyFarm = getDogBreeder('Snoopy', 0);
// let rescueShelter = getDogBreeder('Odie', 3);

// puppyFarm('Olaf', 3); // => {name: 'Olaf', age: 3};
// puppyFarm(2); // => {name: 'Snoopy', age: 2}

// rescueShelter(); // => {'Odie', 3}



// YOUR CODE BELOW
function getDogBreeder(name, age) {
    const animal = {name: name, age: age};
    function dogBreeder(name, age) {
        if (typeof name === 'string') {
            animal.name = name;
        } else if (name === undefined && age === undefined) {
            return animal;
        }else {
            animal.age = name;
            return animal;
        }

        if (age !== undefined) {
            animal.age = age;
        }

        return animal;
        
    }
    return dogBreeder;
}

let puppyFarm = getDogBreeder('Snoopy', 0);


console.log(puppyFarm('Olaf', 3));