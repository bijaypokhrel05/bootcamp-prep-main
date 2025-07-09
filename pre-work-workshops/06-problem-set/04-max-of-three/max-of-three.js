// YOUR CODE BELOW
function maxOfThree(num1, num2, num3) {
    let temp = (num1 > num2) ? num1 : num2;

    if (temp > num3) {
        return temp;
    } else {
        return num3;
    }
}

console.log(maxOfThree(5, 4, 10));
console.log(maxOfThree(7, 7, 4));