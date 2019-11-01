var someArray = [1,56,3,45,6,110,15,24,2,1]

function compareNums(value1,value2){
  return value1 - value2;
}

console.log(' ');
console.log('Sorting array with SORT method');
console.log('Unsorted array: ' + someArray);
console.log('Sorted array: ' + someArray.sort(compareNums));