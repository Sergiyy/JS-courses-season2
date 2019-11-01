var notUniqueArray = [1,56,3,45,6,110,15,24,2,1,1,3,15,110,8,16,24];

function makeUniqueArray(inputArray){
  var uniqueArray = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (!uniqueArray.includes(inputArray[i])) {
		uniqueArray.push(inputArray[i]);  
	}    
  }
	
  return uniqueArray;
}

console.log(' ');
console.log('Finding unique elements of array');
console.log('Incoming array: ' + notUniqueArray);
console.log('Unique array: ' + makeUniqueArray(notUniqueArray));