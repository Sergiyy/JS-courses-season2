function fibo(count){
	var result = [1, 1];
	var previous = 1, current = 1;

  for (var i = 3; i <= count; i++) {
    var sum = previous + current;
    previous = current;
    current = sum;
    result.push(current);
  }

  return result;
}

console.log(" ");
console.log(fibo(15));
