# TypeScript Implicit Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript where implicit type coercion during arithmetic operations can lead to runtime errors that aren't caught by the compiler.

## The Bug

The `add` function is explicitly typed to accept two numbers and return a number. However, the code calls the function with a string and a number. TypeScript's type system doesn't prevent this, resulting in the string being implicitly coerced to a number (likely 0), leading to an unexpected result.

## Solution

The solution involves adding stricter type checking and handling potential type mismatches.  This can be achieved through explicit type guards or by using conditional types.

## How to reproduce:
1. Clone the repository.
2. Run `tsc bug.ts` (this will compile without errors, even with the faulty code).
3. Run `node bug.js` (this will execute with the unexpected result). 
4. Run `tsc bugSolution.ts` (this will compile without errors).
5. Run `node bugSolution.js` (this will execute showing the correct handling of the error).