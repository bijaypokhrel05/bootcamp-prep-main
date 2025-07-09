// YOUR CODE BELOW
function defaultGreet(firstName, lastName = 'Doe') {
    if (lastName !== 'Doe') {
        return `Hi ${firstName} ${lastName}!`;
    } else {
        return `Hi ${firstName} ${lastName}!`
    }
}
console.log(defaultGreet('Chaka', 'Khan'));
console.log(defaultGreet('John'));