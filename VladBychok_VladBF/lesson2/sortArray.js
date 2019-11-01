var arr = [1, 12, 8, 2, 15, 6, 5, 25];
function sortArray(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
};
arr.sort(sortArray);
console.log(arr);


var arr = [1, 3, 23, 24, 11, 41, 4, 6, 123, 12312, 534, 5635, 244];
function sortArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      var prev = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = prev;
      sortArr(arr);
    };
  };
};
sortArr(arr);
console.log(arr);
