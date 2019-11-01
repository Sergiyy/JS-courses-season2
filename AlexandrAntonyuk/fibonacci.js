function fibonacci() {
    let arr = [1, 2];
    let count = prompt("Введите количество чисел: ");

    for (let i = 2; i < count; i++){
        arr[i] = arr[i-2] + arr[i-1];
    }
    return arr;
}

