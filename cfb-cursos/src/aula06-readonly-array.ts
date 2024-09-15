/*
ARRAYS, READONLY ARRAYS
  Formas válidas de tipar um Array

  1ª forma:
  let numeros: number[] = [10, 20, 30, 40];

  2ª forma:
  let numeros: Array<number | string> = [10, 20, 30, 40, 'Jose'];

  3ª forma: Union types
  let numeros: (number | string)[] = [10, 20, 30, 40, 'Jose'];

  MÉTODOS DE ARRAY

    - Array.push() -> insere um valor no final do array
    - Array.unshift() -> insere um valor no inicio do array
    - Array.pop() -> remove o ultimo intem do array
    - Array.shift() -> remove o primeiro item do array

  DECLARANDO ARRAYS DE SOMENTE LEITURA
    E um Array inalteravel, como diz a nomenclatura somente leitura.

    Ex.:
    let numerosRo: ReadonlyArray<number> = [100, 200, 300];

    Funciona com forEach, map, filter, redux.


*/

let numeros: number[] = [10, 20, 30, 40];
//let numeros: Array<number> = [10, 20, 30, 40];
//let numeros: (number | string)[] = [10, 20, 30, 40];

numeros.push(50);
numeros.unshift(20);
numeros.pop()
numeros.shift()
console.log(numeros);

let numerosRo: ReadonlyArray<number> = [100, 200, 300];
console.log(numerosRo)