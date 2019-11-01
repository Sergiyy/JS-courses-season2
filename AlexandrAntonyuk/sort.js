let array = [ 1, 5, 3, 7, 2, 4], array2 = [ 9, 5, 4, 2, 1, 3];

function compareFun(a, b) {
    return a - b;
}
function sortMethod(arr) {
    arr.sort(compareFun);
    return arr;
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j+1] < arr[j]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
