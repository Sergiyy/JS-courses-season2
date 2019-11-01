var arr = [4, 7, 2, 10, 1000];

function sumArray(diffArray) {
    var sum = 0;

    for (let i = 0; i < diffArray.length; i++) {
        sum += diffArray[i];
    }

    return sum;
}

console.log(sumArray(arr));
