'use strict'

function difference(arg1, arg2) {
    let newArray = [];
    for (let element of arg1) {
        if (arg2.indexOf(element) == -1) {
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(difference([1,2,3,4], [7,6,5,4,3]));
console.log(difference([7,6,5,4,3], [1,2,3,4]));