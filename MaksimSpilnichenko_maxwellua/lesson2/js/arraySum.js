var someArray = [1,56,3,45,6,110,15,24,2,1];

function sumOfArray(inputArray){
  var result = 0;
  
  for (i = 0; i < inputArray.length; i++) {
	result += inputArray[i];	
  }
  
  return result; 
}

console.log(' ');
console.log('Evaluating sum of the elements in array');
console.log('This array: ' + someArray);
console.log('Sum of its elements: ' + sumOfArray(someArray));