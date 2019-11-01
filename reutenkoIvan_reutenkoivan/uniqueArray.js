function unique(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

var numbers = [1,1,2,3,1,2];

console.log(" ");
console.log(numbers);
console.log( unique(numbers))
