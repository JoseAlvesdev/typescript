/*
NULL (NULLO) - UNDEFINED (INDEFINIDO) - UNKNOWN (DESCONHECIDO)
  Quando eu tipo a variável com um tipo específico, a mesma deve ser 
  iniciado com um valor do tipo especificado.

  Resumindo não posso ter uma variavel tipada sem ser incializada com
  um valor, e não posso ter uma variavel TIPADA com valor undefined .

  Quando eu tenho um tipo null associado, a gente terá um valor null, 
  e quando não nenhum tipo associado o valor sempre é undefined

NULL
  Tipo null também e um valor recebível.

  Ex.:
  let tnome: string | null;
  tnome = null;
  console.log(tnome);

UNDEFINED
  E uma variavel com tipo any e com valor undefined.

  Ou seja estou recebendo qualquer tipo então o meu valor é indefinido.

  Ex.:
  let tnome2;
  console.log(tnome2);    

UNKNOWN
  E um tipo unkonown (desconhecido), se eu tentar receber um variável do tipo
  number um tipo unknown meu código dará erro. 
  E o porque disso pq tipo unknown não é do tipo number.

  Ex.:
  let tnome3: unknown = 10;
  let tnum = tnome3; -> tnum se tornando tipo unknown ao receber tnome3
  console.log(tnome3);

  Variáveis do tipo unknown só pode ser atribuidas, a variaveis do tipo
  any, pq any aceita qualquer tipo. E variaveis do tipo unknown e recebem
  qualquer valor.

@elisafa
  No TypeScript, null, undefined e unknown são tipos que têm significados específicos:

  null: É um tipo que tem um único valor: null. É usado para representar a ausência 
  intencional de um valor de objeto. Em outras palavras, se você tem uma variável 
  que você quer explicitamente definir como não tendo nenhum valor ou 
  objeto, você pode atribuir null a ela.

  undefined: É um tipo que tem um único valor: undefined. É usado quando uma 
  variável é declarada, mas não foi atribuído nenhum valor. Portanto, se você 
  declarar uma variável sem atribuir um valor a ela, o TypeScript 
  atribuirá automaticamente o valor undefined.

  unknown: É um tipo que é usado para representar qualquer valor. Isso é 
  semelhante ao tipo any, mas é mais seguro. Se você tem uma variável do tipo 
  unknown, você precisa fazer uma verificação de tipo antes de poder usá-la 
  como um valor específico. Isso ajuda a evitar erros em tempo de execução.
  
*/

// NULL - Tipo Nulo
// UNDEFINED - Indefinido
// UNKNOWN - Desconhecido
let tnome: string | null;
tnome = null;
console.log(tnome);

let tnome2;
console.log(tnome2);

let tnome3: unknown = 10; // unknown só pode ser atribuido em tipos unknown ou any
let tnum = tnome3;
console.log(tnome3);