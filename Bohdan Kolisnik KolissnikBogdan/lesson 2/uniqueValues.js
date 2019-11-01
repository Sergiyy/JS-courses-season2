var arbitraryArray = [2, 3, 3, 4, 4, 2, 1, 10];

/**
 * Function for finding unique array values
 */

function uniqueValues(someArray) {
    return someArray.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
}

console.log("Unique array values : ");
console.log(uniqueValues(arbitraryArray));
