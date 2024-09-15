/*
UNIONS TYPES
  Tipando um array string -> let cursos: string[] = ['Arduino'];

  P. O que é union types?
  R. Quando posso colocar tipos diferentes dentro de uma variável.

  Ex.: Variavel poderá receber tantos valores do tipo string, number ou boolean
  let vteste: string | number | boolean;
  vteste = 'Jose';
  vteste = 10;
  vteste = true;
  
*/

let vteste: string | number | boolean;
vteste = 'Jose';
vteste = 10;
vteste = true;

let cursos = ['JavaScript', 'TypeScript', 'C++', 100, false];
let valores = [10, 200, 2024];

cursos.push('Arduino');
cursos.push(1000);
valores.push(500);

console.log(cursos);
console.log(valores);
console.log(vteste);