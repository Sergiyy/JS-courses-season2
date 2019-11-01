var exapleArray = [3, 7, 4, 1, 5, 1, 3];

function uniq(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i != j) {
        arr.splice(j, 1);
      }
    }
  }

  return arr;
}
