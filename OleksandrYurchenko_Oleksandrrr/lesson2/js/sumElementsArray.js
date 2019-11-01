var array = [1, 5, 9, 12, 78, 34, 62];

function sumResult() {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += parseInt(array[i]);
  }
  console.log('Sum of array: [' + array + '] is: ' + result);
}

sumResult();