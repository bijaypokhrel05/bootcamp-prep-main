// YOUR CODE BELOW
const me = {name: 'Bijay',
            getGreeting() {
                return `Hi, my name is ${this.name}.`;
            }
}

console.log(me.name);
console.log(me.getGreeting());