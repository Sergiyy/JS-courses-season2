function fibonacciNumbers(){
	var count = +prompt("Введіть кількість чисел Фібоначчі");
	if(count >= 2){
		var fibonacciArray = [0, 1];
		for(var i = 1; i < count - 1; i++){
			fibonacciArray.push(fibonacciArray[i]+fibonacciArray[i-1]);
		}
	}else if(count === 1){
		var fibonacciArray = [0];
	}else{
		alert("Введіть число більше 0");
		fibonacciNumbers();
		return;
	}
	console.log("Числа фібоначі: " + fibonacciArray);
}
fibonacciNumbers();