var someArray = [1,56,3,45,6,110,15,24,2,1];

function sortThisArray(inputArray){
  var swap;
  for (var i = 0; i < inputArray.length-1; i++) {
		for (var j = 0; j < inputArray.length-i; j++) {  
			if (inputArray[j] > inputArray[j+1]){
				swap = inputArray[j];
				inputArray[j] = inputArray[j+1];
				inputArray[j+1] = swap;
			}
		}
	}
  
  return inputArray;
}

console.log(' ');
console.log('Sorting array with bulb method');
console.log('Unsorted array: ' + someArray);
console.log('Sorted array: ' + sortThisArray(someArray));
	
