var a = [1, 4, 57, 2, 65, 1, 6, 9, 3];
function selectionSort(a){
    var n = a.length;
    for (var i = 0; i < n-1; i++){
       var min = i;
       for (var j = i+1; j < n; j++){
          if (a[j] < a[min]) min = j;
        }
       var t = a[min]; a[min] = a[ i ]; a[ i ] = t;
     }
    return a;    // На выходе сортированный по возрастанию массив A.
}
alert("Отсортированый массив циклом for: " + selectionSort(a));
