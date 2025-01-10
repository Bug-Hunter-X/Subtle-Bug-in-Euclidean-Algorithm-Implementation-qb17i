function myFunction(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return myFunction(Math.min(a, b), Math.abs(a - b));
}

console.log(myFunction(12, 4)); // Output: 4
console.log(myFunction(15, 20)); // Output: 5
console.log(myFunction(0, 10)); // Output: 10
console.log(myFunction(10, 0)); // Output: 10
console.log(myFunction(-12, 4)); // Output: 4
console.log(myFunction(15, -20)); // Output: 5
console.log(myFunction(-15,-20)); //Output: 5