// YOUR CODE BELOW
function myMnemonic(str1 = '', str2 = '', str3 = '', str4 = '') {
    if (str1 == '' && str2 == '' && str3 == '' && str4 == '') {
        return 'string';
    } else if (str3 == '' && str4 == '') {
        return (str1[0] + str2[0]).toUpperCase();
    }else if (str4 == '') {
        return (str1[0] + str2[0] + str3[0]).toUpperCase();
    }else if(str2 == '' && str3 == '' && str4 == ''){
        return (str1[0]).toUpperCase();
    } else {
        return (str1[0] + str2[0] + str3[0] + str4[0]).toUpperCase();
    }
}

console.log(myMnemonic(''));
console.log(myMnemonic('Frankly', 'Umbrellas', 'Love', 'Leather'));
console.log(myMnemonic('Candy', 'Kringles'));
console.log(myMnemonic('Super', 'Tacos', 'Apples'));