var arbitraryArray = [2, 3, 3, 4, 4, 2, 1, 10];
 
/**
 * Array sorting function using the .sort method
 */

function sortArrayByFunction(someArray) {
    return someArray.sort((a, b) => a - b);
}

console.log("Sorted array in ascending (method .sort) : ");
console.log(sortArrayByFunction(arbitraryArray));

/**
 * Array sorting function using for loop 
 */

function sortArrayByFor(someArray) {
    var midInd, temp;

    for (let i = 0; i < someArray; i++) {
        midInd = i;
        for (let j = i + 1; j < someArray.length; j++) {
            if(someArray[j] < someArray[midInd]) {
                midInd = j;
            }
        }

        temp = someArray[i];
        someArray[i] = someArray[midInd];
        someArray[midInd] = temp;
    }

    return someArray;
}

console.log("Sorted array in ascending (using for) : ");
console.log(sortArrayByFor(arbitraryArray));
