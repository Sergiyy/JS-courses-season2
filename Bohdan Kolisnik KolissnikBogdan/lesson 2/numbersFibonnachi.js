/**
 * Function of finding Fibonacci numbers (the number of elements of an array with Fibonacci numbers is passed as a parameter)
 */

function numFibonnachi(coutn) {
    var sum = 0, arr = [];

    for (let i = 0; i < coutn; i++) {
        if (arr.length > 1 ) sum += arr[arr.length - 2];
        if (arr.length == 0) sum = 0;
        if (arr.length == 1) sum = 1;

        arr.push(sum);
    }

    return arr;
}

console.log("Array with Fibonacci numbers : ");
console.log(numFibonnachi(10));
