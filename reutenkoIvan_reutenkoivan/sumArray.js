function sumArr(array){
		array.forEach(function(item){
		 sum += item;
		})

		return sum
	}
	
	var arr = [1, 2, 3, 4, 5, 6];
	var sum = 0;

console.log(" ");
console.log('arr => ' + arr);
console.log('sumArray = ' + sumArr(arr));
