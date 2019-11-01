var array = [1, 9, 5, 12, 78, 34, 62];

function sortArray(array) {
  console.log('Array sort(): ' + array.sort(function (a, b) {
    return a - b;
  }));
}

function sortByFor(array) {
  for (var i = 0; i < array.lenght; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {

        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

sortArray(array);
console.log('babels sort array ' + sortByFor(array));