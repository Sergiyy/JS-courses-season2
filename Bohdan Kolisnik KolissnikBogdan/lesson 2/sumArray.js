var arbitraryArray = [2, 3, 3, 4, 4, 2, 1, 10];

/**
 * Function of finding the sum of the array
 */

function sumArray(someArray) {
    var sum = 0;

    for (var i = 0; i < someArray.length; i++) {
      sum += someArray[i];
    }

    return sum;
}

console.log("Amount of array - " + sumArray(arbitraryArray));
