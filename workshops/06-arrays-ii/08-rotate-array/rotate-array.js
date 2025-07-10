/*

*/
// YOUR CODE BELOW
// function rotateArray(originalArray, rotateNum = 0) {
//     let newArray = [];
//     let arr1 = [];
//     let arr2 = [];
//     if (rotateNum < 0) {
//         arr1 = originalArray.slice(0, rotateNum * (-1));
//         arr2 = originalArray.slice(rotateNum * (-1));
//         newArray = arr2.concat(arr1);
//     } else if(rotateNum > 0) {
//         arr1 = originalArray.slice(0, originalArray.length - rotateNum );
//         arr2 = originalArray.slice(originalArray.length - rotateNum);
//         newArray = arr2.concat(arr1);
//     } else {
//         return originalArray;
//     }

//     return newArray;
// }


// alternative method

function rotateArray(originalArray, rotateNum) {
    let left = originalArray.slice(0, -rotateNum);
    let right = originalArray.slice(-rotateNum);

    return right.concat(left);
}
