//функція видалення не унікальних елементів
function discardDuplicateElements(array){
	for(var i = 0; i<array.length; i++){
		for(var j = 0; j<array.length; j++){
			if(i !== j){
				if(array[i] === array[j]){
					array.splice(j, 1);
				}
			}		
		}
	}
	return array;
}

var uniqueArray = discardDuplicateElements(array);
console.log("Масив з унікальними елементами: " + uniqueArray);