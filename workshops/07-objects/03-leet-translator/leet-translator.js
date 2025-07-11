let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
// function leetTranslator(str) {
//     let newStr = '';
//     let idxArr = [];
//     let strArr = str.toLowerCase().split('');
//     for (let i = 0; i < strArr.length; i++) {
//         for (let j = 0; j < letters.length; j++) {
//             if (strArr[i] === letters[j]) {
//                 idxArr.push(j);
//             }
//         }
//     }

//     for (let i = 0; i < idxArr.length; i++) {
//         newStr += leetChars[idxArr[i]];
//     }
//     return newStr;
// }


function leetTranslator(str) {
    let teroBeu = '';
    let newStr = str.toLowerCase();
    let obj = {};
    for (let i = 0; i < letters.length; i++) {
        obj[letters[i]] = leetChars[i];
    }

    for (let i = 0; i < newStr.length; i++) {
        teroBeu += obj[newStr[i]];
    }
   return teroBeu;
    
}

console.log(leetTranslator('Fullstack'));