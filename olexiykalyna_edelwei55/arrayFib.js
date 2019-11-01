var count = 0;
function numbOfFibonaci() {
    var array  = [1, 2];
    count = prompt("Введите количество чисел: ");
     for (let i = 2; i < count; i++){
        array[i] = array[i-2] + array[i-1];
    }
    return array;
}
var numb = numbOfFibonaci();
alert("Массив с " + count + " числами Фибоначчи: " + numb);
