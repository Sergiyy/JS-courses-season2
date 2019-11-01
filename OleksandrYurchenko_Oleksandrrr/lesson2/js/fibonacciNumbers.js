function fibonacciNumber(number) {
  var a = 1;
  var  b = 0;
  var  temp;
  var result = [];
  while (number >= 1) {

    temp = a;
    a = a + b;
    b = temp;
    result.push(b);
    number--;
  }
  console.log(result);
  return b;
}

fibonacciNumber(5);