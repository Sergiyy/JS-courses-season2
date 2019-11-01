//функція сортування масиву за допомогою методу sort
function sortArrayBySort(array){
	return array.sort(function(a, b){
		return a - b;
	});
}

//функція сортування масиву за допомогою циклу for (сортування вибором)
function sortArrayByFor(array){
    for(var i = 0; i < array.length - 1; i++){
    	var min = i;
    	for(var j = i + 1; j < array.length; j++){
    		if (array[j] < array[min]) min = j;
    	} 
    	var dummy = array[min];
    	array[min] = array[i];
    	array[i] = dummy;
    }                    
    return array;
}

var sortedArray = sortArrayBySort(array);
console.log("Відсортований масив: " + sortedArray);
var sortedArray2 = sortArrayByFor(array);
console.log("Відсортований масив2: " + sortedArray2);