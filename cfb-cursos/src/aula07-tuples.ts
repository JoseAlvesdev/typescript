/*
TUPLES, TUPLAS
  As tuplas são listas, com valores de tipos especificos, definidos em posições específicas

  Ex.:
  let coisas: readonly[string, number, boolean] = ['Jose', 10, true];
  O minha tupla com readonly fica inalteravel.

  obs.: se eu especificar os tipos e os valores, terei que seguir a mesma ordem, mesmo conseguindo usar os métodos push() e etc.

*/

let coisas: readonly[string, number, boolean] = ['Jose', 10, true];
//coisas.push('kit médico', 5, true);

//coisas[2] = false;

console.log(coisas);
console.log(coisas[2]);