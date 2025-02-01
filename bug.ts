function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // Type error will not be caught at compile time
console.log(result);