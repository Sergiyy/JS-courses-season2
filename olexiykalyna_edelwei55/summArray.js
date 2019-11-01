var summArray = [1, 4, 57, 2, 65, 1, 6, 9, 3];

var summ = summArray.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert("Сумма елементов массива: " + summ );
