window.onload = function () {

    //   Сумма чисел масива
    const sumArr = [5, 7, 9, 6];
    
    function sum(elem) {
        let result = 0;
        for (let i = 0; i < elem.length; i++) {
            result += elem[i];
        }
        return result;
    }
    console.log('Сума масива sumArr - ' + sum(sumArr));

    //    Сортировка масива чисел методом .sort()
    const numArr = [5, 3, 1, 98, 9, 7, 12, 9, 1];
    numArr.sort(compareNum);
    function compareNum (a, b) {
        return a - b;
    }
    console.log(numArr);

    //    Сортировка масива чисел с помощю функции sortNumber() в цикле for
    const initialArr = [5, 3, 1, 98, 9, 7, 12, 9, 1];
    function sortNumber(arrey) {
        let res;
        for (let i = 0; i < arrey.length; i++) {
            for (let a = 0; a < arrey.length - 1; a++){
                if (i !== a) {
                    if (arrey[i] < arrey[a]) {
                        res = arrey[i];
                        arrey[i] = arrey[a];
                        arrey[a] = res;

                    }
                }
            }
        }
        return arrey;
    }
    console.log(sortNumber(initialArr));

    //   Функция кторая возващаэт масив с уникальными елементами
    const arrUnique = [2, 8, 2, 2, 5, 6, 1, 'a', 7, 99, 15, 1, 99, 15, 'a'];
    function uniqueElem(arrey) {
        const newArr = [];
        for (let i = 0; i < arrey.length; i++) {

            if (newArr.indexOf(arrey[i]) === -1) {
                newArr.push(arrey[i]);
            }
        }
        return newArr;
    }
    console.log(uniqueElem(arrUnique));

    //  Цисла Фибоначчи

    function fibon(num) {
        var a = 0,
            b = 1,
            sumFib,
            fibArray = [0, 1];

        for (let i = 2; i <= num; i++) {

            sumFib = a + b;
            a = b;
            b = sumFib;
            fibArray.push(b);
        }
        return fibArray;
    }

    console.log(fibon(5));
    console.log(fibon(10));
    console.log(fibon(100));


};