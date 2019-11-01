function methodFibonacci(n) {
  var a = 1;
  var b = 1;
  for (var i = 3; i <= n; i++) {
	var c = a + b;
	a = b;
	b = c;
  };

return b;
};
console.log(methodFibonacci (3));
console.log(methodFibonacci (14));
console.log(methodFibonacci (26));
console.log(methodFibonacci (30));
console.log(methodFibonacci (45));
