var array = [1, 9, 5, 2, 1, 11, 5, 4, 5, 25, 5]; //глобальний масив, який використовується у всих файлах
console.log("Масив: " + array);

//функція обрахунку суми елементів мвсиву
function summArrayElements(array){
	var summ = 0;
	for(var i = 0; i < array.length; i++){
		summ += array[i];
	}
	console.log("Сума елементів масиву: " + summ);
}
summArrayElements(array);