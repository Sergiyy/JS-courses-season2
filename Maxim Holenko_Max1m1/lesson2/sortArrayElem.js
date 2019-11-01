var arr1 = [34, 17, 82, 7, 7, 31, 2];

function sortArray(diffArray) {
    return diffArray.sort(function (a, b) {
        return a - b;
    });
}

console.log(sortArray(arr1));

var arr2 = [56, 19, 9, 63, 9, 50, 80];

function sortArrayFor(diffArray) {
    var element;
    var j;

    for(let i = 1; i < diffArray.length; i++) {
        element = diffArray[i];
        j = i;
        for(j = i - 1; j >= 0 && diffArray[j] > element; j--) {
            diffArray[j + 1] = diffArray[j];
        }
        diffArray[j + 1] = element;
    }

    return diffArray;
}

console.log(sortArrayFor(arr2));
