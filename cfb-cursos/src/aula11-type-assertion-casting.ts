/*
TYPE ASSERTION
  Usado para os tipos unknown
  E quando eu preciso afirmar que um valor e de um determinado tipo.

  Ex. estou afirmando que eevalor e do tipo number 
  (e isso pq o tipo original é unknown):
  

  evalor = <number>eevalor;

  Ex.2 estou afirmando que é do tipo unknown e depois do tipo number:

  eevalor = 10;
  elvalor = '20';
  evalor = <number><unknown>elvalor;

  obs.: não é efetivamente um conversão de tipos!

TYPE CASTING
  São conversões de tipo number para string ou string para number.

  eevalor = 10;
  evalor = 10;
  elvalor = evalor.toString(); // Casting para string

  console.log(typeof(elvalor));
  console.log(elvalor);

  evalor = Number.toParseInt(elvalor); // Casting para number
*/

let evalor: number;
let elvalor: string;
let eevalor: unknown;

eevalor = 10;
evalor = 10;
elvalor = evalor.toString();

console.log(typeof(elvalor));
console.log(elvalor);

//evalor = <number><unknown>elvalor;

//evalor = <number>eevalor;
// elvalor = <string>eevalor;
// elvalor += 10;

// console.log(typeof(eevalor));
// console.log(eevalor);

// console.log(typeof(evalor));
// console.log(evalor);

// console.log(typeof(elvalor));
// console.log(elvalor);


