var arr = [10, 20, 25];

function sumArray(array) {
  var sum = 0;
  array.forEach(function (value) {
    sum += value;
  });

  return sum;
}
