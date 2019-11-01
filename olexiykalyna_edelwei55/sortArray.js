var array = [1, 4, 57, 2, 65, 1, 6, 9, 3];
array.sort(compare);
alert("Отсортированый массив методом sort: " + array);
function compare(a, b) {
  return a - b;
}
