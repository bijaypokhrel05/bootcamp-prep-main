// YOUR CODE BELOW
// function cloneMachine(animal) {
//     let clone = {};
//     let keys = Object.keys(animal);

//     for (let i = 0; i < keys.length; i++) {
//         let key = keys[i];

//         if (key === 'name') {
//             clone[key] = animal[key] + 'Clone';
//         } else if (key === 'offspring') {
//             clone[key] = [...animal[key]];
//         } else {
//             clone[key] = animal[key];
//         }
//     }
    
//     animal.offspring.push(clone.name);

//     return clone;
     
// }


// alternative method

function cloneMachine(animal) {
    let clone = {};
    
    clone['name'] = animal.name + 'Clone';
    clone['species'] = animal['species'];
    clone['offspring'] = [];
    animal['offspring'].push(animal['name'] + 'Clone');

    return clone;
}