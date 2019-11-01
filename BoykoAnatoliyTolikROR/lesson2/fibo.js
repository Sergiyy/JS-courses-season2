function fibonacci(n) {
  var fibonacciArray = [];
  var lgArray = 0;

  for (var i = 0; i < n; i++) {

    if (i < 2) {
      fibonacciArray.push(1);
    } else {
      lgArray = fibonacciArray.length - 1;
      fibonacciArray.push(fibonacciArray[lgArray] + fibonacciArray[lgArray - 1]);
    }
  }
  return fibonacciArray;
}
