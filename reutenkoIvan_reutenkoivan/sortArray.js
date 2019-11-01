var arr = [ 1, 15, 2, 21, 23, 7, 40];

function compareFunction(a, b) {
	return a - b;
}

console.log(" ");
console.log('.sort => ' + arr.sort(compareFunction));

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length; j++) {
		if (arr[i] < arr[j]) {
			buff = arr[i];
			arr[i] = arr[j];
			arr[j] = buff;
		}
	}
}

console.log('for => ' + arr);
