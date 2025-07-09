// YOUR CODE BELOW
function taxCalculator(price, state) {
    if (state == 'NY') {
        return price + price * 0.04;
    } else {
        return price + price * 0.06625;
    }
}
console.log(taxCalculator(100, 'NY'));
console.log(taxCalculator(100, 'NJ'));