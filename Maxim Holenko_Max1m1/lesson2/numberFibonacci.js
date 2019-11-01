function numbFibonacci(count) {
    var arr = [0, 1];

    if(count <= 0) {
        return arr = [];
    }
    if (count == 1) {
        arr.pop();
        return arr;
    } else {
        for (i = 1; i < count - 1; i++) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }

        return arr;
    }
}

console.log(numbFibonacci(5));

