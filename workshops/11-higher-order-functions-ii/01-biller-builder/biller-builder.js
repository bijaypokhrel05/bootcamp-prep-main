// YOUR CODE BELOW
function billerBuilder(state) {
    return function (price) {
        if (state === 'NY') {
            return price * 1.03 * 1.04;
        } else {
            return price * 1.05 * 1.06625;
        }
    };
}

let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100));