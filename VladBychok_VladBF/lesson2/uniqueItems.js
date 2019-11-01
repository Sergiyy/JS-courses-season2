var numberArray = [12, 12, 20, 3, 2, 3, 5, 5]
function uniqueElements(arr) {
  var obj = [];
  for (var i = 0; i < arr.length; i++) {
	var num = arr [i];
	obj[num] = true;
  };

  return Object.keys(obj);
};
console.log( uniqueElements(numberArray) );
