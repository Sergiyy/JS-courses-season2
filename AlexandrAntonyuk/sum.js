function sumArray() {
    let arr = [1, 2, 3, 4, 5], sum = 0;

    arr.forEach(function (item) {
        sum += item;
    });
    return sum;
}
