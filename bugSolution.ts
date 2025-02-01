function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}


try {
  let result = addSafe("hello", 5); 
  console.log(result);
} catch (error) {
  console.error(error.message);
}

let safeResult = addSafe(10, 5);
console.log(safeResult); 