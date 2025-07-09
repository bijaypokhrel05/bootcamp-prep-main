// YOUR CODE BELOW
// function zeroDarkThirty(arg) {
//     if (arg !== 0) {
//         return Number(String(arg).replace(/0/g, ''));
//     } else {
//         return NaN;
//     }
    
// }

function zeroDarkThirty(arg) {
    let concatLetter = '';
    if(arg !== 0) {
        for (letter of String(arg)) {
            if (letter === '0') {
                continue;
            }
            concatLetter += letter;
        }
        return Number(concatLetter);
    } else {
        return NaN;
    }
    
}