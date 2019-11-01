var array = [1, 1, 2, 3, 1, 2];

function uniqueElement(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }

  }
  return result;
}

console.log(uniqueElement(array));